"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
    <div className="relative min-h-screen bg-background">
      <NavigationMenu />

      <main className="container mx-auto py-32 px-6 max-w-4xl min-h-[60vh]">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">The Agency Journal</h1>
        <p className="text-xl text-muted-foreground mb-16">
          Deep dives into AI, Data Science, and the evolving workspace.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg p-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.date}</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4">{post.title}</CardTitle>
                  <CardDescription className="text-lg">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
