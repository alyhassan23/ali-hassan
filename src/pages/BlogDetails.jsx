import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BLOGS } from "../data";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === parseInt(id));

  if (!blog)
    return <div className="text-white text-center pt-24">Blog not found</div>;

  return (
    <div className="min-h-screen bg-primary text-textMain">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* Blog Header */}
        <header className="mb-10 border-b border-white/10 pb-10">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-textMuted">
            <span className="flex items-center gap-2">
              <User size={16} className="text-accent" /> {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" /> {blog.date}
            </span>
          </div>
        </header>

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-loose mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Footer / Call to Action */}
        <div className="mt-16 p-8 bg-secondary rounded-2xl border border-white/5 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Enjoyed this article?
          </h3>
          <p className="text-textMuted mb-6">
            Feel free to reach out if you want to discuss {blog.category} or
            work together.
          </p>
          <a
            href="mailto:alihassan5025a@gmail.com"
            className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
