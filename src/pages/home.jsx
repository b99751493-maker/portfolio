import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    path: '/veloura',
    name: 'VELOURA',
    category: 'Luxury Fashion Atelier',
    desc: 'Editorial hero, couture collection gallery, seasonal lookbook, heritage narrative & atelier footer.',
    palette: ['#0E0D0B', '#D4AF37', '#F6F1E9'],
    font: 'Playfair Display',
  },
  {
    id: '02',
    path: '/estora',
    name: 'ESTORA',
    category: 'Modern Online Store',
    desc: 'Interactive catalog, category filter, live cart drawer, wishlist likes, dark/light theme & card lift.',
    palette: ['#4F46E5', '#F3F4F6', '#F59E0B'],
    font: 'Poppins',
  },
  {
    id: '03',
    path: '/savora',
    name: 'SAVORA',
    category: 'Artisanal Gastronomy',
    desc: 'Animated course switcher, interactive table reservation booking & guest reviews carousel.',
    palette: ['#8B1E2D', '#F2B134', '#FFF6E5'],
    font: 'Cormorant Garamond',
  },
  {
    id: '04',
    path: '/lumora',
    name: 'LUMORA',
    category: 'Botanical Skincare',
    desc: 'Floating product visuals, animated pastel mesh gradient, active botanical ingredients & reviews.',
    palette: ['#F7D6E0', '#E8C9A0', '#6B3A5B'],
    font: 'DM Serif Display',
  },
  {
    id: '05',
    path: '/medora',
    name: 'MEDORA',
    category: 'Precision Medical Clinic',
    desc: 'Animated 0–5000 counter stats, specialist directory, clinical services & appointment modal.',
    palette: ['#0EA5A4', '#E0F2FE', '#0F172A'],
    font: 'Inter',
  },
  {
    id: '06',
    path: '/eduflow',
    name: 'EDUFLOW',
    category: 'Interactive E-Learning',
    desc: '3D tilt course cards, student dashboard progress bars, mentors & live interactive skill quiz.',
    palette: ['#7C3AED', '#22C55E', '#F5F3FF'],
    font: 'Plus Jakarta Sans',
  },
  {
    id: '07',
    path: '/eventra',
    name: 'EVENTRA',
    category: 'Neon Events & Tickets',
    desc: 'Live JS countdown timer, 3D interactive flip ticket pass, neon glow lines & keynote speakers.',
    palette: ['#FF2E93', '#2D5BFF', '#0A0A12'],
    font: 'Space Grotesk',
  },
  {
    id: '08',
    path: '/terraform',
    name: 'TERRAFORM',
    category: 'Architectural Studio',
    desc: 'Animated SVG blueprint stroke drawing, parallax spatial projects, design phases & inquiry.',
    palette: ['#2B2D2F', '#D9C7A5', '#2F4F3E'],
    font: 'Archivo',
  },
  {
    id: '09',
    path: '/pixelforge',
    name: 'PIXELFORGE',
    category: 'Cyber Game & Design Studio',
    desc: 'Glitch typography, interactive cursor trail, animated pixel wave grid, portfolio & studio news.',
    palette: ['#0D0D12', '#39FF14', '#8A2BE2'],
    font: 'Orbitron',
  },
  {
    id: '10',
    path: '/frame',
    name: 'FRAME',
    category: 'Editorial Photography',
    desc: 'Monochrome masonry gallery, category filtering, full-screen lightbox viewer & print order form.',
    palette: ['#111111', '#FAFAFA', '#E63946'],
    font: 'Bebas Neue',
  },
  {
    id: '11',
    path: '/autogrid',
    name: 'AUTOGRID',
    category: 'Performance Dealership',
    desc: 'Speed-line motion hero, vehicle filters, side-by-side spec comparison table & finance calculator.',
    palette: ['#0B1F3A', '#C0C6CF', '#D62828'],
    font: 'Rubik',
  },
  {
    id: '12',
    path: '/booknest',
    name: 'BOOKNEST',
    category: 'Independent Bookstore',
    desc: 'CSS 3D opening book covers, horizontal shelf scroll, curated genres & featured author profiles.',
    palette: ['#6F4E37', '#FAF3E0', '#6B705C'],
    font: 'Merriweather',
  },
  {
    id: '13',
    path: '/verdant',
    name: 'VERDANT',
    category: 'Botanical & Ecology Store',
    desc: 'Falling leaf particle motion, indoor plant catalog with soft hover lift, care guides & cart.',
    palette: ['#2E7D32', '#A5D6A7', '#5D4037'],
    font: 'Fraunces',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090D] text-white font-inter selection:bg-indigo-500 selection:text-white">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.22),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.16),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Unified Multi-Brand Design & Engineering System</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl leading-[1.08]"
          >
            13 Distinct Digital Worlds.{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              One Unified Architecture.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-5 text-neutral-400 max-w-2xl text-base sm:text-lg"
          >
            Explore 13 bespoke React + Tailwind CSS + Framer Motion experiences, each crafted with custom typography, tailored color palettes, and signature motion choreography.
          </motion.p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
            >
              <Link
                to={item.path}
                className="group block h-full rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-white/30 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ background: `linear-gradient(90deg, ${item.palette[0]}, ${item.palette[1]}, ${item.palette[2]})` }}
                />

                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-widest text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md">
                    PAGE {item.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {item.palette.map((hex, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      {item.category}
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white group-hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Font: {item.font}
                  </span>
                  <span className="text-neutral-300 font-medium group-hover:translate-x-1 transition-transform">
                    Launch →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
