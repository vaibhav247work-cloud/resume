import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { resumeData } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-slate-400 uppercase tracking-widest text-sm text-center mb-3">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 text-center max-w-lg mx-auto mb-14 text-base">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello.
        </p>

        <div className="w-full max-w-2xl mx-auto bg-slate-800/30 border border-slate-700/40 rounded-xl p-6 md:p-8">
          <div className="flex flex-col space-y-3 w-full">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="contact-item accent-card accent-left accent-indigo"
            >
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0 ml-3">
                <Mail size={20} />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Email</p>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-white hover:text-indigo-400 font-medium block break-all sm:break-normal transition-colors group inline-flex items-center gap-1"
                >
                  {resumeData.email}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="contact-item accent-card accent-left accent-emerald"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0 ml-3">
                <Phone size={20} />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Phone</p>
                <div className="flex flex-col gap-0.5">
                  {resumeData.phone.split(",").map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.trim()}`}
                      className="text-white hover:text-emerald-400 font-medium block break-words transition-colors group inline-flex items-center gap-1"
                    >
                      {p.trim()}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="contact-item accent-card accent-left accent-blue"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0 ml-3">
                <Linkedin size={20} />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">LinkedIn</p>
                <a
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 font-medium block break-all sm:break-normal transition-colors group inline-flex items-center gap-1"
                >
                  {resumeData.linkedin}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="contact-item accent-card accent-left accent-pink"
            >
              <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400 shrink-0 ml-3">
                <MapPin size={20} />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Location</p>
                <span className="text-white font-medium block">India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
