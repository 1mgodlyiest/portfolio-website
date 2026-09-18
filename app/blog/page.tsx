import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { posts, formatDate } from "@/lib/content"

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays on agentic AI, reasoning in language models, and how people and machines actually work together.",
}

export default function BlogPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHeader
          eyebrow="Writing"
          title={
            <>
              Long-form, on where this <span className="italic text-primary">is going.</span>
            </>
          }
          intro="Three essays on agentic systems, the gap between fluency and reasoning, and what changes in a team when the model stops being a chat window."
          meta={`${posts.length} essays`}
        />

        <div className="shell mt-16">
          <ul className="border-t border-border">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/50 md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)] md:items-baseline md:gap-12 md:px-4 md:py-12"
                >
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>

                  <div>
                    <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                      <span className="link-draw">{post.title}</span>
                    </h2>
                    <p className="mt-2 font-display text-lg italic text-muted-foreground">{post.subtitle}</p>
                  </div>

                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="h-px w-6 bg-border" aria-hidden />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">Read</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
