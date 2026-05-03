import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

interface NavLinkProps {
  label: string;
}

function NavLink({ label }: NavLinkProps) {
  return (
    <div className="flex items-center gap-[14px] cursor-pointer group">
      <span className="text-white text-[14px] font-medium leading-none">{label}</span>
      <ChevronDown size={14} className="text-white opacity-60 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

interface DeveloperDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

function DeveloperDropdown({ isOpen, onClose }: DeveloperDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg py-2">
      <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition-colors">
        Documentation
      </a>
      <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition-colors">
        API Reference
      </a>
      <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition-colors">
        SDK & Tools
      </a>
      <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition-colors">
        Community
      </a>
      <hr className="my-1 border-gray-700" />
      <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition-colors">
        GitHub
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isDevelopersOpen, setIsDevelopersOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-[120px] py-[20px]">
      <div className="flex items-center gap-[30px]">
        {/* AI Advance Logo */}
        <div className="w-[187px] h-[25px] flex items-center">
          <svg viewBox="0 0 187 25" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Neural network nodes */}
            <circle cx="8" cy="12" r="2.5" fill="currentColor" className="text-blue-400" />
            <circle cx="18" cy="6" r="2.5" fill="currentColor" className="text-purple-400" />
            <circle cx="18" cy="18" r="2.5" fill="currentColor" className="text-purple-400" />
            <circle cx="28" cy="12" r="2.5" fill="currentColor" className="text-blue-400" />
            
            {/* Connection lines */}
            <line x1="10" y1="12" x2="16" y2="6" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" opacity="0.6" />
            <line x1="10" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" opacity="0.6" />
            <line x1="20" y1="6" x2="26" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" opacity="0.6" />
            <line x1="20" y1="18" x2="26" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" opacity="0.6" />
            
            {/* Upward arrow representing advancement */}
            <path d="M 45 18 L 45 6 M 40 10 L 45 5 L 50 10" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-blue-400" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Text: AI ADVANCE */}
            <text x="60" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="700" fill="white" letterSpacing="0.5">AI ADVANCE</text>
          </svg>
        </div>
        
        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-[30px]">
          <NavLink label="Get Started" />
          <div 
            className="relative"
            onMouseEnter={() => setIsDevelopersOpen(true)}
            onMouseLeave={() => setIsDevelopersOpen(false)}
          >
            <NavLink label="Developers" />
            <DeveloperDropdown isOpen={isDevelopersOpen} onClose={() => setIsDevelopersOpen(false)} />
          </div>
          <NavLink label="Features" />
          <NavLink label="Resources" />
        </div>
      </div>

      <button className="pill-inner-glow relative rounded-full border-[0.6px] border-white px-[29px] py-[11px] bg-black group transition-all hover:border-white/80 active:scale-95">
        <span className="text-white text-[14px] font-medium relative z-10 transition-colors">
          Join Waitlist
        </span>
      </button>
    </nav>
  );
}
