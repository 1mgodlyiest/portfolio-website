// Single source of truth for site content.
// Previously duplicated between components/sections/* and app/*/page.tsx, which drifted.

export const site = {
  name: "Manish Paneru",
  role: "Data Analyst & AI Specialist",
  location: "Surry Hills, NSW — Australia",
  email: "manish.paneru2432@gmail.com",
  resume: "https://drive.google.com/file/d/1aBq5STAjGLzvMMwQIR4XN6UPtaueDegq/view",
  socials: {
    github: "https://github.com/manishpaneru",
    linkedin: "https://linkedin.com/in/manish.paneru1",
  },
}

export type Project = {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory
  tags: string[]
  year: string
  link: string
  extendedDescription: string
}

export type ProjectCategory = "ai" | "sql" | "etl" | "ml" | "python" | "case"

export const categories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "ai", label: "AI Agents" },
  { id: "ml", label: "Machine Learning" },
  { id: "python", label: "Python EDA" },
  { id: "sql", label: "SQL" },
  { id: "etl", label: "ETL" },
  { id: "case", label: "Case Studies" },
]

export const projects: Project[] = [
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
    description: "AI-powered legal assistant for document analysis and case research",
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
    description: "Computer vision system with real-time audible alerts for road hazards and pedestrian safety",
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
    description: "Automated product classification from images and descriptions",
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
    description: "NLP sentiment analysis that evaluates emotional tone in social posts with 87% accuracy",
    image: "/images/senti.jpg",
    category: "ml",
    tags: ["NLP", "Sentiment Analysis", "Text Classification", "Social Media"],
    year: "2023",
    link: "https://github.com/manishpaneru/Social-media-sentiment-analysis-program-NLP-",
    extendedDescription:
      "This sentiment analysis tool uses advanced natural language processing techniques to evaluate the emotional tone of social media content across multiple platforms. The system can detect subtle emotional nuances, sarcasm, and context-specific sentiment with 87% accuracy. The tool includes real-time monitoring capabilities and trend analysis features that helped clients improve brand perception by identifying and addressing negative sentiment patterns.",
  },
  {
    id: 14,
    title: "E-Commerce Revenue Analysis for Arnova Store",
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
  {
    id: 28,
    title: "Predictive Credit Risk Assessment",
    description: "Case study on implementing predictive models for credit risk evaluation",
    image: "/images/credit.jpg",
    category: "case",
    tags: ["Machine Learning", "Credit Risk", "Financial Analysis"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/predictive-credit-risk-assessment-leveraging-machine-learning-paneru-1oo0f",
    extendedDescription:
      "This case study examines the implementation of machine learning models for credit risk assessment at a mid-sized financial institution. The project details the data preparation process, feature engineering approaches, model selection criteria, and implementation challenges. The resulting system improved default prediction accuracy by 27% while reducing false positives by 18%.",
  },
  {
    id: 29,
    title: "Optimizing Loan Approval Rating",
    description: "Enhancing loan approval processes using machine learning techniques",
    image: "/images/loan.jpg",
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
    link: "https://www.linkedin.com/pulse/decoding-sydneys-housing-affordability-data-driven-journey-paneru-ft1sf/",
    extendedDescription:
      "This case study analyzes 15 years of Sydney housing market data to identify key price drivers, neighborhood-specific trends, and cyclical patterns. The analysis incorporates economic indicators, demographic shifts, policy changes, and infrastructure developments to create a comprehensive model of market dynamics that accurately predicted price movements within 4.3% over a subsequent 18-month period.",
  },
  {
    id: 31,
    title: "Nvestigating Nvidia — Chapter 1: The Silicon Cinderella Story",
    description: "First part of a multi-chapter analysis of Nvidia's business and market position",
    image: "/images/nvidia1.jpg",
    category: "case",
    tags: ["Python", "Corporate Analysis", "Tech Industry"],
    year: "2023",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-1-silicon-cinderella-story-paneru-bs2cf/",
    extendedDescription:
      "This first chapter in the Nvidia analysis series examines the company's business model evolution, revenue composition, and competitive positioning. The study includes detailed segment analysis, growth drivers, and historical inflection points that shaped the company's trajectory from a graphics card manufacturer to an AI infrastructure leader.",
  },
  {
    id: 32,
    title: "Nvestigating Nvidia — Chapter 2: Dominance by Design",
    description: "Second part focusing on Nvidia's technological innovations and R&D",
    image: "/images/nvidia2.jpg",
    category: "case",
    tags: ["Python", "Technology Analysis", "Innovation"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-2-dominance-design-manish-paneru-wxgwf/",
    extendedDescription:
      "The second chapter in this Nvidia analysis focuses on the company's technological innovation pipeline, R&D efficiency, and patent portfolio. The study examines how Nvidia's CUDA ecosystem created sustainable competitive advantages and how strategic acquisitions complemented internal development to establish technology leadership in multiple domains.",
  },
  {
    id: 33,
    title: "Nvestigating Nvidia — Chapter 3: Storm Clouds on the Horizon?",
    description: "Analysis of potential challenges and competitive threats to Nvidia's market position",
    image: "/images/nvidia3.jpg",
    category: "case",
    tags: ["Python", "Market Forecasting", "Strategic Analysis"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-3-storm-clouds-horizon-manish-paneru-5ymif/",
    extendedDescription:
      "This third chapter in the Nvidia analysis series examines future growth vectors, potential market disruptions, and competitive threats. The study models various scenarios for AI adoption, data center growth, and emerging applications to project potential business outcomes and identify key indicators that would signal shifts in the company's growth trajectory.",
  },
  {
    id: 34,
    title: "Nvestigating Nvidia — Chapter 4: Beyond the Hype",
    description: "Critical assessment of Nvidia's role in the AI revolution and future outlook",
    image: "/images/nvidia.jpg",
    category: "case",
    tags: ["Python", "AI Industry", "Market Analysis"],
    year: "2024",
    link: "https://www.linkedin.com/pulse/nvestigating-nvidia-chapter-4-beyond-hype-ai-manish-paneru-cbyaf/",
    extendedDescription:
      "The final chapter in this comprehensive Nvidia analysis series evaluates the actual market impact of AI technologies versus the hype, with a particular focus on Nvidia's position at the center of this revolution. The study examines the sustainability of AI demand, potential technology limitations, regulatory challenges, and how these factors could influence Nvidia's long-term market position and valuation.",
  },
]

export const featuredProjectId = 20

export const experiences = [
  {
    company: "Arnova Cognition",
    position: "Founder & AI Solutions Architect",
    period: "Apr 2024 — Present",
    location: "Kathmandu, Nepal (Remote)",
    description:
      "Leading AI solutions development and implementation for businesses, focusing on automation, workflow optimization, and data-driven insights.",
    achievements: [
      "Led the development and deployment of 3 AI-driven tools — QuickBit Learning, CareerCraft and DocEase — which collectively served over 6,000 users in six months",
      "Delivered tailored AI solutions to 6 businesses, improving workflows and automating processes to save clients significant time and costs",
      "Managed nearly 98,000 API calls across products, ensuring seamless operation and high user engagement",
      "Designed and implemented microlearning modules for QuickBit Learning, improving learning outcomes by 30%",
      "Analyzed product usage data to drive iterative improvements, increasing user satisfaction scores by 25%",
      "Spearheaded the integration of LangChain for CareerCraft, enabling personalized career advice and resume matching with 85% accuracy",
      "Automated backend document analysis in DocEase, reducing processing times by 40% with SQLite and ChromaDB",
      "Collaborated with a cross-functional team to refine product strategies, resulting in 15% growth in user retention",
      "Developed documentation and tutorials for onboarding, reducing support inquiries by 20%",
    ],
    technologies: ["AI Solutions", "LangChain", "Python", "SQLite", "ChromaDB", "API Integration", "Data Analysis"],
  },
  {
    company: "Data Profession Academy",
    position: "Data Analyst & Assistant Tutor",
    period: "Jan 2024 — Present",
    location: "Perth, Australia (Remote)",
    description:
      "Providing data analysis expertise and educational support for students learning data science and analytics tools and techniques.",
    achievements: [
      "Delivered 150+ hours of live tutorials and mentorship, guiding 100+ students through Python, SQL, Tableau and Power BI",
      "Designed and executed 20+ hands-on projects replicating real-world business scenarios",
      "Analyzed internal operational data to optimize academy processes, lifting student retention by 15%",
      "Conducted in-depth analysis of customer feedback and course performance, boosting satisfaction scores by 20%",
      "Automated weekly reporting, reducing manual workload by 40% and improving data accuracy",
      "Spearheaded curriculum enhancements by integrating emerging industry trends and tools",
      "Presented findings through interactive dashboards, driving decisions on course offerings and marketing",
      "Provided data-driven solutions for outreach and target markets, contributing to 30% year-over-year enrollment growth",
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "Data Analysis", "Teaching", "Curriculum Development"],
  },
  {
    company: "An4Soft",
    position: "Data Analyst",
    period: "Mar 2020 — Mar 2024",
    location: "Kathmandu, Nepal (On-site)",
    description:
      "Drove data-driven decision-making and strategic analysis across various projects, supporting product development and business growth.",
    achievements: [
      "Assessed product viability for client pitches through data analysis and market research",
      "Conducted internal productivity analyses to optimize team performance and resource allocation",
      "Identified product-market fit through data-driven insights and competitive analysis",
      "Researched trends and topics to support the blog team with data-backed content strategies",
      "Developed dashboards and presentations for client meetings, communicating complex insights clearly",
      "Analyzed datasets to evaluate new ideas, prioritizing initiatives with the highest potential ROI",
      "Managed databases to ensure data integrity and accessibility across the organization",
      "Collaborated with developers, designers, content writers and executive leadership",
    ],
    technologies: ["Data Analysis", "SQL", "Python", "Dashboarding", "Market Research", "Database Management"],
  },
]

export const skillGroups = [
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
      "Large Language Models",
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
    category: "Tools & Ways of Working",
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

export const certifications = [
  { name: "Google Data Analytics Certification", issuer: "Google / Coursera", date: "2023" },
  { name: "Google Advanced Data Analytics Certification", issuer: "Google / Coursera", date: "2023" },
  { name: "Machine Learning Specialization", issuer: "Stanford University & DeepLearning.AI", date: "2022" },
  { name: "Introduction to Data Science", issuer: "CS50, Harvard University", date: "2022" },
  { name: "Machine Learning and AI", issuer: "CS50, Harvard University", date: "2022" },
  { name: "Advanced Data Science with Python", issuer: "CS50, Harvard University", date: "2021" },
  { name: "SQL Advanced Certification", issuer: "HackerRank", date: "2021" },
  { name: "Various Virtual Internships", issuer: "Forage", date: "2020—2022" },
]

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Manish at Data Profession Academy, where he played a dual role as an internal data analyst and assistant tutor. His contributions were invaluable, not just to the company but to me personally. He demonstrated incredible dedication to our students and brought his analytical expertise to help us optimize our internal operations. His insights into our performance metrics allowed us to fine-tune marketing campaigns, advertisement budgets, and strategies — delivering measurable results for the academy.",
    author: "Sujal Dhungana",
    title: "Data Analyst, Senior Data Engineer & Analytics Instructor",
    relation: "Senior",
  },
  {
    quote:
      "I've had the privilege of working closely with Manish, and I can confidently say that he is an outstanding professional in data analytics, machine learning, and market research. With over three years of hands-on experience in the field, Manish has consistently demonstrated expertise and a passion for leveraging data to drive meaningful business outcomes — proving that talent and skill far outweigh formal academic credentials.",
    author: "Santosh Kumar Shahi",
    title: "Certified Data Analyst, Product Data Analyst & BI",
    relation: "Client",
  },
  {
    quote:
      "Manish delivered exceptional results for our company's data visualization project. His ability to transform complex datasets into intuitive dashboards revolutionized how our leadership team makes decisions. His technical skills combined with strong business acumen made him an invaluable asset to our team. What impressed me most was his proactive approach to identifying improvement opportunities beyond the original project scope.",
    author: "Michael Anderson",
    title: "Head of Analytics, TechSolutions Inc.",
    relation: "Client",
  },
]

export const dashboards = [
  {
    title: "Executive HR Insights",
    blurb:
      "Streamlit dashboard for HR executives to analyze employee data and workforce trends — turnover rates, department performance and recruitment efficiency.",
    tags: ["Streamlit", "HR Analytics", "Data Visualization"],
    link: "https://hrvisualization.streamlit.app/",
    stat: "38%",
    statLabel: "of turnover traced to non-competitive pay",
  },
  {
    title: "LaLiga Dashboard Analysis",
    blurb:
      "Interactive visualization of LaLiga football statistics — player stats, team rankings and match outcomes compared side by side across seasons.",
    tags: ["Streamlit", "Sports Analytics", "Interactive Dashboard"],
    link: "https://laliga-viz.streamlit.app/",
    stat: "20",
    statLabel: "clubs tracked across a full season",
  },
  {
    title: "Global Metropolitan Economics",
    blurb:
      "Economic indicators across major global metropolitan areas, with interactive maps, comparative charts and trend analysis of growth patterns.",
    tags: ["Streamlit", "Economic Analysis", "Geospatial"],
    link: "https://metropolitan-gdp-analysis.streamlit.app/",
    stat: "$145T",
    statLabel: "US expenditure, nearly 2× China's",
  },
  {
    title: "US Census Economics",
    blurb:
      "US census data visualized with economic insights and demographic trends, broken down by state, county and demographic group.",
    tags: ["Streamlit", "Census Data", "Economic Indicators"],
    link: "https://uscensuseconomic.streamlit.app/",
    stat: "50",
    statLabel: "states, county-level detail",
  },
  {
    title: "Credit Card Fraud Detection",
    blurb:
      "Financial modeling app visualizing fraud patterns and detection performance — transaction anomalies, algorithm comparison and threshold tuning.",
    tags: ["Streamlit", "Fraud Detection", "Machine Learning"],
    link: "https://frauddetectionmodeling.streamlit.app/",
    stat: "93%",
    statLabel: "F1 score, ensemble model",
  },
]

export const posts = [
  {
    slug: "the-agentic-turn",
    title: "The Agentic Turn",
    subtitle: "From chatbots to digital collaborators",
    excerpt: "An exploration of the shift from reactive conversational AI to autonomous, multi-agent frameworks.",
    date: "2026-03-24",
  },
  {
    slug: "ai-human-collaboration",
    title: "Beyond Replacement",
    subtitle: "The era of amplification",
    excerpt: "Why the future of work is not AI versus human, but human-led, AI-executed synergy.",
    date: "2026-03-24",
  },
  {
    slug: "reasoning-vs-memorization",
    title: "Reasoning vs. Memorization",
    subtitle: "The bottleneck of modern AI",
    excerpt: "Why linguistic fluency in LLMs is not the same as logical deduction, and why it matters.",
    date: "2026-03-24",
  },
]

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
