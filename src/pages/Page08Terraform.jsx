import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, ArrowUpRight, Send } from 'lucide-react';

const PROJECTS = [
  { title: 'Monolith Cliff House', loc: 'Big Sur, California', year: '2026', area: '4,800 sq ft' },
  { title: 'Sylvan Timber Pavilion', loc: 'Kyoto, Japan', year: '2025', area: '3,200 sq ft' },
  { title: 'Basalt Cultural Center', loc: 'Reykjavík, Iceland', year: '2026', area: '18,500 sq ft' },
];

const PROCESS = [
  { step: '01', name: 'Topographical Study', desc: 'Micro-climate mapping, solar orientation, and raw geological site integration.' },
  { step: '02', name: 'Material Honesty', desc: 'Board-formed concrete, rammed earth, and sustainably harvested cedar.' },
  { step: '03', name: 'Structural Precision', desc: 'Zero-waste prefabrication paired with master artisan on-site assembly.' },
];

export default function Page08Terraform() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#2B2D2F] text-[#D9C7A5] font-sourceserif">
      {/* Header */}
      <header className="border-b border-[#D9C7A5]/15 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-archivo font-bold tracking-[0.25em] text-xl">TERRAFORM</span>
          <span className="font-archivo text-xs uppercase tracking-widest text-[#D9C7A5]/70">
            Architecture & Spatial Ecology
          </span>
        </div>
      </header>

      {/* Hero with SVG Stroke Draw */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-archivo text-xs uppercase tracking-[0.3em] text-[#D9C7A5]/70">
            Brutalist Warmth
          </span>
          <h1 className="font-archivo text-5xl sm:text-7xl font-bold mt-3 leading-[1.02] text-white">
            Structures Rooted in Earth.
          </h1>
          <p className="mt-5 text-[#D9C7A5]/85 text-lg max-w-lg leading-relaxed">
            We design monolithic residences and cultural landmarks where raw concrete meets living forest canopies.
          </p>
        </div>

        {/* Animated Architectural Blueprint SVG */}
        <div className="rounded-3xl bg-[#2F4F3E] p-8 border border-[#D9C7A5]/20 shadow-2xl">
          <svg viewBox="0 0 320 200" className="w-full h-56 stroke-[#D9C7A5]" fill="none" strokeWidth="2">
            <motion.rect
              x="30" y="70" width="160" height="100"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
            <motion.polygon
              points="20,70 110,20 200,70"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
            />
            <motion.rect
              x="190" y="95" width="100" height="75"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
            />
            <motion.line
              x1="10" y1="170" x2="310" y2="170"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </svg>
          <p className="font-archivo text-xs uppercase tracking-widest text-[#D9C7A5]/75 mt-2">
            ELEVATION STUDY 04 — CANTILEVER PAVILION
          </p>
        </div>
      </section>

      {/* Projects with Parallax Visual Blocks */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-archivo text-3xl font-bold text-white mb-10">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="rounded-2xl bg-[#222426] border border-[#D9C7A5]/15 overflow-hidden">
              <div className="h-56 bg-[#2F4F3E] relative overflow-hidden p-6 flex items-end">
                <motion.div
                  style={{ y: parallaxY }}
                  className="absolute inset-4 rounded-xl border border-[#D9C7A5]/30 bg-gradient-to-tr from-[#2B2D2F]/80 to-transparent"
                />
                <span className="relative z-10 font-archivo text-xs uppercase tracking-widest bg-[#2B2D2F] px-3 py-1 rounded-md">
                  {p.year} • {p.area}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-archivo text-xl font-bold text-white">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#D9C7A5]" />
                </div>
                <p className="text-sm text-[#D9C7A5]/70 mt-1">{p.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#2F4F3E] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-archivo text-3xl font-bold text-white mb-10 flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#D9C7A5]" /> Architectural Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS.map(pr => (
              <div key={pr.step} className="p-7 rounded-2xl bg-[#2B2D2F]/80 border border-[#D9C7A5]/20">
                <span className="font-archivo text-2xl font-bold text-[#D9C7A5]">{pr.step}</span>
                <h3 className="font-archivo text-xl font-bold text-white mt-3">{pr.name}</h3>
                <p className="text-sm text-[#D9C7A5]/80 mt-2 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#222426] border border-[#D9C7A5]/20">
          <h2 className="font-archivo text-3xl font-bold text-white">Commission a Project</h2>
          <p className="text-sm text-[#D9C7A5]/75 mt-1 mb-6">Share your site location and architectural vision.</p>
          {sent ? (
            <p className="p-4 rounded-xl bg-[#2F4F3E] text-white font-archivo text-sm">
              Thank you. Our principal architects will review your brief within 48 hours.
            </p>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4 font-archivo"
            >
              <input required placeholder="Your Name / Organization" className="w-full px-4 py-3 rounded-xl bg-[#2B2D2F] border border-[#D9C7A5]/20 text-white" />
              <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-[#2B2D2F] border border-[#D9C7A5]/20 text-white" />
              <textarea required rows="3" placeholder="Project Scope & Location" className="w-full px-4 py-3 rounded-xl bg-[#2B2D2F] border border-[#D9C7A5]/20 text-white" />
              <button type="submit" className="px-6 py-3 rounded-xl bg-[#D9C7A5] text-[#2B2D2F] font-bold inline-flex items-center gap-2 hover:brightness-105 transition">
                <Send className="w-4 h-4" /> Submit Brief
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
