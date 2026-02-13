import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { EDUCATION } from "../data";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-primary relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Education Path
          </h2>
          <p className="text-textMuted">
            My academic background and qualifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot (Absolute Positioned on the line) */}
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-accent rounded-full border-4 border-primary group-hover:bg-highlight group-hover:scale-125 transition-all duration-300"></div>

              {/* Content Card */}
              <div className="p-6 bg-secondary rounded-xl border border-white/5 hover:border-accent/30 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white flex flex-wrap items-center gap-2">
                      <GraduationCap
                        className="text-accent shrink-0"
                        size={20}
                      />
                      {edu.degree}
                    </h3>
                    <span className="text-highlight font-medium mt-1 block">
                      {edu.school}
                    </span>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-row md:flex-col gap-4 md:gap-1 text-sm text-textMuted mt-2 md:mt-0">
                    <span className="flex items-center gap-1 bg-primary/50 px-2 py-1 rounded md:bg-transparent md:p-0">
                      <Calendar size={14} /> {edu.year}
                    </span>
                    <span className="flex items-center gap-1 bg-primary/50 px-2 py-1 rounded md:bg-transparent md:p-0">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
