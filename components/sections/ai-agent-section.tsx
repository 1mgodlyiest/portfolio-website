"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"
import { useInView } from "react-hook-inview"
import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"

const aiProjects = [
  {
    title: "Conversational AI Assistant",
    description: "An AI-powered virtual assistant capable of natural language understanding and contextual responses.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["OpenAI", "React", "Node.js", "WebSockets"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Document Analysis Agent",
    description: "An AI system that extracts, summarizes, and analyzes information from various document formats.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["LangChain", "Python", "FastAPI", "OCR"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Recommendation Engine",
    description: "A personalized recommendation system using machine learning to suggest relevant content.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["TensorFlow", "Python", "MongoDB", "React"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

export function AIAgentSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            AI Agents
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Intelligent AI Solutions</h2>
          <p className="text-muted-foreground max-w-2xl">
            Leveraging the power of artificial intelligence to create intelligent agents that solve complex problems and
            automate tasks.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Social Media Sentiment Analyzer</h3>
            <p className="text-muted-foreground mb-6">
              An advanced NLP-based sentiment analysis tool that evaluates the emotional tone in social media posts with
              87% accuracy. This AI agent helps businesses understand customer sentiment, track brand perception, and
              identify emerging trends in real-time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Multi-platform analysis
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Emotion classification
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Trend identification
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Text Classification
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Data Visualization
                  </li>
                </ul>
              </div>
            </div>

            <Button asChild>
              <Link href="#" className="group">
                View Project Details
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-1">
            <div className="bg-card rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Social Media Sentiment Analyzer Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
