import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle, Sparkles, UserCheck } from 'lucide-react';

const COURSES = [
  { title: 'Full-Stack React & TypeScript', level: 'Intermediate', lessons: 28, progress: 78 },
  { title: 'UI/UX Motion Systems', level: 'All Levels', lessons: 19, progress: 45 },
  { title: 'Applied Machine Learning', level: 'Advanced', lessons: 34, progress: 92 },
];

const TEACHERS = [
  { name: 'Prof. Elena Lin', specialty: 'Distributed Systems', students: '14.2k' },
  { name: 'Devon Brooks', specialty: 'Design Engineering', students: '9.8k' },
  { name: 'Dr. Tariq Al-Mansoor', specialty: 'AI & Neural Nets', students: '21.5k' },
];

export default function Page06Eduflow() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctIdx = 1;

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-slate-900 font-jakarta">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">EDUFLOW</span>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#22C55E]/15 text-emerald-700 text-xs font-bold">
            Streak: 14 Days 🔥
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Dashboard */}
        <section className="rounded-3xl bg-gradient-to-r from-[#7C3AED] to-indigo-600 text-white p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Student Dashboard
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-3">Welcome back, Jordan!</h1>
              <p className="text-purple-100 mt-1 text-sm">You have completed 72% of your weekly learning goal.</p>
            </div>

            <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Weekly Mastery</span>
                <span className="text-[#22C55E]">72%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-[#22C55E]"
                />
              </div>
              <p className="text-xs text-purple-200 mt-2">3.5 hrs remaining to unlock Certificate Badge</p>
            </div>
          </div>
        </section>

        {/* Courses with Card Tilt */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Active Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
            {COURSES.map(c => (
              <motion.div
                key={c.title}
                whileHover={{ rotateX: 4, rotateY: -5, y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="rounded-3xl bg-white border border-purple-100 p-6 shadow-md"
              >
                <span className="px-3 py-1 rounded-lg bg-purple-100 text-[#7C3AED] text-xs font-bold">
                  {c.level}
                </span>
                <h3 className="text-xl font-bold mt-4">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{c.lessons} Interactive Modules</p>

                <div className="mt-6">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Progress</span>
                    <span className="text-[#7C3AED]">{c.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-purple-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22C55E]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Teachers & Quick Test */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Teachers */}
          <section className="rounded-3xl bg-white border border-purple-100 p-7 shadow-sm">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#7C3AED]" /> Top Mentors
            </h2>
            <div className="space-y-4">
              {TEACHERS.map(t => (
                <div key={t.name} className="p-4 rounded-2xl bg-[#F5F3FF] flex items-center justify-between">
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-slate-600">{t.specialty}</p>
                  </div>
                  <span className="text-xs font-bold text-[#7C3AED] bg-white px-3 py-1.5 rounded-full">
                    {t.students} learners
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Mini Test */}
          <section className="rounded-3xl bg-white border border-purple-100 p-7 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Award className="w-6 h-6 text-[#22C55E]" /> Quick Knowledge Check
              </h2>
              <span className="text-xs font-bold uppercase text-purple-600">+50 XP</span>
            </div>
            <p className="text-sm font-medium text-slate-700 mb-4">
              Which React hook is ideal for synchronizing a component with an external system?
            </p>
            <div className="space-y-2.5">
              {['useMemo', 'useEffect', 'useId', 'useReducer'].map((opt, idx) => {
                const isChosen = selectedAnswer === idx;
                const isCorrect = idx === correctIdx;
                let style = 'border-slate-200 hover:border-[#7C3AED]';
                if (selectedAnswer !== null) {
                  if (isCorrect) style = 'border-[#22C55E] bg-emerald-50 text-emerald-900 font-semibold';
                  else if (isChosen) style = 'border-rose-400 bg-rose-50 text-rose-900';
                }
                return (
                  <button
                    key={opt}
                    onClick={() => setSelectedAnswer(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition flex items-center justify-between ${style}`}
                  >
                    <span>{opt}</span>
                    {selectedAnswer !== null && isCorrect && <CheckCircle className="w-4 h-4 text-[#22C55E]" />}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
