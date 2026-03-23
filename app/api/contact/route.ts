import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `submission_${timestamp}.json`;
    const filePath = path.join(process.cwd(), "..", "..", "storage", "leads", fileName);

    // Ensure the directory exists (optional, handled by mkdir in deployment)
    // Writing data
    await fs.writeFile(filePath, JSON.stringify(body, null, 2));

    return NextResponse.json({ message: "Lead captured successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
