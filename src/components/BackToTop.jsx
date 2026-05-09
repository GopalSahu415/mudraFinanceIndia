import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!show) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
      className="fixed bottom-24 right-5 z-40 w-11 h-11 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 hover:scale-110 transition-all flex items-center justify-center text-lg font-bold"
    >
      ↑
    </button>
  );
}
