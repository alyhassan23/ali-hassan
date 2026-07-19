import React, { useState, useEffect } from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

// --- FIXED TYPEWRITER COMPONENT ---
const Typewriter = ({ words, wait = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[index];
    let timeoutDelay = 150;

    if (reverse) {
      timeoutDelay = 75;
    } else if (subIndex === currentWord.length) {
      timeoutDelay = wait;
    }

    const timeout = setTimeout(() => {
      if (!reverse && subIndex === currentWord.length) {
        setReverse(true);
        return;
      }

      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="text-highlight">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

// --- HERO COMPONENT ---
const Hero = () => {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-28 pb-12 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/80 backdrop-blur-md border border-white/10 text-accent text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Available for Hire
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-textMain mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              Ali Hassan
            </span>
          </motion.h1>

          {/* ANIMATED TEXT SECTION */}
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-textMuted font-medium mb-8 h-10">
            I am a{" "}
            <Typewriter
              words={["Software Engineer", "Web Developer", "Data Analyst"]}
            />
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-textMuted mb-8 max-w-lg mx-auto md:mx-0">
            Bridging the gap between{" "}
            <strong className="text-white">Full-Stack Development</strong> and{" "}
            <strong className="text-white">Data Science</strong> to build
            scalable solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Ali_Hassan_CV.pdf"
              download="Ali_Hassan_CV.pdf"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-bold rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <FaDownload className="relative z-10" /> <span className="relative z-10">Download CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-696b11306"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-secondary/50 backdrop-blur-md text-white border border-white/10 rounded-xl hover:bg-white/5 hover:border-accent/50 transition-all hover:scale-105"
            >
              <FaLinkedin size={20} className="text-[#0a66c2]" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight rounded-full blur-3xl opacity-20 animate-pulse"></div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full p-1 bg-gradient-to-tr from-accent via-transparent to-highlight shadow-[0_0_50px_rgba(6,182,212,0.3)]"
          >
            <div className="w-full h-full rounded-full border-4 border-primary bg-secondary overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/AliHassan.png"
                alt="Ali Hassan"
                className="w-full h-full object-cover object-top filter group-hover:contrast-125 transition-all duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
