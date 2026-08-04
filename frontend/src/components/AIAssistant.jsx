import { useState } from "react";
import { Sparkles, FileText, MessageSquareText, Wand2 } from "lucide-react";
import api from "../services/api";

const AIAssistant = ({ formData, onDataExtracted }) => {
  const [prompt, setPrompt] = useState("");
  const [correction, setCorrection] = useState("");
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const response = await api.post("/extract", {
        prompt,
      });

      onDataExtracted(response.data);
      setPrompt("");
    } catch (err) {
      console.error(err);
      alert("Failed to extract complaint.");
    } finally {
      setLoading(false);
    }
  };

  const handlePdfExtract = async () => {
    if (!pdf) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", pdf);

      const response = await api.post("/extract-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onDataExtracted(response.data);
      setPdf(null);

    } catch (err) {
      console.error(err);
      alert("Failed to extract PDF.");
    } finally {
      setLoading(false);
    }
  };
  const handleUpdate = async () => {
    if (!correction.trim()) return;

    try {
      setLoading(true);

      const response = await api.post("/update", {
        old_data: formData,
        correction,
      });

      onDataExtracted(response.data);
      setCorrection("");
    } catch (err) {
      console.error(err);
      alert("Failed to update complaint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6" style={{ boxShadow: "var(--shadow-card)" }}>

      <div className="flex items-center gap-3 mb-5">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center"
          style={{ background: "var(--color-navy)" }}
        >
          <Sparkles className="text-white" size={16} />
        </div>
        <div>
          <h2 className="font-display text-[15px] font-bold text-slate-900 leading-tight">
            AI Complaint Assistant
          </h2>
          <p className="text-xs text-slate-400">
            Extracts and updates form data automatically
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
        <MessageSquareText size={12} />
        Paste complaint text
      </div>

      <textarea
        className="w-full border border-slate-200 rounded-xl p-3.5 h-36 resize-none text-sm outline-none transition-all duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
        placeholder="Paste the complaint here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="mt-4">

        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
          <FileText size={12} />
          Or upload a document
        </div>

        <label className="flex items-center justify-center gap-2 w-full border border-dashed border-slate-200 rounded-xl p-4 text-sm text-slate-500 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-150 cursor-pointer">
          <FileText size={15} className="text-slate-400" />
          {pdf ? pdf.name : "Choose a PDF file"}
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="hidden"
          />
        </label>

      </div>

      <button
        onClick={handleExtract}
        disabled={loading}
        className="mt-4 flex items-center justify-center gap-2 w-full text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-150"
        style={{ background: "var(--color-navy)", boxShadow: "var(--shadow-sm)" }}
      >
        <Wand2 size={15} />
        {loading ? "Extracting..." : "Extract Complaint"}
      </button>

      <button
        onClick={handlePdfExtract}
        disabled={loading || !pdf}
        className="mt-2.5 w-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:text-slate-400 transition-all duration-150"
      >
        {loading ? "Extracting PDF..." : "Extract from PDF"}
      </button>

      <div className="my-6 border-t border-slate-100" />

      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
        Follow-up Correction
      </div>

      <textarea
        className="w-full border border-slate-200 rounded-xl p-3.5 h-24 resize-none text-sm outline-none transition-all duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400"
        placeholder='Example: "Actually it was 20 bottles expiring March 2028."'
        value={correction}
        onChange={(e) => setCorrection(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        disabled={loading || Object.keys(formData).length === 0}
        className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:bg-slate-300 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-150"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        {loading ? "Updating..." : "Update Complaint"}
      </button>

    </div>
  );
};

export default AIAssistant;