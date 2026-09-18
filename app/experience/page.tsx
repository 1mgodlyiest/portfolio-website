import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { site, experiences, skillGroups, certifications } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, skills and certifications — Manish Paneru, data analyst and AI specialist.",
}

export default function ExperiencePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHeader
          eyebrow="About"
          title={
            <>
              Four years of asking data <span className="italic text-primary">better questions.</span>
            </>
          }
          intro="I started in an agency assessing whether product ideas were worth building, ended up teaching analysts, and now run a small studio shipping AI tools. The through-line is the same: find the decision, then build the shortest path to it."
          meta={`${site.location} · Open to work`}
        />

        <section className="shell mt-24">
          <p className="eyebrow border-t border-border pt-6">Experience</p>

          <div className="mt-10">
            {experiences.map((job) => (
              <article
                key={job.company}
                className="grid grid-cols-1 gap-8 border-b border-border py-12 first:border-t md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16"
              >
                <div className="md:sticky md:top-32 md:self-start">
                  <h2 className="font-display text-3xl tracking-tight">{job.company}</h2>
                  <p className="mt-2 text-muted-foreground">{job.position}</p>
                  <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
                    {job.period}
                    <br />
                    {job.location}
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-pretty">{job.description}</p>

                  <ul className="mt-8 space-y-3">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                        <span className="mt-[0.4rem] h-px w-4 shrink-0 bg-primary" aria-hidden />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
                    {job.technologies.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-28 bg-secondary/60 py-20 md:py-24">
          <div className="shell">
            <p className="eyebrow">Skills</p>
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-x-16">
              {skillGroups.map((group) => (
                <div key={group.category} className="border-t border-border pt-6">
                  <h3 className="font-display text-2xl tracking-tight">{group.category}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shell mt-28">
          <p className="eyebrow border-t border-border pt-6">Certifications</p>
          <ul className="mt-10 grid border-t border-border md:grid-cols-2 md:gap-x-16">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                <div>
                  <p className="text-[0.9375rem]">{cert.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              Work with me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground"
            >
              Download the résumé (PDF)
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
