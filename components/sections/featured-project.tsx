"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Check, Users, BarChart, Brain, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Featured Project
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">DataTeam: Collaborative AI Analysis</h2>
          <p className="text-muted-foreground max-w-2xl">
            An intelligent AI agent that facilitates collaborative data analysis among team members, enhancing
            productivity and insight discovery.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">AI-Powered Collaborative Analysis</h3>
            <p className="text-muted-foreground mb-6">
              DataTeam is a sophisticated AI agent designed to transform how data analysis teams collaborate. By
              leveraging large language models and specialized data processing capabilities, it helps teams discover
              insights faster, automate routine tasks, and maintain consistent analysis methodologies across projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Multi-user collaboration
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-primary" />
                    Automated insight generation
                  </li>
                  <li className="flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-primary" />
                    Context-aware suggestions
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    Real-time analysis assistance
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Large Language Models
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Python & Pandas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Real-time Collaboration APIs
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Data Visualization Libraries
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/projects?category=ai" className="group">
                  View Project Details
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/manishpaneru/Final-Analyst-Agent" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-1">
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/datateam-ai-analysis.png"
                  alt="DataTeam Collaborative AI Analysis Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
