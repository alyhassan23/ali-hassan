import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BLOGS } from "../data";
import { Search, ArrowLeft, ArrowUpRight } from "lucide-react";

const AllBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic
  const filteredBlogs = BLOGS.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
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
            <h1 className="text-4xl font-bold">All Articles</h1>
            <p className="text-textMuted mt-2">
              Thoughts, tutorials, and insights.
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
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group h-full"
              >
                <div className="bg-secondary p-8 rounded-2xl border border-white/5 h-full hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
                      {blog.category}
                    </span>
                    <span className="text-textMuted text-sm">{blog.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read Article{" "}
                    <ArrowUpRight size={16} className="text-accent" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-textMuted">
              No articles found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
