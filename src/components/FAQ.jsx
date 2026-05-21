import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function FAQ() {
  const [ref, visible] = useInView();
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What is RupeeBridge?", a: "RupeeBridge is an independent financial service platform that connects borrowers with RBI-regulated banks and NBFCs across India. We are not a direct lender — we help you find the best loan offers." },
    { q: "How do I apply for a loan?", a: "Simply fill out our online application form with your basic details and loan requirement. Our team will call you within 24 hours to guide you further and match you with suitable lenders." },
    { q: "What documents are required?", a: "Typically, you'll need identity proof (Aadhaar/PAN), address proof, income documents (salary slips or ITR), and bank statements. The exact requirements vary by loan type and lender." },
    { q: "Is there any fee for using RupeeBridge?", a: "No, our service is completely free for borrowers. We earn a referral fee from our lending partners when a loan is sanctioned, so you pay nothing extra." },
    { q: "How long does loan approval take?", a: "Approval timelines depend on the lender. Personal loans can be approved within 24–72 hours, while home and business loans typically take 7–15 working days." },
    { q: "What is the minimum and maximum loan amount?", a: "Loan amounts vary by category. Personal loans start from ₹50,000, while home loans can go up to ₹5 crore or more depending on eligibility and lender policies." },
    { q: "What is the minimum credit score required?", a: "Most lenders prefer a CIBIL score of 700 or above for unsecured loans. However, we have partners who offer loans for lower scores too, especially for secured products." },
    { q: "Is my personal data safe with RupeeBridge?", a: "Absolutely. We use bank-grade SSL encryption to protect your information. Your data is only shared with our verified lending partners for the purpose of loan assistance." },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <button className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-bold text-slate-900 text-sm pr-4">{f.q}</span>
                <span className={`text-blue-600 text-lg font-black flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === i ? "max-h-48" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
