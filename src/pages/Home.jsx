import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Education from "../components/Education"; // NEW IMPORT
import Blogs from "../components/Blogs"; // NEW IMPORT
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      {/* SKILLS SECTION */}
      <Skills />

      {/* NEW SECTIONS ADDED HERE */}
      <Education />
      <Certifications />
      <Projects />
      <Blogs />

      <Contact />
      <Footer />

      {/* <footer className="bg-secondary py-8 text-center text-textMuted text-sm border-t border-white/5">
        © 2026 Ali Hassan. Built with React & Tailwind.
      </footer> */}
    </>
  );
};

export default Home;
