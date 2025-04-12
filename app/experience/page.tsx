"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCursor } from "@/components/animated-cursor"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Arnova Cognition",
    position: "Founder | AI Solutions Architect",
    period: "Apr 2024 - Present",
    description:
      "Leading AI solutions development and implementation for businesses, focusing on automation, workflow optimization, and data-driven insights.",
    achievements: [
      "Led the development and deployment of 3 AI-driven tools, including QuickBit Learning, CareerCraft, and DocEase, which collectively served over 6,000 users in six months",
      "Delivered tailored AI solutions to 6 businesses, improving workflows and automating processes to save clients significant time and costs",
      "Managed nearly 98,000 API calls across products, ensuring seamless operation and high user engagement",
      "Designed and implemented microlearning modules for QuickBit Learning, creating structured, task-oriented lessons that improved learning outcomes by 30%",
      "Analyzed product usage data to drive iterative improvements, increasing user satisfaction scores by 25% through optimized interfaces and features",
      "Spearheaded the integration of LangChain for CareerCraft, enabling personalized career advice and resume matching with 85% accuracy",
      "Automated key backend processes for document analysis in DocEase, reducing processing times by 40% and ensuring robust data security with SQLite and ChromaDB",
      "Collaborated with a cross-functional team to refine product strategies, resulting in a 15% growth in user retention rates",
      "Developed clear documentation and tutorials for user onboarding, enhancing accessibility and reducing support inquiries by 20%",
    ],
    technologies: ["AI Solutions", "LangChain", "Python", "SQLite", "ChromaDB", "API Integration", "Data Analysis"],
    location: "Kathmandu, Nepal (Remote)",
  },
  {
    company: "Data Profession Academy",
    position: "Data Analyst | Assistant Tutor",
    period: "Jan 2024 - Present",
    description:
      "Providing data analysis expertise and educational support for students learning data science and analytics tools and techniques.",
    achievements: [
      "Delivered over 150+ hours of live tutorials and mentorship, guiding 100+ students in mastering data analysis tools and techniques, including Python, SQL, Tableau, and Power BI",
      "Designed and executed 20+ hands-on projects for students, replicating real-world business scenarios to bridge the gap between theory and practice",
      "Analyzed internal operational data to optimize the academy's processes, leading to a 15% increase in student retention rates through actionable insights on engagement patterns",
      "Conducted in-depth analysis of customer feedback and course performance, implementing data-driven improvements that boosted course satisfaction scores by 20%",
      "Automated weekly reporting processes, reducing manual workload by 40% and improving data accuracy",
      "Spearheaded curriculum enhancements by integrating emerging industry trends and tools, ensuring up-to-date content delivery for aspiring analysts",
      "Presented findings and actionable insights through interactive dashboards and reports, driving strategic decision-making for course offerings and marketing strategies",
      "Collaborated with cross-functional teams to provide data-driven solutions for expanding outreach and identifying target markets, contributing to a 30% growth in enrollments year-over-year",
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "Data Analysis", "Teaching", "Curriculum Development"],
    location: "Perth, Australia (Remote)",
  },
  {
    company: "An4Soft",
    position: "Data Analyst",
    period: "Mar 2020 - Mar 2024",
    description:
      "Drove data-driven decision-making and strategic analysis across various projects, supporting product development and business growth.",
    achievements: [
      "Assessed product viability for client pitches through comprehensive data analysis and market research",
      "Conducted internal productivity analyses to optimize team performance and resource allocation",
      "Identified product-market fit through data-driven insights and competitive analysis",
      "Researched trends and topics to support the blog team with data-backed content strategies",
      "Developed dashboards and presentations for client meetings, effectively communicating complex data insights",
      "Analyzed diverse datasets to evaluate new ideas from brainstorming sessions, prioritizing initiatives with highest potential ROI",
      "Managed databases to ensure data integrity and accessibility across the organization",
      "Collaborated with cross-functional teams including developers, designers, content writers, and executive leadership",
    ],
    technologies: ["Data Analysis", "SQL", "Python", "Dashboarding", "Market Research", "Database Management"],
    location: "Kathmandu, Nepal (On-site)",
  },
]

const skills = [
  {
    category: "Data Analysis & Engineering",
    items: [
      "Python",
      "SQL",
      "R",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Data Wrangling",
      "ETL Pipelines",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Data Modeling",
      "A/B Testing",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "LangChain",
      "Large Language Models (LLMs)",
      "Vector Databases",
      "ChromaDB",
      "scikit-learn",
      "TensorFlow",
      "Predictive Modeling",
      "NLP",
      "Prompt Engineering",
      "RAG Systems",
      "AI Agents",
    ],
  },
  {
    category: "Visualization & BI",
    items: [
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Dashboard Design",
      "Data Storytelling",
      "Plotly",
      "Interactive Visualizations",
    ],
  },
  {
    category: "Tools & Soft Skills",
    items: [
      "Git",
      "Jupyter Notebooks",
      "Microsoft Excel",
      "Google Analytics",
      "Reporting Automation",
      "Problem-Solving",
      "Communication",
      "Critical Thinking",
      "Stakeholder Management",
      "Cross-Functional Teamwork",
    ],
  },
]

const certifications = [
  {
    name: "Google Data Analytics Certification",
    issuer: "Google / Coursera",
    date: "2023",
    link: "#",
  },
  {
    name: "Google Advanced Data Analytics Certification",
    issuer: "Google / Coursera",
    date: "2023",
    link: "#",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "2022",
    link: "#",
  },
  {
    name: "Introduction to Data Science",
    issuer: "CS50, Harvard University",
    date: "2022",
    link: "#",
  },
  {
    name: "Machine Learning and AI",
    issuer: "CS50, Harvard University",
    date: "2022",
    link: "#",
  },
  {
    name: "Advanced Data Science with Python",
    issuer: "CS50, Harvard University",
    date: "2021",
    link: "#",
  },
  {
    name: "SQL Advanced Certification",
    issuer: "HackerRank",
    date: "2021",
    link: "#",
  },
  {
    name: "Various Virtual Internships",
    issuer: "Forage",
    date: "2020-2022",
    link: "#",
  },
]

export default function ExperiencePage() {
  const [isLoading, setIsLoading] = useState(true)

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

            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <Badge variant="outline" className="mb-4">
                  Experience & Skills
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Professional Journey</h1>
                <p className="text-muted-foreground max-w-2xl">
                  My experience and expertise in data analysis, AI solutions, and machine learning.
                </p>
              </div>

              <Button className="mt-6 md:mt-0 group">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="mb-12 w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="experience" className="text-sm md:text-base">
                Experience
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-sm md:text-base">
                Skills
              </TabsTrigger>
              <TabsTrigger value="certifications" className="text-sm md:text-base">
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="overflow-hidden border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
                          <div className="p-6 md:p-8 bg-primary/5 border-b md:border-b-0 md:border-r border-primary/10">
                            <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                            <p className="text-primary/80 font-medium mb-2">{exp.position}</p>
                            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                          </div>
                          <div className="p-6 md:p-8">
                            <p className="mb-4">{exp.description}</p>
                            <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                            <ul className="space-y-2 mb-4">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {exp.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="font-normal">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {skills.map((category, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
                      <CardContent className="p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((skill, i) => (
                            <Badge key={i} variant="outline" className="py-1.5 px-3">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="certifications">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <Badge variant="outline" className="mb-2">
                            {cert.date}
                          </Badge>
                          <h3 className="text-lg font-bold">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <div className="mt-auto pt-4">
                          <Link href={cert.link} className="text-primary text-sm hover:underline">
                            View Certificate
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
