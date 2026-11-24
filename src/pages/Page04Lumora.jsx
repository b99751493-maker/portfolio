import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Leaf, Heart, Star } from 'lucide-react';

const PRODUCTS = [
  { name: 'Velvet Rose Nectar', type: 'Hydrating Facial Oil', price: '$68', note: 'Cold-pressed Damask rose & squalane' },
  { name: 'Champagne Dew Serum', type: 'Radiance Concentrate', price: '$74', note: 'Niacinamide 10% + white peony extract' },
  { name: 'Silk Cloud Barrier Cream', type: 'Overnight Recovery', price: '$62', note: 'Ceramide complex & oat lipids' },
];

const INGREDIENTS = [
  { icon: Droplets, name: 'Bio-Fermented Squalane', origin: 'Olive Derived', benefit: 'Locks in 24-hour weightless hydration without clogging pores.' },
  { icon: Leaf, name: 'Damask Rose Otto', origin: 'Valley of Roses', benefit: 'Calms visible redness and restores luminous skin elasticity.' },
  { icon: Sparkles, name: 'Pearl Peptide Complex', origin: 'Marine Bio-Tech', benefit: 'Visibly smooths fine texture for a glass-skin finish.' },
];

const REVIEWS = [
  { user: 'Camille D.', text: 'My skin has never felt calmer or looked more radiant. The Champagne Dew Serum absorbs like silk.' },
  { user: 'Nadia K.', text: 'Finally a clean botanical line that delivers clinical glow without heavy fragrance.' },
  { user: 'Hannah W.', text: 'The Velvet Rose Nectar is pure magic in winter. Worth every drop.' },
];

export default function Page04Lumora() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7D6E0] via-white to-[#E8C9A0]/55 text-[#6B3A5B] font-nunito overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Clean Botanical Radiance
          </span>
          <h1 className="font-dmserif text-5xl sm:text-6xl mt-5 leading-[1.08]">
            Luminous Skin, Bottled in Silk.
          </h1>
          <p className="mt-5 text-[#6B3A5B]/80 text-lg max-w-lg leading-relaxed">
            LUMORA blends cold-pressed floral actives with bio-fermented peptides to nurture your natural skin barrier.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="px-7 py-3.5 rounded-full bg-[#6B3A5B] text-white font-bold text-sm hover:opacity-90 transition shadow-lg">
              Shop Rituals
            </a>
            <a href="#ingredients" className="px-7 py-3.5 rounded-full bg-white/80 border border-[#6B3A5B]/20 font-bold text-sm hover:bg-white transition">
              Explore Actives
            </a>
          </div>
        </div>

        {/* Soft floating visuals */}
        <div className="relative h-96 flex items-center justify-center">
          <motion.div
            animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-60 h-72 rounded-[2.5rem] bg-gradient-to-b from-white to-[#F7D6E0] border border-white shadow-2xl p-6 flex flex-col justify-between z-10"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-[#6B3A5B]/60">LUMORA • 30ML</span>
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E8C9A0] to-[#F7D6E0] mx-auto shadow-inner flex items-center justify-center">
              <Droplets className="w-9 h-9 text-[#6B3A5B]" />
            </div>
            <div>
              <p className="font-dmserif text-xl">Velvet Rose</p>
              <p className="text-xs text-[#6B3A5B]/70">Botanical Elixir</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [14, -14, 14] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 sm:right-8 top-6 w-40 h-44 rounded-3xl bg-[#E8C9A0]/80 backdrop-blur-md border border-white/70 p-4 shadow-xl flex flex-col justify-between"
          >
            <Heart className="w-5 h-5 text-[#6B3A5B]" />
            <p className="font-dmserif text-base">99.4% Natural Origin</p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-dmserif text-4xl text-center mb-12">Signature Formulations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-7 shadow-lg"
            >
              <div className="h-44 rounded-2xl bg-gradient-to-tr from-[#F7D6E0]/70 to-[#E8C9A0]/50 mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-24 rounded-2xl bg-white/90 shadow-md border border-[#6B3A5B]/10"
                />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#6B3A5B]/60">{p.type}</span>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-dmserif text-2xl">{p.name}</h3>
                <span className="font-bold text-lg">{p.price}</span>
              </div>
              <p className="text-sm text-[#6B3A5B]/75 mt-2">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-[2.5rem] bg-white/75 backdrop-blur-md border border-white p-8 sm:p-14 shadow-xl">
          <h2 className="font-dmserif text-4xl text-center mb-10">Pure Botanical Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INGREDIENTS.map(ing => {
              const Icon = ing.icon;
              return (
                <div key={ing.name} className="p-6 rounded-2xl bg-[#F7D6E0]/35 border border-[#6B3A5B]/10">
                  <div className="w-11 h-11 rounded-2xl bg-[#6B3A5B] text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B3A5B]/60">{ing.origin}</span>
                  <h3 className="font-dmserif text-2xl mt-1">{ing.name}</h3>
                  <p className="text-sm text-[#6B3A5B]/80 mt-2 leading-relaxed">{ing.benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <h2 className="font-dmserif text-4xl text-center mb-10">Community Glow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.user} className="p-6 rounded-3xl bg-white/90 border border-white shadow-md">
              <div className="flex gap-1 text-[#6B3A5B] mb-3">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-[#6B3A5B]" />)}
              </div>
              <p className="text-sm leading-relaxed text-[#6B3A5B]/85">“{r.text}”</p>
              <p className="mt-4 font-bold text-sm">— {r.user}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
