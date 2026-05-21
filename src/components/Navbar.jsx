import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, openLogin, openRegister, requireAuth } = useAuth();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (path) => { 
    navigate(path); 
    setMenuOpen(false); 
    setLoanOpen(false); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const loans = [
    { label: "Home Loan", path: "/home-loan" },
    { label: "Personal Loan", path: "/personal-loan" },
    { label: "Business Loan", path: "/business-loan" },
    { label: "Car Loan", path: "/car-loan" },
  ];

  const isActive = (path) => location.pathname === path;
  const isStickyPage = location.pathname === "/" || location.pathname === "/apply";

  return (
    <nav className={`${isStickyPage ? "fixed" : "absolute"} top-0 left-0 right-0 z-50 transition-all duration-300 ${(scrolled && isStickyPage) ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => nav("/")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm">R</span>
            </div>
            <div className="text-left">
              <p className="font-black text-base leading-none tracking-tight transition-colors text-white">RupeeBridge</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map(p => (
              <button 
                key={p.path} 
                onClick={() => nav(p.path)} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-200 ${isActive(p.path) ? "text-blue-400 bg-blue-500/10" : "text-white/90 hover:text-white hover:bg-white/10"}`}
              >
                {p.label}
              </button>
            ))}
            {/* Loans Dropdown */}
            <div className="relative" onMouseEnter={() => setLoanOpen(true)} onMouseLeave={() => setLoanOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-white/90 hover:text-white hover:bg-white/10">
                Loans <span className={`transition-transform duration-200 text-xs ${loanOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              <div className={`absolute top-full left-0 mt-1 w-48 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 overflow-hidden transition-all duration-200 ${loanOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                {loans.map(l => (
                  <button key={l.path} onClick={() => nav(l.path)} className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-800 hover:text-white font-medium transition-colors border-b border-slate-800 last:border-0">{l.label}</button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {!user ? (
              <div className="hidden md:flex items-center gap-2 mr-2">
                <button onClick={openLogin} className="px-4 py-2 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                  Login
                </button>
                <button onClick={openRegister} className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10">
                  Register
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3 mr-2 bg-white/5 pl-2 pr-4 py-1.5 rounded-full border border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-inner">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white leading-tight">{user.name.split(" ")[0]}</span>
                  <button onClick={logout} className="text-[10px] text-slate-400 hover:text-red-400 text-left transition-colors flex items-center gap-1">
                    <FiLogOut /> Logout
                  </button>
                </div>
              </div>
            )}
            
            <button onClick={() => requireAuth(() => nav("/apply"))} className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200">
              Apply Now <span>→</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10">
              <div className="space-y-1.5 w-6">
                <span className={`block h-0.5 w-6 transition-all duration-300 bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 transition-all duration-300 bg-white ${menuOpen ? "opacity-0 w-0" : "w-4"}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-slate-900 border-t border-slate-800 px-4 pb-6 pt-3 space-y-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" }
          ].map(p => (
            <button key={p.path} onClick={() => nav(p.path)} className="w-full text-left px-4 py-3 rounded-lg text-slate-200 font-semibold capitalize hover:bg-slate-800 hover:text-white transition-colors">{p.label}</button>
          ))}
          <div>
            <button onClick={() => setLoanOpen(!loanOpen)} className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-colors">
              Loans <span className={`transition-transform text-xs ${loanOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {loanOpen && <div className="ml-4 mt-1 space-y-1">
              {loans.map(l => <button key={l.path} onClick={() => nav(l.path)} className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-400 font-medium hover:bg-slate-800 hover:text-white transition-colors">{l.label}</button>)}
            </div>}
          </div>
          <button onClick={() => requireAuth(() => nav("/apply"))} className="w-full mt-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm">Apply Now →</button>
          
          <div className="pt-4 mt-2 border-t border-slate-800">
            {!user ? (
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => { setMenuOpen(false); openLogin(); }} className="w-full py-2.5 rounded-lg text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors">
                  Login
                </button>
                <button onClick={() => { setMenuOpen(false); openRegister(); }} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                  Register
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-inner">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </div>
                <button onClick={() => { setMenuOpen(false); logout(); }} className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                  <FiLogOut size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
