import Link from "next/link"
import { site } from "@/lib/content"

const columns = [
  {
    title: "Pages",
    links: [
      { name: "Work", href: "/projects" },
      { name: "Dashboards", href: "/visualizations" },
      { name: "Writing", href: "/blog" },
      { name: "About", href: "/experience" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { name: "GitHub", href: site.socials.github },
      { name: "LinkedIn", href: site.socials.linkedin },
      { name: "Résumé", href: site.resume },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-display text-3xl tracking-tight md:text-4xl">
            Let&apos;s make the data
            <br />
            say something useful.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-underline mt-6 inline-block text-sm text-muted-foreground hover:text-foreground"
          >
            {site.email}
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow mb-5">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-draw text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  )
}
