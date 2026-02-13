import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";

const Projects = () => {
  // Show only the first 4 projects on the home page
  const displayedProjects = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section with View All Link */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
              Featured Work
            </h2>
            <p className="text-textMuted">
              A selection of projects demonstrating my engineering capabilities.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-accent hover:text-white font-medium flex items-center gap-2 transition-colors group"
          >
            View all projects{" "}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group h-full"
            >
              <div className="bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 h-full flex flex-col">
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-highlight text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textMuted line-clamp-2 mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="mt-auto flex items-center text-accent font-medium text-sm">
                    View Case Study{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
