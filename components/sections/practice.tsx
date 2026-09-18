import { skillGroups } from "@/lib/content"

const columns = [
  {
    number: "01",
    title: "Find the question",
    body: "Most requests arrive as a dashboard ask. I go back a step — what decision is waiting on this, and what would change your mind? Then model the data around that.",
    group: skillGroups[0],
  },
  {
    number: "02",
    title: "Build the thing",
    body: "Pipelines, models and agents that survive contact with real users. Shipped to 6,000+ of them across three products, with the boring parts automated first.",
    group: skillGroups[1],
  },
  {
    number: "03",
    title: "Make it land",
    body: "An insight nobody acts on is a hobby. I teach the finding as much as I present it — 150+ hours of it, to analysts who then did it themselves.",
    group: skillGroups[2],
  },
]

export function Practice() {
  return (
    <section className="mt-28 bg-secondary/60 py-20 md:mt-40 md:py-28">
      <div className="shell">
        <p className="eyebrow">How I work</p>
        <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-10">
          {columns.map((col) => (
            <div key={col.number} className="border-t border-border pt-6">
              <span className="font-mono text-xs text-primary">{col.number}</span>
              <h3 className="mt-4 font-display text-[1.75rem] leading-tight tracking-tight">{col.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{col.body}</p>
              <p className="mt-7 font-mono text-[0.6875rem] uppercase leading-relaxed tracking-wider text-muted-foreground/80">
                {col.group.items.slice(0, 8).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
