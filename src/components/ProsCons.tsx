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
    className: "border-teal-500/30",
    icon: <CheckCircle2 className="w-6 h-6 text-teal-400" />
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
    className: "border-orange-500/30",
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />
  }
];

export default function ProsCons() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-medium tracking-tight mb-4">Pros & Cons</h2>
          <p className="text-white/60 max-w-xl mx-auto font-normal">
            A balanced view of the intelligence revolution is necessary to build a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.map((side, sIndex) => (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, x: sIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-1 flex flex-col rounded-[48px] bg-white/5 border ${side.className}`}
            >
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  {side.icon}
                  <h3 className="text-2xl font-medium">{side.title}</h3>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-white/30 mb-10">{side.subtitle}</p>

                <div className="space-y-6">
                  {side.items.map((item, iIndex) => (
                    <motion.div
                      key={iIndex}
                      initial={false}
                      className="group p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-default"
                    >
                      <h4 className="text-lg font-medium mb-2 flex items-center justify-between">
                        {item.text}
                        <span className="text-white/20 group-hover:text-white/60 transition-colors text-xs font-bold">→</span>
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed max-h-0 group-hover:max-h-[100px] overflow-hidden transition-all duration-500 ease-in-out">
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
