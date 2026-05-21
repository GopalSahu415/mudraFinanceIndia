export default function TermsConditions() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Terms & Conditions</h1>
        <p className="text-blue-200/80">Last updated: January 1, 2025</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {[
          ["1. Acceptance of Terms", "By using RupeeBridge's services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services."],
          ["2. Nature of Service", "RupeeBridge is a financial service intermediary and loan facilitation platform. We are NOT a bank, NBFC, or direct lender. We connect borrowers with lending institutions and earn referral fees."],
          ["3. No Guarantee of Approval", "Submitting an application through our platform does not guarantee loan approval. All lending decisions are made by the respective financial institutions based on their own criteria."],
          ["4. User Responsibilities", "You agree to provide accurate and truthful information. Any false information may result in rejection of your application and may have legal consequences."],
          ["5. Fees", "Our service is free for borrowers. We earn referral fees from lending partners. There are no hidden charges from RupeeBridge for connecting you with lenders."],
          ["6. Limitation of Liability", "RupeeBridge is not liable for any losses arising from loan rejections, interest rate changes, or lender decisions. We provide facilitation services only."],
          ["7. Governing Law", "These terms are governed by Indian law. Any disputes shall be subject to the jurisdiction of Delhi courts."],
        ].map(([title, content]) => (
          <div key={title} className="mb-8">
            <h2 className="text-xl font-black text-slate-900 mb-3">{title}</h2>
            <p className="text-slate-600 leading-relaxed">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
