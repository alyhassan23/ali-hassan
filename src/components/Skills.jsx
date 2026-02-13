import React from "react";
import { SKILLS } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-textMain">
          Technical Expertise
        </h2>
        <p className="text-textMuted mt-4">
          Technologies I work with to build scalable solutions.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-primary to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-primary to-transparent"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* First set of skills */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-1-${index}`} skill={skill} />
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-2-${index}`} skill={skill} />
            ))}
          </div>
          {/* Triplicate set to ensure it covers wide screens if list is short */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-3-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center min-w-[150px] p-6 bg-secondary/50 rounded-xl border border-white/5 hover:border-highlight/50 transition-colors group">
    <div className="text-highlight mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
      <skill.icon />
    </div>
    <h3 className="text-lg font-bold text-textMain whitespace-nowrap">
      {skill.name}
    </h3>
    <p className="text-xs text-textMuted mt-1">{skill.level}</p>
  </div>
);

export default Skills;
