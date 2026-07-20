import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, Database, Globe, Cpu, Briefcase, Award, User, Zap,
} from "lucide-react";
import { SKILLS, EDUCATION, CERTIFICATIONS } from "../data";
import SectionReveal from "./SectionReveal";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const tabs = [
    { id: "journey", label: "Journey", icon: User },
    { id: "education", label: "Education", icon: Award },
    { id: "skills", label: "Tech Stack", icon: Code },
    { id: "interests", label: "Interests", icon: Zap },
  ];

  const variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  };

  return (
    <section id="about" className="py-28 bg-transparent relative overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-5">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto leading-relaxed">
            More than just code — a problem solver, creative thinker, and lifelong learner.
          </p>
        </SectionReveal>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Navigation Tabs */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <SectionReveal key={tab.id} delay={0.05 + idx * 0.08} yOffset={20}>
                    <motion.button
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 w-full text-left border text-sm font-medium ${
                        activeTab === tab.id
                          ? "bg-accent/10 border-accent/40 text-white shadow-glow-accent-sm"
                          : "bg-secondary/50 border-white/5 text-textMuted hover:bg-white/5 hover:border-white/10 hover:text-textMain"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={`transition-colors ${activeTab === tab.id ? "text-accent" : "text-textMuted"}`}
                      />
                      <span>{tab.label}</span>
                    </motion.button>
                  </SectionReveal>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <SectionReveal delay={0.2} className="w-full md:w-3/4 glass-card p-8 rounded-2xl shadow-card min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "journey" && (
                <motion.div
                  key="journey"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <h3 className="font-display text-2xl font-bold text-textMain mb-5 flex items-center gap-3">
                    <User className="text-accent" size={22} /> My Journey
                  </h3>
                  <div className="space-y-4 text-textMuted leading-loose text-[0.95rem]">
                    <p>
                      My journey into tech wasn't just about learning syntax — it was about understanding how to build systems
                      that <strong className="text-textMain">scale and matter</strong>. I started with a curiosity for how
                      things work on the web and quickly dove into{" "}
                      <strong className="text-textMain">Full-Stack Development</strong>.
                    </p>
                    <p>
                     I am recent {" "}
                      <strong className="text-textMain">BS Software Engineering</strong>{" "}
                      graduate from Lahore Garrison University. I've built everything from dynamic web applications to data analysis dashboards.
                    </p>
                    <p>
                      I believe in the power of <strong className="text-textMain">Open Source</strong> and community.
                      When I'm not coding, I'm likely exploring new AI tools, reading about system architecture, or
                      refining my problem-solving skills on platforms like LeetCode.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <h3 className="font-display text-2xl font-bold text-textMain mb-5 flex items-center gap-3">
                    <Award className="text-accent" size={22} /> Education & Certifications
                  </h3>
                  <div className="space-y-5">
                    {EDUCATION.map((edu, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        key={edu.id}
                        className="p-5 rounded-xl border border-white/8 bg-white/3 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-display text-lg font-bold text-textMain group-hover:text-accent transition-colors">
                              {edu.school}
                            </h4>
                            <p className="text-highlight text-sm font-semibold mt-1">{edu.degree}</p>
                          </div>
                          <span className="text-xs bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-accent font-medium">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-textMuted text-sm mt-3 leading-relaxed">{edu.details}</p>
                      </motion.div>
                    ))}

                    <div className="pt-5 border-t border-white/8">
                      <h4 className="font-display text-base font-bold text-textMain mb-4">Certifications</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CERTIFICATIONS.map((cert, idx) => (
                          <motion.a
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.08 + 0.2 }}
                            key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:bg-highlight/5 hover:border-highlight/30 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-lg font-bold text-white group-hover:bg-highlight/20 group-hover:text-highlight transition-colors">
                              {cert.logo[0]}
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-textMain group-hover:text-highlight transition-colors line-clamp-1">
                                {cert.title}
                              </h5>
                              <p className="text-xs text-textMuted">{cert.issuer}</p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-display text-2xl font-bold text-textMain mb-6 flex items-center gap-3">
                    <Code className="text-accent" size={22} /> Technical Arsenal
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SKILLS.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                          key={index}
                          className="p-4 bg-white/3 rounded-xl border border-white/8 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 cursor-default"
                        >
                          <Icon className="text-3xl text-textMuted group-hover:text-accent transition-colors duration-300" />
                          <div>
                            <h4 className="font-semibold text-textMain text-sm">{skill.name}</h4>
                            <p className="text-xs text-textMuted mt-0.5">{skill.level}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div
                  key="interests"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <h3 className="font-display text-2xl font-bold text-textMain mb-5 flex items-center gap-3">
                    <Zap className="text-accent" size={22} /> Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "AI & Machine Learning", desc: "Exploring LLMs and their applications in web dev.", icon: Cpu },
                      { title: "Open Source", desc: "Contributing to community projects and building public tools.", icon: Globe },
                      { title: "Tech Innovation", desc: "Keeping up with the latest frameworks and architectural patterns.", icon: Zap },
                      { title: "Mentorship", desc: "Sharing knowledge with junior developers and peers.", icon: User },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx}
                          className="flex gap-4 p-5 rounded-xl bg-white/3 border border-white/8 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="mt-0.5 p-3 rounded-lg bg-accent/10 text-accent h-fit">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-textMain mb-1 text-sm">{item.title}</h4>
                            <p className="text-xs text-textMuted leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
