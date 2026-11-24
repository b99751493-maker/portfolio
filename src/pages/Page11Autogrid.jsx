import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Calculator, Car } from 'lucide-react';

const CARS = [
  { id: 1, model: 'Apex GT-R Coupe', type: 'Sport', price: 84000, hp: '610 HP', zeroToSixty: '2.9s', drive: 'AWD' },
  { id: 2, model: 'Vanguard E-Touring', type: 'Electric', price: 68500, hp: '520 HP', zeroToSixty: '3.4s', drive: 'Dual Motor' },
  { id: 3, model: 'Titan X7 SUV', type: 'SUV', price: 76000, hp: '465 HP', zeroToSixty: '4.5s', drive: '4WD' },
];

export default function Page11Autogrid() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [carPrice, setCarPrice] = useState(84000);
  const [downPayment, setDownPayment] = useState(15000);
  const [months, setMonths] = useState(60);

  const visible = typeFilter === 'All' ? CARS : CARS.filter(c => c.type === typeFilter);
  const apr = 0.049;
  const principal = Math.max(0, carPrice - downPayment);
  const monthlyRate = apr / 12;
  const monthlyPayment = principal > 0
    ? Math.round((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)))
    : 0;

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white font-roboto relative overflow-hidden">
      {/* Speed Lines Animation */}
      <div className="pointer-events-none absolute inset-x-0 top-16 h-64 overflow-hidden opacity-35">
        {[20, 65, 115, 170, 210].map((top, i) => (
          <div
            key={i}
            style={{ top: `${top}px`, animationDelay: `${i * 0.35}s` }}
            className="animate-speed-line absolute h-0.5 w-64 bg-gradient-to-r from-transparent via-[#D62828] to-[#C0C6CF]"
          />
        ))}
      </div>

      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <Gauge className="w-7 h-7 text-[#D62828]" />
          <span className="font-rubik font-bold text-2xl tracking-wider">AUTOGRID</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#C0C6CF]">Performance & Luxury Fleet</span>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-14 space-y-16 relative z-10">
        {/* Hero */}
        <section>
          <span className="px-3 py-1 bg-[#D62828] text-white text-xs font-rubik font-bold uppercase tracking-wider">
            2026 Showroom
          </span>
          <h1 className="font-rubik text-4xl sm:text-6xl font-bold mt-4 max-w-3xl leading-tight">
            Engineered for Pure Velocity.
          </h1>
        </section>

        {/* Filter & Catalog */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="font-rubik text-2xl font-bold flex items-center gap-2">
              <Car className="w-6 h-6 text-[#D62828]" /> Vehicle Inventory
            </h2>
            <div className="flex gap-2">
              {['All', 'Sport', 'Electric', 'SUV'].map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-2 rounded-lg text-xs font-rubik font-bold uppercase transition ${
                    typeFilter === t ? 'bg-[#D62828] text-white' : 'bg-white/10 text-[#C0C6CF] hover:bg-white/15'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map(car => (
              <motion.div
                key={car.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#102A4C] border border-[#C0C6CF]/20 p-6"
              >
                <div className="h-36 rounded-xl bg-gradient-to-tr from-[#0B1F3A] to-[#1D3E6E] mb-5 p-4 flex flex-col justify-between border border-white/10">
                  <span className="self-start text-[11px] font-rubik uppercase px-2.5 py-0.5 bg-[#D62828] rounded">
                    {car.type}
                  </span>
                  <span className="font-rubik text-2xl font-bold text-[#C0C6CF]">{car.hp}</span>
                </div>
                <h3 className="font-rubik text-xl font-bold">{car.model}</h3>
                <p className="text-2xl font-bold text-[#D62828] mt-1">${car.price.toLocaleString()}</p>
                <button
                  onClick={() => setCarPrice(car.price)}
                  className="mt-4 w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#D62828] text-xs font-rubik font-bold uppercase tracking-wider transition"
                >
                  Load in Calculator
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spec Comparison Table */}
        <section className="rounded-2xl bg-[#102A4C] border border-[#C0C6CF]/20 p-6 sm:p-8 overflow-x-auto">
          <h2 className="font-rubik text-2xl font-bold mb-5">Performance Comparison</h2>
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/15 text-[#C0C6CF] font-rubik uppercase text-xs">
              <tr>
                <th className="py-3">Model</th>
                <th className="py-3">Power</th>
                <th className="py-3">0–60 mph</th>
                <th className="py-3">Drivetrain</th>
                <th className="py-3">MSRP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {CARS.map(c => (
                <tr key={c.id} className="hover:bg-white/5 transition">
                  <td className="py-3.5 font-bold">{c.model}</td>
                  <td className="py-3.5 text-[#C0C6CF]">{c.hp}</td>
                  <td className="py-3.5 text-[#D62828] font-bold">{c.zeroToSixty}</td>
                  <td className="py-3.5">{c.drive}</td>
                  <td className="py-3.5 font-bold">${c.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Credit Calculator */}
        <section className="rounded-2xl bg-[#102A4C] border border-[#C0C6CF]/20 p-6 sm:p-8">
          <h2 className="font-rubik text-2xl font-bold mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[#D62828]" /> Lease & Credit Estimator (4.9% APR)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-xs uppercase text-[#C0C6CF] mb-1.5">Vehicle Price ($)</label>
              <input
                type="number"
                value={carPrice}
                onChange={e => setCarPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0B1F3A] border border-white/20"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-[#C0C6CF] mb-1.5">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={e => setDownPayment(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0B1F3A] border border-white/20"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-[#C0C6CF] mb-1.5">Term (Months)</label>
              <select
                value={months}
                onChange={e => setMonths(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0B1F3A] border border-white/20"
              >
                <option value={36}>36 Months</option>
                <option value={48}>48 Months</option>
                <option value={60}>60 Months</option>
                <option value={72}>72 Months</option>
              </select>
            </div>
            <div className="p-4 rounded-xl bg-[#D62828] text-center">
              <p className="text-xs uppercase font-rubik">Estimated Monthly</p>
              <p className="text-3xl font-rubik font-bold mt-0.5">${monthlyPayment}/mo</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
