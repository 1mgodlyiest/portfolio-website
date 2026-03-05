"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({})

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

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/manish.paneru1", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/manishpaneru", label: "GitHub" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      // Let Netlify handle the form submission
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      })

      if (response.ok) {
        setFormStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        })
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        form.reset()
      } else {
        setFormStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link href="/">
              <Button variant="ghost" className="group mb-6">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Let's Unlock Your Data's Potential</h1>
            <p className="text-muted-foreground max-w-2xl">
              Have a data challenge or looking for analytical insights? I'd love to discuss how I can help transform
              your data into actionable intelligence.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                  <div className="space-y-8 mb-8">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                        <p className="text-lg">datawizard@analystpaneru.xyz</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                        <p className="text-lg">Available upon request</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                        <p className="text-lg">Surry Hills, NSW Australia</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <Link
                          key={index}
                          href={social.href}
                          className="bg-secondary/50 hover:bg-primary/10 p-3 rounded-full transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </Link>
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">Available for collaborations, full time work and freelance projects</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                  <form className="space-y-6" onSubmit={handleSubmit} name="contact-page" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-page" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="Your name" 
                          className="bg-secondary/50 border-secondary" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-secondary/50 border-secondary"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Data analysis inquiry"
                        className="bg-secondary/50 border-secondary"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your data challenges..."
                        rows={6}
                        className="bg-secondary/50 border-secondary resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {formStatus.message && (
                      <div className={`rounded-md p-3 ${formStatus.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {formStatus.message}
                      </div>
                    )}

                    <Button type="submit" className="w-full md:w-auto group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          Processing<span className="ml-2 animate-pulse">...</span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
