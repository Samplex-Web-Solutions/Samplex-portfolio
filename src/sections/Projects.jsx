import { useState } from "react";
import { projectSection } from "../constants";
import { FaExternalLinkAlt, FaGithub, FaLock, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sub-component for individual cards to manage their own image state
const ProjectCard = ({ pro }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === pro.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === 0 ? pro.images.length - 1 : prev - 1));
  };

  return (
    <div className="group flex flex-col bg-[#0c0c0e] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-2xl">
      {/* Image Carousel */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img
          src={pro.images[currentImg]}
          alt={pro.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Navigation Arrows */}
        {pro.images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <FaChevronRight size={12} />
            </button>
          </>
        )}

        {/* Private Badge */}
        {pro.isPrivate && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 text-[10px] text-white uppercase tracking-wider font-bold">
            <FaLock size={10} /> Private
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{pro.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{pro.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {pro.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/10 rounded-full">{t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {pro.isPrivate ? (
            <div className="w-full text-center py-3 bg-white/5 border border-white/5 text-gray-500 rounded-xl text-sm italic">
              Internal Government System
            </div>
          ) : (
            <>
              <a href={pro.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-medium">
                <FaExternalLinkAlt size={14} /> Live
              </a>
              <a href={pro.codeLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm px-4 py-3 border border-white/10 hover:bg-white/5 text-white rounded-xl transition-all font-medium">
                <FaGithub size={14} /> Code
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering & Projects</h2>
        <p className="text-gray-400 max-w-2xl">Mission-critical government systems and full-stack technical solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectSection.map((pro) => (
          <ProjectCard key={pro.id} pro={pro} />
        ))}
      </div>
    </section>
  );
};

export default Projects;