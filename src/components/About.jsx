import { motion } from 'framer-motion'
import { MapPin, Briefcase, Cake, Sparkles, Target, UserRound } from 'lucide-react'
import { profile } from '../data/siteData'
import { Reveal, SectionHeader } from './Reveal'

const cards = [
  { icon: UserRound, label: 'Full name', value: profile.name },
  { icon: Cake, label: 'Age', value: profile.age },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Briefcase, label: 'Profession', value: profile.profession },
  { icon: Sparkles, label: 'Experience', value: profile.experience },
  { icon: Target, label: 'Skills', value: profile.skillsSummary },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHeader index="01" eyebrow="About" title="Behind the" outline="screen" />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Photo */}
        <Reveal>
          <motion.figure
            whileHover={{ rotateY: -6, rotateX: 4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            style={{ transformPerspective: 1000 }}
            className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem]"
          >
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,rgba(198,255,61,0.18),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(15,107,79,0.45),transparent_55%)] text-center">
                <UserRound size={64} className="text-silver" strokeWidth={1} />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-silver">[YOUR PHOTO]</p>
              </div>
            )}
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-midnight/70 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-silver backdrop-blur">
              <span>{profile.name}</span>
              <span className="text-lime">● online</span>
            </figcaption>
          </motion.figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-serif text-3xl leading-snug text-ivory md:text-5xl">{profile.bio}</p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07} y={30}>
                <div className="glass group h-full rounded-3xl p-6 transition-colors duration-300 hover:border-lime/50">
                  <c.icon size={20} className="text-lime transition-transform duration-300 group-hover:scale-125" />
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-silver">{c.label}</p>
                  <p className="mt-1 break-words font-display text-xl text-ivory">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-4 rounded-3xl border border-ember/40 bg-ember/5 p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ember">
                <Target size={14} /> My goals
              </p>
              <p className="mt-2 font-display text-xl text-ivory">{profile.goals}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
