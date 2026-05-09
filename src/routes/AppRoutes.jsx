import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import Apply from "../pages/Apply";

import HomeLoan from "../pages/HomeLoan";
import PersonalLoan from "../pages/PersonalLoan";
import BusinessLoan from "../pages/BusinessLoan";
import CarLoan from "../pages/CarLoan";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="apply" element={<Apply />} />
        
        <Route path="home-loan" element={<HomeLoan />} />
        <Route path="personal-loan" element={<PersonalLoan />} />
        <Route path="business-loan" element={<BusinessLoan />} />
        <Route path="car-loan" element={<CarLoan />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
