import { projectSection } from "../constants";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projectWrapper p-4" id="project">
      <h2 className="sectionTitle text-center mt-5 text-blue-400 font-bold  md:mt-10 md:mb-10 text-[23px] md:text-[28px]  font-mono w-[100%] flex flex-row-reverse items-center gap-3 justify-end mb-4">
        Latest Projects <span className="arrow"></span>
      </h2>

      <div className="grid md:grid-cols-3  bg-gray-500/20 xl:grid-cols-3 p-5 rounded-xl gap-6">
        {projectSection.map((pro) => (
          <div
            key={pro.id}
            className="rounded-2xl hover:border in-hover:border-blue-900  ease-in-out shadow-lg overflow-hidden  bg-white hover:shadow-2xl transition duration-300"
          >
            {/* Project Image */}
            <div className="project-image-wrapper">
              <img
                src={pro.image}
                alt={pro.alt}
                className="w-full object-cover hover:scale-110 duration-500 ease-in-out "
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="title text-gray-700 text-lg font-semibold">
                {pro.title}
              </h3>
              <p className="description text-gray-600 text-sm mt-2">
                {pro.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {pro.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-white text-xs rounded-full bg-gray-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links with icons */}
              <div className="mt-4 flex gap-4">
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={pro.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-500 gap-2 text-sm px-3 py-2 border border-gray-400 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
