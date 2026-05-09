import { useEffect } from "react";

export default function Toast({ msg, type, onClose }) {
  useEffect(() => { 
    const t = setTimeout(onClose, 4000); 
    return () => clearTimeout(t); 
  }, [onClose]);

  const bg = type === "success" ? "bg-emerald-500" : "bg-red-500";
  
  return (
    <div className={`fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-xl text-white shadow-2xl ${bg} animate-fadeIn`}>
      <span className="text-xl">{type === "success" ? "✓" : "✕"}</span>
      <p className="font-medium text-sm">{msg}</p>
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">✕</button>
    </div>
  );
}
