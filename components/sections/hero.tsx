"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { site, projects, featuredProjectId } from "@/lib/content"

const facts = [
  { value: "6,000+", label: "users on tools I've shipped" },
  { value: "98,000", label: "API calls in production" },
  { value: "150+", label: "hours teaching analysts" },
  { value: "4 yrs", label: "in analytics and AI" },
]

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const featured = projects.find((p) => p.id === featuredProjectId) ?? projects[0]

  return (
    <section className="shell pt-12 md:pt-20">
      <motion.p initial="hidden" animate="visible" custom={0} variants={rise} className="eyebrow">
        {site.role} — Sydney
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={1}
        variants={rise}
        className="display-xl mt-6 text-balance md:mt-8"
      >
        Data is messy.
        <br />
        Decisions <span className="italic text-primary">shouldn&apos;t be.</span>
      </motion.h1>

      <div className="mt-12 grid gap-10 border-t border-border pt-8 md:mt-16 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <motion.div initial="hidden" animate="visible" custom={2} variants={rise}>
          <p className="max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            I&apos;m Manish — a data analyst who builds the thing after the analysis. SQL models, Python studies,
            machine learning and AI agents that people actually use, for teams who need an answer rather than another
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="link-underline text-sm">
              {site.email}
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="visible"
          custom={3}
          variants={rise}
          className="grid grid-cols-2 gap-x-6 gap-y-8 self-end"
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-display text-3xl tracking-tight md:text-4xl">{fact.value}</dt>
              <dd className="mt-1.5 text-xs leading-snug text-muted-foreground">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 md:mt-24"
      >
        <a href={featured.link} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-secondary md:aspect-[21/9]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform [transition-duration:1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-baseline sm:justify-between">
            <span className="eyebrow">Currently featured — {featured.year}</span>
            <span className="link-draw font-display text-xl tracking-tight">{featured.title} →</span>
          </figcaption>
        </a>
      </motion.figure>
    </section>
  )
}
