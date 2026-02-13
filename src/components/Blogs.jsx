import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BLOGS } from "../data";

const Blogs = () => {
  // Show only the first 2 blogs on the home page
  const displayedBlogs = BLOGS.slice(0, 2);

  return (
    <section id="blogs" className="py-24 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section with View All Link */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
              Latest Insights
            </h2>
            <p className="text-textMuted">
              Thoughts on Web Development, AI, and Engineering.
            </p>
          </div>
          <Link
            to="/blogs"
            className="text-accent hover:text-white font-medium flex items-center gap-2 transition-colors group"
          >
            View all articles{" "}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group h-full"
            >
              <div className="bg-primary p-8 rounded-2xl border border-white/5 h-full hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col">
                {/* Meta Info */}
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
                    {blog.category}
                  </span>
                  <span className="text-textMuted text-sm">{blog.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-textMuted leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <div className="text-white font-medium flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
                  Read More <ArrowUpRight size={16} className="text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
