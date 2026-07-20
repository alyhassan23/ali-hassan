import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { EDUCATION } from "../data";
import SectionReveal from "./SectionReveal";

const Education = () => {
  return (
    <section id="education" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionReveal className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-5">
            Education{" "}
            <span className="text-gradient">Path</span>
          </h2>
          <p className="text-textMuted text-lg">My academic background and qualifications.</p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative border-l-2 border-accent/20 ml-3 md:ml-6 space-y-12">
          {EDUCATION.map((edu, idx) => (
            <SectionReveal
              key={edu.id}
              delay={idx * 0.15}
              yOffset={30}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute top-3 -left-[9px] w-4 h-4 bg-accent rounded-full border-4 border-primary group-hover:bg-highlight group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

              {/* Content Card */}
              <div className="p-7 glass-card rounded-2xl hover:border-accent/30 transition-all duration-400 hover:shadow-glow-accent-sm hover:-translate-y-1 shadow-card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-3">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-textMain flex flex-wrap items-center gap-3 group-hover:text-accent transition-colors">
                      <GraduationCap className="text-highlight shrink-0" size={22} />
                      {edu.degree}
                    </h3>
                    <span className="text-accent font-semibold mt-2 block text-base">
                      {edu.school}
                    </span>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-row md:flex-col gap-3 md:gap-2 text-xs text-textMuted mt-1 md:mt-0">
                    <span className="flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                      <Calendar size={12} className="text-accent" /> {edu.year}
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                      <MapPin size={12} className="text-textMuted" /> {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-textMuted text-sm leading-relaxed border-t border-white/8 pt-5">
                  {edu.details}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
