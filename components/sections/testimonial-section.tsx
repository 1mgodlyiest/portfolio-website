"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Manish at Data Profession Academy, where he played a dual role as an internal data analyst and assistant tutor. His contributions were invaluable, not just to the company but to me personally. He demonstrated incredible dedication to our students and brought his analytical expertise to help us optimize our internal operations. His insights into our performance metrics allowed us to fine-tune marketing campaigns, advertisement budgets, and strategies—delivering measurable results for the academy.",
    author: "Sujal Dhungana",
    title: "Helping Students land their first Data Job | Data Analyst | Senior Data Engineer | Analytics Instructor",
    initials: "SD",
    relation: "Senior",
  },
  {
    quote:
      "I've had the privilege of working closely with Manish, and I can confidently say that he is an outstanding professional in data analytics, machine learning, and market research. With over three years of hands-on experience in the field, Manish has consistently demonstrated expertise and a passion for leveraging data to drive meaningful business outcomes—proving that talent and skill far outweigh formal academic credentials.",
    author: "Santosh Kumar Shahi",
    title: "Certified Data Analyst | Product Data Analyst | Business Intelligence",
    initials: "SK",
    relation: "Client",
  },
  {
    quote:
      "Manish delivered exceptional results for our company's data visualization project. His ability to transform complex datasets into intuitive dashboards revolutionized how our leadership team makes decisions. His technical skills combined with strong business acumen made him an invaluable asset to our team. What impressed me most was his proactive approach to identifying improvement opportunities beyond the original project scope.",
    author: "Michael Anderson",
    title: "Head of Analytics, TechSolutions Inc.",
    initials: "MA",
    relation: "Client",
  },
]

export function TestimonialSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Client Feedback
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from clients about their experience working with me on data analysis and AI projects.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-lg italic mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-border/10">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      {testimonial.relation && (
                        <p className="text-sm text-primary mt-1">
                          <span className="font-medium">Relation:</span> {testimonial.relation}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
