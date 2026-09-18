"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { name: "Work", href: "/projects" },
  { name: "Dashboards", href: "/visualizations" },
  { name: "Writing", href: "/blog" },
  { name: "About", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl tracking-tight md:text-2xl">
          Manish Paneru
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.8125rem] tracking-wide transition-colors",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className={cn("link-draw", isActive(item.href) && "bg-[length:100%_1px]")}>{item.name}</span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-foreground transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-foreground transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background px-6 pt-8 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="animate-in fade-in slide-in-from-bottom-2 border-b border-border py-5 font-display text-3xl tracking-tight fill-mode-both"
                style={{ animationDelay: `${i * 50}ms`, animationDuration: "400ms" }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
