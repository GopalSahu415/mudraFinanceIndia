import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoanDetails({ type }) {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();

  const config = {
    "home-loan": { icon: "🏠", title: "Home Loan", tagline: "Make Your Dream Home a Reality", color: "from-blue-500 to-cyan-500", tenure: "30 years", max: "₹5 Crore", features: ["Up to 90% funding of property value", "Flexible tenure up to 30 years", "Tax benefits under Section 80C & 24", "Balance transfer facility available", "Top-up loans available", "Quick processing through our network"], docs: ["Aadhaar & PAN Card", "Last 3 months salary slips", "6 months bank statements", "Property documents", "ITR for 2 years", "Form 16"] },
    "personal-loan": { icon: "💼", title: "Personal Loan", tagline: "Funds for Every Personal Need", color: "from-indigo-500 to-purple-500", tenure: "5 years", max: "₹40 Lakh", features: ["No collateral required", "Approval in 24-72 hours", "Minimal documentation", "Flexible repayment options", "Pre-closure allowed", "Online account management"], docs: ["Aadhaar & PAN Card", "Last 3 months salary slips", "3 months bank statements", "Employment certificate", "ITR/Form 16"] },
    "business-loan": { icon: "🏢", title: "Business Loan", tagline: "Fuel Your Business Growth", color: "from-emerald-500 to-teal-500", tenure: "7 years", max: "₹2 Crore", features: ["Collateral-free options available", "Working capital & term loans", "Quick disbursement", "Flexible repayment schedules", "Loan against property option", "MSME-specific schemes"], docs: ["Business registration documents", "GST returns (last 2 years)", "ITR for 3 years", "Bank statements (12 months)", "Aadhaar & PAN of proprietors", "Financial statements"] },
    "car-loan": { icon: "🚗", title: "Car Loan", tagline: "Drive Your Dream Car Today", color: "from-orange-500 to-amber-500", tenure: "7 years", max: "₹1 Crore", features: ["Up to 100% on-road price financing", "New and used car loans", "Quick 48-hour processing", "Competitive interest rates", "Flexible EMI options", "No prepayment penalty"], docs: ["Aadhaar & PAN Card", "Last 3 months salary slips", "3 months bank statements", "Car proforma invoice", "Driving license"] },
  };
  const c = config[type] || config["personal-loan"];

  return (
    <div className="relative">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${c.color} flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xl`}>{c.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{c.title}</h1>
          <p className="text-blue-200/80 text-lg mb-8">{c.tagline}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[["Max Tenure", c.tenure], ["Max Amount", c.max]].map(([l, v]) => (
              <div key={l} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center">
                <p className="text-white font-black text-xl">{v}</p>
                <p className="text-blue-200/70 text-xs font-medium mt-1">{l}</p>
              </div>
            ))}
          </div>
          <button onClick={() => requireAuth(() => { navigate("/apply"); window.scrollTo({ top: 0, behavior: "smooth" }); })} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-black shadow-2xl hover:scale-105 transition-all">Apply Now →</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Key Features</h2>
            <div className="space-y-3">
              {c.features.map(f => (
                <div key={f} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <p className="text-slate-700 text-sm font-medium">{f}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Documents Required</h2>
            <div className="space-y-3">
              {c.docs.map((d, i) => (
                <div key={d} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-slate-700 text-sm font-medium">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
