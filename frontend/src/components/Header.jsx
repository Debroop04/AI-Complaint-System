import { ShieldCheck, CircleDashed } from "lucide-react";

function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 py-4 flex justify-between items-center">

        {/* Left */}

        <div className="flex items-center gap-3.5">

          <div
            className="h-11 w-11 rounded-xl flex items-center justify-center"
            style={{ background: "var(--color-navy)" }}
          >
            <ShieldCheck className="text-white" size={20} strokeWidth={2} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-lg font-bold tracking-tight text-slate-900">
                AI Complaint Management
              </h1>
              <span className="font-display text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 border border-slate-200 rounded-md px-1.5 py-0.5">
                QMS
              </span>
            </div>

            <p className="text-slate-400 text-xs mt-0.5">
              Pharmaceutical Quality Assurance &amp; Customer Complaint Portal
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1.5 text-amber-700 px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50/70">

            <CircleDashed size={13} className="animate-spin [animation-duration:3s]" />

            <span className="text-xs font-semibold tracking-tight">
              Pending Triage
            </span>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;