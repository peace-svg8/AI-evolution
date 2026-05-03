import { motion } from "motion/react";
import { Brain, Cpu, Globe, Rocket } from "lucide-react";

const milestones = [
  {
    era: "Early AI",
    date: "1950s–1980s",
    title: "Foundations & Logic",
    description: "The birth of AI as a field. Alan Turing proposes the Turing Test, and the Dartmouth Conference coins the term. Focus on symbolic logic and 'Expert Systems'.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    era: "Machine Learning Era",
    date: "1990s–2010",
    title: "Statistical Revolution",
    description: "Shift from rules-based to data-driven. IBM Deep Blue defeats Kasparov. Growth of internet data fuels Support Vector Machines and early recommendation engines.",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-purple-500",
  },
  {
    era: "Deep Learning Revolution",
    date: "2010–2020",
    title: "The Neural Surge",
    description: "Breakthroughs in Neural Networks and GPUs. AlexNet wins ImageNet, proving deep learning's power. AlphaGo masters Go, and GANs begin generating realistic images.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-orange-500",
  },
  {
    era: "Generative AI Boom",
    date: "2020–Present",
    title: "Transformers & LLMs",
    description: "The Rise of Large Language Models. GPT-3 and ChatGPT bring AI to the masses. Diffusion models transform creative industries through text-to-image generation.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-teal-500",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-black overflow-hidden px-6 md:px-[120px]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-medium tracking-tight mb-4">Evolution Timeline</h2>
          <p className="text-white/60 max-w-xl">
            A journey through the decades that transformed human intelligence into digital reality.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full text-left md:text-right">
                  <div className={`p-8 rounded-2xl glass hover:border-white/40 transition-colors ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-medium mb-3">{item.era}: {item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 p-4 rounded-full glass border-white/20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color} shadow-lg shadow-white/5`}>
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
