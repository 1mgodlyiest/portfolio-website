"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedCursor />
      <ScrollProgress />
      <NavigationMenu />

      <main className="container mx-auto py-24 px-6 min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/blog/the-agentic-turn">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle>The Agentic Turn</CardTitle>
                <CardDescription>From Chatbots to Digital Collaborators</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">An exploration of the shift from reactive conversational AI to autonomous, multi-agent frameworks.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/ai-human-collaboration">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle>AI-Human Collaboration</CardTitle>
                <CardDescription>Beyond Replacement: The Era of Amplification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Why the future of work is not AI versus human, but human-led, AI-executed synergy.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
