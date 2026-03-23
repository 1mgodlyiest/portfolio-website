"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Layers, BarChart, Briefcase, Mail, BookOpen } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { FloatingNavbar } from "@/components/ui/floating-navbar"

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Projects", href: "/projects", icon: <Layers className="h-4 w-4" /> },
  { name: "Blog", href: "/blog", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Visualizations", href: "/visualizations", icon: <BarChart className="h-4 w-4" /> },
  { name: "Experience", href: "/experience", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
]

const floatingNavItems = [
  { name: "Home", link: "/", icon: <Home className="h-3.5 w-3.5" /> },
  { name: "Projects", link: "/projects", icon: <Layers className="h-3.5 w-3.5" /> },
  { name: "Blog", link: "/blog", icon: <BookOpen className="h-3.5 w-3.5" /> },
  { name: "Visualizations", link: "/visualizations", icon: <BarChart className="h-3.5 w-3.5" /> },
  { name: "Experience", link: "/experience", icon: <Briefcase className="h-3.5 w-3.5" /> },
  { name: "Contact", link: "/contact", icon: <Mail className="h-3.5 w-3.5" /> },
]

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 md:px-12",
          scrolled ? "py-4 backdrop-blur-xl bg-background/80" : "py-6",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50" onClick={() => setIsOpen(false)}>
            <span className="text-primary">Manish</span>
            <span className="text-primary/30">Paneru</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group flex items-center gap-1.5",
                  isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.icon}
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <FloatingNavbar navItems={floatingNavItems} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-2xl font-medium transition-colors flex items-center gap-2",
                      isActive(item.href) ? "text-primary" : "hover:text-primary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
