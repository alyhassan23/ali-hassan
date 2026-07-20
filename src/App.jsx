import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";
import AllProjects from "./pages/AllProjects"; // NEW IMPORT
import AllBlogs from "./pages/AllBlogs"; // NEW IMPORT

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-[-1] bg-primary overflow-hidden">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        {/* Primary accent orb — top left */}
        <div className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] rounded-full bg-accent/15 blur-[140px] animate-blob" />
        {/* Highlight orb — top right */}
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[45%] rounded-full bg-highlight/10 blur-[130px] animate-blob animation-delay-2000" />
        {/* Accent orb — bottom center */}
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent/8 blur-[150px] animate-blob animation-delay-4000" />
        {/* Extra glow — mid right */}
        <div className="absolute top-[50%] right-[5%] w-[25%] h-[35%] rounded-full bg-accentDim/10 blur-[100px] animate-blob animation-delay-3000" />
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,11,20,0.7)_100%)]" />
      </div>
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          {/* NEW ROUTES */}
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
