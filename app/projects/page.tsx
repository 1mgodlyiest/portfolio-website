"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { categories, projects } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SiteHeader />

      <main>
        <PageHeader
          eyebrow="Work"
          title={
            <>
              Everything, filed by <span className="italic text-primary">what it solved.</span>
            </>
          }
          intro="SQL models, exploratory analysis, ETL pipelines, machine learning and AI agents. Each one links out to the repo or the live app."
          meta={`${projects.length} projects · 2020—2024`}
        />

        <div className="sticky top-16 z-30 mt-14 border-y border-border bg-background/90 backdrop-blur-md md:top-20">
          <div className="shell flex gap-6 overflow-x-auto py-3">
            {categories.map((cat) => {
              const count = cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    "flex shrink-0 items-baseline gap-1.5 py-1 text-sm transition-colors",
                    active === cat.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className={cn("link-draw", active === cat.id && "bg-[length:100%_1px]")}>{cat.label}</span>
                  <span className="font-mono text-[0.625rem] text-muted-foreground">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="shell mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
