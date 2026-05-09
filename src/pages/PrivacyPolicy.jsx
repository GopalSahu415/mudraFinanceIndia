export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-blue-200/80">Last updated: January 1, 2025</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none">
        {[
          ["1. Information We Collect", "We collect personal information you provide when applying for loans, including name, mobile number, email ID, employment details, and financial information. We also collect technical data such as IP addresses and browser information."],
          ["2. How We Use Your Information", "Your information is used to: connect you with suitable lending partners, process your loan application, communicate with you about your application status, improve our services, and comply with legal obligations."],
          ["3. Data Sharing", "We share your information only with our verified lending partners (banks and NBFCs) for the purpose of processing your loan application. We do not sell your personal data to third parties."],
          ["4. Data Security", "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information."],
          ["5. Your Rights", "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@mudrafinanceindia.com."],
          ["6. Cookies", "We use cookies to enhance your browsing experience. You can control cookie preferences through your browser settings."],
          ["7. Contact Us", "For privacy-related queries, contact our Data Protection Officer at: privacy@mudrafinanceindia.com or call +91 98765 43210."],
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
