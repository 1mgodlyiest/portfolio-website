"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/content"
import { cn } from "@/lib/utils"

const categoryLabels: Record<Project["category"], string> = {
  ai: "AI Agent",
  ml: "Machine Learning",
  python: "Python EDA",
  sql: "SQL",
  etl: "ETL",
  case: "Case Study",
}

export function ProjectCard({ project, index, className }: { project: Project; index: number; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group flex flex-col", className)}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-sm bg-secondary"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-border pb-2">
        <span className="eyebrow">{categoryLabels[project.category]}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-draw">
          {project.title}
        </a>
      </h3>

      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{project.description}</p>

      <details className="group/d mt-4">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
          <span className="link-draw">Details</span>
          <span className="transition-transform duration-300 group-open/d:rotate-45">+</span>
        </summary>
        <div className="mt-3 border-l-2 border-primary/40 pl-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{project.extendedDescription}</p>
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
            {project.tags.join(" · ")}
          </p>
        </div>
      </details>
    </motion.article>
  )
}
