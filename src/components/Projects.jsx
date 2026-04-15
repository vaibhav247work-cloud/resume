import { motion } from "framer-motion";
import { resumeData } from "../data";
import { Layers } from "lucide-react";

const cardAccents = [
  { accent: "accent-indigo", tagBg: "bg-indigo-500/10", tagText: "text-indigo-300", tagBorder: "border-indigo-500/20", iconBg: "bg-indigo-500/10", iconColor: "text-indigo-400", dotColor: "bg-indigo-400" },
  { accent: "accent-emerald", tagBg: "bg-emerald-500/10", tagText: "text-emerald-300", tagBorder: "border-emerald-500/20", iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", dotColor: "bg-emerald-400" },
  { accent: "accent-purple", tagBg: "bg-purple-500/10", tagText: "text-purple-300", tagBorder: "border-purple-500/20", iconBg: "bg-purple-500/10", iconColor: "text-purple-400", dotColor: "bg-purple-400" },
  { accent: "accent-blue", tagBg: "bg-blue-500/10", tagText: "text-blue-300", tagBorder: "border-blue-500/20", iconBg: "bg-blue-500/10", iconColor: "text-blue-400", dotColor: "bg-blue-400" },
  { accent: "accent-pink", tagBg: "bg-pink-500/10", tagText: "text-pink-300", tagBorder: "border-pink-500/20", iconBg: "bg-pink-500/10", iconColor: "text-pink-400", dotColor: "bg-pink-400" },
];

const ProjectCard = ({ project, index }) => {
  const style = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`accent-card accent-left ${style.accent} p-6 flex flex-col h-full`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5 pl-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${style.iconBg} shrink-0`}>
            <Layers size={18} className={style.iconColor} />
          </div>
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
        </div>
        <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${style.tagBg} ${style.tagText} ${style.tagBorder} shrink-0 ml-3`}>
          {project.role}
        </span>
      </div>

      {/* Tech Stack */}
      <div className="mb-5 pl-4">
        <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.split(", ").map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-900/50 rounded-md border border-slate-700/30 hover:border-slate-600/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contributions */}
      <div className="space-y-2 flex-grow pl-4">
        {project.contributions.map((contribution, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full ${style.dotColor} mt-2 shrink-0 opacity-50`} />
            <p className="text-slate-300 text-sm leading-relaxed">
              {contribution}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="text-slate-400 uppercase tracking-widest text-sm text-center mb-3">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
