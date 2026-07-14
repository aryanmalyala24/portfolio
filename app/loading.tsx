export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-6 text-slate-100">
      <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-slate-950/95 px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-sky-400 text-slate-950 shadow-[0_0_40px_rgba(124,92,255,0.3)]">
          <span className="text-3xl font-semibold">A</span>
        </div>
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Loading portfolio</p>
          <h1 className="text-3xl font-semibold text-white">Aryan Malyala</h1>
          <p className="max-w-sm text-slate-400">
            Building a smooth and polished experience for recruiters and engineering teams and touching kids.
          </p>
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/3 animate-loading rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400" />
        </div>
      </div>
      <style>{`@keyframes loading {0%{transform:translateX(-100%);}100%{transform:translateX(300%);}} .animate-loading {animation: loading 1.8s ease-in-out infinite;}`}</style>
    </div>
  );
}
