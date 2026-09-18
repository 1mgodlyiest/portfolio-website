import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  action?: { label: string; href: string }
  className?: string
}) {
  return (
    <div className={cn("border-t border-border pt-6", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-md mt-4 text-balance">{title}</h2>
          {intro && <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{intro}</p>}
        </div>

        {action && (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="link-draw">{action.label}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
