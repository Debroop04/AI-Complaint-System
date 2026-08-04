import {
  User,
  Package,
  AlertTriangle,
  ClipboardCheck,
  RotateCcw,
  Save,
  Sparkles,
  Loader,
  CircleCheck,
} from "lucide-react";

import FormField from "./FormField";
import FormSection from "./FormSection";

function ComplaintForm({ formData = {} }) {
  const hasData = Object.keys(formData).length > 0;

  return (
    <div className="space-y-6">

      {/* ========================= */}
      {/* PAGE HEADER */}
      {/* ========================= */}

      <div className="bg-white rounded-2xl border border-slate-200 p-7" style={{ boxShadow: "var(--shadow-card)" }}>

        <div className="flex justify-between items-start">

          <div>

            <h2 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
              Log Customer Complaint
            </h2>

            <p className="mt-1.5 text-slate-500 max-w-xl text-sm leading-relaxed">
              AI can automatically populate this form from emails,
              complaint letters, PDFs and customer messages.
            </p>

          </div>

          <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-200 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Pending Triage
          </div>

        </div>

      </div>

      {/* ====================================================== */}
      {/* CUSTOMER INFORMATION */}
      {/* ====================================================== */}

      <FormSection
        number="1"
        title="Origin & Customer Details"
        icon={User}
      >

        <FormField
          required
          label="Complaint Source"
          value={formData.complaint_source || ""}
          readOnly
          aiFilled={!!formData.complaint_source}
        />

        <FormField
          required
          label="Customer Name"
          value={formData.customer_name || ""}
          readOnly
          aiFilled={!!formData.customer_name}
        />

        <FormField
          label="Customer Contact"
          value={formData.customer_contact || ""}
          readOnly
          aiFilled={!!formData.customer_contact}
        />

        <FormField
          label="Complaint Date"
          type="date"
          value={formData.complaint_date || ""}
          readOnly
          aiFilled={!!formData.complaint_date}
        />

        <FormField
          label="Country"
          placeholder="Country"
        />

        <FormField
        label="City"
        value={formData.city || ""}
        readOnly
        aiFilled={!!formData.city}
      />

      </FormSection>

      {/* ====================================================== */}
      {/* PRODUCT INFORMATION */}
      {/* ====================================================== */}

      <FormSection
        number="2"
        title="Product & Batch Information"
        icon={Package}
      >

        <FormField
          required
          label="Product Name"
          value={formData.product_name || ""}
          readOnly
          aiFilled={!!formData.product_name}
        />

        <FormField
          label="Strength"
          value={formData.strength || ""}
          readOnly
          aiFilled={!!formData.strength}
        />

        <FormField
          label="Dosage Form"
          value={formData.dosage_form || ""}
          readOnly
          aiFilled={!!formData.dosage_form}
        />

        <FormField
          required
          label="Batch Number"
          value={formData.batch_number || ""}
          readOnly
          aiFilled={!!formData.batch_number}
        />

        <FormField
          label="Manufacturing Date"
          type="date"
          value={formData.manufacturing_date || ""}
          readOnly
          aiFilled={!!formData.manufacturing_date}
        />

        <FormField
          label="Expiry Date"
          value={formData.expiry_date || ""}
          readOnly
          aiFilled={!!formData.expiry_date}
        />

        <FormField
          label="Pack Size"
          placeholder="10 Tablets"
        />

        <FormField
          label="Quantity Affected"
          value={formData.quantity_affected || ""}
          readOnly
          aiFilled={!!formData.quantity_affected}
        />

      </FormSection>

            {/* ====================================================== */}
      {/* COMPLAINT DETAILS */}
      {/* ====================================================== */}

      <FormSection
        number="3"
        title="Complaint Details"
        icon={AlertTriangle}
      >

        <FormField
          required
          label="Complaint Category"
          value={formData.complaint_category || ""}
          readOnly
          aiFilled={!!formData.complaint_category}
        />

        <FormField
          label="Severity"
          value={formData.severity || ""}
          readOnly
          aiFilled={!!formData.severity}
        />

        <FormField
          label="Priority"
          value={formData.priority || ""}
          readOnly
          aiFilled={!!formData.priority}
        />

        <FormField
          label="Complaint Status"
          value={formData.complaint_status || ""}
          readOnly
          aiFilled={!!formData.complaint_status}
        />

        <div className="md:col-span-2">

          <FormField
            required
            label="Complaint Description"
            type="textarea"
            value={formData.complaint_description || ""}
            readOnly
            aiFilled={!!formData.complaint_description}
          />

        </div>

      </FormSection>

      {/* ====================================================== */}
      {/* INITIAL ASSESSMENT */}
      {/* ====================================================== */}

      <FormSection
        number="4"
        title="Initial Assessment"
        icon={ClipboardCheck}
      >

        <FormField
          label="Assigned To"
          value={formData.assigned_to || ""}
          readOnly
          aiFilled={!!formData.assigned_to}
        />

        <FormField
          label="Investigation Due Date"
          type="date"
          value={formData.investigation_due_date || ""}
          readOnly
          aiFilled={!!formData.investigation_due_date}
        />

        <FormField
          label="Root Cause"
          value={formData.root_cause || ""}
          readOnly
          aiFilled={!!formData.root_cause}
        />

        <FormField
          label="Risk Level"
          value={formData.risk_level || ""}
          readOnly
          aiFilled={!!formData.risk_level}
        />

        <div className="md:col-span-2">

          <FormField
            label="Initial Remarks"
            type="textarea"
            value={formData.initial_remarks || ""}
            readOnly
            aiFilled={!!formData.initial_remarks}
          />

        </div>

      </FormSection>

            {/* ====================================================== */}
      {/* REGULATORY INFORMATION */}
      {/* ====================================================== */}

      <FormSection
        number="5"
        title="Regulatory & Follow-up"
        icon={ClipboardCheck}
      >

        <FormField
          label="Regulatory Impact"
          type="select"
          placeholder="Select"
          options={[
            "None",
            "Minor",
            "Major",
            "Critical",
          ]}
        />

        <FormField
          label="Recall Required"
          type="select"
          placeholder="Select"
          options={[
            "No",
            "Yes",
          ]}
        />

        <FormField
          label="CAPA Required"
          type="select"
          placeholder="Select"
          options={[
            "No",
            "Yes",
          ]}
        />

        <FormField
          label="Complaint Reference ID"
          placeholder="Auto Generated"
        />

        <div className="md:col-span-2">

          <FormField
            label="Additional Notes"
            type="textarea"
            placeholder="Additional notes or regulatory comments..."
          />

        </div>

      </FormSection>

      {/* ====================================================== */}
      {/* SUMMARY CARDS */}
      {/* ====================================================== */}

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start justify-between" style={{ boxShadow: "var(--shadow-card)" }}>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Complaint Status
            </p>

            <h3 className="mt-1.5 font-display text-lg font-bold text-amber-600">
              {formData.complaint_status || "Pending Triage"}
            </h3>
          </div>

          <div className="h-8 w-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <AlertTriangle size={15} />
          </div>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start justify-between" style={{ boxShadow: "var(--shadow-card)" }}>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              AI Extraction
            </p>

            <h3 className="mt-1.5 font-display text-lg font-bold text-blue-600">
              {hasData ? "Completed" : "Awaiting Input"}
            </h3>
          </div>

          <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            {hasData ? <CircleCheck size={15} /> : <Sparkles size={15} />}
          </div>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start justify-between" style={{ boxShadow: "var(--shadow-card)" }}>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Investigation
            </p>

            <h3 className="mt-1.5 font-display text-lg font-bold text-emerald-600">
              Not Started
            </h3>
          </div>

          <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <Loader size={15} />
          </div>

        </div>

      </div>

      {/* ====================================================== */}
      {/* ACTION BUTTONS */}
      {/* ====================================================== */}

      <div className="flex justify-end gap-3 pt-2 pb-10">

        <button
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-150"
        >
          <RotateCcw size={16} />
          Reset Form
        </button>

        <button
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all duration-150"
          style={{ background: "var(--color-navy)", boxShadow: "var(--shadow-sm)" }}
        >
          <Save size={16} />
          Save Complaint
        </button>

      </div>

    </div>
  );
}

export default ComplaintForm;