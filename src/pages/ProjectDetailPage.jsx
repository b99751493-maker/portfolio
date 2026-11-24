import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { projectMap } from "../data.js";

function renderVisual(project) {
  const accentClass = project.theme.accent;
  const glowClass = `bg-gradient-to-br ${project.theme.ring}`;

  switch (project.slug) {
    case "orbital":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 shadow-[0_0_70px_rgba(59,130,246,0.7)]" />
          <div className="absolute left-16 top-16 h-20 w-20 rounded-full border border-cyan-200/30 bg-white/5" />
          <div className="absolute bottom-16 right-14 h-28 w-28 rounded-full border border-violet-200/30 bg-white/5" />
        </div>
      );
    case "velocity":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-orange-400/20 bg-[#0d1117] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-90`} />
          <div className="absolute left-10 top-10 h-32 w-32 rotate-12 rounded-2xl border border-white/10 bg-white/5" />
          <div className="absolute right-10 top-28 h-40 w-40 rounded-full border border-white/10 bg-white/5" />
          <div className="absolute left-12 bottom-12 h-24 w-48 rounded-full border border-white/15 bg-white/5" />
          <div className="absolute left-12 top-12 text-[10px] uppercase tracking-[0.26em] text-orange-100">motion</div>
          <div className="absolute bottom-14 left-12 text-4xl font-semibold tracking-[-0.08em] text-white">Move with intent.</div>
        </div>
      );
    case "nexsity":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#050c12] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-900 to-transparent" />
          <div className="absolute inset-x-8 bottom-10 grid grid-cols-6 gap-3">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="rounded-t-xl bg-slate-900/80 border border-white/10" style={{ height: `${50 + (index % 5) * 32}px` }} />
            ))}
          </div>
          <div className="absolute bottom-20 left-1/2 h-16 w-24 -translate-x-1/2 rounded-t-[2rem] border border-emerald-200/40 bg-emerald-500/15" />
          <div className="absolute bottom-20 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-emerald-300" />
        </div>
      );
    case "elegant":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-rose-200 bg-[#f9f4f1] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.66),transparent_35%)]" />
          <div className="absolute left-10 top-12 rounded-full border border-rose-300 bg-white/70 px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-rose-600">Learn / Speak</div>
          <div className="absolute right-10 top-10 h-28 w-28 rounded-full border border-rose-300/60 bg-rose-100/80" />
          <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((card) => (
              <div key={card} className="rounded-2xl border border-rose-200 bg-white/75 p-3 shadow-sm">
                <div className="mb-4 h-16 rounded-xl bg-gradient-to-br from-rose-100 to-violet-100" />
                <div className="h-2 w-16 rounded-full bg-rose-200" />
                <div className="mt-2 h-2 w-24 rounded-full bg-rose-100" />
              </div>
            ))}
          </div>
        </div>
      );
    case "mahalla-plus":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-emerald-200 bg-[#f5f7f1] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute inset-x-10 bottom-10 top-16 grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-emerald-200 bg-white/80 p-4">
              <div className="mb-5 h-8 w-24 rounded-full bg-emerald-100" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-emerald-100" />
                <div className="h-2 w-4/5 rounded-full bg-emerald-100" />
                <div className="h-2 w-3/4 rounded-full bg-emerald-100" />
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-100/70 p-4">
              <div className="mb-5 h-8 w-24 rounded-full bg-white/80" />
              <div className="h-20 rounded-2xl bg-white/75" />
            </div>
          </div>
        </div>
      );
    case "metal-roofers":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-amber-200 bg-[#f5f0ea] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-75`} />
          <div className="absolute left-8 top-8 h-28 w-28 rounded-[2rem] bg-white/80 shadow-sm" />
          <div className="absolute right-8 top-8 h-36 w-36 rounded-[2.5rem] border border-amber-200 bg-white/70" />
          <div className="absolute left-12 bottom-12 right-12 h-28 rounded-[2rem] border border-white/40 bg-white/70" />
        </div>
      );
    case "uzdev-cloud":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[#07151f] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute inset-x-10 bottom-12 top-12 grid gap-3">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                <div className="h-8 w-8 rounded-full bg-cyan-500/30" />
                <div className="h-2.5 w-24 rounded-full bg-slate-700" />
                <div className="ml-auto h-2.5 w-16 rounded-full bg-cyan-400/60" />
              </div>
            ))}
          </div>
        </div>
      );
    case "uzverse":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[#0d1220] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-85`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),transparent_30%)]" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/40" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-300 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.7)]" />
        </div>
      );
    case "aether":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-stone-300 bg-[#f9f5f1] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-70`} />
          <div className="absolute left-8 top-8 flex gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-24 w-20 rounded-2xl border border-stone-200 bg-white/80" />
            ))}
          </div>
          <div className="absolute bottom-10 left-10 right-10 h-24 rounded-[2rem] border border-stone-200 bg-white/80" />
        </div>
      );
    case "monolith":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3efe8] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-75`} />
          <div className="absolute inset-x-10 bottom-10 top-12 flex items-end gap-3">
            {[190, 220, 260, 220, 180].map((height, index) => (
              <div key={height} className="flex-1 rounded-t-[2rem] border border-slate-300 bg-white/80" style={{ height: `${height}px`, opacity: 0.8 + index * 0.05 }} />
            ))}
          </div>
        </div>
      );
    case "nexora":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-teal-400/20 bg-[#0a1d2a] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-85`} />
          <div className="absolute inset-x-8 bottom-10 top-12 grid gap-3">
            {[60, 120, 80, 150, 110].map((height, index) => (
              <div key={height} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                <div className="h-10 w-16 rounded-xl bg-slate-800" />
                <div className="flex-1 h-2 rounded-full bg-slate-700" />
                <div className="h-8 w-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" style={{ width: `${height}px` }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "pulse":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-fuchsia-400/20 bg-[#120d1d] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-85`} />
          <div className="absolute inset-x-8 bottom-10 top-10 rounded-[2rem] border border-white/10 bg-slate-900/60 p-5">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-white/30" />
                <div className="h-7 w-7 rounded-full bg-fuchsia-400/30" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-28 rounded-full bg-fuchsia-300/70" />
                <div className="h-24 rounded-[1.5rem] bg-gradient-to-r from-fuchsia-500/40 via-violet-500/30 to-cyan-500/30" />
              </div>
              <div className="flex gap-3">
                <div className="h-12 flex-1 rounded-2xl bg-white/10" />
                <div className="h-12 flex-1 rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      );
    case "aurora":
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-pink-400/20 bg-[#120d1a] p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_30%)]" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/30" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300 via-violet-500 to-cyan-500 opacity-80 blur-sm" />
          <div className="absolute left-10 top-10 text-[10px] uppercase tracking-[0.28em] text-pink-100">creative direction</div>
        </div>
      );
    default:
      return (
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <div className={`absolute inset-0 ${glowClass} opacity-80`} />
        </div>
      );
  }
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = useMemo(() => projectMap[slug] ?? null, [slug]);
  const [activeFeature, setActiveFeature] = useState(0);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
        <div className="mb-6 text-6xl font-semibold tracking-[-0.08em] text-cyan-300">404</div>
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-3 max-w-md text-slate-300">This route does not exist in the portfolio. Head back to the main experience.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${project.theme.shell}`}>
      <header className="border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 font-semibold text-cyan-200">Z</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Portfolio</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white hover:border-cyan-400/40 hover:text-cyan-200">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className={`mb-6 inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${project.theme.soft}`}>
              {project.number} / {project.category}
            </div>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[5rem]">{project.title}</h1>
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-200">{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#overview" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">Explore <ChevronRight size={14} /></a>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Return home</Link>
            </div>
          </div>

          <div>{renderVisual(project)}</div>
        </motion.section>

        <section id="overview" className="mt-16 grid gap-4 sm:grid-cols-3">
          {project.metrics.map((stat) => (
            <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Signal</div>
              <div className="mt-3 text-xl font-semibold tracking-[-0.05em] text-white">{stat}</div>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {project.features.map((feature, index) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveFeature(index)}
                className={`w-full rounded-2xl border p-4 text-left transition ${activeFeature === index ? "border-white/20 bg-white/10" : "border-white/10 bg-white/5"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-white">{feature.title}</span>
                  <ArrowUpRight size={15} className="text-slate-300" />
                </div>
              </button>
            ))}
          </div>

          <motion.div key={activeFeature} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Project focus</div>
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white">{project.features[activeFeature].title}</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-300">{project.features[activeFeature].text}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={15} className="text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Experience summary</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">Ready for the next stage.</h3>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100 hover:bg-cyan-500/20">
              {project.cta} <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
