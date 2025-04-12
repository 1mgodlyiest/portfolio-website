"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-primary">Manish</span>
              <span className="text-primary/30">Paneru</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/visualizations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Visualizations
            </Link>
            <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Manish Paneru. All rights reserved.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm text-muted-foreground"
          >
            Data Analyst & AI Specialist
          </motion.p>
        </div>
      </div>
      <div className="absolute right-6 bottom-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-primary/10 hover:bg-primary/20 border-primary/20"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </Button>
      </div>
    </footer>
  )
}
