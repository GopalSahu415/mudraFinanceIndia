import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoanForm() {
  const [ref, visible] = useInView(0.1);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", loanType: "", amount: "", state: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    // Check localStorage for previous submission cooldown
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    if (lastSubmitTime) {
      const timePassed = Math.floor((Date.now() - parseInt(lastSubmitTime, 10)) / 1000);
      if (timePassed < 30) {
        setCooldown(30 - timePassed);
      }
    }
  }, []);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    else if (form.name.trim().length < 3) e.name = "Name must be at least 3 characters.";

    if (!form.mobile) e.mobile = "Mobile number is required.";
    else if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Must be exactly 10 digits starting with 6-9.";

    if (!form.email) e.email = "Email ID is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";

    if (!form.loanType) e.loanType = "Please select a loan type.";
    if (!form.amount) e.amount = "Please enter a loan amount.";
    else if (isNaN(form.amount) || Number(form.amount) <= 0) e.amount = "Please enter a valid amount.";
    if (!form.state) e.state = "Please select your state.";
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cooldown > 0) {
      toast.error(`Please wait ${cooldown} seconds before submitting again.`);
      return;
    }

    if (!validate()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }
    
    setLoading(true);
    
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success("Loan form submitted successfully. Our team will contact you within 24 hours.");
        setForm({ name: "", mobile: "", email: "", loanType: "", amount: "", state: "" });
        
        // Start 30 seconds cooldown
        localStorage.setItem("lastSubmitTime", Date.now().toString());
        setCooldown(30);
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message || "Submission failed. Please check your connection and try again.");
    } finally { 
      setLoading(false); 
    }
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
            {/* Web3Forms Hidden Fields & Anti-Spam */}
            <input type="hidden" name="access_key" value="1b6a9362-e824-4db4-98e9-f6553378059a" />
            <input type="hidden" name="subject" value="New Loan Lead - MudraFinanceIndia" />
            <input type="hidden" name="from_name" value="MudraFinanceIndia Lead" />
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Full Name *</label>
                <input name="name" className={`${inp} ${err("name")}`} placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Mobile Number *</label>
                <input name="mobile" className={`${inp} ${err("mobile")}`} placeholder="9876543210" maxLength={10} value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value.replace(/\D/,"")})} />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Email ID *</label>
                <input name="email" type="email" className={`${inp} ${err("email")}`} placeholder="rahul@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Loan Type *</label>
                <select name="loanType" className={`${inp} ${err("loanType")}`} value={form.loanType} onChange={e => setForm({...form, loanType: e.target.value})}>
                  <option value="">Select Loan Type</option>
                  <option value="Home Loan">Home Loan</option><option value="Personal Loan">Personal Loan</option><option value="Business Loan">Business Loan</option><option value="Car Loan">Car Loan</option>
                </select>
                {errors.loanType && <p className="text-red-400 text-xs mt-1">{errors.loanType}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">Loan Amount (₹) *</label>
                <input type="number" name="amount" className={`${inp} ${err("amount")}`} placeholder="e.g. 500000" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} />
                {errors.amount && <p className="text-red-400 text-xs mt-1">{errors.amount}</p>}
              </div>
              <div>
                <label className="block text-blue-100 text-xs font-bold mb-2 uppercase tracking-wide">State *</label>
                <select name="state" className={`${inp} ${err("state")}`} value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                  <option value="">Select State</option>
                  {states.map(s => <option value={s} key={s}>{s}</option>)}
                </select>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>
            </div>

            <button type="submit" disabled={loading || cooldown > 0} className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-black text-base shadow-2xl shadow-blue-500/30 hover:scale-[1.02] hover:shadow-blue-500/50 disabled:opacity-70 disabled:scale-100 transition-all duration-200 flex items-center justify-center gap-3">
              {loading ? (
                <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Submitting...</>
              ) : cooldown > 0 ? (
                `Please wait ${cooldown}s`
              ) : "Submit Application →"}
            </button>

            <p className="text-blue-200/50 text-xs text-center mt-4 leading-relaxed">
              By submitting this form, you agree to be contacted by our loan partners regarding loan assistance. Your information is encrypted and secure.
            </p>
          </form>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="!rounded-xl !shadow-2xl !font-medium text-sm sm:text-base !p-3 sm:!p-4"
      />
    </section>
  );
}
