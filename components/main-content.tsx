"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { AIAgentSection } from "@/components/sections/ai-agent-section"
import { CaseStudySection } from "@/components/sections/case-study-section"
import { VisualizationsSection } from "@/components/sections/visualizations-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { AboutSection } from "@/components/sections/about-section"

export function MainContent() {
  const [activeTab, setActiveTab] = useState("portfolio")

  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <SidebarTrigger />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="ai-agent">AI Agent</TabsTrigger>
          <TabsTrigger value="case-study">Case Study</TabsTrigger>
          <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio">
          <PortfolioSection />
        </TabsContent>

        <TabsContent value="ai-agent">
          <AIAgentSection />
        </TabsContent>

        <TabsContent value="case-study">
          <CaseStudySection />
        </TabsContent>

        <TabsContent value="visualizations">
          <VisualizationsSection />
        </TabsContent>

        <TabsContent value="resume">
          <ResumeSection />
        </TabsContent>

        <TabsContent value="about">
          <AboutSection />
        </TabsContent>
      </Tabs>
    </main>
  )
}
