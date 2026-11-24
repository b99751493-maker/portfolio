import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Calendar, Users, Clock, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

const MENU_DATA = {
  Starters: [
    { name: 'Roasted Bone Marrow & Herb Gremolata', desc: 'Charred sourdough, smoked sea salt, pickled shallots', price: '$22' },
    { name: 'Saffron Burrata Tartlet', desc: 'Heirloom figs, aged balsamic glaze, toasted pistachios', price: '$19' },
    { name: 'Spiced Duck Consommé', desc: 'Wild mushrooms, black truffle oil, crispy leek', price: '$18' },
  ],
  Mains: [
    { name: 'Dry-Aged Ribeye al Braciere', desc: 'Smoked potato purée, roasted bone jus, charred broccolini', price: '$54' },
    { name: 'Wild Boar Pappardelle', desc: 'Hand-cut egg pasta, 24-month Parmigiano, rosemary', price: '$36' },
    { name: 'Pan-Seared Sea Bass', desc: 'Saffron fennel velouté, baby artichokes, lemon oil', price: '$44' },
  ],
  Desserts: [
    { name: 'Dark Chocolate & Espresso Torte', desc: 'Mascarpone crema, cocoa nib tuile, gold leaf', price: '$16' },
    { name: 'Honeyed Fig Mille-Feuille', desc: 'Caramelized puff pastry, vanilla bean custard', price: '$15' },
  ],
};

const REVIEWS = [
  { author: 'Elena Rostova', role: 'Culinary Critic', quote: 'An unforgettable symphony of wood-fired depth and warm hospitality. The wild boar pappardelle is extraordinary.' },
  { author: 'Marcus Vance', role: 'Verified Guest', quote: 'Intimate candlelight, impeccable wine pairings, and flavors that linger long after the final course.' },
  { author: 'Sophia Laurent', role: 'Gastronomy Guide', quote: 'Savora balances rustic heritage with fine-dining precision effortlessly.' },
];

export default function Page03Savora() {
  const [tab, setTab] = useState('Starters');
  const [revIdx, setRevIdx] = useState(0);
  const [booked, setBooked] = useState(false);
  const [form, setForm] = useState({ name: '', guests: '2 Guests', date: '2026-12-05', time: '20:00' });

  const handleBook = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#3B2A20] font-lato">
      {/* Hero */}
      <header className="bg-[#8B1E2D] text-[#FFF6E5] py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-[#F2B134] text-xs uppercase tracking-[0.3em] mb-4"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Est. 1998 • Wood-Fired Gastronomy</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-5xl sm:text-7xl font-bold tracking-tight"
          >
            SAVORA
          </motion.h1>
          <p className="mt-4 max-w-xl mx-auto text-[#FFF6E5]/85 text-base sm:text-lg">
            Where heritage recipes meet open-hearth craftsmanship in an atmosphere of timeless warmth.
          </p>
        </div>
      </header>

      {/* Menu Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B1E2D] font-bold">Seasonal Tasting</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold mt-1">Our Culinary Menu</h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10">
          {Object.keys(MENU_DATA).map(category => (
            <button
              key={category}
              onClick={() => setTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition relative ${
                tab === category ? 'text-[#FFF6E5]' : 'text-[#3B2A20] hover:bg-[#3B2A20]/10'
              }`}
            >
              {tab === category && (
                <motion.span
                  layoutId="savoraMenuPill"
                  className="absolute inset-0 rounded-full bg-[#8B1E2D]"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5"
          >
            {MENU_DATA[tab].map(dish => (
              <div
                key={dish.name}
                className="p-6 rounded-2xl bg-white/80 border border-[#3B2A20]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div>
                  <h3 className="font-cormorant text-2xl font-bold text-[#3B2A20]">{dish.name}</h3>
                  <p className="text-sm text-[#3B2A20]/75 mt-1">{dish.desc}</p>
                </div>
                <span className="font-cormorant text-2xl font-bold text-[#8B1E2D] shrink-0">{dish.price}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Reviews Slider */}
      <section className="bg-[#3B2A20] text-[#FFF6E5] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-[#F2B134] mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#F2B134]" />)}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={revIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="font-cormorant italic text-2xl sm:text-4xl leading-snug">
                “{REVIEWS[revIdx].quote}”
              </blockquote>
              <p className="mt-5 font-bold text-[#F2B134]">{REVIEWS[revIdx].author}</p>
              <p className="text-xs uppercase tracking-widest text-[#FFF6E5]/60">{REVIEWS[revIdx].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={() => setRevIdx((revIdx - 1 + REVIEWS.length) % REVIEWS.length)}
              className="p-2.5 rounded-full border border-[#FFF6E5]/25 hover:bg-[#F2B134] hover:text-[#3B2A20] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setRevIdx((revIdx + 1) % REVIEWS.length)}
              className="p-2.5 rounded-full border border-[#FFF6E5]/25 hover:bg-[#F2B134] hover:text-[#3B2A20] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Table Reservation Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-[#3B2A20]/15 p-8 sm:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B1E2D] font-bold">Evening Dining</span>
            <h2 className="font-cormorant text-4xl font-bold mt-1">Reserve a Table</h2>
          </div>

          {booked ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-cormorant text-3xl font-bold">Table Reserved</h3>
              <p className="text-sm text-[#3B2A20]/75 mt-2">
                We look forward to welcoming {form.name || 'you'} ({form.guests}) on {form.date} at {form.time}.
              </p>
              <button
                onClick={() => setBooked(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#8B1E2D] text-white text-sm font-bold"
              >
                Modify Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleBook} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Julian Sterling"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5]/60 border border-[#3B2A20]/20 focus:outline-none focus:border-[#8B1E2D]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Party Size
                </label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5]/60 border border-[#3B2A20]/20 focus:outline-none focus:border-[#8B1E2D]"
                >
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Dining (8+)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5]/60 border border-[#3B2A20]/20 focus:outline-none focus:border-[#8B1E2D]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Seating Time
                </label>
                <select
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5]/60 border border-[#3B2A20]/20 focus:outline-none focus:border-[#8B1E2D]"
                >
                  <option>18:30</option>
                  <option>20:00</option>
                  <option>21:30</option>
                </select>
              </div>
              <button
                type="submit"
                className="sm:col-span-2 py-3.5 rounded-xl bg-[#8B1E2D] hover:bg-[#701622] text-[#FFF6E5] font-bold tracking-wide transition shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
