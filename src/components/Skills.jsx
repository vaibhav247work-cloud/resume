import { motion } from "framer-motion";
import { resumeData } from "../data";
import {
  Code2,
  LayoutGrid,
  Network,
  Shield,
  Database,
  Wrench,
  HardDrive,
  Cloud,
  Puzzle,
} from "lucide-react";

const categoryConfig = {
  "Languages": { icon: Code2, accent: "accent-indigo", iconColor: "text-indigo-400", iconBg: "bg-indigo-500/10" },
  "Frameworks": { icon: LayoutGrid, accent: "accent-emerald", iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10" },
  "Architecture": { icon: Network, accent: "accent-purple", iconColor: "text-purple-400", iconBg: "bg-purple-500/10" },
  "Security": { icon: Shield, accent: "accent-pink", iconColor: "text-pink-400", iconBg: "bg-pink-500/10" },
  "Data Processing": { icon: Database, accent: "accent-blue", iconColor: "text-blue-400", iconBg: "bg-blue-500/10" },
  "Dev Tools": { icon: Wrench, accent: "accent-amber", iconColor: "text-amber-400", iconBg: "bg-amber-400/10" },
  "Databases": { icon: HardDrive, accent: "accent-cyan", iconColor: "text-cyan-400", iconBg: "bg-cyan-400/10" },
  "Cloud & Storage": { icon: Cloud, accent: "accent-violet", iconColor: "text-violet-400", iconBg: "bg-violet-400/10" },
  "Others": { icon: Puzzle, accent: "accent-orange", iconColor: "text-orange-400", iconBg: "bg-orange-400/10" },
};

const SkillCategory = ({ category, skills, index }) => {
  const config = categoryConfig[category] || categoryConfig["Others"];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`accent-card accent-top ${config.accent} p-5`}
    >
      <div className="flex items-center gap-3 mb-4 pt-1">
        <div className={`p-2 rounded-lg ${config.iconBg}`}>
          <Icon size={16} className={config.iconColor} />
        </div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.04 + idx * 0.03 }}
            className="skill-tag"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="text-slate-400 uppercase tracking-widest text-sm text-center mb-3">
          My Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(resumeData.skills).map(([category, skills], index) => (
          <SkillCategory key={index} category={category} skills={skills} index={index} />
        ))}
      </div>
    </section>
  );
}
