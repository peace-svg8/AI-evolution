import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "cyan" | "purple" | "pink" | "blue";
}

export default function SectionDivider({ variant = "cyan" }: SectionDividerProps) {
  const colors: Record<string, { from: string; via: string }> = {
    cyan: { from: "from-cyan-500/0", via: "via-cyan-500/40" },
    purple: { from: "from-purple-500/0", via: "via-purple-500/40" },
    pink: { from: "from-pink-500/0", via: "via-pink-500/40" },
    blue: { from: "from-blue-500/0", via: "via-blue-500/40" },
  };

  const c = colors[variant];

  return (
    <div className="relative py-4 overflow-hidden">
      {/* Main gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`h-[1px] w-full bg-gradient-to-r ${c.from} ${c.via} to-transparent`}
      />
      {/* Center diamond accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className={`w-2 h-2 rotate-45 bg-gradient-to-br ${c.from.replace('/0', '/60')} ${c.via.replace('/40', '/80')} border border-white/20`} />
      </motion.div>
    </div>
  );
}
