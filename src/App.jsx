import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import FloatingNav from './components/FloatingNav'
import Portfolio from './pages/Portfolio'

// Loyiha sahifalari kerak bo'lganda yuklanadi (bosh sahifa tez ochilishi uchun)
const Page01Veloura = lazy(() => import('./pages/Page01Veloura'))
const Page02Estora = lazy(() => import('./pages/Page02Estora'))
const Page03Savora = lazy(() => import('./pages/Page03Savora'))
const Page04Lumora = lazy(() => import('./pages/Page04Lumora'))
const Page05Medora = lazy(() => import('./pages/Page05Medora'))
const Page06Eduflow = lazy(() => import('./pages/Page06Eduflow'))
const Page07Eventra = lazy(() => import('./pages/Page07Eventra'))
const Page08Terraform = lazy(() => import('./pages/Page08Terraform'))
const Page09Pixelforge = lazy(() => import('./pages/Page09Pixelforge'))
const Page10Frame = lazy(() => import('./pages/Page10Frame'))
const Page11Autogrid = lazy(() => import('./pages/Page11Autogrid'))
const Page12Booknest = lazy(() => import('./pages/Page12Booknest'))
const Page13Verdant = lazy(() => import('./pages/Page13Verdant'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // masalan /#projects — bo'lim render bo'lgach unga o'tadi
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    // html da scroll-behavior: smooth bor, shuning uchun 'instant'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-neutral-950" />}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/veloura" element={<Page01Veloura />} />
          <Route path="/estora" element={<Page02Estora />} />
          <Route path="/savora" element={<Page03Savora />} />
          <Route path="/lumora" element={<Page04Lumora />} />
          <Route path="/medora" element={<Page05Medora />} />
          <Route path="/eduflow" element={<Page06Eduflow />} />
          <Route path="/eventra" element={<Page07Eventra />} />
          <Route path="/terraform" element={<Page08Terraform />} />
          <Route path="/pixelforge" element={<Page09Pixelforge />} />
          <Route path="/frame" element={<Page10Frame />} />
          <Route path="/autogrid" element={<Page11Autogrid />} />
          <Route path="/booknest" element={<Page12Booknest />} />
          <Route path="/verdant" element={<Page13Verdant />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </Suspense>
      <FloatingNav />
    </BrowserRouter>
  )
}
