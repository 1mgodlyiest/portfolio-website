import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { dashboards } from "@/lib/content"

export const metadata: Metadata = {
  title: "Dashboards",
  description:
    "Live Streamlit dashboards — HR analytics, metropolitan economics, US census data, fraud detection and LaLiga football.",
}

const principles = [
  "Filters and parameters that update in real time, not a screenshot of a chart",
  "Responsive down to a phone, because half of these get opened in a meeting",
  "Wired to APIs, databases and uploads rather than a frozen CSV",
  "Custom components where an off-the-shelf chart would flatten the point",
]

export default function VisualizationsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHeader
          eyebrow="Dashboards"
          title={
            <>
              Analysis you can <span className="italic text-primary">poke at.</span>
            </>
          }
          intro="Five Streamlit applications, each built so a non-technical stakeholder can answer their own follow-up question instead of emailing me for it."
          meta={`${dashboards.length} live apps · Streamlit`}
        />

        <div className="shell mt-16">
          <ul className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {dashboards.map((item, i) => (
              <li key={item.title} className="bg-background">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-secondary/60 md:p-10"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                      Open ↗
                    </span>
                  </div>

                  <h2 className="mt-8 font-display text-[1.75rem] leading-tight tracking-tight md:text-3xl">
                    <span className="link-draw">{item.title}</span>
                  </h2>

                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.blurb}</p>

                  <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-5">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
                      {item.tags.join(" · ")}
                    </p>
                    <p className="shrink-0 text-right">
                      <span className="font-display text-3xl tracking-tight text-primary">{item.stat}</span>
                      <span className="mt-1 block max-w-[10rem] text-xs leading-snug text-muted-foreground">
                        {item.statLabel}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="shell mt-24">
          <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
            <h2 className="font-display text-3xl tracking-tight">What they all have in common</h2>
            <ul className="space-y-4">
              {principles.map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-[0.6rem] h-px w-4 shrink-0 bg-primary" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              See the underlying projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
