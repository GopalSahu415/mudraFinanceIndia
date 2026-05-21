import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, visible] = useInView();
  
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About RupeeBridge</h1>
        <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">India's most trusted independent loan assistance platform, helping millions achieve their financial goals.</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" ref={ref}>
        <div className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">Founded on the Mission to Democratize Credit Access</h2>
            <p className="text-slate-500 leading-relaxed mb-4">RupeeBridge was founded with a simple yet powerful vision — to make quality financial assistance accessible to every Indian, regardless of their background or location.</p>
            <p className="text-slate-500 leading-relaxed">We identified that millions of Indians struggle to navigate the complex loan market, often settling for unfavorable terms due to lack of information and guidance. Our platform bridges this gap by connecting borrowers with the right lenders through a transparent, efficient, and customer-first approach.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["50,000+", "Loans Facilitated"], 
              ["120+", "Lending Partners"], 
              ["28", "States Covered"], 
              ["4.8★", "Customer Rating"]
            ].map(([v, l]) => (
              <div key={l} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-center text-white shadow-xl">
                <p className="text-3xl font-black mb-1">{v}</p>
                <p className="text-blue-200 text-xs font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Our Mission</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto leading-relaxed text-lg italic">
            "To empower every Indian with access to fair, transparent, and affordable financial products by connecting them with the best lending partners in the country."
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Important Disclosure</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800 text-sm leading-relaxed max-w-3xl mx-auto">
            RupeeBridge is an <strong>independent financial service platform</strong> and is <strong>not associated with any government organization or scheme</strong>. We are not a direct lender. All loan products are offered by our partner banks and NBFCs. Loan approval is at the sole discretion of the respective lending institution.
          </div>
        </div>
      </div>
    </div>
  );
}
