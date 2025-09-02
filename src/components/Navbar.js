import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Codefolio.dev 🚀
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#6366f1" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-500 transition"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:hidden flex flex-col items-center pt-20 space-y-8 text-lg font-semibold"
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="hover:text-indigo-600 transition"
          >
            {link}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
