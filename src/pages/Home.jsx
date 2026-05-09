import HeroSection from "../components/HeroSection";
import LoanCards from "../components/LoanCards";
import WhyChooseUs from "../components/WhyChooseUs";
import LoanForm from "../components/LoanForm";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LoanCards />
      <WhyChooseUs />
      <LoanForm />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
    </>
  );
}
