"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Nebula",
    description: "An immersive 3D visualization platform for complex data analysis",
    image: "/placeholder.svg?height=600&width=800",
    category: "Data Visualization",
    year: "2024",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Pulse",
    description: "AI-powered health monitoring dashboard with predictive analytics",
    image: "/placeholder.svg?height=600&width=800",
    category: "Healthcare",
    year: "2024",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Horizon",
    description: "Next-generation virtual reality workspace for remote collaboration",
    image: "/placeholder.svg?height=600&width=800",
    category: "Virtual Reality",
    year: "2023",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Quantum",
    description: "Blockchain-based platform for secure digital asset management",
    image: "/placeholder.svg?height=600&width=800",
    category: "Blockchain",
    year: "2023",
    link: "#",
    featured: false,
  },
]

export function WorkSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <Badge variant="outline" className="mb-4">
              Selected Work
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A curated selection of projects that showcase my expertise in creating innovative digital experiences
              across various domains.
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 group">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </motion.div>
      </div>
    </section>
  )
}
