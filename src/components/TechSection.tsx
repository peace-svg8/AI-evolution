import { motion } from "motion/react";
import { Layers, Scan, MessageSquare, Network } from "lucide-react";

const techs = [
  {
    title: "Machine Learning",
    description: "The core engine of AI. Using algorithms to parse data, learn from it, and make informed decisions or predictions based on what it has learned.",
    icon: <Network className="w-10 h-10 text-blue-500" />,
    className: "lg:col-span-2",
  },
  {
    title: "Neural Networks",
    description: "Computing systems inspired by biological brains, designed to recognize patterns and solve complex problems.",
    icon: <Layers className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Natural Language Processing",
    description: "Enabling machines to understand, interpret, and generate human language in a way that is both meaningful and contextually relevant.",
    icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Computer Vision",
    description: "The field that deals with how computers can be made to gain high-level understanding from digital images or videos.",
    icon: <Scan className="w-10 h-10 text-teal-500" />,
    className: "lg:col-span-2",
  },
];

export default function TechSection() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-medium tracking-tight mb-4">Key Technologies</h2>
          <p className="text-white/60 max-w-xl">
            The mathematical and computational building blocks that power the modern intelligent world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-10 rounded-[32px] glass hover:bg-white/5 transition-all duration-300 ${tech.className || ""}`}
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4">{tech.title}</h3>
              <p className="text-sm font-normal text-white/50 leading-relaxed max-w-[400px]">
                {tech.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
