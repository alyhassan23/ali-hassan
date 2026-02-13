import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-primary pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* --- INTERESTING BACKGROUND EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Cyber Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 2. Ambient Glow (Center Top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-12">
          {/* Brand Column (Span 5) */}
          <div className="md:col-span-5">
            <h2 className="font-signature text-3xl font-bold text-white mb-4 tracking-tight">
              Ali<span className="text-accent"> Hassan</span>
            </h2>
            <p className="text-textMuted leading-relaxed max-w-sm mb-6">
              A Software Engineer bridging the gap between{" "}
              <span className="text-white">complex backend logic</span> and{" "}
              <span className="text-white">intuitive frontend design</span>.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ali-hassan-696b11306"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-secondary border border-white/5 rounded-full flex items-center justify-center text-textMuted hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                <FaLinkedin size={18} />
              </a>
              {/* Added GitHub since you mentioned Open Source in CV */}
              <a
                href="#"
                className="w-10 h-10 bg-secondary border border-white/5 rounded-full flex items-center justify-center text-textMuted hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg hover:shadow-white/25"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:alihassan5025a@gmail.com"
                className="w-10 h-10 bg-secondary border border-white/5 rounded-full flex items-center justify-center text-textMuted hover:bg-highlight hover:text-white hover:border-highlight transition-all duration-300 shadow-lg hover:shadow-highlight/25"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Column (Span 3) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 text-textMuted">
              <li>
                <a
                  href="/#about"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#education"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-textMuted">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                <span>Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-highlight mt-1">●</span>
                <a
                  href="mailto:alihassan5025a@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  alihassan5025a@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">●</span>
                <span>+92 3XX XXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Ali Hassan. Built with React &
            Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-textMuted hover:text-white transition-colors text-sm font-medium"
          >
            Back to Top
            <span className="p-2 bg-secondary border border-white/5 rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
