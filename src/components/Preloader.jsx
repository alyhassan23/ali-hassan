import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Software Engineer", "Full-Stack Developer", "Data Scientist"];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [nameReady, setNameReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  // ── Canvas particle burst animation ──────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const cx = W / 2;
    const cy = H / 2;

    // Create node ring around center monogram
    const NODE_COUNT = 28;
    const RADIUS = Math.min(W, H) * 0.22;
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const r = RADIUS + (Math.random() - 0.5) * 30;
      return {
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        baseAngle: angle,
        currentAngle: angle,
        orbitR: r,
        orbitSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      };
    });

    // Extra floating particles
    const FLOAT_COUNT = 60;
    const floats = Array.from({ length: FLOAT_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.25 + 0.05,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const MAX_LINK_DIST = RADIUS * 0.65;
    let t = 0;

    const draw = () => {
      animRef.current = requestAnimationFrame(draw);
      t++;
      ctx.clearRect(0, 0, W, H);

      // Update orbit nodes
      nodes.forEach((n) => {
        n.currentAngle += n.orbitSpeed;
        n.x = cx + Math.cos(n.currentAngle) * n.orbitR + Math.sin(t * 0.01) * 3;
        n.y = cy + Math.sin(n.currentAngle) * n.orbitR + Math.cos(t * 0.013) * 3;
      });

      // Update floats
      floats.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < 0 || f.x > W) f.vx *= -1;
        if (f.y < 0 || f.y > H) f.vy *= -1;
      });

      // Draw connection lines between orbit nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DIST) {
            const alpha = (1 - dist / MAX_LINK_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw orbit nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129,140,248,${n.alpha})`;
        ctx.fill();
      });

      // Draw floating particles
      floats.forEach((f) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${f.alpha})`;
        ctx.fill();
      });

      // Subtle inner glow ring
      const pulse = Math.sin(t * 0.04) * 0.5 + 0.5;
      const gradient = ctx.createRadialGradient(cx, cy, RADIUS * 0.4, cx, cy, RADIUS * 1.2);
      gradient.addColorStop(0, `rgba(99,102,241,${0.04 + pulse * 0.03})`);
      gradient.addColorStop(1, "rgba(99,102,241,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, RADIUS * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // ── Progress simulation ────────────────────────────────────────────────
  useEffect(() => {
    // Name appears quickly
    const nameTimer = setTimeout(() => setNameReady(true), 300);

    // Role cycling
    const roleTimer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 750);

    // Progress bar races to 100
    let prog = 0;
    const progressTimer = setInterval(() => {
      // Accelerate near the end
      const step = prog < 70 ? Math.random() * 6 + 2 : Math.random() * 3 + 1;
      prog = Math.min(100, prog + step);
      setProgress(Math.floor(prog));

      if (prog >= 100) {
        clearInterval(progressTimer);
        clearInterval(roleTimer);
        // Brief pause at 100%, then exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete?.(), 800);
        }, 450);
      }
    }, 55);

    return () => {
      clearTimeout(nameTimer);
      clearInterval(roleTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#080B14" }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Deep ambient glow */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(245,158,11,0.04) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Corner brackets — top left */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M32 2H2V32" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
            </svg>
          </div>
          {/* Corner brackets — top right */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M0 2H30V32" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
            </svg>
          </div>
          {/* Corner brackets — bottom left */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M32 30H2V0" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
            </svg>
          </div>
          {/* Corner brackets — bottom right */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M0 30H30V0" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
            </svg>
          </div>

          {/* Status line — top */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                color: "rgba(99,102,241,0.6)",
                letterSpacing: "0.2em",
              }}
            >
              SYS_BOOT :: PORTFOLIO_V1
            </p>
          </div>

          {/* Canvas particle constellation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.9 }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Monogram ring cluster */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: 140, height: 140 }}
            >
              {/* Outer spinning ring — indigo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1.5px solid transparent",
                  borderTopColor: "rgba(99,102,241,0.9)",
                  borderRightColor: "rgba(99,102,241,0.15)",
                  borderBottomColor: "transparent",
                  animation: "spin 2s linear infinite",
                }}
              />
              {/* Dash ring — amber, slower, reverse */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "14px",
                  border: "1.5px dashed rgba(245,158,11,0.35)",
                  animation: "spin 6s linear infinite reverse",
                }}
              />
              {/* Inner pulse ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "28px",
                  border: "1px solid rgba(99,102,241,0.25)",
                  animation: "pulse 2.5s ease-in-out infinite",
                }}
              />
              {/* Center dot */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#6366F1",
                  boxShadow: "0 0 16px rgba(99,102,241,0.9)",
                }}
              />
              {/* Monogram */}
              <span
                style={{
                  fontFamily: '"Syne", system-ui, sans-serif',
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #818CF8 20%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                AH
              </span>
            </div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={nameReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1
                style={{
                  fontFamily: '"Syne", system-ui, sans-serif',
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.32em",
                  color: "#F1F5F9",
                  textTransform: "uppercase",
                }}
              >
                ALI HASSAN
              </h1>
            </motion.div>

            {/* Cycling role */}
            <div style={{ height: 22, overflow: "hidden", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.22em",
                    color: "rgba(148,163,184,0.7)",
                    textTransform: "uppercase",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div style={{ width: 260 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  fontFamily: "monospace",
                  fontSize: "0.62rem",
                  color: "rgba(148,163,184,0.5)",
                  letterSpacing: "0.08em",
                }}
              >
                <span>LOADING PORTFOLIO</span>
                <motion.span
                  key={progress}
                  initial={{ color: "rgba(99,102,241,0.7)" }}
                  animate={{ color: progress === 100 ? "rgba(245,158,11,0.9)" : "rgba(99,102,241,0.9)" }}
                  transition={{ duration: 0.2 }}
                >
                  {String(progress).padStart(3, "0")}%
                </motion.span>
              </div>
              {/* Track */}
              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.08 }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #6366F1 0%, #818CF8 60%, #F59E0B 100%)",
                    borderRadius: 4,
                    boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                  }}
                />
              </div>
              {/* Tick marks */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 5,
                  fontFamily: "monospace",
                  fontSize: "0.55rem",
                  color: "rgba(148,163,184,0.25)",
                }}
              >
                {["00", "25", "50", "75", "100"].map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <AnimatePresence mode="wait">
              <motion.p
                key={Math.floor(progress / 25)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.6rem",
                  color: "rgba(148,163,184,0.4)",
                  letterSpacing: "0.15em",
                  textAlign: "center",
                }}
              >
                {progress < 25
                  ? "INITIALIZING SYSTEMS..."
                  : progress < 50
                  ? "LOADING COMPONENTS..."
                  : progress < 75
                  ? "RENDERING PORTFOLIO..."
                  : progress < 100
                  ? "ALMOST READY..."
                  : "✓ LAUNCH READY"}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
