import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

const trends = [
  {
    title: "AGI Realization",
    description: "The pursuit of Artificial General Intelligence—AI that can match or exceed human performance on any intellectual task.",
    icon: <Sparkles className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" />,
    hoverBorder: "group-hover:border-yellow-500/30",
  },
  {
    title: "Global Regulation",
    description: "Governments moving toward unified frameworks for AI safety, data privacy, and ethical development requirements.",
    icon: <ShieldCheck className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]" />,
    hoverBorder: "group-hover:border-green-500/30",
  },
  {
    title: "Next-Gen Automation",
    description: "Agentic AI that doesn't just answer questions but takes actions across different digital tools to complete complex multi-step goals.",
    icon: <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />,
    hoverBorder: "group-hover:border-cyan-500/30",
  },
];

export default function FutureOutlook() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative rounded-[64px] bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-black p-12 md:p-24 overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)]"
        >
          {/* Decorative backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[150px] rounded-full pointer-events-none" />
          {/* Animated Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-purple-300">
              Future Outlook: The Next Decade of Intelligence
            </h2>
            <p className="text-xl text-white/60 mb-16 max-w-2xl font-light leading-relaxed">
              As we move beyond simple model interactions, the future of AI will be defined by integration, autonomy, and the convergence of physical and digital systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trends.map((trend, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  className={`group space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] ${trend.hoverBorder}`}
                >
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500">
                    {trend.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">{trend.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {trend.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <p className="text-lg font-medium text-white/60">Ready to build the future?</p>
              <button className="group relative rounded-full p-[1px] bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300">
                <div className="rounded-full px-8 py-3 bg-black group-hover:bg-black/50 transition-colors">
                  <span className="text-white text-sm font-bold tracking-wide uppercase relative z-10">
                    Stay Informed
                  </span>
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
