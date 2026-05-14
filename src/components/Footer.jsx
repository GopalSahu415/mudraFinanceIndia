import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Footer() {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();
  
  const nav = (path) => { 
    if (path === "/apply") {
      requireAuth(() => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return;
    }
    navigate(path); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">Ready to Get Your Loan?</h3>
          <p className="text-blue-100/80 mb-6">Apply now and get connected with top lenders in India within 24 hours.</p>
          <button onClick={() => nav("/apply")} className="px-8 py-4 bg-white text-blue-700 rounded-xl font-black hover:bg-blue-50 transition-colors shadow-2xl">Apply Now — It's Free →</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"><span className="text-white font-black text-sm">M</span></div>
              <div><p className="font-black text-base">MudraFinance</p><p className="text-blue-400 text-[10px] font-bold tracking-widest uppercase">India</p></div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">India's trusted loan assistance platform helping you connect with the best financial partners for all your loan needs.</p>
            <div className="flex gap-3">
              {["f", "in", "tw", "yt"].map(s => <span key={s} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-xs font-bold">{s}</span>)}
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-slate-300 mb-4">Loan Products</p>
            <div className="space-y-2.5">
              {[["Home Loan", "/home-loan"], ["Personal Loan", "/personal-loan"], ["Business Loan", "/business-loan"], ["Car Loan", "/car-loan"]].map(([l, p]) => (
                <button key={p} onClick={() => nav(p)} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">{l}</button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-slate-300 mb-4">Company</p>
            <div className="space-y-2.5">
              {[["About Us", "/about"], ["Contact Us", "/contact"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Apply Now", "/apply"]].map(([l, p]) => (
                <button key={p} onClick={() => nav(p)} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">{l}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-slate-300 mb-4">Contact Us</p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2"><span>📍</span><p>123, Finance Tower, Connaught Place, New Delhi – 110001</p></div>
              <div className="flex items-center gap-2"><span>📞</span><p>+91 98765 43210</p></div>
              <div className="flex items-center gap-2"><span>✉️</span><p>support@mudrafinanceindia.com</p></div>
              <div className="flex items-center gap-2"><span>🕐</span><p>Mon–Sat, 9 AM – 6 PM</p></div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
          <div className="bg-slate-900 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> We are not a direct lender. We only help users connect with financial service providers and loan partners. MudraFinanceIndia is an independent financial service platform and is not associated with any government organization or scheme. Loan approval is at the sole discretion of the respective lending institution. Interest rates and terms are subject to change without notice.
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} MudraFinanceIndia. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => nav("/privacy")} className="hover:text-slate-400 transition-colors">Privacy Policy</button>
              <button onClick={() => nav("/terms")} className="hover:text-slate-400 transition-colors">Terms & Conditions</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
