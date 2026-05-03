import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

const trends = [
  {
    title: "AGI Realization",
    description: "The pursuit of Artificial General Intelligence—AI that can match or exceed human performance on any intellectual task.",
    icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Global Regulation",
    description: "Governments moving toward unified frameworks for AI safety, data privacy, and ethical development requirements.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Next-Gen Automation",
    description: "Agentic AI that doesn't just answer questions but takes actions across different digital tools to complete complex multi-step goals.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
  },
];

export default function FutureOutlook() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-[#000]">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative rounded-[64px] bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black p-12 md:p-24 overflow-hidden border border-white/10"
        >
          {/* Decorative backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 max-w-2xl">
              Future Outlook: The Next Decade of Intelligence
            </h2>
            <p className="text-lg text-white/60 mb-16 max-w-xl font-light">
              As we move beyond simple model interactions, the future of AI will be defined by integration, autonomy, and the convergence of physical and digital systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {trends.map((trend, index) => (
                <div key={index} className="space-y-4">
                  <div className="p-3 rounded-2xl bg-white/5 w-fit border border-white/10">
                    {trend.icon}
                  </div>
                  <h3 className="text-xl font-medium">{trend.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-normal">
                    {trend.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-sm font-medium text-white/40">Ready to build the future?</p>
              <button className="pill-inner-glow relative rounded-full border-[0.6px] border-white/20 px-[29px] py-[11px] bg-white group transition-all hover:bg-white/90 active:scale-95 shadow-2xl shadow-blue-500/20">
                <span className="text-black text-[14px] font-medium relative z-10">
                  Stay Informed
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
