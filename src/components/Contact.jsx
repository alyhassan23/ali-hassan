import React from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              Touch
            </span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Available for new opportunities. Let's build something great.
          </p>
        </motion.div>

        {/* COMPACT GRID SYSTEM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Email Card */}
          <motion.a
            variants={itemVariants}
            href="mailto:alih.bsse@gmail.com"
            className="group relative bg-secondary/30 backdrop-blur-md hover:bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-accent/50 overflow-hidden"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-4 bg-white/5 rounded-xl text-accent group-hover:text-white group-hover:bg-accent transition-colors shadow-inner border border-white/5">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white font-bold text-base mb-1">Email</h3>
                <p className="text-textMuted text-sm truncate">
                  alih.bsse@gmail.com
                </p>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/ali-hassan-696b11306"
            target="_blank"
            rel="noreferrer"
            className="group relative bg-secondary/30 backdrop-blur-md hover:bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:border-highlight/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-highlight/0 via-highlight/10 to-highlight/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-4 bg-white/5 rounded-xl text-highlight group-hover:text-white group-hover:bg-highlight transition-colors shadow-inner border border-white/5">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">
                  LinkedIn
                </h3>
                <p className="text-textMuted text-sm">Connect with me</p>
              </div>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            variants={itemVariants}
            href="tel:+923374848230" // Update this
            className="group relative bg-secondary/30 backdrop-blur-md hover:bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:border-green-500/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-4 bg-white/5 rounded-xl text-green-500 group-hover:text-white group-hover:bg-green-500 transition-colors shadow-inner border border-white/5">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Phone</h3>
                <p className="text-textMuted text-sm">+92 3374848230</p>
              </div>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-secondary/30 backdrop-blur-md hover:bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-500/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-4 bg-white/5 rounded-xl text-pink-500 group-hover:text-white group-hover:bg-pink-500 transition-colors shadow-inner border border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">
                  Location
                </h3>
                <p className="text-textMuted text-sm">Lahore, Pakistan</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
