"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function PortfolioSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex flex-col items-center justify-center p-4">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Manish Paneru" />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold">Manish Paneru</h1>
        <p className="text-sm text-muted-foreground">Data Analyst & AI Specialist</p>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold mb-2">Contact</h2>
            <p className="text-sm text-muted-foreground mb-1">
              <Mail className="inline-block w-4 h-4 mr-2" />
              mpnaeru115@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-2">Location</h2>
            <p className="text-sm text-muted-foreground">Surry Hills, NSW Australia</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {["Python", "SQL", "Data Analysis", "AI", "Machine Learning", "Visualization"].map((skill) => (
                <span key={skill} className="text-xs bg-secondary px-2 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex justify-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/manishpaneru" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/manish.paneru1" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:mpnaeru115@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
