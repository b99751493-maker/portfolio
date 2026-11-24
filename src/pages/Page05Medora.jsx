import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Stethoscope, ShieldCheck, Calendar, X, CheckCircle2, Award } from 'lucide-react';

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 20;
    const steps = duration / stepTime;
    const inc = target / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

const SERVICES = [
  { title: 'Cardiology & Diagnostics', desc: 'Non-invasive echocardiography, ECG monitoring, and preventive heart screenings.', icon: HeartPulse },
  { title: 'Comprehensive Checkups', desc: 'Full-panel biomarkers, digital imaging, and personalized longevity consultations.', icon: Stethoscope },
  { title: 'Immunology & Wellness', desc: 'Targeted allergy testing, IV micronutrient therapy, and immune optimization.', icon: ShieldCheck },
];

const DOCTORS = [
  { name: 'Dr. Aria Chen, MD', role: 'Chief of Cardiology', exp: '16 Years Exp.' },
  { name: 'Dr. Liam Vance, MD', role: 'Internal Medicine', exp: '14 Years Exp.' },
  { name: 'Dr. Maya Patel, DO', role: 'Preventive Diagnostics', exp: '11 Years Exp.' },
];

export default function Page05Medora() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(DOCTORS[0].name);
  const [submitted, setSubmitted] = useState(false);

  const openBooking = (docName) => {
    if (docName) setSelectedDoc(docName);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-inter">
      {/* Navbar */}
      <header className="border-b border-slate-100 sticky top-0 z-30 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0EA5A4] text-white flex items-center justify-center font-bold">+</div>
            <span className="text-xl font-bold tracking-tight">MEDORA</span>
          </div>
          <button
            onClick={() => openBooking(DOCTORS[0].name)}
            className="px-5 py-2.5 rounded-xl bg-[#0EA5A4] hover:bg-teal-600 text-white text-sm font-semibold transition shadow-md shadow-teal-500/20"
          >
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero + Count-Up Stats */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/70 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0EA5A4]/15 text-[#0EA5A4] text-xs font-bold uppercase tracking-wider">
              Next-Generation Healthcare
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 leading-tight">
              Precision Care Built Around You.
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-lg">
              Same-day diagnostics, board-certified specialists, and transparent digital health records under one roof.
            </p>
            <button
              onClick={() => openBooking(DOCTORS[0].name)}
              className="mt-8 px-7 py-3.5 rounded-xl bg-[#0F172A] text-white font-semibold hover:bg-slate-800 transition inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#0EA5A4]" /> Schedule Visit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-7 rounded-3xl bg-white border border-sky-100 shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-[#0EA5A4]">
                <CountUp target={5000} suffix="+" />
              </p>
              <p className="text-sm text-slate-500 mt-1 font-medium">Patients Treated</p>
            </div>
            <div className="p-7 rounded-3xl bg-[#0F172A] text-white shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-[#0EA5A4]">99.2%</p>
              <p className="text-sm text-slate-300 mt-1 font-medium">Patient Satisfaction</p>
            </div>
            <div className="p-7 rounded-3xl bg-white border border-sky-100 shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-[#0F172A]">24/7</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">Telehealth Access</p>
            </div>
            <div className="p-7 rounded-3xl bg-[#E0F2FE] border border-sky-200">
              <p className="text-3xl sm:text-4xl font-bold text-[#0F172A]">18</p>
              <p className="text-sm text-slate-700 mt-1 font-medium">Specialist Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Clinical Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="p-7 rounded-3xl bg-[#E0F2FE]/45 border border-sky-100 hover:border-[#0EA5A4] transition">
                <div className="w-12 h-12 rounded-2xl bg-[#0EA5A4] text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Doctors */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-3xl font-bold mb-10">Lead Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTORS.map(doc => (
            <div key={doc.name} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#E0F2FE] text-[#0EA5A4] font-bold text-xl flex items-center justify-center mb-4">
                  {doc.name.split(' ')[1][0]}
                </div>
                <h3 className="text-xl font-bold">{doc.name}</h3>
                <p className="text-sm text-[#0EA5A4] font-semibold mt-0.5">{doc.role}</p>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> {doc.exp}
                </p>
              </div>
              <button
                onClick={() => openBooking(doc.name)}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#E0F2FE] hover:bg-[#0EA5A4] hover:text-white text-[#0F172A] text-sm font-semibold transition"
              >
                Book with {doc.name.split(' ')[1]}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Window */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl relative"
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#0EA5A4] mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">Appointment Confirmed</h3>
                  <p className="text-sm text-slate-600 mt-2">
                    Your consultation with <span className="font-semibold">{selectedDoc}</span> is scheduled.
                  </p>
                  <button onClick={() => setModalOpen(false)} className="mt-6 px-6 py-2.5 rounded-xl bg-[#0EA5A4] text-white font-semibold">
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold">Book Consultation</h3>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Specialist</label>
                    <select
                      value={selectedDoc}
                      onChange={e => setSelectedDoc(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50"
                    >
                      {DOCTORS.map(d => <option key={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Patient Name</label>
                    <input required type="text" placeholder="Alex Mercer" className="w-full px-4 py-2.5 rounded-xl border border-slate-200" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Preferred Date</label>
                    <input required type="date" defaultValue="2026-12-02" className="w-full px-4 py-2.5 rounded-xl border border-slate-200" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-xl bg-[#0EA5A4] text-white font-semibold hover:bg-teal-600 transition">
                    Confirm Booking
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
