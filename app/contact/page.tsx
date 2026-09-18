import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Manish Paneru about data analysis, machine learning and AI agent work.",
}

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "manish.paneru1", href: site.socials.linkedin },
  { label: "GitHub", value: "manishpaneru", href: site.socials.github },
]

const goodFits = [
  "A dataset nobody has had time to interrogate properly",
  "A dashboard that gets built every month by hand",
  "An AI agent idea that needs to survive real users",
  "A team that wants to learn the analysis, not just receive it",
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Tell me what&apos;s <span className="italic text-primary">stuck.</span>
            </>
          }
          intro="Full-time roles, freelance analysis, dashboards and AI builds. If it isn't a fit I'll say so, and usually point you at what is."
          meta={`${site.location} · Replies within a couple of days`}
        />

        <div className="shell mt-16 grid gap-16 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-24">
          <div>
            <dl className="border-t border-border">
              {details.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                  <dt className="eyebrow">{item.label}</dt>
                  <dd>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-draw text-[0.9375rem]"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <p className="eyebrow">Usually a good fit</p>
              <ul className="mt-6 space-y-4">
                {goodFits.map((fit) => (
                  <li key={fit} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    <span className="mt-[0.6rem] h-px w-4 shrink-0 bg-primary" aria-hidden />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-12 font-display text-2xl leading-snug tracking-tight">
              Or skip the form —{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-primary">
                email me
              </a>
              .
            </p>
          </div>

          <div className="border-t border-border pt-10 md:pt-0 md:border-t-0">
            <ContactForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
