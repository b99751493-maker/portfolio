import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const PAGES = [
  { id: 1, path: '/veloura', name: 'VELOURA', tag: 'Haute Couture', color: '#D4AF37' },
  { id: 2, path: '/estora', name: 'ESTORA', tag: 'E-Commerce', color: '#4F46E5' },
  { id: 3, path: '/savora', name: 'SAVORA', tag: 'Fine Dining', color: '#8B1E2D' },
  { id: 4, path: '/lumora', name: 'LUMORA', tag: 'Botanical Beauty', color: '#6B3A5B' },
  { id: 5, path: '/medora', name: 'MEDORA', tag: 'Modern Clinic', color: '#0EA5A4' },
  { id: 6, path: '/eduflow', name: 'EDUFLOW', tag: 'E-Learning', color: '#7C3AED' },
  { id: 7, path: '/eventra', name: 'EVENTRA', tag: 'Live Events', color: '#FF2E93' },
  { id: 8, path: '/terraform', name: 'TERRAFORM', tag: 'Architecture', color: '#2F4F3E' },
  { id: 9, path: '/pixelforge', name: 'PIXELFORGE', tag: 'Game Studio', color: '#39FF14' },
  { id: 10, path: '/frame', name: 'FRAME', tag: 'Photography', color: '#E63946' },
  { id: 11, path: '/autogrid', name: 'AUTOGRID', tag: 'Automotive', color: '#D62828' },
  { id: 12, path: '/booknest', name: 'BOOKNEST', tag: 'Bookstore', color: '#6F4E37' },
  { id: 13, path: '/verdant', name: 'VERDANT', tag: 'Plants & Eco', color: '#2E7D32' },
];

export default function FloatingNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === '/') return null;

  const idx = PAGES.findIndex(p => p.path === location.pathname);
  const prev = idx > 0 ? PAGES[idx - 1] : PAGES[PAGES.length - 1];
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : PAGES[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 font-inter">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="w-64 max-h-80 overflow-y-auto rounded-2xl bg-neutral-900/95 text-white border border-white/15 shadow-2xl backdrop-blur-xl p-2"
          >
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
              <span>Switch Experience</span>
              <span>{idx + 1}/13</span>
            </div>
            {PAGES.map(p => (
              <Link
                key={p.id}
                to={p.path}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition ${
                  location.pathname === p.path
                    ? 'bg-white/15 font-semibold text-white'
                    : 'text-neutral-300 hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.id}. {p.name}
                </span>
                <span className="text-[11px] text-neutral-400">{p.tag}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-1.5 rounded-full bg-neutral-900/90 text-white border border-white/15 px-2.5 py-1.5 shadow-2xl backdrop-blur-xl">
        <Link
          to="/#projects"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-neutral-950 text-xs font-bold hover:bg-neutral-200 transition"
        >
          <Grid className="w-3.5 h-3.5" />
          Portfolio
        </Link>
        <Link
          to={prev.path}
          title={`Previous: ${prev.name}`}
          className="p-1.5 rounded-full hover:bg-white/15 transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full hover:bg-white/15 text-xs font-medium transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{idx >= 0 ? `${idx + 1}/13` : 'Menu'}</span>
        </button>
        <Link
          to={next.path}
          title={`Next: ${next.name}`}
          className="p-1.5 rounded-full hover:bg-white/15 transition"
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
