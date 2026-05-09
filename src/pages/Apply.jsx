import LoanForm from "../components/LoanForm";

export default function Apply() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Apply for a Loan</h1>
        <p className="text-blue-200/80 text-lg">Complete your application in under 2 minutes.</p>
      </div>
      <LoanForm />
    </div>
  );
}
