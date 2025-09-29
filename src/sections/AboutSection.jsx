
const AboutSection = () => {
  return (
    <section id="about" className=" px-4">
                <h2 className=" text-[23px] md:text-[28px]  font-mono w-[100%] flex flex-row-reverse items-center gap-3 justify-end font-bold mb-6 text-blue-400 md:pl-6">About Me <span className="arrow"></span></h2>

      <div className="py-10 bg-gray-900 text-gray-100 mx-auto px-2 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="/images/myprofile.png"
            alt="About Me"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-gray-700"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-lg mb-4 text-gray-300">
            Hi, I'm <span className="font-semibold text-white">Ojiemen Samuel</span>, 
            a passionate <span className="text-blue-400">Software Developer</span> who enjoys 
            solving problems and building impactful digital solutions.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            My expertise covers both <span className="font-semibold text-white">frontend and backend development</span>, 
            with skills in <span className="text-blue-400">Html, Javascript, React, Tailwind CSS, Node.js, and databases</span>.  
            I've worked on projects ranging from interactive games like Rock-Paper-Scissors 
            to full landing pages and real-world web applications like Cinema Ticket Booking Web application.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            Beyond just coding, I enjoy learning about <span className="font-semibold text-white">software architecture, 
            system design, and scalable solutions</span>. My goal is to keep growing as a developer 
            while contributing to projects that make an impact.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
