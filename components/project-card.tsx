"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown, ChevronUp, Code, Lightbulb, FileText } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags?: string[]
  year: string
  link: string
  extendedDescription?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Default extended description if none is provided
  const extendedDescription =
    project.extendedDescription ||
    "This project demonstrates advanced techniques in data analysis and visualization, leveraging cutting-edge technologies to deliver actionable insights. The methodology involved extensive data preprocessing, feature engineering, and model optimization to achieve high-quality results."

  // Generate key features based on project category if not provided
  const generateKeyFeatures = (project: Project) => {
    const categoryFeatures = {
      sql: [
        "Optimized query performance",
        "Complex data modeling",
        "Advanced SQL techniques",
        "Comprehensive reporting",
      ],
      python: [
        "Data cleaning and preprocessing",
        "Statistical analysis",
        "Insightful visualizations",
        "Actionable recommendations",
      ],
      ml: [
        "Custom model architecture",
        "Feature engineering",
        "Hyperparameter optimization",
        "Model evaluation metrics",
      ],
      ai: ["Natural language processing", "Intelligent automation", "Context-aware responses", "Continuous learning"],
      etl: ["Robust data pipelines", "Real-time processing", "Data validation", "Scalable architecture"],
      visualization: [
        "Interactive dashboards",
        "Multi-dimensional analysis",
        "Intuitive user interface",
        "Real-time updates",
      ],
      case: ["Comprehensive analysis", "Actionable insights", "Strategic recommendations", "Implementation roadmap"],
    }

    // Return features based on category or default features
    return (
      categoryFeatures[project.category as keyof typeof categoryFeatures] || [
        "Comprehensive analysis",
        "Data-driven insights",
        "Efficient implementation",
        "Scalable solution",
      ]
    )
  }

  const keyFeatures = generateKeyFeatures(project)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const expandedContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group transition-all duration-300 hover:shadow-lg rounded-xl"
      whileHover={{ y: -5 }}
    >
      <div className="block overflow-hidden">
        <div
          className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onError={(e) => {
              console.error(`Failed to load image: ${project.image}`);
              e.currentTarget.src = "/placeholder.svg";
            }}
          />

          <div className="absolute bottom-0 left-0 p-6 z-20">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
          </div>

          <div className="absolute top-6 right-6 z-20">
            <Badge variant="outline">{project.year}</Badge>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
              {isExpanded ? (
                <ChevronUp className="h-6 w-6 text-white" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white" />
              )}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-3">{project.description}</p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={expandedContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="pt-4 pb-6 border-t border-border mt-4 space-y-6">
                {/* Project Overview Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Project Overview</h4>
                  </div>
                  <p className="text-muted-foreground text-sm pl-6">{extendedDescription}</p>
                </div>

                {/* Technologies Used Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Technologies Used</h4>
                  </div>
                  <div className="pl-6 flex flex-wrap gap-2">
                    {project.tags &&
                      project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-secondary/30">
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>

                {/* Key Features Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Key Features</h4>
                  </div>
                  <ul className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {keyFeatures.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project Button */}
                <Button asChild className="w-full mt-4">
                  <Link href={project.link}>
                    View Project Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
