import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const [ref, visible] = useInView();
  const testimonials = [
    { name: "Priya Mehta", city: "Mumbai, Maharashtra", review: "MudraFinanceIndia made my home loan process incredibly smooth. Within 48 hours, I had three competitive offers in hand. Highly recommended!", rating: 5, initials: "PM", color: "from-blue-500 to-indigo-500" },
    { name: "Rajesh Kumar", city: "Bengaluru, Karnataka", review: "Got my business loan sanctioned within a week with their help. The team was professional and guided me throughout the documentation process.", rating: 5, initials: "RK", color: "from-emerald-500 to-teal-500" },
    { name: "Sunita Agarwal", city: "Delhi, NCR", review: "I was skeptical at first, but MudraFinance connected me with a great lender for my personal loan. The process was transparent and hassle-free.", rating: 5, initials: "SA", color: "from-purple-500 to-pink-500" },
    { name: "Amit Singh", city: "Pune, Maharashtra", review: "Excellent service! Applied for a car loan and got approved faster than I expected. The interest rate offered was lower than what my bank quoted.", rating: 4, initials: "AS", color: "from-orange-500 to-amber-500" },
    { name: "Kavitha Reddy", city: "Hyderabad, Telangana", review: "Very professional platform. The loan expert called me within an hour of form submission and helped me get the best deal for my home loan.", rating: 5, initials: "KR", color: "from-cyan-500 to-blue-500" },
    { name: "Vikram Joshi", city: "Ahmedabad, Gujarat", review: "Smooth experience from start to finish. MudraFinanceIndia's partner bank gave me much better terms than my existing bank. Thank you!", rating: 5, initials: "VJ", color: "from-rose-500 to-red-500" },
  ];

  return (
    <section className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Customer Stories</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">What Our Customers Say</h2>
          <p className="text-slate-500 mt-3">Trusted by thousands of Indians for their loan needs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j} className="text-amber-400">★</span>)}
                {t.rating < 5 && <span className="text-slate-200">★</span>}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs`}>{t.initials}</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
