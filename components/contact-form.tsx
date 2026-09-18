"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string }

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[0.9375rem] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus({ state: "sending" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus({ state: "error", message: body.error ?? "Something went wrong. Please try again." })
        return
      }

      form.reset()
      setStatus({ state: "sent", message: "Got it. I'll come back to you within a couple of days." })
    } catch {
      setStatus({ state: "error", message: "Network error — please email me directly instead." })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input name="name" required maxLength={100} placeholder="Your name" className={cn(fieldClass, "mt-2")} />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@company.com"
            className={cn(fieldClass, "mt-2")}
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow">Subject</span>
        <input
          name="subject"
          maxLength={200}
          placeholder="What's this about?"
          className={cn(fieldClass, "mt-2")}
        />
      </label>

      <label className="block">
        <span className="eyebrow">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={5000}
          placeholder="The data, the question behind it, and what's currently in the way."
          className={cn(fieldClass, "mt-2 resize-none")}
        />
      </label>

      {/* Honeypot — hidden from people, irresistible to bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-colors hover:bg-primary disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending" : "Send message"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>

        {status.message && (
          <p
            role="status"
            className={cn("text-sm", status.state === "error" ? "text-destructive" : "text-muted-foreground")}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}
