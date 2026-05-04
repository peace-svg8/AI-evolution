import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-[200px] md:pt-[280px] pb-[102px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-10"
        >
          <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
          <p className="text-[13px] font-medium leading-none">
            <span className="text-white/60">Now exploring the latest</span>{" "}
            <span className="text-white">Generative AI Breakthroughs</span>
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gradient max-w-[613px] text-[36px] md:text-[56px] font-medium leading-[1.28] tracking-tight mb-6"
        >
          The Evolution and Adoption of Artificial Intelligence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[680px] text-[15px] leading-relaxed text-white/70 font-normal mb-10"
        >
          Explore the journey from early automata to generative breakthroughs. 
          Discover how AI is reshaping industries and shaping the future of 
          human connectivity through intelligence at scale.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pill-inner-glow relative rounded-full border-[0.6px] border-white px-[29px] py-[11px] bg-white group transition-all hover:bg-white/90 active:scale-95"
        >
          <span className="text-black text-[14px] font-medium relative z-10">
            Join Waitlist
          </span>
          {/* Top light streak effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]" />
        </motion.button>
      </div>
    </section>
  );
}
