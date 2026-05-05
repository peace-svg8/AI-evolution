import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 md:px-[120px] bg-black overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-6"
          >
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
            <p className="text-sm text-white/30 max-w-xs text-center md:text-left leading-relaxed">
              Exploring the frontier of artificial intelligence, from its foundations to its future.
            </p>
            <p className="text-xs text-white/20 tracking-[0.2em] font-medium uppercase">
              © 2026 AI Evolution & Adoption. All rights reserved.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-16"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400/50">Resources</span>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">Documentation</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">API Reference</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">Changelog</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400/50">Social</span>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">Twitter</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">GitHub</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-400/50">Legal</span>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">Terms</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center"
        >
          <p className="text-xs text-white/20 tracking-wider">
            Built with passion for the future of intelligence
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
