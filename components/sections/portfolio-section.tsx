import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Health & Fitness Tracker",
    description: "A comprehensive health tracking application with data visualization and progress monitoring.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["React Native", "Firebase", "D3.js"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Content Management System",
    description: "A customizable CMS for blogs and digital publications with advanced editing capabilities.",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

export function PortfolioSection() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
        <p className="text-muted-foreground">A collection of my recent projects and work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.repoUrl}>
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.demoUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
