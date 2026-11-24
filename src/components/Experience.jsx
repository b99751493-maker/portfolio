import { Briefcase, Trophy, Award, GraduationCap } from 'lucide-react'
import { experienceBlocks } from '../data/siteData'
import { Reveal, SectionHeader } from './Reveal'

const icons = { experience: Briefcase, achievements: Trophy, certificates: Award, education: GraduationCap }

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHeader index="04" eyebrow="Journey" title="Experience &" outline="achievements" />

      <div className="grid gap-6 md:grid-cols-2">
        {experienceBlocks.map((b, i) => {
          const Icon = icons[b.key]
          return (
            <Reveal key={b.key} delay={(i % 2) * 0.1} y={36}>
              <div className="glass relative h-full rounded-[2rem] p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-midnight">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-3xl font-semibold">{b.title}</h3>
                </div>

                {b.items.length === 0 ? (
                  <p className="mt-8 rounded-2xl border border-dashed border-ember/50 p-5 font-mono text-sm text-ember">
                    {b.placeholder}
                  </p>
                ) : (
                  <ol className="relative mt-8 space-y-6 border-l border-ivory/15 pl-6">
                    {b.items.map((it, k) => (
                      <li key={k} className="relative">
                        <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-lime" />
                        <p className="font-display text-xl text-ivory">{it.title}</p>
                        {it.meta && <p className="font-mono text-xs uppercase tracking-widest text-ember">{it.meta}</p>}
                        {it.text && <p className="mt-1 text-sm text-silver">{it.text}</p>}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
