"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Braces, Cpu, Layers, Sparkles } from "lucide-react"
import Link from "next/link"

const experiments = [
  {
    title: "Neural Interface",
    description: "Experimental brain-computer interface for direct thought-to-text input",
    icon: Cpu,
    link: "#",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Spatial Audio",
    description: "3D audio environment that responds to user movement and interaction",
    icon: Sparkles,
    link: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Generative Art",
    description: "AI-powered art generation based on emotional input and biometric data",
    icon: Layers,
    link: "#",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Quantum Computing",
    description: "Visualization tools for quantum algorithms and computational models",
    icon: Braces,
    link: "#",
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export function LabSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="lab" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <Badge variant="outline" className="mb-4">
              Experimental Work
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">The Lab</h2>
            <p className="text-muted-foreground max-w-2xl">
              A collection of experimental projects and research exploring emerging technologies and creative concepts.
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 group">
            View All Experiments
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experiments.map((experiment, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={experiment.link}>
                <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-card/50 to-card shadow-lg group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 md:p-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experiment.color} flex items-center justify-center mb-6`}
                    >
                      <experiment.icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {experiment.title}
                        </h3>
                        <p className="text-muted-foreground">{experiment.description}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
