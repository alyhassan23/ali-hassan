import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PROJECTS } from "../data";
import { Search, ArrowLeft } from "lucide-react";

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic
  const filteredProjects = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-primary text-textMain">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors mb-4"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <h1 className="text-4xl font-bold">All Projects</h1>
            <p className="text-textMuted mt-2">
              Explore my complete engineering portfolio.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group"
              >
                <div className="bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-highlight text-xs font-bold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-textMuted text-sm line-clamp-3 mb-6 flex-grow">
                      {project.desc}
                    </p>
                    <div className="text-accent font-medium text-sm flex items-center mt-auto">
                      View Details{" "}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-textMuted">
              No projects found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
