function FormSection({ number, title, icon: Icon, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>

      <div className="flex items-center gap-3 px-7 pt-6 pb-4 border-b border-slate-100">

        {Icon && (
          <div className="h-8 w-8 shrink-0 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
            <Icon size={16} strokeWidth={2} />
          </div>
        )}

        <h3 className="font-display text-[15px] font-bold text-slate-800 tracking-tight">
          {title}
        </h3>

        <span className="ml-auto font-display text-[11px] font-semibold text-slate-300 tabular">
          {String(number).padStart(2, "0")}
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-7">
        {children}
      </div>

    </div>
  );
}

export default FormSection;