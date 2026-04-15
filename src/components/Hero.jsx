import { motion } from "framer-motion";
import { resumeData } from "../data";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
  const words = resumeData.name.split(" ");

  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden">
      {/* Subtle decorative blurs */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-purple-500/4 rounded-full blur-[60px]" />

      <div className="max-w-4xl mx-auto px-6 sm:px-16 flex flex-col items-center justify-center text-center relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-slate-400 font-medium mb-5"
        >
          Hi there, I'm
        </motion.p>

        {/* Name - word by word animation with text shadow for visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.4,
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className="gradient-text">Backend Java Developer</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mb-10"
        >
          Building scalable, secure, and high-performance backend systems using
          <span className="text-slate-200 font-medium"> Java</span>,
          <span className="text-slate-200 font-medium"> Spring Boot</span>, and
          <span className="text-slate-200 font-medium"> Microservices</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="/Resume_VaibhavKapadne.pdf"
            target="_blank"
            download
            className="group px-8 py-3 rounded-xl border border-slate-700/60 hover:border-slate-500/60 bg-slate-800/30 hover:bg-slate-800/50 text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Download size={17} />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
