import fs from "fs/promises"
import path from "path"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { posts, formatDate } from "@/lib/content"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  return post ? { title: post.title, description: post.excerpt } : { title: "Not found" }
}

/**
 * Posts open with an H1 and, in some files, a `**Date:** …` metadata block closed by a rule.
 * The page renders that header itself, so drop it from the body to avoid printing it twice.
 */
function stripPreamble(markdown: string) {
  const lines = markdown.split(/\r?\n/)
  let start = 0

  while (start < lines.length && lines[start].trim() === "") start++
  if (lines[start]?.startsWith("# ")) start++

  const metaLine = /^\*\*[^*]+:\*\*/
  let cursor = start
  while (cursor < lines.length && (lines[cursor].trim() === "" || metaLine.test(lines[cursor].trim()))) cursor++
  if (lines[cursor]?.trim() === "---") start = cursor + 1

  return lines.slice(start).join("\n").trim()
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.md`)

  let raw: string
  try {
    raw = await fs.readFile(filePath, "utf-8")
  } catch {
    notFound()
  }

  const body = stripPreamble(raw)
  const readingTime = Math.max(1, Math.ceil(raw.split(/\s+/).length / 200))
  const next = posts[(posts.findIndex((p) => p.slug === slug) + 1) % posts.length]

  return (
    <>
      <SiteHeader />

      <main>
        <header className="shell pt-12 md:pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="link-draw">All writing</span>
          </Link>

          <p className="eyebrow mt-12">{post.subtitle}</p>
          <h1 className="display-lg mt-5 max-w-4xl text-balance">{post.title}</h1>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{readingTime} min read</span>
            <span>Manish Paneru</span>
          </div>
        </header>

        <article className="shell-narrow article mt-16 md:mt-20">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </article>

        <div className="shell-narrow mt-24">
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col gap-2 border-t border-border pt-8 transition-colors hover:text-primary"
          >
            <span className="eyebrow">Next essay</span>
            <span className="font-display text-3xl tracking-tight">
              {next.title}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
