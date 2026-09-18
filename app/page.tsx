import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { Practice } from "@/components/sections/practice"
import { Dashboards } from "@/components/sections/dashboards"
import { Writing } from "@/components/sections/writing"
import { ExperiencePreview } from "@/components/sections/experience-preview"
import { Voices } from "@/components/sections/voices"
import { ContactCta } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Practice />
        <Dashboards />
        <Writing />
        <ExperiencePreview />
        <Voices />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
