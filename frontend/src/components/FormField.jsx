import { Sparkles } from "lucide-react";

function FormField({
  label,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  options = [],
  required = false,
  disabled = false,
  readOnly = false,
  aiFilled = false,
}) {
  const baseClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all duration-150 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 disabled:bg-slate-100 disabled:text-slate-500";

  const readOnlyClass = readOnly
    ? aiFilled
      ? "bg-blue-50/40 border-blue-200 cursor-default"
      : "bg-slate-50 cursor-default"
    : "";

  return (
    <div className="flex flex-col gap-1.5">

      <div className="flex items-center justify-between">
        <label className="text-[13px] font-semibold text-slate-600 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-0.5">*</span>}
        </label>

        {aiFilled && (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
            <Sparkles size={11} strokeWidth={2.5} />
            AI Filled
          </span>
        )}
      </div>

      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${baseClass} ${readOnlyClass}`}
        >
          <option value="">
            {placeholder || "Select"}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

      ) : type === "textarea" ? (

        <textarea
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={`${baseClass} resize-none ${readOnlyClass}`}
        />

      ) : (

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={`${baseClass} ${readOnlyClass} ${type === "date" ? "tabular" : ""}`}
        />

      )}

    </div>
  );
}

export default FormField;