import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sun, Droplet, ShoppingBag, Plus } from 'lucide-react';

const PLANTS = [
  { id: 1, name: 'Monstera Deliciosa', light: 'Bright Indirect', price: 48, tag: 'Air Purifying' },
  { id: 2, name: 'Fiddle Leaf Fig', light: 'Filtered Sun', price: 65, tag: 'Statement Tree' },
  { id: 3, name: 'Calathea Orbifolia', light: 'Medium Shade', price: 38, tag: 'Pet Friendly' },
  { id: 4, name: 'Olive Bonsai', light: 'Direct Sun', price: 72, tag: 'Mediterranean' },
];

const CARE_TIPS = [
  { icon: Sun, title: 'Morning Light', text: 'Place tropical foliage near east-facing windows for gentle morning rays.' },
  { icon: Droplet, title: 'Soil Moisture Check', text: 'Water thoroughly only when the top two inches of potting mix feel dry.' },
  { icon: Sprout, title: 'Seasonal Nutrition', text: 'Feed with organic kelp fertilizer once a month during spring and summer.' },
];

export default function Page13Verdant() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <div className="min-h-screen bg-white text-[#263228] font-inter relative overflow-hidden">
      {/* Falling Leaves Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[10, 26, 48, 70, 88].map((left, i) => (
          <motion.div
            key={i}
            initial={{ y: -40, x: 0, rotate: 0, opacity: 0.7 }}
            animate={{
              y: 850,
              x: [0, 25, -20, 15],
              rotate: 360,
            }}
            transition={{
              duration: 11 + i * 2,
              repeat: Infinity,
              delay: i * 1.4,
              ease: 'linear',
            }}
            style={{ left: `${left}%` }}
            className="absolute w-4 h-4 rounded-tl-full rounded-br-full bg-[#A5D6A7]/70"
          />
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-emerald-100 px-6 py-5 sticky top-0 z-30 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-[#2E7D32]" />
            <span className="font-fraunces font-bold text-2xl text-[#2E7D32]">VERDANT</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#2E7D32] text-white text-xs font-semibold flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Planter Cart ({cartCount})</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-14 space-y-20 relative z-10">
        {/* Hero */}
        <section className="rounded-[2.5rem] bg-gradient-to-br from-[#A5D6A7]/40 via-emerald-50 to-white border border-[#A5D6A7]/50 p-8 sm:p-14">
          <span className="px-3.5 py-1 rounded-full bg-[#2E7D32] text-white text-xs font-semibold">
            100% Peat-Free & Sustainably Grown
          </span>
          <h1 className="font-fraunces text-4xl sm:text-6xl font-bold mt-4 max-w-2xl leading-tight text-[#2E7D32]">
            Bring Living Calm Into Every Room.
          </h1>
          <p className="mt-4 text-[#5D4037] max-w-xl text-base sm:text-lg">
            Hand-selected indoor botanicals potted in breathable terracotta and delivered directly from our eco-greenhouses.
          </p>
        </section>

        {/* Plant Catalog */}
        <section>
          <h2 className="font-fraunces text-3xl font-bold text-[#2E7D32] mb-8">Botanical Catalog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANTS.map(plant => (
              <motion.div
                key={plant.id}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="h-44 rounded-2xl bg-[#A5D6A7]/30 p-4 flex flex-col justify-between mb-4">
                  <span className="self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#2E7D32]">
                    {plant.tag}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-[#2E7D32]/15 mx-auto flex items-center justify-center">
                    <Sprout className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                  <span className="text-xs text-[#5D4037] font-medium">{plant.light}</span>
                </div>

                <h3 className="font-fraunces text-xl font-bold">{plant.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-[#5D4037]">${plant.price}</span>
                  <button
                    onClick={() => setCartCount(c => c + 1)}
                    className="px-3.5 py-2 rounded-xl bg-[#2E7D32] hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Care Tips */}
        <section className="rounded-3xl bg-[#5D4037] text-white p-8 sm:p-12">
          <h2 className="font-fraunces text-3xl font-bold mb-8">Essential Plant Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CARE_TIPS.map(tip => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="p-6 rounded-2xl bg-white/10 border border-white/15">
                  <Icon className="w-6 h-6 text-[#A5D6A7] mb-3" />
                  <h3 className="font-fraunces text-xl font-bold">{tip.title}</h3>
                  <p className="text-sm text-emerald-100/85 mt-2 leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
