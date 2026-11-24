import { projects } from '../data/siteData'
import { SectionHeader } from './Reveal'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const filled = projects.filter((p) => p.path || p.url).length

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHeader index="02" eyebrow="Selected work" title="Thirteen" outline="projects" />

      <p className="-mt-8 mb-14 max-w-xl text-silver md:-mt-12">
        <span className="font-mono text-lime">{projects.length}</span> ta loyiha ·{' '}
        <span className="font-mono text-lime">{filled}</span> tasida havola qo'shilgan. Karta ustiga bosing —
        loyiha sahifasi ochiladi.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
