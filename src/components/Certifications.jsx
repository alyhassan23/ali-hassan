import React from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data";
import SectionReveal from "./SectionReveal";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-28 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-5">
            Licenses &{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Professional credentials validating my expertise in Data Science, AI, and Engineering.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <SectionReveal key={cert.id} delay={idx * 0.1} yOffset={30}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card p-7 rounded-3xl hover:border-accent/30 transition-all duration-300 hover:shadow-glow-accent-sm flex flex-col sm:flex-row gap-6 items-start shadow-card"
              >
                {/* Logo */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-2xl font-bold text-textMain group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                  {cert.logo === "Google" ? (
                    <span className="text-blue-400 font-display font-bold">G</span>
                  ) : cert.logo === "IBM" ? (
                    <span className="text-blue-500 font-display font-bold text-sm">IBM</span>
                  ) : (
                    <Award className="text-accent" size={28} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-display text-lg md:text-xl font-bold text-textMain mb-1.5 group-hover:text-accent transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-textMuted text-sm mb-4 font-medium">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2.5 text-xs text-textMuted mb-5">
                    <span className="flex items-center gap-1.5 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full text-accent font-medium">
                      <Calendar size={12} /> Issued {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                        <CheckCircle size={12} className="text-highlight" /> ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-textMuted bg-white/5 px-4 py-2 rounded-full border border-white/8 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 group/btn tracking-wide uppercase"
                  >
                    Show Credential
                    <ExternalLink
                      size={13}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
