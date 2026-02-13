import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PROJECTS } from "../data";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <div className="text-white text-center pt-24">Project not found</div>
    );

  return (
    <div className="min-h-screen bg-primary text-textMain">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Link
          to="/"
          className="text-accent hover:text-indigo-400 font-medium mb-6 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <div className="bg-secondary rounded-2xl overflow-hidden border border-white/5 mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover max-h-[500px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-textMuted leading-relaxed text-lg mb-8">
              {project.details}
            </p>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-textMuted leading-relaxed">
             {project.Challenge}
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-xl border border-white/5 h-fit">
            <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">
              Project Info
            </h3>
            <div className="mb-4">
              <span className="block text-sm text-textMuted">Category</span>
              <span className="font-medium text-highlight">
                {project.category}
              </span>
            </div>
            <div className="mb-4">
              <span className="block text-sm text-textMuted">Tech Stack</span>
              <span className="font-medium">{project.techstack}</span>
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
