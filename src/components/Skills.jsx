import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data";
import SectionReveal from "./SectionReveal";

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-transparent overflow-hidden relative">
      {/* Section top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <SectionReveal className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          What I Work With
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain">
          Technical{" "}
          <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-textMuted text-lg mt-4 max-w-2xl mx-auto">
          Technologies I use to craft scalable, performant solutions.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.15} className="relative w-full overflow-hidden py-8">
        {/* Fade edge masks */}
        <div className="absolute top-0 left-0 z-10 h-full w-40 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-10 h-full w-40 bg-gradient-to-l from-primary to-transparent pointer-events-none" />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
          <div className="flex gap-6 px-3">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex gap-6 px-3">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-2-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex gap-6 px-3">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-3-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.04 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center justify-center min-w-[160px] p-7 glass-card rounded-2xl hover:border-accent/30 hover:shadow-glow-accent-sm transition-all duration-300 group cursor-default"
  >
    <div className="text-textMuted mb-3 text-4xl group-hover:text-accent transition-colors duration-300">
      <skill.icon />
    </div>
    <h3 className="font-display text-base font-bold text-textMain whitespace-nowrap group-hover:text-accent transition-colors">
      {skill.name}
    </h3>
    <p className="text-xs text-textMuted mt-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
      {skill.level}
    </p>
  </motion.div>
);

export default Skills;
