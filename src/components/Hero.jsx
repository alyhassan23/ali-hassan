import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ words, wait = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[index];
    let timeoutDelay = 150;
    if (reverse) timeoutDelay = 75;
    else if (subIndex === currentWord.length) timeoutDelay = wait;

    const timeout = setTimeout(() => {
      if (!reverse && subIndex === currentWord.length) { setReverse(true); return; }
      if (reverse && subIndex === 0) { setReverse(false); setIndex((prev) => (prev + 1) % words.length); return; }
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, timeoutDelay);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

// --- THREE.JS PARTICLE CONSTELLATION CANVAS (Optimized) ---
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    // ── Particles ────────────────────────────────────────────────────────
    // Reduced to 70 (was 120) — 70 still looks great, much less GPU load
    const PARTICLE_COUNT = 70;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const particleArray = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 4;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      particleArray.push({ x, y, z, vx: (Math.random() - 0.5) * 0.003, vy: (Math.random() - 0.5) * 0.003 });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.065,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(particleGeo, particleMat));

    // ── Pre-allocated LineSegments (NO per-frame object creation) ─────────
    // Max possible connections = PARTICLE_COUNT * MAX_LINKS_PER_PARTICLE / 2
    const MAX_LINKS_PER_PARTICLE = 4;
    const MAX_LINES = (PARTICLE_COUNT * MAX_LINKS_PER_PARTICLE) / 2;
    const linePositions = new Float32Array(MAX_LINES * 2 * 3); // 2 endpoints × 3 coords
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", linePosAttr);
    lineGeo.setDrawRange(0, 0); // start with 0 lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.18 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const MAX_DIST = 2.8;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;

    // Update lines using the pre-allocated buffer — no garbage created
    const updateLines = () => {
      const pos = particleGeo.attributes.position.array;
      let lineIdx = 0;
      const linkCount = new Uint8Array(PARTICLE_COUNT); // track per-particle connections

      for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_LINES; i++) {
        if (linkCount[i] >= MAX_LINKS_PER_PARTICLE) continue;
        for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_LINES; j++) {
          if (linkCount[j] >= MAX_LINKS_PER_PARTICLE) continue;
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < MAX_DIST_SQ) {
            const base = lineIdx * 6;
            linePositions[base] = pos[i * 3];
            linePositions[base + 1] = pos[i * 3 + 1];
            linePositions[base + 2] = pos[i * 3 + 2];
            linePositions[base + 3] = pos[j * 3];
            linePositions[base + 4] = pos[j * 3 + 1];
            linePositions[base + 5] = pos[j * 3 + 2];
            lineIdx++;
            linkCount[i]++;
            linkCount[j]++;
          }
        }
      }

      linePosAttr.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx * 2);
    };

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const handleMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.35;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.35;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const handleResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    let frame = 0;
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame++;

      const pos = particleGeo.attributes.position.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particleArray[i].x += particleArray[i].vx;
        particleArray[i].y += particleArray[i].vy;
        if (Math.abs(particleArray[i].x) > 7) particleArray[i].vx *= -1;
        if (Math.abs(particleArray[i].y) > 5) particleArray[i].vy *= -1;
        pos[i * 3] = particleArray[i].x;
        pos[i * 3 + 1] = particleArray[i].y;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update lines every 8 frames — invisible at 60fps, saves a LOT of CPU
      if (frame % 8 === 0) updateLines();

      camera.position.x += (mouse.x - camera.position.x) * 0.04;
      camera.position.y += (mouse.y - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      particleGeo.dispose();
      lineGeo.dispose();
      particleMat.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// --- HERO COMPONENT ---
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-28 pb-12 relative overflow-hidden px-6">
      {/* Three.js Particle Background */}
      <ParticleCanvas />

      {/* Subtle center glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* TEXT SECTION */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 text-accent text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Hire
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-bold text-textMain mb-6 leading-none tracking-tight"
          >
            Hi, I'm{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-accent via-indigo-400 to-highlight mt-1">
              Ali Hassan
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-textMuted font-medium mb-8 h-9 font-sans"
          >
            I am a{" "}
            <Typewriter words={["Software Engineer", "Web Developer", "Data Analyst"]} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-textMuted mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Bridging the gap between{" "}
            <strong className="text-textMain font-semibold">Full-Stack Development</strong> and{" "}
            <strong className="text-textMain font-semibold">Data Science</strong> to build
            scalable, elegant solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="/Ali_Hassan_CV.pdf"
              download="Ali_Hassan_CV.pdf"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-accent text-white font-bold rounded-xl overflow-hidden transition-all shadow-glow-accent-sm hover:shadow-glow-accent hover:scale-[1.03] hover:bg-accentDim"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_ease-in-out]" />
              <FaDownload className="relative z-10 text-sm" />
              <span className="relative z-10 tracking-wide">Download CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-696b11306"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white/5 backdrop-blur-md text-textMain border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent/40 transition-all hover:scale-[1.03]"
            >
              <FaLinkedin size={20} className="text-[#0a66c2]" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Multi-layer glow rings */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-highlight/20 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
          <div className="absolute inset-8 bg-gradient-to-br from-highlight/20 to-accent/10 rounded-full blur-2xl opacity-20 animate-glow" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-[380px] md:h-[380px] rounded-full p-[2px] bg-gradient-to-tr from-accent via-indigo-400 to-highlight shadow-glow-accent"
          >
            <div className="w-full h-full rounded-full border-2 border-primary bg-secondary overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="/AliHassan.png"
                alt="Ali Hassan"
                className="w-full h-full object-cover object-top filter group-hover:brightness-110 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Decorative floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute bottom-8 -left-4 md:-left-10 glass-card px-4 py-2.5 rounded-xl border border-accent/20 shadow-card"
          >
            <p className="text-xs text-textMuted font-medium">Open to work</p>
            <p className="text-sm text-textMain font-bold">AI/ML Engineer, <br /> Full-Stack Dev</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="absolute top-8 -right-4 md:-right-10 glass-card px-4 py-2.5 rounded-xl border border-highlight/20 shadow-card"
          >
            <p className="text-xs text-textMuted font-medium">Graduated from </p>
            <p className="text-sm text-textMain font-bold">LGU University</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
