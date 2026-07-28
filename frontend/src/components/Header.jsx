import { ShieldCheck, CircleDashed } from "lucide-react";

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 py-5 flex justify-between items-center">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div
            className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-md shadow-blue-950/10 ring-1 ring-white/10"
            style={{
              background: "linear-gradient(145deg, var(--color-navy) 0%, var(--color-accent) 100%)",
            }}
          >
            <ShieldCheck className="text-white" size={28} strokeWidth={2.25} />
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                AI Complaint Management
              </h1>
              <span className="font-display text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 rounded-md px-2 py-0.5">
                QMS
              </span>
            </div>

            <p className="text-slate-500 text-sm mt-0.5">
              Pharmaceutical Quality Assurance &amp; Customer Complaint Portal
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full border border-amber-200">

            <CircleDashed size={16} className="animate-spin [animation-duration:3s]" />

            <span className="text-sm font-semibold tracking-tight">
              Pending Triage
            </span>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;