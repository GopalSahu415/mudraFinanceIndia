import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { ToastProvider } from "../context/ToastContext";

export default function MainLayout() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </ToastProvider>
  );
}
