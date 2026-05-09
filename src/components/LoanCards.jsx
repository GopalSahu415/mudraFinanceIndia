import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";

export default function LoanCards() {
  const [ref, visible] = useInView();
  const navigate = useNavigate();

  const loans = [
    { id: "home-loan", path: "/home-loan", icon: "🏠", title: "Home Loan", desc: "Make your dream home a reality with competitive rates and flexible tenures up to 30 years.", rate: "8.40%", color: "from-blue-500 to-cyan-500" },
    { id: "personal-loan", path: "/personal-loan", icon: "💼", title: "Personal Loan", desc: "Get instant funds for any personal need — medical, travel, wedding, or education.", rate: "10.50%", color: "from-indigo-500 to-purple-500" },
    { id: "business-loan", path: "/business-loan", icon: "🏢", title: "Business Loan", desc: "Scale your business with collateral-free loans and quick disbursement for SMEs.", rate: "12.00%", color: "from-emerald-500 to-teal-500" },
    { id: "car-loan", path: "/car-loan", icon: "🚗", title: "Car Loan", desc: "Drive your dream car home with easy EMIs and fast processing from top lenders.", rate: "7.99%", color: "from-orange-500 to-amber-500" },
  ];

  return (
    <section className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Our Loan Products</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">Find the Right Loan for You</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">Explore a wide range of loan options tailored to your needs, with competitive interest rates and flexible repayment options.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loans.map((l, i) => (
            <div 
              key={l.id} 
              className={`group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} 
              style={{ transitionDelay: `${i * 100}ms` }} 
              onClick={() => { navigate(l.path); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${l.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>{l.icon}</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{l.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{l.desc}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Starting from</p>
                  <p className={`text-lg font-black bg-gradient-to-r ${l.color} bg-clip-text text-transparent`}>{l.rate} p.a.</p>
                </div>
                <span className="w-9 h-9 bg-slate-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 text-sm font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
