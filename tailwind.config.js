/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900 (Deep professional background)
        secondary: "#1e293b", // Slate 800 (Card background)
        accent: "#6366f1", // Indigo 500 (Primary Action / Web Dev)
        highlight: "#14b8a6", // Teal 500 (Data Science / Growth)
        textMain: "#f8fafc", // Slate 50 (Readable white)
        textMuted: "#94a3b8", // Slate 400 (Subtitles)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        signature: ['"Great Vibes"', "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
