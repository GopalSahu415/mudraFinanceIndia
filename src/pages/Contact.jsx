import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function Contact() {
  const setToast = useToast();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "YOUR_WEB3FORMS_ACCESS_KEY", subject: "Contact Form - MudraFinanceIndia", ...form }),
      });
      if (res.ok) { 
        setToast({ msg: "Message sent! We'll get back to you within 24 hours.", type: "success" }); 
        setForm({ name: "", email: "", mobile: "", message: "" }); 
      } else {
        throw new Error();
      }
    } catch { 
      setToast({ msg: "Failed to send message. Please try again.", type: "error" }); 
    } finally { 
      setLoading(false); 
    }
  };

  const inp = "w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-medium placeholder-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-300";

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Us</h1>
        <p className="text-blue-200/80 text-lg">We're here to help. Reach out to us anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8">Get in Touch</h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: "📍", title: "Office Address", val: "123, Finance Tower, Connaught Place\nNew Delhi – 110001, India" },
                { icon: "📞", title: "Phone Number", val: "+91 98765 43210\n+91 11 4567 8900" },
                { icon: "✉️", title: "Email Address", val: "support@mudrafinanceindia.com\nloans@mudrafinanceindia.com" },
                { icon: "🕐", title: "Business Hours", val: "Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Closed" },
              ].map(c => (
                <div key={c.title} className="flex gap-4 p-5 bg-slate-50 rounded-2xl">
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">{c.title}</p>
                    <p className="text-slate-500 text-sm whitespace-pre-line">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="w-full h-48 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 overflow-hidden">
              <div className="text-center">
                <p className="text-3xl mb-2">🗺️</p>
                <p className="text-slate-500 text-sm font-medium">Google Map</p>
                <p className="text-slate-400 text-xs">Connaught Place, New Delhi</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-700 text-xs font-bold mb-2 uppercase tracking-wide">Full Name</label>
                <input required className={inp} placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-bold mb-2 uppercase tracking-wide">Email</label>
                <input type="email" required className={inp} placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-bold mb-2 uppercase tracking-wide">Mobile</label>
                <input className={inp} placeholder="9876543210" value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-bold mb-2 uppercase tracking-wide">Message</label>
                <textarea required className={inp} rows={4} placeholder="How can we help you?" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-black hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2">
                {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</> : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
