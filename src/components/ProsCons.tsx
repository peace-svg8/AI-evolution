import { motion } from "motion/react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const data = [
  {
    type: "pros",
    title: "The Benefits",
    subtitle: "Accelerating Human Potential",
    items: [
      { text: "Efficiency & Automation", detail: "Automating repetitive tasks allows humans to focus on higher-level creative and strategic work." },
      { text: "Healthcare Breakthroughs", detail: "Precision medicine and faster drug discovery are saving lives by identifying patterns humans miss." },
      { text: "Round-the-Clock Support", detail: "AI systems don't need sleep, providing constant assistance in critical systems and customer service." },
      { text: "Error Reduction", detail: "Eliminating human bias and fatigue in data-intensive environments like finance and manufacturing." },
    ],
    className: "border-cyan-500/30",
    glowColor: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    hoverBorder: "group-hover:border-cyan-500/50",
    icon: <CheckCircle2 className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
  },
  {
    type: "cons",
    title: "The Risks",
    subtitle: "Navigating Ethical Frontiers",
    items: [
      { text: "Job Displacement", detail: "Rapid automation risks significant economic shifts requiring massive workforce retraining." },
      { text: "Bias & Fairness", detail: "If training data is biased, the resulting AI will perpetuate and scale those systemic inequalities." },
      { text: "Privacy Concerns", detail: "The massive scale of data collection needed for training poses significant risks to personal anonymity." },
      { text: "Security Risks", detail: "Potential for misuse in deepfakes, sophisticated phishing, and autonomous weaponry." },
    ],
    className: "border-pink-500/30",
    glowColor: "bg-pink-500/10",
    iconColor: "text-pink-400",
    hoverBorder: "group-hover:border-pink-500/50",
    icon: <AlertTriangle className="w-6 h-6 text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
  }
];

export default function ProsCons() {
  return (
    <section className="relative py-24 px-6 md:px-[120px] bg-black overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Pros & Cons
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light text-lg">
            A balanced view of the intelligence revolution is necessary to build a sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.map((side, sIndex) => (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, x: sIndex === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative p-[1px] flex flex-col rounded-[48px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 ${side.glowColor} blur-[80px] pointer-events-none`} />

              <div className={`p-10 rounded-[47px] bg-black/80 backdrop-blur-xl border ${side.className} h-full relative z-10`}>
                <div className="flex items-center gap-3 mb-6">
                  {side.icon}
                  <h3 className="text-3xl font-semibold text-white/90">{side.title}</h3>
                </div>
                <p className={`text-xs uppercase tracking-[0.3em] font-bold ${side.iconColor} mb-10 opacity-80`}>{side.subtitle}</p>

                <div className="space-y-4">
                  {side.items.map((item, iIndex) => (
                    <motion.div
                      key={iIndex}
                      initial={false}
                      className={`group p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-300 cursor-default ${side.hoverBorder}`}
                    >
                      <h4 className="text-lg font-medium mb-3 flex items-start justify-between text-white/80 group-hover:text-white transition-colors">
                        {item.text}
                        <span className={`${side.iconColor} opacity-50 group-hover:opacity-100 transition-opacity ml-4 mt-1`}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed font-light">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
