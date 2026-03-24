"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"

const blogPosts = [
  {
    slug: "the-agentic-turn",
    title: "The Agentic Turn",
    description: "From Chatbots to Digital Collaborators",
    excerpt: "An exploration of the shift from reactive conversational AI to autonomous, multi-agent frameworks.",
    date: "March 24, 2026"
  },
  {
    slug: "ai-human-collaboration",
    title: "AI-Human Collaboration",
    description: "Beyond Replacement: The Era of Amplification",
    excerpt: "Why the future of work is not AI versus human, but human-led, AI-executed synergy.",
    date: "March 24, 2026"
  },
  {
    slug: "reasoning-vs-memorization",
    title: "Reasoning vs. Memorization",
    description: "The Bottleneck of Modern AI",
    excerpt: "Why linguistic fluency in LLMs is not the same as logical deduction, and why it matters.",
    date: "March 24, 2026"
  }
]

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedCursor />
      <ScrollProgress />
      <NavigationMenu />

      <main className="container mx-auto py-32 px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">The Agency Journal</Badge>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">Deep Dives.</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Exploring the bleeding edge of AI infrastructure, data engineering, and the agentic revolution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group border-b border-neutral-800 pb-12 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary tracking-widest uppercase">{post.date}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors text-white">{post.title}</h2>
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">{post.excerpt}</p>
                  <div className="mt-6 font-semibold text-white group-hover:underline flex items-center">
                    Read the research →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
