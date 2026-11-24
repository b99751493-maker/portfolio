import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div className="mb-6 text-6xl font-semibold tracking-[-0.08em] text-cyan-300">404</div>
      <h1 className="text-3xl font-semibold tracking-[-0.06em]">This page does not exist.</h1>
      <p className="mt-3 max-w-md text-slate-300">The route you opened is outside the current portfolio experience. Return to the main project collection and continue exploring.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>
    </div>
  );
}
