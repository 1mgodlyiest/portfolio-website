import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/lib/content"

export function ExperiencePreview() {
  return (
    <section className="shell mt-28 md:mt-40">
      <SectionHeading
        eyebrow="Experience"
        title="Founder, analyst, tutor — in that order of noise."
        action={{ label: "Full background", href: "/experience" }}
      />

      <ul className="mt-14 border-t border-border">
        {experiences.map((job) => (
          <li
            key={job.company}
            className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12"
          >
            <div>
              <h3 className="font-display text-2xl tracking-tight">{job.company}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{job.position}</p>
              <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground/80">
                {job.period} — {job.location}
              </p>
            </div>
            <div>
              <p className="leading-relaxed text-muted-foreground">{job.description}</p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed">
                <span className="text-primary">→ </span>
                {job.achievements[0]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
