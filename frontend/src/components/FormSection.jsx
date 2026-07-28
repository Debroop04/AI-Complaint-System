function FormSection({ number, title, icon: Icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

      <div className="flex items-center gap-3 px-8 pt-7 pb-5 border-b border-slate-100">

        <div
          className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center font-display text-sm font-bold text-white"
          style={{
            background: "linear-gradient(145deg, var(--color-navy) 0%, var(--color-accent) 100%)",
          }}
        >
          {number}
        </div>

        {Icon && (
          <div className="h-9 w-9 shrink-0 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
            <Icon size={18} strokeWidth={2} />
          </div>
        )}

        <h3 className="font-display text-lg font-bold text-slate-800 tracking-tight">
          {title}
        </h3>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
        {children}
      </div>

    </div>
  );
}

export default FormSection;