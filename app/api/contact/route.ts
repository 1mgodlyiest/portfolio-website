import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"
import { z } from "zod"

export const runtime = "nodejs"

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("A valid email is required").max(200),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Tell me a little more").max(5000),
  // Honeypot: humans never see this field, bots fill it in.
  website: z.string().optional(),
})

// Untracked on the VPS, so `git reset --hard` during deploy leaves it alone.
const leadsDir = process.env.LEADS_DIR ?? path.join(process.cwd(), ".data")
const leadsFile = path.join(leadsDir, "leads.jsonl")

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid submission." }, { status: 400 })
  }

  const { website, ...lead } = parsed.data
  if (website) return NextResponse.json({ ok: true }) // drop bots without telling them

  try {
    await fs.mkdir(leadsDir, { recursive: true })
    await fs.appendFile(leadsFile, `${JSON.stringify({ ...lead, receivedAt: new Date().toISOString() })}\n`, "utf8")
  } catch (error) {
    console.error("[contact] failed to store lead", error)
    return NextResponse.json({ error: "Could not save your message. Please email me directly." }, { status: 500 })
  }

  // ponytail: append-only file, read it with `tail -f .data/leads.jsonl` on the box.
  // Swap in Resend/Formspree here if you want the message to land in your inbox instead.
  return NextResponse.json({ ok: true })
}
