import { motion } from "framer-motion";
import { resumeData } from "../data";
import { Building2, Calendar, Code2, Shield, Database, Server } from "lucide-react";

const categoryConfig = {
  "Core Development": {
    icon: Code2,
    accent: "accent-indigo",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    dotColor: "bg-indigo-400",
  },
  "Security & Auth": {
    icon: Shield,
    accent: "accent-pink",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    dotColor: "bg-pink-400",
  },
  "Data Processing": {
    icon: Database,
    accent: "accent-emerald",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    dotColor: "bg-emerald-400",
  },
  "DevOps & Infrastructure": {
    icon: Server,
    accent: "accent-blue",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    dotColor: "bg-blue-400",
  },
};

const ExperienceCard = ({ experience, index }) => {
  const groups = experience.highlightGroups || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header card */}
      <div className="accent-card accent-left accent-indigo p-6 md:p-8 mb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">{experience.role}</h3>
            <div className="flex items-center gap-2 text-indigo-400">
              <Building2 size={16} />
              <span className="text-base font-semibold">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700/40 shrink-0">
            <Calendar size={14} className="text-slate-400" />
            <span className="text-slate-300 font-medium text-sm">{experience.period}</span>
          </div>
        </div>
      </div>

      {/* Category group cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group, gIdx) => {
          const config = categoryConfig[group.category] || categoryConfig["Core Development"];
          const Icon = config.icon;

          return (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gIdx * 0.1 }}
              className={`accent-card accent-left ${config.accent} p-5`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4 pl-3">
                <div className={`p-1.5 rounded-lg ${config.iconBg}`}>
                  <Icon size={15} className={config.iconColor} />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {group.category}
                </h4>
              </div>

              {/* Items */}
              <div className="space-y-2.5 pl-3">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} mt-2 shrink-0 opacity-60`} />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-slate-400 uppercase tracking-widest text-sm text-center mb-3">
          What I have done so far
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
