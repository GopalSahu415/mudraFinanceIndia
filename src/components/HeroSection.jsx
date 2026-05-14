import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import { useAuth } from "../context/AuthContext";

export default function HeroSection() {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();
  const nav = (path) => { 
    navigate(path); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* BG pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25px 25px, rgba(99,102,241,0.3) 2px, transparent 0)", backgroundSize: "50px 50px" }}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 text-xs font-semibold tracking-wide uppercase">Trusted by 50,000+ Indians</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Fast &amp; Easy<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Loan Assistance</span><br />
              Across India
            </h1>

            <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg">
              Connect with trusted loan partners in minutes. Home loans, personal loans, business loans, and more — with minimal documentation and quick approval assistance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => requireAuth(() => nav("/apply"))} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-base shadow-2xl shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-200">
                Apply Now <span className="text-lg">→</span>
              </button>
              <button onClick={() => requireAuth(() => { document.getElementById("eligibility")?.scrollIntoView({ behavior: "smooth" }); })} className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                Check Eligibility
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {["🔒 100% Secure", "⚡ Quick Response", "📋 Minimal Docs", "🤝 Trusted Partners"].map(b => (
                <span key={b} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-xs text-blue-100 font-medium backdrop-blur-sm">{b}</span>
              ))}
            </div>
          </div>

          {/* Right: Stats + Floating Card */}
          <div className="relative flex justify-center">
            {/* Main card */}
            <div className="relative w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <p className="text-blue-200 text-sm font-semibold mb-6 uppercase tracking-wide">Our Impact</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Loans Assisted", val: 50000, suffix: "+" },
                    { label: "Trusted Partners", val: 120, suffix: "+" },
                    { label: "States Covered", val: 28, suffix: "" },
                    { label: "Happy Clients", val: 98, suffix: "%" },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <p className="text-3xl font-black text-white"><Counter target={s.val} suffix={s.suffix} /></p>
                      <p className="text-blue-200/70 text-xs mt-1 font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-4 bg-emerald-400 text-emerald-900 rounded-2xl px-4 py-2 shadow-xl font-bold text-sm animate-bounce-slow">
                ✓ RBI Compliant Partners
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">⚡</div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Quick Response</p>
                  <p className="text-slate-400 text-xs">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-blue-200 text-xs">Scroll to explore</span>
          <div className="w-5 h-8 border border-blue-200/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-blue-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
