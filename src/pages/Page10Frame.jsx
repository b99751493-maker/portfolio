import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, Check } from 'lucide-react';

const PHOTOS = [
  { id: 1, title: 'Concrete Solitude', cat: 'Architecture', height: 'h-72', tone: 'from-neutral-800 to-neutral-950' },
  { id: 2, title: 'Midnight Crosswalk', cat: 'Street', height: 'h-96', tone: 'from-zinc-700 to-black' },
  { id: 3, title: 'Gaze in Monochrome', cat: 'Portrait', height: 'h-64', tone: 'from-stone-800 to-neutral-900' },
  { id: 4, title: 'Brutalist Stairwell', cat: 'Architecture', height: 'h-80', tone: 'from-neutral-700 to-zinc-950' },
  { id: 5, title: 'Rain on Asphalt', cat: 'Street', height: 'h-72', tone: 'from-neutral-900 to-black' },
  { id: 6, title: 'Studio Chiaroscuro', cat: 'Portrait', height: 'h-96', tone: 'from-zinc-800 to-neutral-950' },
];

export default function Page10Frame() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [ordered, setOrdered] = useState(false);

  const visible = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === filter);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-inter">
      {/* Header */}
      <header className="border-b border-black/10 px-6 py-6 bg-[#FAFAFA] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Camera className="w-6 h-6 text-[#E63946]" />
            <span className="font-bebas text-3xl tracking-widest">FRAME</span>
          </div>
          <div className="flex gap-2">
            {['All', 'Architecture', 'Street', 'Portrait'].map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  filter === c ? 'bg-[#E63946] text-white' : 'bg-black/5 hover:bg-black/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">Fine Art Prints</p>
          <h1 className="font-bebas text-6xl sm:text-8xl tracking-tight leading-none mt-2">
            LIGHT. SHADOW. CONTRAST.
          </h1>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {visible.map(photo => (
            <motion.div
              key={photo.id}
              layout
              onClick={() => setLightbox(photo)}
              className={`break-inside-avoid ${photo.height} bg-gradient-to-br ${photo.tone} text-white p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden`}
            >
              <div className="flex justify-between items-center">
                <span className="text-[11px] uppercase tracking-widest text-neutral-400">{photo.cat}</span>
                <Maximize2 className="w-4 h-4 text-[#E63946] opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div>
                <p className="font-bebas text-3xl tracking-wide">{photo.title}</p>
                <p className="text-xs text-neutral-400">35mm Silver Gelatin • Click to expand</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Print Order Form */}
        <section className="mt-20 bg-[#111111] text-[#FAFAFA] p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E63946]">Collector Editions</span>
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide mt-1">Order Archival Print</h2>

            {ordered ? (
              <div className="mt-6 p-4 border border-[#E63946] flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-[#E63946]" />
                <span>Print inquiry received. Certificate of authenticity details sent to your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setOrdered(true);
                }}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <select className="px-4 py-3 bg-white/10 border border-white/15 text-sm">
                  {PHOTOS.map(p => <option key={p.id} className="text-black">{p.title}</option>)}
                </select>
                <select className="px-4 py-3 bg-white/10 border border-white/15 text-sm">
                  <option className="text-black">16×20 in — Museum Matte ($240)</option>
                  <option className="text-black">24×36 in — Framed Baryta ($480)</option>
                </select>
                <input required type="email" placeholder="Your Email" className="px-4 py-3 bg-white/10 border border-white/15 text-sm sm:col-span-2" />
                <button type="submit" className="sm:col-span-2 py-3.5 bg-[#E63946] text-white font-bold uppercase tracking-wider text-sm hover:brightness-110 transition">
                  Request Signed Edition
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#111111] border border-white/20 p-8 text-white relative"
            >
              <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 text-neutral-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
              <div className={`h-80 bg-gradient-to-br ${lightbox.tone} mb-6 flex items-center justify-center border border-white/10`}>
                <span className="font-bebas text-5xl tracking-widest text-white/80">{lightbox.title}</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bebas text-3xl">{lightbox.title}</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">{lightbox.cat} • Limited Run of 25</p>
                </div>
                <span className="text-[#E63946] font-bold">Archival Print</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
