"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Send } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { id: "data-analysis", label: "Data Analysis & Insights" },
  { id: "visualization", label: "Data Visualization & Dashboards" },
  { id: "ml-models", label: "Machine Learning Models" },
  { id: "etl", label: "ETL Pipeline Development" },
  { id: "ai-agents", label: "AI Agent Development" },
  { id: "consulting", label: "Data Strategy Consulting" },
]

const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function LetsTalkPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedCursor />
      <ScrollProgress />
      <NavigationMenu />

      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/">
              <Button variant="ghost" className="group mb-6">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <Badge variant="outline" className="mb-4">
              Let's Talk
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Schedule a Consultation</h1>
            <p className="text-muted-foreground max-w-2xl">
              Book a personalized consultation to discuss your data challenges and how we can work together to solve
              them.
            </p>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-xl font-bold">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Your name" className="bg-secondary/50 border-secondary" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-secondary/50 border-secondary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company (Optional)
                        </label>
                        <Input id="company" placeholder="Your company" className="bg-secondary/50 border-secondary" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="bg-secondary/50 border-secondary"
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-xl font-bold">Services Needed</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select all services you're interested in discussing
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => toggleService(service.id)}
                          />
                          <label
                            htmlFor={service.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-xl font-bold">Schedule a Time</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Preferred Date
                        </label>
                        <Input id="date" type="date" className="bg-secondary/50 border-secondary" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Preferred Time
                        </label>
                        <Select>
                          <SelectTrigger className="bg-secondary/50 border-secondary">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-xl font-bold">Project Details</h3>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Tell me about your project or data challenges
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your project, goals, and any specific challenges you're facing..."
                        rows={6}
                        className="bg-secondary/50 border-secondary resize-none"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto group">
                      Schedule Consultation
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
