"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface FloatingNavbarProps {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Show the navbar after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className={cn(
            "fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-border/40 bg-background/80 backdrop-blur-md px-4 py-2 shadow-lg",
            className,
          )}
        >
          <nav className="flex items-center justify-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.link || (item.link !== "/" && pathname.startsWith(item.link))

              return (
                <Link
                  key={index}
                  href={item.link}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
