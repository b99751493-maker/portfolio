import { memo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

// Har bir loyiha raqamiga mos noyob generativ "preview" (rasm bo'lmaganda)
function GenerativePreview({ n, label }) {
  const hue = [88, 24, 160, 70, 40, 140, 100, 15, 170, 60, 30, 120, 80][(n - 1) % 13]
  const angle = (n * 47) % 360
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `conic-gradient(from ${angle}deg at 30% 70%, hsl(${hue} 90% 55% / .35), #07090a 35%, hsl(${(hue + 120) % 360} 60% 25% / .6) 70%, #07090a)`,
      }}
    >
      <div className="grid-bg absolute inset-0 opacity-70" />
      <span className="absolute -bottom-6 -right-2 font-display text-[9rem] font-bold leading-none text-ivory/[0.07]">
        {String(n).padStart(2, '0')}
      </span>
      <span className="absolute left-4 top-4 rounded-full bg-midnight/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-silver backdrop-blur">
        {label}
      </span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const p = project
  const ph = p.placeholders
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [imgFailed, setImgFailed] = useState(false)

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const isInternal = Boolean(p.path)
  const hasUrl = isInternal || Boolean(p.url)
  const title = p.name || ph.name
  const description = p.description || ph.description
  const category = p.category || ph.category
  const techList = p.tech.length ? p.tech : [ph.tech]
  const showImage = p.image && !imgFailed

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduced ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: 1100 }}
      className="group glass relative flex flex-col overflow-hidden rounded-[1.75rem] transition-colors duration-500 hover:border-lime/50"
      data-cursor
    >
      {/* Butun karta bosiladigan: stretched link */}
      {isInternal ? (
        <Link
          to={p.path}
          className="absolute inset-0 z-20"
          aria-label={`Open project ${p.number}: ${title}`}
        />
      ) : (
        hasUrl && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
            aria-label={`Open project ${p.number}: ${title} (opens in a new tab)`}
          />
        )
      )}

      <div className="relative aspect-[16/10] overflow-hidden">
        {showImage ? (
          <img
            src={p.image}
            alt={`Preview of ${title}`}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
            <GenerativePreview n={p.id} label={p.image ? 'Image failed' : ph.image} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent opacity-80" />
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-midnight/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-lime backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-sm text-ember">/{p.number}</span>
          <motion.span
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              hasUrl
                ? 'border-lime/50 text-lime group-hover:rotate-45 group-hover:bg-lime group-hover:text-midnight'
                : 'border-ivory/15 text-silver'
            }`}
            aria-hidden="true"
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ivory">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-silver">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {techList.map((t) => (
            <li
              key={t}
              className="rounded-full border border-ivory/10 px-3 py-1 font-mono text-[11px] text-chrome"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          {hasUrl ? (
            <span className="rounded-full bg-lime px-4 py-2 text-sm font-medium text-midnight">{isInternal ? 'View Project →' : 'Live Website ↗'}</span>
          ) : (
            <span
              className="rounded-full border border-dashed border-ember/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ember"
              title="Add this project's URL in src/data/siteData.js"
            >
              {ph.url}
            </span>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2 text-sm text-ivory transition-colors hover:border-lime hover:text-lime"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default memo(ProjectCard)
