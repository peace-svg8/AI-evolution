import { motion } from "motion/react";
import { HeartPulse, Landmark, GraduationCap, CarFront } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    description: "AI-driven diagnostics identify diseases earlier than ever. Generative models accelerate drug discovery by predicting molecule interactions.",
    icon: <HeartPulse className="w-8 h-8" />,
    metrics: "45% faster drug discovery",
  },
  {
    name: "Finance",
    description: "Real-time fraud detection and high-frequency algorithmic trading. Personalized robo-advisors manage wealth for millions.",
    icon: <Landmark className="w-8 h-8" />,
    metrics: "99.9% fraud detection accuracy",
  },
  {
    name: "Education",
    description: "Adaptive learning platforms tailor curriculum to individual student pace. AI tutors provide 24/7 support for complex subjects.",
    icon: <GraduationCap className="w-8 h-8" />,
    metrics: "+30% engagement increase",
  },
  {
    name: "Transportation",
    description: "Self-driving systems reduce human error. AI optimizes logistics routes to minimize carbon footprints and transit times.",
    icon: <CarFront className="w-8 h-8" />,
    metrics: "12% reduction in emissions",
  },
];

export default function Applications() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-medium tracking-tight mb-4">Real-World Applications</h2>
            <p className="text-white/60 max-w-xl">
              AI is no longer theoretical. It is the silent engine powering everyday experiences across the globe.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mx-8 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[300px] rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="p-4 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Impact Metric</p>
                  <p className="text-sm font-medium text-white/80">{industry.metrics}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3">{industry.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[340px]">
                  {industry.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
