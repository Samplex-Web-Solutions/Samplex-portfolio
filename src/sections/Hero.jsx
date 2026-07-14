import Resume from "../assets/Ojiemen_Samuel_Frontend_Engineer.pdf";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certs, setCerts] = useState(0);
  const [clients, setClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const animate = (setter, limit, speed) => {
            let count = 0;
            const interval = setInterval(() => {
              count++;
              setter(count);
              if (count >= limit) clearInterval(interval);
            }, speed);
          };
          animate(setYears, 3, 200);
          animate(setProjects, 14, 80);
          animate(setCerts, 5, 120);
          animate(setClients, 98, 10);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="hero" className="relative pt-26 overflow-hidden">
      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col text-center items-center justify-center gap-10">

        <div className="space-y-6">
          <span className="text-blue-500  font-semibold tracking-[0.2em] text-sm uppercase">Software Engineer</span>

          <h1 className="text-4xl md:text-8xl pt-4 font-bold text-white leading-[1.2]">
            Shaping Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real Projects</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hi, I'm Samuel. I build high-performance web applications and scalable backend systems with a focus on modern, intuitive user interfaces.
          </p>
        </div>

        {/* Centered Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href={Resume} download className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Download CV
          </a>
          <a href="#contact" className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white rounded-xl transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>

      {/* STATS SECTION - WITH DEPTH/LAYERED CARD STYLE */}
      <section ref={statsRef} className="max-w-7xl mx-auto mt-8 md:mt-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-[#111114] border border-white/5 p-4 md:p-8 rounded-xl shadow-xl">
          {[
            { label: "Years Experience", value: `${years}+` },
            { label: "Projects", value: `${projects}+` },
            { label: "Certifications", value: `${certs}+` },
            { label: "Satisfaction", value: `${clients}%` },
          ].map((stat, idx) => (
            <div key={idx} className="p-1 md:p-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-[10px] md:text-xs uppercase -tracking-normal text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;