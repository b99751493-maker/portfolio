import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Instagram, Globe, Mail } from 'lucide-react';

const COLLECTIONS = [
  { id: 1, title: 'Nocturne Silk Gown', season: 'AW 2026', price: '$4,200', tag: 'Atelier Exclusive', gradient: 'from-amber-900/60 via-stone-900 to-black' },
  { id: 2, title: 'Gilded Trench Coat', season: 'AW 2026', price: '$3,650', tag: 'Runway Piece', gradient: 'from-yellow-700/40 via-neutral-900 to-stone-950' },
  { id: 3, title: 'Velvet Sculpted Blazer', season: 'Capsule', price: '$2,890', tag: 'Limited Edition', gradient: 'from-stone-700/50 via-neutral-900 to-black' },
  { id: 4, title: 'Opaline Draped Dress', season: 'Resort', price: '$3,100', tag: 'Hand-Pleated', gradient: 'from-amber-600/30 via-stone-900 to-neutral-950' },
];

const LOOKBOOK = [
  { look: 'LOOK 01', title: 'Architectural Silhouette', note: 'Double-faced Italian cashmere & brushed brass hardware.' },
  { look: 'LOOK 02', title: 'Chiaroscuro Evening', note: 'Liquid bias-cut mulberry silk crafted over 90 atelier hours.' },
  { look: 'LOOK 03', title: 'Modern Heritage', note: 'Structured wool-mohair tailoring paired with raw linen.' },
];

export default function Page01Veloura() {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const filtered = selectedSeason === 'All' ? COLLECTIONS : COLLECTIONS.filter(c => c.season === selectedSeason);

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#F5EFE6] font-lato selection:bg-[#D4AF37] selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#0D0C0A]/85 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-playfair text-2xl tracking-[0.28em] font-bold text-[#D4AF37]">VELOURA</span>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-stone-300">
            <a href="#collection" className="hover:text-[#D4AF37] transition">Collection</a>
            <a href="#lookbook" className="hover:text-[#D4AF37] transition">Lookbook</a>
            <a href="#about" className="hover:text-[#D4AF37] transition">Maison</a>
          </nav>
          <span className="text-xs uppercase tracking-widest border border-[#D4AF37]/50 px-3.5 py-1.5 text-[#D4AF37]">
            Paris • Milan
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-28 px-6 border-b border-[#D4AF37]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_60%)]" />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.15em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 0.9 }}
            className="text-xs uppercase text-[#D4AF37] mb-5"
          >
            Haute Couture • Autumn / Winter
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.05]"
          >
            Sculpted in <span className="italic text-[#D4AF37]">Shadow</span> & Gold
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto text-stone-400 text-base leading-relaxed"
          >
            Timeless silhouettes woven from heritage European mills, celebrating tactile minimalism and architectural grace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <a href="#collection" className="px-7 py-3.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e5c249] transition flex items-center gap-2">
              Explore Gallery <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Curated Pieces</p>
            <h2 className="font-playfair text-4xl mt-1">Collection Gallery</h2>
          </div>
          <div className="flex gap-2">
            {['All', 'AW 2026', 'Capsule', 'Resort'].map(s => (
              <button
                key={s}
                onClick={() => setSelectedSeason(s)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition ${
                  selectedSeason === s ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold' : 'border-stone-700 text-stone-300 hover:border-[#D4AF37]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group border border-stone-800 bg-stone-950/80 overflow-hidden"
            >
              <div className={`h-72 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between relative`}>
                <span className="self-start text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37]">
                  {item.tag}
                </span>
                <div className="w-24 h-24 rounded-full border border-[#D4AF37]/30 mx-auto my-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-7 h-7 text-[#D4AF37]/80" />
                </div>
                <span className="text-xs text-stone-400 tracking-widest">{item.season}</span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-stone-100">{item.title}</h3>
                <p className="text-sm text-[#D4AF37] mt-1 font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="bg-[#14120E] py-24 px-6 border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Editorial Series</p>
          <h2 className="font-playfair text-4xl mt-1 mb-12">Seasonal Lookbook</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOOKBOOK.map((lb, i) => (
              <motion.div
                key={lb.look}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-8 border border-[#D4AF37]/25 bg-[#0D0C0A] relative"
              >
                <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37]">{lb.look}</span>
                <div className="h-44 my-6 bg-gradient-to-tr from-[#D4AF37]/15 via-stone-900 to-stone-800 border border-stone-800 flex items-center justify-center">
                  <span className="font-playfair italic text-2xl text-stone-400">Atelier Plate 0{i + 1}</span>
                </div>
                <h3 className="font-playfair text-2xl">{lb.title}</h3>
                <p className="text-sm text-stone-400 mt-2 leading-relaxed">{lb.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">The Maison</p>
          <h2 className="font-playfair text-4xl sm:text-5xl mt-3">Crafted Without Compromise</h2>
          <p className="mt-6 text-stone-300 leading-relaxed text-lg font-light">
            Founded with a devotion to slow luxury, VELOURA partners with family-owned weavers in Como and Biella. Every garment is individually numbered, hand-finished, and engineered to transcend fleeting seasonal trends.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-stone-800">
            <div>
              <p className="font-playfair text-3xl text-[#D4AF37]">100%</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Traceable Fibers</p>
            </div>
            <div>
              <p className="font-playfair text-3xl text-[#D4AF37]">90+ Hrs</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Per Couture Piece</p>
            </div>
            <div>
              <p className="font-playfair text-3xl text-[#D4AF37]">14</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Global Flagships</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-playfair text-xl tracking-[0.25em] text-[#D4AF37]">VELOURA</span>
            <p className="text-xs text-stone-500 mt-1">© 2026 Maison Veloura. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-5 text-stone-400">
            <Instagram className="w-4 h-4 hover:text-[#D4AF37] cursor-pointer" />
            <Globe className="w-4 h-4 hover:text-[#D4AF37] cursor-pointer" />
            <Mail className="w-4 h-4 hover:text-[#D4AF37] cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
