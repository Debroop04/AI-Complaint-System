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
    "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 disabled:bg-slate-50 disabled:text-slate-400";

  const readOnlyClass = readOnly
    ? aiFilled
      ? "bg-blue-50/30 border-blue-100 cursor-default"
      : "bg-slate-50 cursor-default"
    : "";

  return (
    <div className="flex flex-col gap-1.5">

      <div className="flex items-center justify-between">
        <label className="text-[12.5px] font-semibold text-slate-500 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-0.5">*</span>}
        </label>

        {aiFilled && (
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-blue-600">
            <Sparkles size={10} strokeWidth={2.5} />
            AI filled
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