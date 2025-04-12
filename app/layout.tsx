import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk as SpaceGrotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/components/motion-provider"

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Manish Paneru | Data Analysis & AI Portfolio",
  description:
    "A cutting-edge portfolio showcasing Manish Paneru's advanced data analysis, AI solutions, and machine learning expertise",
  keywords: "data analysis, AI, machine learning, portfolio, data visualization, Manish Paneru",
  authors: [{ name: "Manish Paneru" }],
  creator: "Manish Paneru",
  icons: {
    icon: "/images/my-avatar.png",
    apple: "/images/my-avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Manish Paneru | Data Analysis & AI Portfolio",
    description: "A cutting-edge portfolio showcasing advanced data analysis and AI expertise",
    siteName: "Manish Paneru Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-gradient-to-b from-background to-background/80`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'