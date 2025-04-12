"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DataSphere3D } from "@/components/3d-data-sphere"

export function SkillsSection() {
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
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <Badge variant="outline" className="mb-4">
              Technical Expertise
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl">
              An interactive visualization of my technical skills and how they interconnect to solve complex data
              challenges.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <DataSphere3D />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">My Technical Approach</h3>
                <p className="text-muted-foreground mb-6">
                  I leverage a comprehensive stack of technologies to transform raw data into actionable insights. My
                  approach combines:
                </p>

                <div className="space-y-4">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-primary">Data Engineering & Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Building robust data pipelines and performing in-depth analysis using Python, SQL, and specialized
                      libraries like Pandas and NumPy to extract meaningful patterns from complex datasets.
                    </p>
                  </div>

                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-primary">AI & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing intelligent solutions with LangChain, LLMs, and traditional ML algorithms to automate
                      processes, generate insights, and create predictive models that drive business value.
                    </p>
                  </div>

                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-primary">Visualization & Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Crafting compelling visual narratives with Tableau, Power BI, and custom dashboards that transform
                      complex data into clear, actionable insights for stakeholders at all levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
