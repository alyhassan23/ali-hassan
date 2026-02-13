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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* NEW ROUTES */}
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Routes>
    </Router>
  );
}

export default App;
