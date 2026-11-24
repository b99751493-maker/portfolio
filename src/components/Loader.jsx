import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1600
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative flex h-40 w-40 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border border-lime/60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
        />
        <motion.span
          className="absolute inset-4 rounded-full border border-ember/60"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          style={{ borderBottomColor: 'transparent' }}
        />
        <span className="font-mono text-3xl text-ivory tabular-nums">{String(count).padStart(2, '0')}</span>
      </div>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-silver">Loading experience</p>
      <div className="mt-4 h-px w-48 overflow-hidden bg-ivory/10">
        <div className="h-full bg-lime" style={{ width: `${count}%` }} />
      </div>
    </motion.div>
  )
}
