import { useInView } from "../hooks/useInView";

export default function WhyChooseUs() {
  const [ref, visible] = useInView();
  
  const features = [
    { icon: "⚡", title: "Quick Approval Assistance", desc: "Our network processes applications rapidly, connecting you with lenders who match your profile." },
    { icon: "🔒", title: "100% Secure Process", desc: "Your data is protected with bank-grade encryption and industry-standard security protocols." },
    { icon: "🤝", title: "Trusted Loan Partners", desc: "We connect you only with RBI-regulated financial institutions and verified NBFCs." },
    { icon: "📋", title: "Minimal Documentation", desc: "Simple, streamlined process. Submit basic KYC documents and get started instantly." },
    { icon: "📞", title: "Dedicated Support", desc: "Our loan experts guide you through every step of the application process." },
    { icon: "📊", title: "Best Rate Matching", desc: "We compare offers from multiple lenders to help you get the most competitive rates." },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6">Your Trusted Financial Partner in India</h2>
            <p className="text-slate-500 leading-relaxed mb-8">MudraFinanceIndia bridges the gap between borrowers and India's top financial institutions. We simplify the loan process so you can focus on what matters most — achieving your financial goals.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-5 py-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-slate-900">50,000+</p>
                  <p className="text-slate-500 text-sm">Loans Facilitated</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-5 py-4">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-slate-900">4.8/5 Rating</p>
                  <p className="text-slate-500 text-sm">From 10,000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className={`p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center text-xl mb-3 transition-colors duration-300">{f.icon}</div>
                <h3 className="text-slate-900 font-bold text-sm mb-1">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
