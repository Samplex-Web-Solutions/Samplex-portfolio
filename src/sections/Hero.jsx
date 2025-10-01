import { words } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import OjiemenSamuel_Resume from "../assets/OjiemenSamuel_Resume.pdf";
import profile from "/images/myprofile.png";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certs, setCerts] = useState(0);
  const [clients, setClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsRef = useRef(null); // reference for counters section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // start counters
          let yearsInterval = setInterval(() => {
            setYears((prev) => (prev < 3 ? prev + 1 : prev));
          }, 100);

          let projectInterval = setInterval(() => {
            setProjects((prev) => (prev < 14 ? prev + 1 : prev));
          }, 150);

          let certInterval = setInterval(() => {
            setCerts((prev) => (prev < 5 ? prev + 1 : prev));
          }, 150);

          let clientInterval = setInterval(() => {
            setClients((prev) => (prev < 98 ? prev + 1 : prev));
          }, 30);

          // cleanup intervals
          return () => {
            clearInterval(yearsInterval);
            clearInterval(projectInterval);
            clearInterval(certInterval);
            clearInterval(clientInterval);
          };
        }
      },
      { threshold: 0.5 } // 50% visible before triggering
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-10 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout h-max">
        {/* LEFT HERO CONTENT */}
        <header
          className="flex flex-col px-5 md:w-[80%] 
                     h-fit w-screen md:px-1.5"
        >
          <p
            className="text-white-50 w-full text-[40px] select-none sm:text-lg md:text-[38px] xl:text-[45px]
                       relative z-10 pointer-events-none outline-0 mb-1.5
                       sm:w-[80%] md:w-[100%] xl:w-[80%] md:leading-15 xl:leading-15 capitalize"
          >
            Hi, I'm Samuel, a passionate software developer.
          </p>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="word.text"
                          className="xl:size-10 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
            </div>
          </div>
        </header>

        {/* Profile Image */}
        <figure className="hero-img relative flex justify-center items-center md:mr-5 max-h-max">
          <div
            className="relative group w-60 h-60 md:w-50 md:h-60
                       rounded-full overflow-hidden duration-500"
          >
            <img
              src={profile}
              alt="Samuel's Profile"
              className="img-style bg-center object-cover  
                         group-hover:scale-105 transition-transform duration-700 
                         ease-in-out group-hover:grayscale-0"
            />
          </div>
        </figure>
      </div>

      {/* CV & Contact Buttons */}
      <div className="cv-social gap-5">
        <button className="download-CV hover:border-blue-600 transition-colors duration-500 drop-shadow-2xl">
          <a href={OjiemenSamuel_Resume} download="OjiemenSamuel_Resume" className="flex-btn">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </button>

        <button className="contactBtn">
          <a href="#contact" className="flex-btn">
            Contact me
          </a>
        </button>
        <div className="socials"></div>
      </div>

      {/* Stats Section */}
      <section ref={statsRef} className="py-5  text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-500">{years}+</h3>
            <p className="mt-2 text-gray-400">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">{projects}+</h3>
            <p className="mt-2 text-gray-400">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">{certs}+</h3>
            <p className="mt-2 text-gray-400">Certificates Earned</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">{clients}%</h3>
            <p className="mt-2 text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
