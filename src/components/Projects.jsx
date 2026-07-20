import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import SectionReveal from "./SectionReveal";

const Projects = () => {
  const displayedProjects = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="text-center md:text-left">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-4">
              Featured{" "}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-textMuted text-lg max-w-xl">
              A selection of projects demonstrating my engineering capabilities.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 text-textMuted bg-white/5 hover:bg-accent/10 hover:text-accent px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group border border-white/8 hover:border-accent/30 text-sm"
          >
            View all projects{" "}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </SectionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <SectionReveal key={project.id} delay={idx * 0.1} yOffset={35}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full"
              >
                <Link to={`/project/${project.id}`} className="block h-full">
                  <div className="glass-card rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-glow-accent-sm h-full flex flex-col relative shadow-card">
                    {/* Inner hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-3xl" />

                    {/* Image */}
                    <div className="h-60 overflow-hidden relative z-10 m-2.5 rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow relative z-10">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-textMain mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-textMuted text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                        {project.desc}
                      </p>

                      <div className="mt-auto flex items-center text-textMuted text-sm font-medium group-hover:text-accent transition-colors duration-300 gap-1.5">
                        View Case Study{" "}
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
