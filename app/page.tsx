"use client"

import { useEffect, useState } from "react"
import { AnimatedCursor } from "@/components/animated-cursor"
import { NavigationMenu } from "@/components/navigation-menu"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { VisualizationSection } from "@/components/sections/visualization-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { FeaturedProject } from "@/components/sections/featured-project"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedCursor />
      <ScrollProgress />
      <NavigationMenu />

      <main className="relative z-10">
        <HeroSection />
        <FeaturedProject />
        <ProjectsSection />
        <VisualizationSection />
        <ExperienceSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
