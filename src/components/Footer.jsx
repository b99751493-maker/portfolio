import { ArrowUp } from 'lucide-react'
import { profile } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-silver">
          © {new Date().getFullYear()} {profile.name} — Built with React, Tailwind, Framer Motion & Three.js
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 rounded-full border border-ivory/20 px-5 py-2 text-sm text-ivory transition-colors hover:border-lime hover:text-lime"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
