import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div' }) {
  const reduced = usePrefersReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

// So'zma-so'z animatsiyalangan sarlavha
export function SplitWords({ text, className = '', delay = 0 }) {
  const reduced = usePrefersReducedMotion()
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em]" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function SectionHeader({ index, eyebrow, title, outline }) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-lime">
          {index} — {eyebrow}
        </p>
      </Reveal>
      <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
        <SplitWords text={title} />
        {outline && (
          <>
            {' '}
            <SplitWords text={outline} className="font-serif italic font-normal text-ember" delay={0.15} />
          </>
        )}
      </h2>
    </header>
  )
}
