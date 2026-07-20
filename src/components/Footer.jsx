import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-grid-pattern bg-grid-sm [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-12">
          {/* Brand Column */}
          <SectionReveal delay={0} className="md:col-span-5">
            <h2 className="font-signature text-4xl font-bold text-textMain mb-4">
              Ali<span className="text-accent">Hassan</span>
            </h2>
            <p className="text-textMuted leading-relaxed max-w-sm mb-7 text-[0.92rem]">
              A Software Engineer bridging the gap between{" "}
              <span className="text-textMain">complex backend logic</span> and{" "}
              <span className="text-textMain">intuitive frontend design</span>.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/ali-hassan-696b11306",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  hover: "hover:bg-accent hover:text-white hover:border-accent hover:shadow-glow-accent-sm",
                },
                {
                  href: "#",
                  icon: FaGithub,
                  label: "GitHub",
                  hover: "hover:bg-white hover:text-primary hover:border-white",
                },
                {
                  href: "mailto:alih.bsse@gmail.com",
                  icon: FaEnvelope,
                  label: "Email",
                  hover: "hover:bg-highlight hover:text-white hover:border-highlight hover:shadow-glow-highlight",
                },
              ].map(({ href, icon: Icon, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-surface border border-white/5 rounded-full flex items-center justify-center text-textMuted transition-all duration-300 ${hover}`}
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </SectionReveal>

          {/* Navigation Column */}
          <SectionReveal delay={0.1} className="md:col-span-3">
            <h3 className="font-display text-textMain font-bold mb-6 text-sm tracking-widest uppercase text-textMuted">Navigation</h3>
            <ul className="space-y-3 text-textMuted text-[0.9rem]">
              {[
                { label: "About Me", href: "/#about" },
                { label: "Projects", href: "/#projects" },
                { label: "Timeline", href: "/#education" },
                { label: "Articles", href: "/blogs" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Contact Column */}
          <SectionReveal delay={0.2} className="md:col-span-4">
            <h3 className="font-display text-textMain font-bold mb-6 text-sm tracking-widest uppercase text-textMuted">Contact Info</h3>
            <ul className="space-y-4 text-textMuted text-[0.9rem]">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5 text-xs">◆</span>
                <span>Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-highlight mt-0.5 text-xs">◆</span>
                <a href="mailto:alih.bsse@gmail.com" className="hover:text-textMain transition-colors">
                  alih.bsse@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">◆</span>
                <span>+92 337 4848230</span>
              </li>
            </ul>
          </SectionReveal>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-xs">
            © {new Date().getFullYear()} Ali Hassan. Built with React & Tailwind.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-textMuted hover:text-textMain transition-colors text-xs font-medium"
          >
            Back to Top
            <span className="p-2 bg-surface border border-white/5 rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
