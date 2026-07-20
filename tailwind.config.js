/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080B14",    // Deep navy-black
        secondary: "#0E1420",  // Dark navy
        accent: "#6366F1",     // Electric indigo
        highlight: "#F59E0B",  // Amber gold
        textMain: "#F1F5F9",   // Soft white
        textMuted: "#94A3B8",  // Slate-400
        // Extra tones for depth
        accentDim: "#4F46E5",  // Darker indigo
        highlightDim: "#D97706", // Darker amber
        surface: "#111827",    // Card surface
        border: "#1E293B",     // Subtle border
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Syne"', "system-ui", "sans-serif"],
        signature: ['"Great Vibes"', "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        scroll: "scroll 25s linear infinite",
        blob: "blob 9s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
      boxShadow: {
        "glow-accent": "0 0 30px rgba(99,102,241,0.3)",
        "glow-highlight": "0 0 30px rgba(245,158,11,0.3)",
        "glow-accent-sm": "0 0 15px rgba(99,102,241,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
