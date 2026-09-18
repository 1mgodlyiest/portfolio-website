import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { posts, formatDate } from "@/lib/content"

export function Writing() {
  return (
    <section className="shell mt-28 md:mt-40">
      <SectionHeading
        eyebrow="Writing"
        title="Notes on where this is all going."
        intro="Longer pieces on agents, reasoning and what actually changes when a model joins the team."
        action={{ label: "All writing", href: "/blog" }}
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary/60 md:p-10"
          >
            <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-display text-[1.75rem] leading-tight tracking-tight">{post.title}</h3>
            <p className="mt-2 font-display text-lg italic text-muted-foreground">{post.subtitle}</p>
            <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
