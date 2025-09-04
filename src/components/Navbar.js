import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  const handleMenuClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div>
      {/* Website Header with Gradient */}
      <header className="fixed top-0 left-0 w-full flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md z-50">
        {/* Hamburger Icon */}
        <button
          className="p-2 mr-4 bg-white/20 rounded-lg hover:bg-white/30"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Website Name */}
        <h1 className="text-2xl font-bold tracking-wide">Codefolio.dev</h1>
      </header>

      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar From Left */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 p-6 flex flex-col space-y-6"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            className="text-2xl text-gray-600 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        {menuItems.map((item) => (
          <button
            key={item}
            className="text-lg text-gray-800 hover:text-purple-600 text-left"
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </button>
        ))}
      </motion.div>
    </div>
  );
}