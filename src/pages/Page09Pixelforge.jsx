import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Newspaper, Terminal } from 'lucide-react';

const GAMES = [
  { title: 'NEON OVERDRIVE', genre: 'Cyberpunk Action RPG', platform: 'PC / Console', status: 'OUT NOW' },
  { title: 'VOID PROTOCOL', genre: 'Tactical Sci-Fi Roguelike', platform: 'PC / Steam Deck', status: 'BETA 2.4' },
  { title: 'HYPERGRID 2099', genre: 'Arcade Arena Racer', platform: 'Cross-Platform', status: 'IN DEV' },
];

const TEAM = [
  { handle: 'VEX_01', role: 'Game Director & Shader Artist' },
  { handle: 'NYX_CORE', role: 'Lead Gameplay Engineer' },
  { handle: 'KODA_SFX', role: 'Synthwave Composer & Audio' },
];

const NEWS = [
  { date: 'NOV 2026', title: 'Patch 2.4 brings Ray-Traced Neon Reflections to Void Protocol' },
  { date: 'OCT 2026', title: 'PixelForge wins Best Indie Visual Direction at CyberGame Awards' },
];

export default function Page09Pixelforge() {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTrail(prev => [...prev.slice(-10), { id: Date.now() + Math.random(), x, y }]);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0D0D12] text-white font-rajdhani relative overflow-hidden"
    >
      {/* Cursor Trail */}
      {trail.map((pt, i) => (
        <span
          key={pt.id}
          style={{
            left: pt.x,
            top: pt.y,
            opacity: (i + 1) / trail.length * 0.65,
          }}
          className="pointer-events-none fixed w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-[#39FF14] shadow-[0_0_12px_#39FF14] z-40"
        />
      ))}

      {/* Pixel Wave Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 flex items-end justify-around opacity-20 px-4">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [24, 90 + (i % 5) * 20, 24] }}
            transition={{ duration: 2 + (i % 4) * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-3 bg-gradient-to-t from-[#8A2BE2] to-[#39FF14]"
          />
        ))}
      </div>

      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10 border-b border-[#8A2BE2]/30">
        <div className="flex items-center gap-2.5">
          <Gamepad2 className="w-6 h-6 text-[#39FF14]" />
          <span className="font-orbitron font-black text-xl tracking-wider">PIXELFORGE</span>
        </div>
        <span className="font-orbitron text-xs text-[#39FF14] border border-[#39FF14]/40 px-3 py-1">
          SYS.ONLINE
        </span>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-20">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.35em] text-[#8A2BE2] mb-3">
            NEXT-GEN INTERACTIVE WORLDS
          </p>
          <h1 className="font-orbitron text-4xl sm:text-7xl font-black tracking-tight glitch-text cursor-default">
            FORGING <span className="text-[#39FF14]">DIGITAL</span> REALITIES
          </h1>
          <p className="mt-5 text-neutral-300 text-lg max-w-2xl mx-auto">
            Hover across the grid to activate cursor telemetry. We craft high-octane cyberpunk worlds, custom shaders, and arcade precision.
          </p>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="font-orbitron text-2xl font-bold mb-8 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#39FF14]" /> GAME PORTFOLIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GAMES.map(g => (
              <motion.div
                key={g.title}
                whileHover={{ y: -6, borderColor: '#39FF14' }}
                className="p-6 bg-[#14141F] border border-[#8A2BE2]/40 transition"
              >
                <span className="text-xs font-orbitron px-2.5 py-1 bg-[#39FF14]/15 text-[#39FF14]">
                  {g.status}
                </span>
                <h3 className="font-orbitron text-xl font-bold mt-4 glitch-text">{g.title}</h3>
                <p className="text-sm text-neutral-400 mt-1">{g.genre}</p>
                <p className="text-xs text-[#8A2BE2] font-bold mt-4">{g.platform}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team & News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="p-7 bg-[#14141F] border border-white/10">
            <h2 className="font-orbitron text-xl font-bold mb-5 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#8A2BE2]" /> CORE SQUAD
            </h2>
            <div className="space-y-3">
              {TEAM.map(m => (
                <div key={m.handle} className="p-4 bg-[#0D0D12] border border-[#8A2BE2]/30 flex justify-between items-center">
                  <span className="font-orbitron font-bold text-[#39FF14]">{m.handle}</span>
                  <span className="text-sm text-neutral-300">{m.role}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-7 bg-[#14141F] border border-white/10">
            <h2 className="font-orbitron text-xl font-bold mb-5 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-[#39FF14]" /> STUDIO TRANSMISSIONS
            </h2>
            <div className="space-y-4">
              {NEWS.map(n => (
                <div key={n.title} className="p-4 bg-[#0D0D12] border-l-2 border-[#39FF14]">
                  <span className="text-xs font-orbitron text-[#8A2BE2]">{n.date}</span>
                  <p className="text-base font-semibold mt-1">{n.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
