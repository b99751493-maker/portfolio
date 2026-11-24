import { motion } from 'framer-motion'
import { Code2, Palette, Braces, Atom, Wind, PenTool, Smartphone, Sparkles, Box } from 'lucide-react'
import { skills } from '../data/siteData'
import { Reveal, SectionHeader } from './Reveal'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const icons = {
  HTML5: Code2,
  CSS3: Palette,
  JavaScript: Braces,
  React: Atom,
  'Tailwind CSS': Wind,
  'UI/UX Design': PenTool,
  'Responsive Web Design': Smartphone,
  Animation: Sparkles,
  '3D Web Development': Box,
}

export default function Skills() {
  const reduced = usePrefersReducedMotion()
  const marquee = [...skills, ...skills]

  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="03" eyebrow="Toolkit" title="Skills &" outline="technologies" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = icons[s.name] || Code2
            return (
              <Reveal key={s.name} delay={(i % 3) * 0.08} y={30}>
                <motion.div
                  whileHover={reduced ? undefined : { y: -8, rotateX: 6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  style={{ transformPerspective: 800 }}
                  className="glass group relative h-full overflow-hidden rounded-3xl p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime/0 blur-3xl transition-colors duration-500 group-hover:bg-lime/25"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <Icon size={28} className="text-lime" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-silver">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ember">{s.note}</p>
                  {/* Dekorativ chiziq — foiz emas, faqat vizual indikator */}
                  <div className="mt-6 h-px w-full overflow-hidden bg-ivory/10">
                    <div className="h-full w-0 bg-lime transition-all duration-700 group-hover:w-full" />
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-y border-ivory/10 py-6" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((s, i) => (
            <span key={i} className="mx-8 flex items-center gap-8 whitespace-nowrap font-display text-5xl font-semibold md:text-7xl">
              <span className={i % 2 ? 'text-chrome' : 'outline-text'}>{s.name}</span>
              <span className="text-lime">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
