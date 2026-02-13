import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure to npm install lucide-react if missing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" }, // New Link
    { name: "Projects", href: "/#projects" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Blogs", href: "/#blogs" }, // New Link
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-primary/80 backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-signature font-bold text-white flex items-center gap-2 group"
        >
          Ali
          <span className="text-accent group-hover:text-highlight transition-colors">
            Hassan
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 px-3 text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/#contact"
            className="text-white bg-accent hover:bg-indigo-600 font-medium rounded-full text-sm px-5 py-2 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-secondary/50 border border-white/5 p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white rounded hover:bg-white/10 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-center text-white bg-accent rounded hover:bg-indigo-600 mt-4"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
