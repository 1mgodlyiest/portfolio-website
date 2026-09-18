import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif as InstrumentSerif } from "next/font/google"
import "./globals.css"
import { MotionProvider } from "@/components/motion-provider"
import { site } from "@/lib/content"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = InstrumentSerif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Manish Paneru turns messy data into decisions — analysis, machine learning and AI agents for teams that need an answer, not a dashboard.",
  keywords: ["data analysis", "AI agents", "machine learning", "data visualization", "Manish Paneru"],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: "/images/my-avatar.png",
    apple: "/images/my-avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    title: `${site.name} — ${site.role}`,
    description: "Analysis, machine learning and AI agents. Selected work, writing and case studies.",
    siteName: `${site.name} Portfolio`,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="grain bg-background font-sans text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
