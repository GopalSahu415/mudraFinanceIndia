import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { useToast } from "../context/ToastContext";

export default function LoanForm() {
  const [ref, visible] = useInView(0.1);
  const setToast = useToast();
  const [form, setForm] = useState({ name: "", mobile: "", email: "", loanType: "", amount: "", state: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter valid 10-digit mobile";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter valid email";
    if (!form.loanType) e.loanType = "Select loan type";
    if (!form.amount) e.amount = "Select loan amount";
    if (!form.state) e.state = "Select your state";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "YOUR_WEB3FORMS_ACCESS_KEY", subject: "New Loan Lead - MudraFinanceIndia", ...form, from_name: "MudraFinanceIndia Lead" }),
      });
      if (res.ok) {
        setToast({ msg: "Application submitted! Our team will contact you within 24 hours.", type: "success" });
        setForm({ name: "", mobile: "", email: "", loanType: "", amount: "", state: "" });
      } else throw new Error();
    } catch {
      setToast({ msg: "Submission failed. Please try again or call us directly.", type: "error" });
    } finally { setLoading(false); }
  };

  const inp = "w-full px-4 py-3.5 rounded-xl border text-slate-900 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500";
  const err = (k) => errors[k] ? "border-red-300 bg-red-50" : "border-slate-200 bg-white hover:border-slate-300";

  const states = ["Andhra Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25px 25px, rgba(99,102,241,0.4) 2px, transparent 0)", backgroundSize: "50px 50px" }}></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">Quick Application</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Apply for a Loan Today</h2>
          <p className="text-blue-200/70 mt-3">Fill the form below and our loan experts will connect you with the best offers.</p>
        </div>

        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Full Name *</label>
                <input className={`${inp} ${err("name")}`} placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Mobile Number *</label>
                <input className={`${inp} ${err("mobile")}`} placeholder="9876543210" maxLength={10} value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value.replace(/\D/,"")})} />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Email ID *</label>
                <input type="email" className={`${inp} ${err("email")}`} placeholder="rahul@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Loan Type *</label>
                <select className={`${inp} ${err("loanType")}`} value={form.loanType} onChange={e => setForm({...form, loanType: e.target.value})}>
                  <option value="">Select Loan Type</option>
                  <option>Home Loan</option><option>Personal Loan</option><option>Business Loan</option><option>Car Loan</option>
                </select>
                {errors.loanType && <p className="text-red-400 text-xs mt-1">{errors.loanType}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Loan Amount *</label>
                <select className={`${inp} ${err("amount")}`} value={form.amount} onChange={e => setForm({...form, amount: e.target.value})}>
                  <option value="">Select Amount</option>
                  <option>Below ₹1 Lakh</option><option>₹1L – ₹5L</option><option>₹5L – ₹10L</option><option>₹10L – ₹25L</option><option>₹25L – ₹50L</option><option>Above ₹50L</option>
                </select>
                {errors.amount && <p className="text-red-400 text-xs mt-1">{errors.amount}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">State *</label>
                <select className={`${inp} ${err("state")}`} value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s}>{s}</option>)}
                </select>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-black text-base shadow-2xl shadow-blue-500/30 hover:scale-[1.02] hover:shadow-blue-500/50 disabled:opacity-70 disabled:scale-100 transition-all duration-200 flex items-center justify-center gap-3">
              {loading ? (
                <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Submitting...</>
              ) : "Submit Application →"}
            </button>

            <p className="text-blue-200/50 text-xs text-center mt-4 leading-relaxed">
              By submitting this form, you agree to be contacted by our loan partners regarding loan assistance. Your information is encrypted and secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
