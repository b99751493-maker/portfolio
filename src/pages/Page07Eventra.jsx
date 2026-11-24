import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Calendar, Mic2, Zap, RotateCw } from 'lucide-react';

const EVENTS = [
  { id: 1, title: 'SYNTHWAVE SUMMIT 2026', date: 'DEC 18 • TOKYO', venue: 'CyberDome Arena', price: 149 },
  { id: 2, title: 'FUTURE INTERFACES LIVE', date: 'JAN 14 • BERLIN', venue: 'Kraftwerk Hall', price: 199 },
  { id: 3, title: 'NEON AUDIO FESTIVAL', date: 'FEB 09 • SEOUL', venue: 'DDP Plaza', price: 129 },
];

const SPEAKERS = [
  { name: 'KAIRO TAKAHASHI', role: 'Creative Technologist' },
  { name: 'ZARA VEX', role: 'Spatial Audio Pioneer' },
  { name: 'DEVON STERLING', role: 'Realtime Graphics Lead' },
];

export default function Page07Eventra() {
  const [selectedEvent, setSelectedEvent] = useState(EVENTS[0]);
  const [flipped, setFlipped] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(86400 * 3 + 14520);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hrs = Math.floor((secondsLeft % 86400) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white font-space relative overflow-hidden">
      {/* Glow lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF2E93] to-transparent opacity-60 mt-20" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2D5BFF] to-transparent opacity-60 mt-96" />
      </div>

      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-[#FF2E93]" />
          <span className="text-2xl font-bold tracking-wider">EVENTRA</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-[#2D5BFF]/40 px-4 py-2 rounded-full">
          <span className="text-[#FF2E93] font-bold">NEXT DROP:</span>
          <span>{days}d {hrs}h {mins}m {secs}s</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Event List */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E93] font-bold">Live Tour 2026</span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-none">
              EXPERIENCE THE{' '}
              <span className="bg-gradient-to-r from-[#FF2E93] to-[#2D5BFF] bg-clip-text text-transparent">
                ELECTRIC
              </span>{' '}
              STAGE.
            </h1>

            <div className="pt-6 space-y-3">
              {EVENTS.map(ev => {
                const active = selectedEvent.id === ev.id;
                return (
                  <button
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev)}
                    className={`w-full text-left p-5 rounded-2xl border transition flex items-center justify-between ${
                      active
                        ? 'bg-gradient-to-r from-[#FF2E93]/20 to-[#2D5BFF]/20 border-[#FF2E93] shadow-[0_0_25px_rgba(255,46,147,0.25)]'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <p className="text-xs text-[#2D5BFF] font-bold">{ev.date}</p>
                      <h3 className="text-xl font-bold mt-0.5">{ev.title}</h3>
                      <p className="text-xs text-neutral-400">{ev.venue}</p>
                    </div>
                    <span className="text-2xl font-bold text-[#FF2E93]">${ev.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3D Flip Ticket */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setFlipped(!flipped)}
              className="w-full max-w-sm h-80 cursor-pointer perspective-1000"
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.65, type: 'spring', stiffness: 180 }}
                className="w-full h-full relative preserve-3d"
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-br from-[#FF2E93] via-purple-700 to-[#2D5BFF] p-7 flex flex-col justify-between shadow-[0_0_45px_rgba(45,91,255,0.45)]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full">
                      VIP ACCESS PASS
                    </span>
                    <Ticket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-80">{selectedEvent.date}</p>
                    <h2 className="text-2xl font-bold mt-1">{selectedEvent.title}</h2>
                    <p className="text-sm opacity-90 mt-1">{selectedEvent.venue}</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-white/25 pt-4">
                    <div>
                      <p className="text-[10px] uppercase opacity-75">Admit One</p>
                      <p className="font-bold text-xl">${selectedEvent.price}</p>
                    </div>
                    <span className="text-xs flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-full">
                      <RotateCw className="w-3.5 h-3.5" /> Flip Pass
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-[#131320] border-2 border-[#2D5BFF] p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#FF2E93] font-bold">Digital Entry QR</p>
                    <h3 className="text-lg font-bold mt-1">{selectedEvent.title}</h3>
                  </div>
                  <div className="mx-auto w-32 h-32 rounded-2xl bg-white p-2.5 grid grid-cols-5 gap-1">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className={i % 2 === 0 || i % 3 === 0 ? 'bg-black' : 'bg-transparent'} />
                    ))}
                  </div>
                  <p className="text-center text-xs text-neutral-400 font-mono">ID: EV-2026-8849-VIP</p>
                </div>
              </motion.div>
            </div>
            <p className="text-xs text-neutral-400 mt-3">Click ticket to inspect 3D holographic pass</p>
          </div>
        </div>

        {/* Speakers */}
        <section className="mt-20 pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mic2 className="w-6 h-6 text-[#2D5BFF]" /> Keynote Lineup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPEAKERS.map(sp => (
              <div key={sp.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2D5BFF] transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF2E93] to-[#2D5BFF] mb-4 flex items-center justify-center font-bold">
                  {sp.name[0]}
                </div>
                <h3 className="text-lg font-bold">{sp.name}</h3>
                <p className="text-sm text-neutral-400 mt-1">{sp.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
