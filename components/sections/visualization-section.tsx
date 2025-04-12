"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, PieChart, BarChart3, Users, DollarSign, Building } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

export function VisualizationSection() {
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
    <section id="visualizations" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <Badge variant="outline" className="mb-4">
              Data Visualization
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Interactive Streamlit Analytics</h2>
            <p className="text-muted-foreground max-w-2xl">
              Transforming complex data into clear, actionable visualizations using Streamlit that tell compelling
              stories and drive decision-making.
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 group" asChild>
            <Link href="/visualizations">
              View All Visualizations
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Tabs defaultValue="hr" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="hr">HR Analytics</TabsTrigger>
              <TabsTrigger value="economics">Economic Analysis</TabsTrigger>
              <TabsTrigger value="financial">Financial Modeling</TabsTrigger>
            </TabsList>

            <TabsContent value="hr">
              <motion.div variants={itemVariants}>
                <GlowCard>
                  <CardHeader>
                    <CardTitle>Top Reasons for Employee Turnover in Fortune 500 Companies</CardTitle>
                    <CardDescription>From Executive HR Insights Dashboard</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-secondary/30 rounded-lg p-6 relative overflow-hidden">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                                <BarChart3 className="h-5 w-5 text-blue-500" />
                              </div>
                              <h3 className="font-medium">Non-competitive Pay</h3>
                            </div>
                            <span className="text-xl font-bold text-blue-500">38%</span>
                          </div>
                          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: "38%" }}></div>
                          </div>
                          <div className="absolute -bottom-6 -right-6 opacity-10">
                            <DollarSign className="h-20 w-20" />
                          </div>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-6 relative overflow-hidden">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                                <Users className="h-5 w-5 text-red-500" />
                              </div>
                              <h3 className="font-medium">Burnout/Overworked</h3>
                            </div>
                            <span className="text-xl font-bold text-red-500">32%</span>
                          </div>
                          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full" style={{ width: "32%" }}></div>
                          </div>
                          <div className="absolute -bottom-6 -right-6 opacity-10">
                            <Users className="h-20 w-20" />
                          </div>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-6 relative overflow-hidden">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <div className="bg-green-500/20 p-2 rounded-full mr-3">
                                <Building className="h-5 w-5 text-green-500" />
                              </div>
                              <h3 className="font-medium">Better Job Satisfaction</h3>
                            </div>
                            <span className="text-xl font-bold text-green-500">30%</span>
                          </div>
                          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "30%" }}></div>
                          </div>
                          <div className="absolute -bottom-6 -right-6 opacity-10">
                            <Building className="h-20 w-20" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-medium mb-4">Key Insights</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Non-competitive pay is the leading cause (38%) of employee turnover</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Burnout and feeling overworked accounts for 32% of departures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>30% leave for better job satisfaction at more interesting tech companies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Companies addressing these factors see up to 45% reduction in turnover rates</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/visualizations">
                              View Full Project
                              <ArrowUpRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlowCard>
              </motion.div>
            </TabsContent>

            <TabsContent value="economics">
              <motion.div variants={itemVariants}>
                <GlowCard>
                  <CardHeader>
                    <CardTitle>Countries with Highest Spending Power</CardTitle>
                    <CardDescription>Total Expenditure in Last Decade (in Trillions USD)</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                          <div className="bg-blue-500/20 p-2 rounded-full mb-2">
                            <DollarSign className="h-5 w-5 text-blue-500" />
                          </div>
                          <h3 className="font-medium">USA</h3>
                          <p className="text-2xl font-bold text-blue-500">$145T</p>
                          <p className="text-xs text-muted-foreground">Highest Global Spending</p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                          <div className="bg-cyan-500/20 p-2 rounded-full mb-2">
                            <DollarSign className="h-5 w-5 text-cyan-500" />
                          </div>
                          <h3 className="font-medium">China</h3>
                          <p className="text-2xl font-bold text-cyan-500">$85T</p>
                          <p className="text-xs text-muted-foreground">Rapid Growth Trajectory</p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                          <div className="bg-teal-500/20 p-2 rounded-full mb-2">
                            <DollarSign className="h-5 w-5 text-teal-500" />
                          </div>
                          <h3 className="font-medium">Japan</h3>
                          <p className="text-2xl font-bold text-teal-500">$26T</p>
                          <p className="text-xs text-muted-foreground">Stable Economic Power</p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                          <div className="bg-green-500/20 p-2 rounded-full mb-2">
                            <DollarSign className="h-5 w-5 text-green-500" />
                          </div>
                          <h3 className="font-medium">Germany</h3>
                          <p className="text-2xl font-bold text-green-500">$17T</p>
                          <p className="text-xs text-muted-foreground">European Leader</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-medium mb-4">Global Economic Insights</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>USA leads with $145T in expenditure, nearly 2x China's spending</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyan-500 mr-2">•</span>
                            <span>Top 3 countries (USA, China, Japan) account for 69% of total spending</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            <span>European powers (Germany, France, UK) show similar spending patterns</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>India shows rapid growth trajectory despite current 10th position</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/visualizations">
                              View Full Project
                              <ArrowUpRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlowCard>
              </motion.div>
            </TabsContent>

            <TabsContent value="financial">
              <motion.div variants={itemVariants}>
                <GlowCard>
                  <CardHeader>
                    <CardTitle>Credit Card Fraud Detection Model Performance</CardTitle>
                    <CardDescription>Financial Modeling & Anomaly Detection</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="bg-secondary/30 rounded-lg p-5 relative overflow-hidden">
                          <div className="flex items-center mb-2">
                            <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                              <TrendingUp className="h-5 w-5 text-purple-500" />
                            </div>
                            <h3 className="font-medium">Model Performance Comparison</h3>
                          </div>

                          <div className="space-y-3 mt-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Baseline</span>
                                <span className="text-muted-foreground">70% F1 Score</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500/40 h-full rounded-full" style={{ width: "70%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Random Forest</span>
                                <span className="text-muted-foreground">82% F1 Score</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500/60 h-full rounded-full" style={{ width: "82%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>XGBoost</span>
                                <span className="text-muted-foreground">86% F1 Score</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500/80 h-full rounded-full" style={{ width: "86%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Neural Network</span>
                                <span className="text-muted-foreground">90% F1 Score</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full rounded-full" style={{ width: "90%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Ensemble</span>
                                <span className="text-muted-foreground">93% F1 Score</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: "93%" }}></div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute -bottom-6 -right-6 opacity-10">
                            <PieChart className="h-20 w-20" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-medium mb-4">Fraud Detection Insights</h3>
                        <p className="text-muted-foreground mb-4">
                          The Financial Modeling: Credit Card Fraud Detection project uses advanced machine learning
                          techniques to identify fraudulent transactions with high accuracy. The interactive Streamlit
                          dashboard allows financial analysts to:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Visualize transaction patterns and anomalies in real-time</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Compare performance of different detection algorithms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>Analyze false positive/negative rates to optimize detection thresholds</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>Simulate different fraud scenarios to test model robustness</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/visualizations">
                              View Full Project
                              <ArrowUpRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlowCard>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
