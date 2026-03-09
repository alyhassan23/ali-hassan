import React, { useState, useEffect } from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";

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
    // Safety check to prevent errors if words array is empty
    if (!words || words.length === 0) return;

    const currentWord = words[index];

    // Determine the delay based on the current state
    let timeoutDelay = 150; // Default typing speed

    if (reverse) {
      timeoutDelay = 75; // Deleting speed (faster)
    } else if (subIndex === currentWord.length) {
      timeoutDelay = wait; // Pause at the end of the word
    }

    const timeout = setTimeout(() => {
      // 1. If we finished typing the word, start deleting
      if (!reverse && subIndex === currentWord.length) {
        setReverse(true);
        return;
      }

      // 2. If we finished deleting, move to next word
      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      // 3. Otherwise, just move the cursor (type or delete char)
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
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary pt-28 pb-12 relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
        <div className="text-center md:text-left order-2 md:order-1 animate-slide-up">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary border border-white/10 text-accent text-sm font-semibold mb-6">
            Available for Hire
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-textMain mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              Ali Hassan
            </span>
          </h1>

          {/* ANIMATED TEXT SECTION */}
          <h2 className="text-2xl md:text-3xl text-textMuted font-medium mb-8 h-10">
            I am a{" "}
            <Typewriter
              words={["Software Engineer", "Web Developer", "Data Analyst"]}
            />
          </h2>

          <p className="text-lg md:text-xl text-textMuted mb-8 max-w-lg mx-auto md:mx-0">
            Bridging the gap between{" "}
            <strong className="text-white">Full-Stack Development</strong> and{" "}
            <strong className="text-white">Data Science</strong> to build
            scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Ali Hassan CV.pdf"
              download="Ali_Hassan_CV.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-696b11306"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-white border border-white/10 rounded-lg hover:bg-accent hover:border-accent transition-all"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Decorative Circle behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight rounded-full blur-2xl opacity-30 scale-90 animate-pulse"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-accent to-highlight">
            <img
              src="/AliHassan.png"
              alt="Ali Hassan"
              className="w-full h-full object-cover object-top rounded-full border-4 border-primary bg-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
