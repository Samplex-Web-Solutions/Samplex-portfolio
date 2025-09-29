import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 mt-10">
      <div className="max-w-10xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Brand/Name */}
        <div className="text-center flex justify-center items-center md:text-left">
          <div>
            <img
              className="w-30 h-full"
              src="public/images/portfolioLogo.webp"
              alt="logo"
            />
          </div>
         <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        

        {/* Navigation */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Samplex-Web-Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            <EnvelopeIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
