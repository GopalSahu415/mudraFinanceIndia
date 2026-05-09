import { useInView } from "../hooks/useInView";

export default function ProcessTimeline() {
  const [ref, visible] = useInView();
  const steps = [
    { num: "01", icon: "📝", title: "Fill Application", desc: "Complete our simple online form with your basic details and loan requirements in under 2 minutes." },
    { num: "02", icon: "📞", title: "Verification Call", desc: "Our loan expert contacts you to verify details and understand your financial needs better." },
    { num: "03", icon: "✅", title: "Loan Assistance", desc: "Get connected with the best-matched lender and receive your loan offer with competitive terms." },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">3 Simple Steps to Get Your Loan</h2>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 w-1/2 mx-auto" style={{ left: "16%", right: "16%" }}></div>
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform duration-300">{s.icon}</div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-black text-blue-600">{i + 1}</span>
                </div>
                <h3 className="text-slate-900 font-black text-xl mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
