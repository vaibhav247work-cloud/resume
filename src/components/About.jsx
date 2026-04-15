import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { resumeData } from "../data";
import { useEffect, useRef } from "react";
import { Briefcase, FolderGit2, GraduationCap } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v * 10) / 10);
  const display = useTransform(rounded, (v) => {
    if (suffix === "+") return `${v}+`;
    return `${v}`;
  });
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, target, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  {
    value: 3.6,
    suffix: "+",
    label: "Years Experience",
    icon: Briefcase,
    accent: "accent-indigo",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    numColor: "text-indigo-400",
  },
  {
    value: resumeData.projects.length,
    suffix: "+",
    label: "Projects Completed",
    icon: FolderGit2,
    accent: "accent-emerald",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    numColor: "text-emerald-400",
  },
  {
    value: null,
    text: "BE",
    label: resumeData.education.university,
    icon: GraduationCap,
    accent: "accent-blue",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    numColor: "text-blue-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-slate-400 uppercase tracking-widest text-sm text-center mb-3">
          Get to know me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        {/* Summary card with left accent bar */}
        <div className={`accent-card accent-left accent-indigo p-7 md:p-9 mb-6`}>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed pl-4">
            {resumeData.summary}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`accent-card accent-top ${stat.accent} p-5`}
              >
                <div className="flex items-center gap-3 mb-3 pt-1">
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <Icon size={18} className={stat.iconColor} />
                  </div>
                </div>
                <span className={`block text-3xl font-black ${stat.numColor} mb-1`}>
                  {stat.value !== null ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
