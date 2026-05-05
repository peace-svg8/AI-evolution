import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

function NavLink({ label, hasDropdown, onClick }: NavLinkProps) {
  return (
    <div
      className="relative flex items-center gap-1.5 cursor-pointer group py-2 px-3 rounded-full hover:bg-white/[0.06] transition-all duration-300"
      onClick={onClick}
    >
      <span className="text-white/70 text-[13px] font-medium leading-none group-hover:text-white transition-colors duration-300 tracking-wide">
        {label}
      </span>
      {hasDropdown && (
        <ChevronDown
          size={12}
          className="text-white/40 group-hover:text-white/70 group-hover:translate-y-[1px] transition-all duration-300"
        />
      )}
      {/* Hover glow indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-3/4 transition-all duration-500" />
    </div>
  );
}

function DeveloperDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 origin-top"
        >
          {/* Arrow */}
          <div className="flex justify-center -mb-[5px] relative z-20">
            <div className="w-2.5 h-2.5 rotate-45 bg-black/90 border-l border-t border-white/10" />
          </div>
          <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-2 relative z-10">
            {[
              { label: "Documentation", desc: "Guides and tutorials" },
              { label: "API Reference", desc: "Full API documentation" },
              { label: "SDK & Tools", desc: "Libraries and frameworks" },
              { label: "Community", desc: "Join the discussion" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group/item"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-[11px] text-white/30 group-hover/item:text-white/50 transition-colors">
                  {item.desc}
                </span>
              </a>
            ))}
            <hr className="my-1.5 border-white/5 mx-3" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isDevelopersOpen, setIsDevelopersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-700 px-6",
            scrolled
              ? "max-w-4xl bg-black/70 backdrop-blur-2xl border border-white/[0.08] rounded-full px-6 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)]"
              : "max-w-7xl md:px-[120px]"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow duration-500">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              {/* Pulse ring on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity" />
            </div>
            <span className="text-white font-bold text-[15px] tracking-tight hidden sm:block">
              AI Advance
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink label="Get Started" />
            <div
              className="relative"
              onMouseEnter={() => setIsDevelopersOpen(true)}
              onMouseLeave={() => setIsDevelopersOpen(false)}
            >
              <NavLink label="Developers" hasDropdown />
              <DeveloperDropdown isOpen={isDevelopersOpen} />
            </div>
            <NavLink label="Features" />
            <NavLink label="Resources" />
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex group relative items-center gap-2 rounded-full px-5 py-2 bg-white text-black text-[13px] font-semibold hover:bg-white/90 active:scale-[0.97] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span>Join Waitlist</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/[0.06] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 mx-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            >
              <div className="p-6 flex flex-col gap-2">
                {["Get Started", "Developers", "Features", "Resources"].map(
                  (label) => (
                    <a
                      key={label}
                      href="#"
                      className="text-white/70 hover:text-white text-[15px] font-medium py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      {label}
                    </a>
                  )
                )}
                <hr className="border-white/5 my-2" />
                <button className="w-full rounded-full py-3 bg-white text-black text-[14px] font-semibold hover:bg-white/90 transition-colors mt-2">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
