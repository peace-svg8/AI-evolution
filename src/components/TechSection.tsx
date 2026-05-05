import { motion } from "motion/react";
import { Layers, Scan, MessageSquare, Network } from "lucide-react";

const techs = [
  {
    title: "Machine Learning",
    description: "The core engine of AI. Using algorithms to parse data, learn from it, and make informed decisions or predictions based on what it has learned.",
    icon: <Network className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    borderColor: "group-hover:border-cyan-500/30",
    gradient: "from-cyan-500/50 to-transparent",
    className: "lg:col-span-2",
  },
  {
    title: "Neural Networks",
    description: "Computing systems inspired by biological brains, designed to recognize patterns and solve complex problems.",
    icon: <Layers className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]",
    borderColor: "group-hover:border-purple-500/30",
    gradient: "from-purple-500/50 to-transparent",
  },
  {
    title: "Natural Language Processing",
    description: "Enabling machines to understand, interpret, and generate human language in a way that is both meaningful and contextually relevant.",
    icon: <MessageSquare className="w-10 h-10 text-pink-400 group-hover:text-pink-300 transition-colors" />,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]",
    borderColor: "group-hover:border-pink-500/30",
    gradient: "from-pink-500/50 to-transparent",
  },
  {
    title: "Computer Vision",
    description: "The field that deals with how computers can be made to gain high-level understanding from digital images or videos.",
    icon: <Scan className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]",
    borderColor: "group-hover:border-blue-500/30",
    gradient: "from-blue-500/50 to-transparent",
    className: "lg:col-span-2",
  },
];

export default function TechSection() {
  return (
    <section className="relative py-24 px-6 md:px-[120px] bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500">
            Key Technologies
          </h2>
          <p className="text-white/50 max-w-xl text-lg">
            The mathematical and computational building blocks that power the modern intelligent world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`group p-10 rounded-[32px] bg-white/[0.02] border border-white/5 ${tech.borderColor} hover:bg-white/[0.04] backdrop-blur-md transition-all duration-500 relative overflow-hidden ${tech.className || ""}`}
            >
              {/* Subtle hover gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${tech.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className={`mb-8 p-4 rounded-2xl bg-black border border-white/10 w-fit group-hover:border-white/30 transition-all duration-500 relative z-10 ${tech.glowColor}`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-white transition-colors relative z-10">{tech.title}</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed max-w-[400px] relative z-10">
                {tech.description}
              </p>
              
              {/* Decorative line */}
              <div className={`mt-12 h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent group-hover:${tech.gradient} transition-all duration-700 relative z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
