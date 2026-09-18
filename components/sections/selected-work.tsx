import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { projects, type Project } from "@/lib/content"

// Hand-picked spread: one per discipline. The featured project (20) leads the hero instead.
const picks = [21, 1, 7, 9, 30, 15]

export function SelectedWork() {
  const selected = picks.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p))

  return (
    <section className="shell mt-28 md:mt-40">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Thirty-odd projects.
            <br />
            Here are six.
          </>
        }
        intro="SQL models, exploratory studies, pipelines, computer vision and agents — grouped by what they had to solve rather than what they were built with."
        action={{ label: "All work", href: "/projects" }}
      />

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {selected.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
