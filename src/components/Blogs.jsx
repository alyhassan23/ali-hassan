import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BLOGS } from "../data";
import SectionReveal from "./SectionReveal";

const Blogs = () => {
  const displayedBlogs = BLOGS.slice(0, 2);

  return (
    <section id="blogs" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Ambient side glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Writing</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-4">
              Latest{" "}
              <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-textMuted text-lg">
              Thoughts on Web Development, AI, and Engineering.
            </p>
          </div>
          <Link
            to="/blogs"
            className="shrink-0 text-textMuted bg-white/5 hover:bg-accent/10 hover:text-accent px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group border border-white/8 hover:border-accent/30 text-sm"
          >
            View all articles{" "}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </SectionReveal>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedBlogs.map((blog, idx) => (
            <SectionReveal key={blog.id} delay={idx * 0.12} yOffset={35}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full"
              >
                <Link to={`/blog/${blog.id}`} className="block h-full">
                  <div className="glass-card p-8 rounded-3xl h-full hover:border-accent/30 transition-all duration-500 hover:shadow-glow-accent-sm flex flex-col relative overflow-hidden shadow-card">
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-3xl" />

                    {/* Meta */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <span className="px-3 py-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full uppercase tracking-widest">
                        {blog.category}
                      </span>
                      <span className="text-textMuted text-xs font-medium">{blog.date}</span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-textMain mb-4 group-hover:text-highlight transition-colors relative z-10 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-textMuted text-sm leading-relaxed mb-8 flex-grow relative z-10">
                      {blog.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="text-textMuted text-sm font-medium flex items-center gap-2 mt-auto group-hover:gap-3 transition-all relative z-10 group-hover:text-accent">
                      Read Article{" "}
                      <ArrowUpRight
                        size={16}
                        className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
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

export default Blogs;
