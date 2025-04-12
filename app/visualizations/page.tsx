"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCursor } from "@/components/animated-cursor"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function VisualizationsPage() {
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
                  Data Visualization
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Interactive Analytics</h1>
                <p className="text-muted-foreground max-w-2xl">
                  Transforming complex data into clear, actionable visualizations that tell compelling stories and drive
                  decision-making.
                </p>
              </div>
            </div>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Tabs defaultValue="revenue" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
                <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
                <TabsTrigger value="customer">Customer Insights</TabsTrigger>
                <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
              </TabsList>

              <TabsContent value="revenue">
                <motion.div variants={itemVariants}>
                  <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg mb-8">
                    <CardHeader>
                      <CardTitle>Streamlit Visualization Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Executive HR Insights</h3>
                          <p className="text-muted-foreground">
                            Interactive Streamlit dashboard for HR executives to analyze employee data and workforce
                            trends. Visualizes key metrics like turnover rates, department performance, and recruitment
                            efficiency.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">Streamlit</Badge>
                            <Badge variant="secondary">HR Analytics</Badge>
                            <Badge variant="secondary">Data Visualization</Badge>
                          </div>
                          <Button size="sm" className="mt-2" asChild>
                            <Link href="https://hrvisualization.streamlit.app/" target="_blank">
                              View Project
                            </Link>
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">LaLiga Dashboard Analysis</h3>
                          <p className="text-muted-foreground">
                            Comprehensive Streamlit visualization of LaLiga football statistics and team performance
                            metrics. Features interactive comparisons of player stats, team rankings, and match
                            outcomes.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">Streamlit</Badge>
                            <Badge variant="secondary">Sports Analytics</Badge>
                            <Badge variant="secondary">Interactive Dashboard</Badge>
                          </div>
                          <Button size="sm" className="mt-2" asChild>
                            <Link href="https://laliga-viz.streamlit.app/" target="_blank">
                              View Project
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="customer">
                <motion.div variants={itemVariants}>
                  <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg mb-8">
                    <CardHeader>
                      <CardTitle>Economic Analysis Visualizations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Global Metropolitan Economics Analysis</h3>
                          <p className="text-muted-foreground">
                            Streamlit-powered exploration of economic indicators across major global metropolitan areas.
                            Features interactive maps, comparative charts, and trend analysis of economic growth
                            patterns.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">Streamlit</Badge>
                            <Badge variant="secondary">Economic Analysis</Badge>
                            <Badge variant="secondary">Geospatial Visualization</Badge>
                          </div>
                          <Button size="sm" className="mt-2" asChild>
                            <Link href="https://metropolitan-gdp-analysis.streamlit.app/" target="_blank">
                              View Project
                            </Link>
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">US Census Economics Analysis</h3>
                          <p className="text-muted-foreground">
                            Interactive Streamlit dashboard visualizing US census data with economic insights and
                            demographic trends. Provides detailed breakdowns by state, county, and demographic groups.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">Streamlit</Badge>
                            <Badge variant="secondary">Census Data</Badge>
                            <Badge variant="secondary">Economic Indicators</Badge>
                          </div>
                          <Button size="sm" className="mt-2" asChild>
                            <Link href="https://uscensuseconomic.streamlit.app/" target="_blank">
                              View Project
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="performance">
                <motion.div variants={itemVariants}>
                  <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg mb-8">
                    <CardHeader>
                      <CardTitle>Financial Analysis Visualization</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Financial Modeling: Credit Card Fraud Detection</h3>
                          <p className="text-muted-foreground">
                            Streamlit application for visualizing credit card fraud patterns and detection model
                            performance. Features interactive dashboards showing transaction patterns, anomaly
                            detection, and model accuracy metrics. Users can explore different detection algorithms and
                            their effectiveness on various fraud scenarios.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">Streamlit</Badge>
                            <Badge variant="secondary">Financial Analysis</Badge>
                            <Badge variant="secondary">Fraud Detection</Badge>
                            <Badge variant="secondary">Machine Learning</Badge>
                          </div>
                          <Button size="sm" className="mt-4" asChild>
                            <Link href="https://frauddetectionmodeling.streamlit.app/" target="_blank">
                              View Project
                            </Link>
                          </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border/10">
                          <h3 className="text-xl font-medium mb-4">Key Features of Streamlit Visualizations</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>
                                Interactive data exploration with real-time filtering and parameter adjustments
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>Responsive visualizations that adapt to different screen sizes and devices</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>
                                Integration with various data sources including APIs, databases, and file uploads
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>Custom visualization components for specialized data representation needs</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
