export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  meta?: string
}) {
  return (
    <header className="shell pt-12 md:pt-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-lg mt-6 max-w-4xl text-balance">{title}</h1>
      {(intro || meta) && (
        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
          {intro && <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">{intro}</p>}
          {meta && <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">{meta}</p>}
        </div>
      )}
    </header>
  )
}
