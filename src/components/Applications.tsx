import { motion } from "motion/react";
import { HeartPulse, Landmark, GraduationCap, CarFront } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    description: "AI-driven diagnostics identify diseases earlier than ever. Generative models accelerate drug discovery by predicting molecule interactions.",
    icon: <HeartPulse className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors" />,
    metrics: "45% faster drug discovery",
    glowColor: "group-hover:bg-pink-500/20",
    borderColor: "group-hover:border-pink-500/40",
    accentGlow: "bg-pink-500/10",
  },
  {
    name: "Finance",
    description: "Real-time fraud detection and high-frequency algorithmic trading. Personalized robo-advisors manage wealth for millions.",
    icon: <Landmark className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
    metrics: "99.9% fraud detection accuracy",
    glowColor: "group-hover:bg-cyan-500/20",
    borderColor: "group-hover:border-cyan-500/40",
    accentGlow: "bg-cyan-500/10",
  },
  {
    name: "Education",
    description: "Adaptive learning platforms tailor curriculum to individual student pace. AI tutors provide 24/7 support for complex subjects.",
    icon: <GraduationCap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    metrics: "+30% engagement increase",
    glowColor: "group-hover:bg-purple-500/20",
    borderColor: "group-hover:border-purple-500/40",
    accentGlow: "bg-purple-500/10",
  },
  {
    name: "Transportation",
    description: "Self-driving systems reduce human error. AI optimizes logistics routes to minimize carbon footprints and transit times.",
    icon: <CarFront className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    metrics: "12% reduction in emissions",
    glowColor: "group-hover:bg-blue-500/20",
    borderColor: "group-hover:border-blue-500/40",
    accentGlow: "bg-blue-500/10",
  },
];

export default function Applications() {
  return (
    <section className="relative py-24 px-6 md:px-[120px] bg-black overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-500">
              Real-World Applications
            </h2>
            <p className="text-white/50 max-w-xl text-lg">
              AI is no longer theoretical. It is the silent engine powering everyday experiences across the globe.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent mx-8 hidden md:block origin-left" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`group relative h-[300px] rounded-[40px] border border-white/5 bg-white/[0.02] p-10 overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-2xl ${industry.borderColor}`}
            >
              <div className="flex items-start justify-between relative z-10">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-all duration-500 shadow-lg ${industry.glowColor}`}>
                  {industry.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan-400/80 mb-1">Impact Metric</p>
                  <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{industry.metrics}</p>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">{industry.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[340px] font-light">
                  {industry.description}
                </p>
              </div>

              {/* Decorative accent orb */}
              <div className={`absolute top-0 right-0 w-48 h-48 ${industry.accentGlow} blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
              {/* Corner accent border */}
              <div className={`absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r ${industry.borderColor.replace('border-', 'from-').replace('group-hover:', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
