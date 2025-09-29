import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "/images/logos/portfolioLogo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div>
        <img src={logo} alt="Portfolio Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-semibold nav-links">
        <li className="cursor-pointer hover:text-blue-500 transition">
          <a href="#hero">Home</a>
        </li>
        <li className="cursor-pointer hover:text-blue-500 transition">
          <a href="#about">About</a>
        </li>
        
        <li className="cursor-pointer hover:text-blue-500 transition">
          <a href="#project">Projects</a>
        </li>

        <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#education">Education</a>
        </li>

        <li className="cursor-pointer hover:text-blue-500 transition">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hire Me Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-blue-600 transition"
      >
        Hire Me
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="w-8 h-8 text-gray-800" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className=" nav-links absolute top-16 left-0 w-full bg-white px-6 py-4 shadow-md z-40 flex flex-col gap-4 text-gray-800 font-semibold md:hidden"
          >
            <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#hero">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#project">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#education">Education</a>
            </li>
              <li className="cursor-pointer hover:text-blue-500 transition">
              <a href="#contact">Contact</a>
            </li>
            <div className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold text-center hover:bg-blue-600 transition">
              Hire Me
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
