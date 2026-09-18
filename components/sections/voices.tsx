import { testimonials } from "@/lib/content"

export function Voices() {
  return (
    <section className="mt-28 bg-foreground py-20 text-background md:mt-40 md:py-28">
      <div className="shell">
        <p className="eyebrow text-background/50">In their words</p>

        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-12">
          {testimonials.map((t) => (
            <figure key={t.author} className="flex flex-col border-t border-background/20 pt-6">
              <blockquote className="flex-1">
                <p className="font-display text-xl leading-snug tracking-tight text-background md:text-[1.375rem]">
                  “{t.quote.length > 340 ? `${t.quote.slice(0, 340).trimEnd()}…` : t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm text-background">{t.author}</p>
                <p className="mt-1 text-xs leading-snug text-background/60">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
