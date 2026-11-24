import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { navItems } from '../data/siteData'
import useActiveSection from '../hooks/useActiveSection'
import Loader from '../components/Loader'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// Loader faqat birinchi kirishda ko'rinadi (loyihadan qaytganda qayta chiqmaydi)
let loaderShown = false

export default function Portfolio() {
  const [loading, setLoading] = useState(!loaderShown)
  const onDone = useCallback(() => {
    loaderShown = true
    setLoading(false)
  }, [])
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const active = useActiveSection(ids)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <div className="grain relative">
      <AnimatePresence>{loading && <Loader key="loader" onDone={onDone} />}</AnimatePresence>

      <CustomCursor />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-lime"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-midnight"
      >
        Skip to projects
      </a>

      <Navbar active={active} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  )
}
