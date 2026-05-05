import { motion } from "motion/react";
import { Brain, Cpu, Globe, Rocket } from "lucide-react";

const milestones = [
  {
    era: "Early AI",
    date: "1950s–1980s",
    title: "Foundations & Logic",
    description: "The birth of AI as a field. Alan Turing proposes the Turing Test, and the Dartmouth Conference coins the term. Focus on symbolic logic and 'Expert Systems'.",
    icon: <Brain className="w-5 h-5 text-cyan-300" />,
    glowColor: "shadow-cyan-500/50",
    borderColor: "border-cyan-500/30",
  },
  {
    era: "Machine Learning Era",
    date: "1990s–2010",
    title: "Statistical Revolution",
    description: "Shift from rules-based to data-driven. IBM Deep Blue defeats Kasparov. Growth of internet data fuels Support Vector Machines and early recommendation engines.",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    glowColor: "shadow-blue-500/50",
    borderColor: "border-blue-500/30",
  },
  {
    era: "Deep Learning Revolution",
    date: "2010–2020",
    title: "The Neural Surge",
    description: "Breakthroughs in Neural Networks and GPUs. AlexNet wins ImageNet, proving deep learning's power. AlphaGo masters Go, and GANs begin generating realistic images.",
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    glowColor: "shadow-indigo-500/50",
    borderColor: "border-indigo-500/30",
  },
  {
    era: "Generative AI Boom",
    date: "2020–Present",
    title: "Transformers & LLMs",
    description: "The Rise of Large Language Models. GPT-3 and ChatGPT bring AI to the masses. Diffusion models transform creative industries through text-to-image generation.",
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    glowColor: "shadow-purple-500/50",
    borderColor: "border-purple-500/30",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 bg-black overflow-hidden px-6 md:px-[120px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500">
            Evolution Timeline
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            A journey through the decades that transformed human intelligence into digital reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Glowing Neural Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full text-left md:text-right pl-16 md:pl-0">
                  <div className={`p-8 rounded-2xl bg-white/[0.02] border ${item.borderColor} backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500 group ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80 mb-3 block">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                      {item.era}: <span className="text-white/60">{item.title}</span>
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Neural Node */}
                <div className="absolute left-0 md:relative md:left-auto z-10 flex items-center justify-center p-2 rounded-full bg-black border border-white/10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border ${item.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.5)] ${item.glowColor}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
