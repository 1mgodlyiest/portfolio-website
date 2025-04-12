"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

const caseStudy = {
  title: "Enterprise CRM Redesign",
  client: "Global Financial Services Company",
  duration: "6 months",
  role: "Lead UX Designer & Frontend Developer",
  overview:
    "A comprehensive redesign of a legacy CRM system used by over 5,000 employees globally, focusing on improving user experience, performance, and accessibility.",
  challenges: [
    "Legacy system with 10+ years of accumulated technical debt",
    "Complex workflows involving multiple departments and user roles",
    "High security and compliance requirements",
    "Resistance to change from long-time users",
  ],
  approach: [
    "Conducted extensive user research with 50+ stakeholders across departments",
    "Created detailed user personas and journey maps to identify pain points",
    "Developed an iterative design process with regular user testing",
    "Implemented a component-based architecture for scalability",
    "Established a design system for consistency across the platform",
  ],
  solution:
    "We developed a modular, responsive interface that simplified complex workflows while maintaining all required functionality. The new system featured an intuitive dashboard, streamlined navigation, and automated many repetitive tasks. We implemented progressive enhancement to ensure accessibility across devices and connection speeds.",
  results: [
    "42% reduction in time spent on common tasks",
    "68% improvement in user satisfaction scores",
    "23% decrease in training time for new employees",
    "91% of users reported the new system was easier to use",
  ],
  technologies: ["React", "TypeScript", "GraphQL", "Node.js", "PostgreSQL", "Docker", "AWS", "Computer Vision", "NLP"],
}

export function CaseStudySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">In-Depth Analysis</h2>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive case studies that showcase my analytical approach to solving complex business problems.
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
            <h3 className="text-2xl font-bold mb-4">E-commerce Product Categorization</h3>
            <p className="text-muted-foreground mb-6">
              A detailed case study on developing an automated product classification system for a major e-commerce
              platform. This system accurately categorizes items based on both images and descriptions, significantly
              reducing manual categorization efforts and improving search relevance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Key Findings</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    93% classification accuracy
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    85% reduction in manual effort
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    42% improvement in search relevance
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Scalable to millions of products
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Computer Vision
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    NLP
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Data Analysis
                  </li>
                </ul>
              </div>
            </div>

            <Button asChild>
              <Link href="#" className="group">
                Read Full Case Study
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-1">
            <div className="bg-card rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="E-commerce Product Categorization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
