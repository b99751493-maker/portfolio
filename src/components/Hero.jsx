import { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, User, Mail } from 'lucide-react'
import { profile } from '../data/siteData'
import Magnetic from './Magnetic'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const Hero3D = lazy(() => import('./Hero3D'))

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function StaticOrb() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#9aa3a6_40%,#0f6b4f_80%)] shadow-glow md:h-96 md:w-96" />
    </div>
  )
}

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 600], [0, 120])
  const yVisual = useTransform(scrollY, [0, 600], [0, -80])
  const fade = useTransform(scrollY, [0, 500], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
  }
  const item = {
    hidden: reduced ? {} : { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-emerald/30 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-ember/15 blur-[140px]"
        aria-hidden="true"
      />

      {/* 3D visual */}
      <motion.div
        style={{ y: reduced ? 0 : yVisual, opacity: fade }}
        className="absolute inset-0 z-0 md:left-[28%]"
      >
        {reduced ? (
          <StaticOrb />
        ) : (
          <Suspense fallback={<StaticOrb />}>
            <Hero3D />
          </Suspense>
        )}
      </motion.div>

      <motion.div
        style={{ y: reduced ? 0 : yText, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.35em] text-lime">
            <span className="mr-3 inline-block h-2 w-2 animate-pulse rounded-full bg-lime align-middle" />
            Portfolio — {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.88] tracking-tighter"
          >
            <span className="text-chrome block">{profile.name}</span>
            <span className="block font-serif font-normal italic text-ember">{profile.profession}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-silver md:text-xl">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-3 rounded-full bg-lime px-7 py-4 font-medium text-midnight shadow-glow transition-transform"
              >
                Explore My Work
                <ArrowDownRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </button>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="glass flex items-center gap-3 rounded-full px-7 py-4 font-medium text-ivory transition-colors hover:border-lime/60"
              >
                <User size={18} /> About Me
              </button>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-3 rounded-full border border-ember/60 px-7 py-4 font-medium text-ember transition-colors hover:bg-ember hover:text-midnight"
              >
                <Mail size={18} /> Contact Me
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-silver md:flex"
        aria-hidden="true"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-lime to-transparent" />
      </div>
    </section>
  )
}
