import { SectionHeading } from "@/components/section-heading"
import { dashboards } from "@/lib/content"

export function Dashboards() {
  return (
    <section className="shell mt-28 md:mt-40">
      <SectionHeading
        eyebrow="Live dashboards"
        title="Things you can click on."
        intro="Streamlit apps built for people who don't write SQL — HR turnover, metropolitan economics, census data, fraud detection and a season of LaLiga."
        action={{ label: "All dashboards", href: "/visualizations" }}
      />

      <ul className="mt-14 border-t border-border">
        {dashboards.slice(0, 4).map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors hover:bg-secondary/50 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] md:items-baseline md:gap-10 md:px-4"
            >
              <div>
                <h3 className="font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]">
                  <span className="link-draw">{item.title}</span>
                </h3>
                <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
                  {item.tags.join(" · ")}
                </p>
              </div>

              <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">{item.blurb}</p>

              <div className="md:text-right">
                <p className="font-display text-3xl tracking-tight text-primary md:text-4xl">{item.stat}</p>
                <p className="mt-1 max-w-[12rem] text-xs leading-snug text-muted-foreground md:ml-auto">
                  {item.statLabel}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
