import Link from "next/link"
import { site } from "@/lib/content"

export function ContactCta() {
  return (
    <section className="shell mt-28 md:mt-40">
      <div className="border-t border-border pt-10 md:pt-14">
        <p className="eyebrow">Open to work</p>
        <h2 className="display-lg mt-6 max-w-4xl text-balance">
          Got a question your data <span className="italic text-primary">should</span> be able to answer?
        </h2>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Available for full-time roles, freelance analysis and AI builds. Tell me what&apos;s stuck — I&apos;ll tell
            you whether it&apos;s a data problem.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="link-underline text-sm text-muted-foreground">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
