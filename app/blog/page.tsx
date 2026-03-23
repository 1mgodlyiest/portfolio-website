"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Stay tuned for updates on AI, Data Science, and Career growth.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
