import { useEffect, useRef, useState } from 'react'
import { useFinePointer } from '../hooks/useReducedMotion'

export default function CustomCursor() {
  const fine = useFinePointer()
  const dot = useRef(null)
  const ring = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!fine) return
    document.body.classList.add('has-cursor')
    let x = 0,
      y = 0,
      rx = 0,
      ry = 0,
      raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      const t = e.target
      setHovering(!!(t && t.closest && t.closest('a, button, input, textarea, [data-cursor]')))
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [fine])

  if (!fine) return null

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-lime transition-[width,height,background-color] duration-200"
        style={{
          width: hovering ? 64 : 34,
          height: hovering ? 64 : 34,
          backgroundColor: hovering ? 'rgba(198,255,61,0.12)' : 'transparent',
        }}
      />
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-lime"
      />
    </>
  )
}
