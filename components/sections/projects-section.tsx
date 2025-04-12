"use client"

import Link from "next/link"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

// Update the categories array to remove "visualization"
const categories = [
  { id: "all", label: "All Projects" },
  { id: "sql", label: "SQL" },
  { id: "python", label: "Python EDA" },
  { id: "ai", label: "AI Agent" },
  { id: "etl", label: "ETL" },
  { id: "ml", label: "Machine Learning" },
  { id: "case", label: "Case Studies" },
]

const projects = [
  // AI Agent Projects
  {
    id: 20,
    title: "DataTeam: Collaborative AI Analysis",
    description: "AI agent that facilitates collaborative data analysis among team members",
    image: "/images/datateam-ai-analysis.png",
    category: "ai",
    tags: ["Python", "LLM", "Collaborative Tools"],
    year: "2024",
    link: "https://github.com/manishpaneru/Final-Analyst-Agent",
    extendedDescription:
      "DataTeam is an AI-powered collaborative analysis platform that enhances team productivity through intelligent assistance and knowledge sharing. The system uses large language models to understand analysis context, suggest approaches, and automate routine tasks. In enterprise deployments, DataTeam reduced analysis time by 42% and improved consistency of methodologies across distributed teams.",
  },
  {
    id: 21,
    title: "CodeGen: Intelligent Programming Assistant",
    description: "AI-powered assistant for code generation and programming support",
    image: "/images/codegen-programming-assistant.png",
    category: "ai",
    tags: ["Python", "LLM", "Code Generation"],
    year: "2023",
    link: "https://github.com/manishpaneru/Code-generator-ai-agent",
    extendedDescription:
      "CodeGen is an AI programming assistant that helps developers write, debug, and optimize code across multiple languages. The system understands project context, coding standards, and best practices to provide relevant suggestions and automated implementations. In user testing, CodeGen increased developer productivity by 35% and reduced debugging time by 28%.",
  },
  // SQL Projects
  {
    id: 1,
    title: "Healthcare Flow SQL Model",
    description: "Comprehensive SQL model for healthcare patient flow and resource optimization",
    image: "/images/healthcare-flow-sql-model.png",
    category: "sql",
    tags: ["SQL", "Healthcare Analytics", "Data Modeling"],
    year: "2023",
    link: "https://github.com/manishpaneru/HealthCare-Flow-SQL-model",
    extendedDescription:
      "This healthcare flow SQL model provides a comprehensive solution for tracking and optimizing patient journeys through medical facilities. It includes custom views and stored procedures for real-time resource allocation, reducing wait times by 35% in pilot implementations.",
  },
  {
    id: 2,
    title: "Ecommerce Analytics SQL Model",
    description: "Advanced SQL analytics model for e-commerce performance and customer behavior",
    image: "/images/ecommerce-analytics-sql-model.png",
    category: "sql",
    tags: ["SQL", "E-commerce", "Customer Analytics"],
    year: "2023",
    link: "https://github.com/manishpaneru/Ecommerce-analytics-sql-model",
    extendedDescription:
      "This e-commerce analytics SQL model provides deep insights into customer purchasing patterns, product performance, and sales funnel optimization. The model includes cohort analysis, customer lifetime value calculations, and inventory turnover metrics that helped increase conversion rates by 22%.",
  },
  {
    id: 3,
    title: "Financial Data Warehouse",
    description: "SQL-based data warehouse design for financial institutions with complex reporting",
    image: "/images/financial-data-warehouse.png",
    category: "sql",
    tags: ["SQL", "Data Warehouse", "Financial Analytics"],
    year: "2024",
    link: "https://github.com/manishpaneru/Financial-Data-Warehouse",
    extendedDescription:
      "This financial data warehouse architecture provides a robust foundation for regulatory reporting and financial analytics. The star schema design optimizes query performance while maintaining data integrity, with specialized partitioning strategies that reduced report generation time by 78%.",
  },
  {
    id: 4,
    title: "Superstore Advanced Data Analytics",
    description: "In-depth SQL analysis of retail operations and inventory optimization",
    image: "/images/superstore-analytics.webp",
    category: "sql",
    tags: ["SQL", "Retail Analytics", "Inventory Management"],
    year: "2023",
    link: "https://github.com/manishpaneru/Superstore-Advanced-data-analytics",
    extendedDescription:
      "This superstore analytics project delivers comprehensive insights into retail performance across multiple dimensions. The analysis includes seasonal trend identification, product affinity analysis, and dynamic inventory optimization models that helped reduce stockouts by 42% while decreasing overall inventory costs.",
  },
  {
    id: 5,
    title: "US Macro Economics Advanced SQL Project",
    description: "SQL analysis of macroeconomic indicators and trends in the US economy",
    image: "/images/us-macroeconomics-sql.webp",
    category: "sql",
    tags: ["SQL", "Economic Analysis", "Macroeconomics"],
    year: "2024",
    link: "https://github.com/manishpaneru/US-macro-economic-Advanced-SQL-project",
    extendedDescription:
      "This macroeconomic analysis project combines data from multiple federal sources to provide a comprehensive view of US economic health. The SQL models include time-series analysis of key indicators, correlation studies between economic factors, and predictive models for economic trend forecasting.",
  },
  {
    id: 6,
    title: "US Finance and Economic Dataset Project",
    description: "Comprehensive SQL analysis of US financial markets and economic indicators",
    image: "/images/us-finance-economic-sql.webp",
    category: "sql",
    tags: ["SQL", "Financial Markets", "Economic Indicators"],
    year: "2023",
    link: "https://github.com/manishpaneru/US-finance-and-economic-dataset",
    extendedDescription:
      "This project integrates financial market data with economic indicators to identify correlations and potential leading indicators. The analysis includes custom SQL functions for calculating technical indicators, market sentiment analysis, and sector rotation patterns that provided valuable insights for investment strategy.",
  },

  // ETL Projects
  {
    id: 7,
    title: "Airquat: Air Quality Index Dashboard",
    description: "End-to-end ETL pipeline for real-time air quality monitoring and visualization",
    image: "/images/airquat.jpg",
    category: "etl",
    tags: ["ETL", "Python", "Environmental Data"],
    year: "2024",
    link: "https://airqualityetl.streamlit.app/",
    extendedDescription:
      "Airquat is a comprehensive air quality monitoring system that collects data from multiple sensor networks, processes it through a robust ETL pipeline, and presents real-time insights through an interactive dashboard. The system includes anomaly detection algorithms and predictive models for air quality forecasting.",
  },
  {
    id: 8,
    title: "Aeroinsights: Realtime Flight Dashboard",
    description: "ETL system for processing and visualizing real-time flight data",
    image: "/images/aeroinsight.jpg",
    category: "etl",
    tags: ["ETL", "Real-time Data", "Aviation"],
    year: "2023",
    link: "https://aeroinsights.streamlit.app/",
    extendedDescription:
      "Aeroinsights is a real-time flight tracking and analytics platform that processes over 10,000 flight updates per minute. The ETL pipeline handles data cleansing, enrichment, and transformation for multiple aviation data sources, providing insights into flight patterns, delays, and operational efficiency metrics.",
  },

  // Machine Learning Projects
  {
    id: 9,
    title: "Real Time Emotion Recognition",
    description: "ML model for real-time facial emotion recognition with high accuracy",
    image: "/images/emotion.jpg",
    category: "ml",
    tags: ["Python", "Computer Vision", "Deep Learning"],
    year: "2024",
    link: "https://github.com/manishpaneru/Emotion_detection_software",
    extendedDescription:
      "This emotion recognition system uses a custom convolutional neural network architecture to identify seven distinct emotional states in real-time video feeds. The model achieves 94% accuracy on benchmark datasets and includes transfer learning techniques to adapt to new environments with minimal retraining.",
  },
  {
    id: 10,
    title: "FlickFeasta: Smart Movie Recommendations",
    description: "Recommendation system for personalized movie suggestions based on user preferences",
    image: "/images/flickfeasta.jpg",
    category: "ml",
    tags: ["Python", "Recommendation Systems", "NLP"],
    year: "2023",
    link: "https://flickfeasta-wt68wxvmyglkugph5vxmth.streamlit.app/",
    extendedDescription:
      "FlickFeasta combines collaborative filtering with content-based recommendation techniques to deliver highly personalized movie suggestions. The system analyzes user viewing history, ratings, and content metadata to identify patterns and preferences, resulting in a 28% increase in user engagement during pilot testing.",
  },
  {
    id: 11,
    title: "AI Powered Road Computer Vision Analysis",
    description: "Computer vision system for road condition analysis and traffic monitoring",
    image: "/images/road.jpg",
    category: "ml",
    tags: ["Python", "Computer Vision", "Transportation"],
    year: "2023",
    link: "https://github.com/manishpaneru/Pothole-detection",
    extendedDescription:
      "This road analysis system uses computer vision to automatically detect and classify road conditions, including potholes, cracks, and surface degradation. The model processes dashcam footage to create detailed road condition maps that helped prioritize maintenance efforts and reduce repair costs by 32%.",
  },
  {
    id: 13,
    title: "Customer Segmentation Analysis for Arnova Store",
    description: "ML-based customer segmentation to identify high-value customer groups",
    image: "/images/segment.jpg",
    category: "ml",
    tags: ["Python", "Clustering", "Customer Analytics"],
    year: "2024",
    link: "https://github.com/manishpaneru/Customer_segmentation",
    extendedDescription:
      "This customer segmentation project for Arnova Store uses unsupervised learning techniques to identify distinct customer groups based on purchasing behavior, demographics, and engagement patterns. The analysis revealed five key customer segments that informed targeted marketing campaigns, resulting in a 45% increase in campaign ROI.",
  },
  {
    id: 39,
    title: "RoadWatch AI: Intelligent Road Monitoring",
    description:
      "Computer vision system that provides real-time audible alerts for road hazards, traffic conditions, and pedestrian safety",
    image: "/images/face.jpg",
    category: "ml",
    tags: ["Computer Vision", "Safety Systems", "Real-time Alerts", "Audio Processing"],
    year: "2024",
    link: "https://github.com/manishpaneru/Driving-Facial-Recognisition-program",
    extendedDescription:
      "RoadWatch AI is an advanced driver assistance system that uses computer vision to detect and classify road hazards in real-time. The system processes video feeds to identify obstacles, pedestrians, and dangerous traffic conditions, providing audible alerts to drivers. In field tests, RoadWatch AI demonstrated a 96% detection rate for critical hazards and reduced reaction time by 1.2 seconds on average.",
  },
  {
    id: 40,
    title: "E-commerce Product Categorization",
    description:
      "Automated product classification system that accurately categorizes e-commerce items based on images and descriptions",
    image: "/images/product.jpg",
    category: "ml",
    tags: ["Classification", "E-commerce", "Image Recognition", "NLP"],
    year: "2023",
    link: "https://github.com/manishpaneru/Pothole-detection",
    extendedDescription:
      "This e-commerce categorization system combines computer vision and natural language processing to automatically classify products into a hierarchical taxonomy. The model processes product images and descriptions to determine the most appropriate category, achieving 93% accuracy across 1,200+ product categories and reducing manual categorization effort by 85%.",
  },
  {
    id: 41,
    title: "Social Media Sentiment Analyzer",
    description:
      "NLP-based sentiment analysis tool that evaluates emotional tone in social media posts with 87% accuracy",
    image: "/images/senti.jpg",
    category: "ml",
    tags: ["NLP", "Sentiment Analysis", "Text Classification", "Social Media"],
    year: "2023",
    link: "https://github.com/manishpaneru/Social-media-sentiment-analysis-program-NLP-",
    extendedDescription:
      "This sentiment analysis tool uses advanced natural language processing techniques to evaluate the emotional tone of social media content across multiple platforms. The system can detect subtle emotional nuances, sarcasm, and context-specific sentiment with 87% accuracy. The tool includes real-time monitoring capabilities and trend analysis features that helped clients improve brand perception by identifying and addressing negative sentiment patterns.",
  },

  // Python EDA Projects
  {
    id: 14,
    title: "E-Commerce Revenue Analysis For Arnova Store",
    description: "Comprehensive EDA of e-commerce revenue streams and growth patterns",
    image: "/images/ecommerce-revenue-arnova.webp",
    category: "python",
    tags: ["Python", "Pandas", "Data Visualization"],
    year: "2023",
    link: "https://github.com/manishpaneru/E-Commerce-Analysis",
    extendedDescription:
      "This exploratory data analysis for Arnova Store examined three years of transaction data to identify revenue patterns, seasonal trends, and growth opportunities. The analysis revealed key insights about product category performance, customer retention metrics, and pricing optimization strategies that contributed to a 23% year-over-year revenue increase.",
  },
  {
    id: 15,
    title: "LinkedIn Job Market Analysis",
    description: "Analysis of job market trends and skill demands based on LinkedIn data",
    image: "/images/linkedin-job-market-analysis.webp",
    category: "python",
    tags: ["Python", "Job Market", "Data Scraping"],
    year: "2024",
    link: "https://github.com/manishpaneru/LinkedinJob",
    extendedDescription:
      "This job market analysis project examined over 50,000 LinkedIn job postings to identify emerging skill requirements, salary trends, and industry growth patterns. The analysis used natural language processing to extract key skills from job descriptions and visualized changing demand patterns across different sectors and geographic regions.",
  },
  {
    id: 16,
    title: "Global Population Dynamics",
    description: "Exploratory analysis of global population trends and demographic shifts",
    image: "/images/global-population-dynamics.webp",
    category: "python",
    tags: ["Python", "Demographics", "Geospatial Analysis"],
    year: "2023",
    link: "https://github.com/manishpaneru/World-Population",
    extendedDescription:
      "This global population analysis project examined demographic data from 195 countries over a 50-year period to identify long-term trends and future projections. The analysis included age distribution shifts, urbanization patterns, and migration flows, with interactive visualizations that highlight regional variations and potential economic impacts.",
  },
  {
    id: 17,
    title: "Global Economic Indicators",
    description: "Analysis of key economic indicators across different countries and regions",
    image: "/images/global-economic-indicators.png",
    category: "python",
    tags: ["Python", "Economics", "Time Series Analysis"],
    year: "2023",
    link: "https://github.com/manishpaneru/GlobalCountries",
    extendedDescription:
      "This economic indicators project analyzed data from the World Bank, IMF, and other sources to identify correlations between different economic metrics and their predictive power for future economic performance. The analysis included GDP growth, inflation rates, unemployment, and trade balances across 40 major economies, with time series modeling to identify leading indicators.",
  },
  {
    id: 18,
    title: "Urban Mobility Analytics",
    description: "Analysis of urban transportation patterns and mobility trends",
    image: "/images/urban-mobility-analytics.png",
    category: "python",
    tags: ["Python", "Urban Planning", "Geospatial Analysis"],
    year: "2024",
    link: "https://github.com/manishpaneru/BikesSharingData",
    extendedDescription:
      "This urban mobility project analyzed transportation data from five major cities to identify patterns in commuter behavior, public transit utilization, and traffic congestion. The analysis included temporal patterns, geographic hotspots, and modal preferences, providing insights for urban planning and transportation policy development.",
  },
  {
    id: 19,
    title: "Fortune 1000 Market Analysis",
    description: "Comprehensive analysis of Fortune 1000 companies' financial performance",
    image: "/images/fortune-1000-market-analysis.png",
    category: "python",
    tags: ["Python", "Financial Analysis", "Corporate Performance"],
    year: "2023",
    link: "https://github.com/manishpaneru/Fortune1000",
    extendedDescription:
      "This Fortune 1000 analysis examined financial performance metrics across industry sectors to identify trends, outliers, and success factors. The project included profitability analysis, growth patterns, and capital allocation strategies, with particular focus on how digital transformation initiatives correlated with financial outcomes.",
  },

  // More AI Agent Projects
  {
    id: 22,
    title: "CourtSim: AI-Powered Legal Proceedings",
    description: "AI system for simulating and analyzing legal proceedings and outcomes",
    image: "/images/courtsim-legal-proceedings.png",
    category: "ai",
    tags: ["Python", "Legal Tech", "NLP"],
    year: "2024",
    link: "https://github.com/manishpaneru/Courtroom-Simulation",
    extendedDescription:
      "CourtSim is a legal simulation platform that uses AI to model potential case outcomes based on historical precedents, jurisdiction-specific patterns, and case details. The system analyzes thousands of similar cases to predict likely rulings, settlement ranges, and procedural timelines, helping legal teams develop more effective strategies and set appropriate client expectations.",
  },
  {
    id: 23,
    title: "AIAnalystHelper: Smart Daily Analysis Assistant",
    description: "AI agent that automates routine data analysis tasks for analysts",
    image: "/images/aianalysthelper-smart-daily-analysis-assistant.png",
    category: "ai",
    tags: ["Python", "Automation", "Data Analysis"],
    year: "2023",
    link: "https://github.com/manishpaneru/AIAnalystHelper",
    extendedDescription:
      "AIAnalystHelper is an intelligent assistant that automates routine data preparation, cleaning, and preliminary analysis tasks. The system learns from analyst workflows to identify repetitive patterns and automate them, while also suggesting potential insights and anomalies that warrant further investigation. In financial services implementations, AIAnalystHelper saved analysts an average of 12 hours per week.",
  },
  {
    id: 24,
    title: "UniAdvisor: Smart University Selection",
    description: "AI advisor for university selection based on student preferences and goals",
    image: "/images/uniadvisor-smart-university-selection.png",
    category: "ai",
    tags: ["Python", "Education Tech", "Recommendation Systems"],
    year: "2023",
    link: "https://uniadvisor.streamlit.app/",
    extendedDescription:
      "UniAdvisor is an AI-powered education counseling system that helps students identify optimal university matches based on academic profile, career goals, financial considerations, and personal preferences. The system analyzes outcomes from thousands of similar students to provide personalized recommendations and application strategies, resulting in a 68% acceptance rate to top-choice institutions.",
  },
  {
    id: 25,
    title: "AILawyer: Intelligent Legal Assistant",
    description: "AI-powered legal assistant that helps with legal research and document analysis",
    image: "/images/AI-lawyer.png",
    category: "ai",
    tags: ["Python", "Legal Tech", "Document Analysis"],
    year: "2024",
    link: "https://panerusadvisor.streamlit.app/",
    extendedDescription:
      "AILawyer is a legal research and document analysis platform that helps attorneys identify relevant precedents, extract key information from legal documents, and draft standardized legal instruments. The system processes and understands complex legal language, identifies potential issues in contracts, and suggests appropriate clauses based on specific legal requirements.",
  },
  {
    id: 26,
    title: "Smart Cold Email Generator",
    description: "AI agent that generates personalized cold emails based on recipient profiles",
    image: "/images/coldemail.png",
    category: "ai",
    tags: ["Python", "NLP", "Email Marketing"],
    year: "2023",
    link: "https://paneruemailgenerator.streamlit.app/",
    extendedDescription:
      "This AI email generation system creates highly personalized outreach messages based on recipient profiles, company information, and relationship context. The system analyzes successful communication patterns and adapts messaging to match recipient preferences and communication styles, resulting in open rates 3.2x higher than industry averages and response rates 2.7x above baseline.",
  },

  // Case Studies Projects
  {
    id: 28,
    title: "Predictive Credit Risk Assessment",
    description: "Case study on implementing predictive models for credit risk evaluation",
    image: "/images/credit.jpg",
    category: "case",
    tags: ["Python", "Credit Risk", "Financial Analysis"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/unveiling-early-indicators-high-risk-borrowers-approach-manish-paneru-6woqf/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "This case study examines the implementation of machine learning models for credit risk assessment at a mid-sized financial institution. The project details the data preparation process, feature engineering approaches, model selection criteria, and implementation challenges. The resulting system improved default prediction accuracy by 27% while reducing false positives by 18%.",
  },
  {
    id: 29,
    title: "Optimizing Loan Approval Rating",
    description: "Enhancing loan approval processes using machine learning techniques",
    image: "/images/loan-approval.jpg",
    category: "case",
    tags: ["Machine Learning", "Finance", "Process Optimization"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/optimizing-loan-approval-ratings-through-machine-learning-paneru-bgybf",
    extendedDescription:
      "This case study explores how machine learning techniques can be applied to enhance loan approval processes. The analysis identified key factors that influence loan approval decisions and developed a machine learning model to predict loan approval probabilities. The resulting model improved approval efficiency by 20% while maintaining risk management standards.",
  },
  {
    id: 30,
    title: "Sydney Housing Market Dynamics",
    description: "Comprehensive analysis of Sydney's housing market trends and price factors",
    image: "/images/sydney-housing.png",
    category: "case",
    tags: ["Python", "Real Estate", "Market Analysis"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/decoding-sydneys-housing-affordability-data-driven-journey-paneru-ft1sf/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "This case study analyzes 15 years of Sydney housing market data to identify key price drivers, neighborhood-specific trends, and cyclical patterns. The analysis incorporates economic indicators, demographic shifts, policy changes, and infrastructure developments to create a comprehensive model of market dynamics that accurately predicted price movements within 4.3% over a subsequent 18-month period.",
  },
  {
    id: 31,
    title: "Nvestigating Nvidia: Chapter 1 - The Silicon Cinderella Story",
    description: "First part of a multi-chapter analysis of Nvidia's business and market position",
    image: "/images/nvidia1.jpg",
    category: "case",
    tags: ["Python", "Corporate Analysis", "Tech Industry"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-1-silicon-cinderella-story-paneru-bs2cf/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "This first chapter in the Nvidia analysis series examines the company's business model evolution, revenue composition, and competitive positioning. The study includes detailed segment analysis, growth drivers, and historical inflection points that shaped the company's trajectory from a graphics card manufacturer to an AI infrastructure leader.",
  },
  {
    id: 32,
    title: "Nvestigating Nvidia: Chapter 2 - Dominance by Design",
    description: "Second part focusing on Nvidia's technological innovations and R&D",
    image: "/images/nvidia1.jpg",
    category: "case",
    tags: ["Python", "Technology Analysis", "Innovation"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-2-dominance-design-manish-paneru-wxgwf/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "The second chapter in this Nvidia analysis focuses on the company's technological innovation pipeline, R&D efficiency, and patent portfolio. The study examines how Nvidia's CUDA ecosystem created sustainable competitive advantages and how strategic acquisitions complemented internal development to establish technology leadership in multiple domains.",
  },
  {
    id: 33,
    title: "Nvestigating Nvidia: Chapter 3 - Storm Clouds on the Horizon?",
    description: "Analysis of potential challenges and competitive threats to Nvidia's market position",
    image: "/images/nvidia1.jpg",
    category: "case",
    tags: ["Python", "Market Forecasting", "Strategic Analysis"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-3-storm-clouds-horizon-manish-paneru-5ymif/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "This third chapter in the Nvidia analysis series examines future growth vectors, potential market disruptions, and competitive threats. The study models various scenarios for AI adoption, data center growth, and emerging applications to project potential business outcomes and identify key indicators that would signal shifts in the company's growth trajectory.",
  },
  {
    id: 34,
    title: "Nvestigating Nvidia: Chapter 4 - Beyond the Hype: Evaluating the AI Revolution",
    description: "Critical assessment of Nvidia's role in the AI revolution and future outlook",
    image: "/images/nvidia1.jpg",
    category: "case",
    tags: ["Python", "AI Industry", "Market Analysis"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-4-beyond-hype-ai-manish-paneru-cbyaf/?trackingId=eCYo3Sx9RIy6AtFn%2BKh2cA%3D%3D",
    extendedDescription:
      "The final chapter in this comprehensive Nvidia analysis series evaluates the actual market impact of AI technologies versus the hype, with a particular focus on Nvidia's position at the center of this revolution. The study examines the sustainability of AI demand, potential technology limitations, regulatory challenges, and how these factors could influence Nvidia's long-term market position and valuation.",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
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

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Data Analysis Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A collection of my work across SQL, Python, ETL, Machine Learning, and AI, showcasing my approach to
              solving complex data challenges.
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 group" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-12">
          <TabsList className="w-full max-w-4xl mx-auto flex overflow-x-auto p-1 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex-shrink-0">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.slice(0, 6).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
