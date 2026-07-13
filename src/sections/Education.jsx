import { educationData } from "../constants";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-white/10 ml-3 space-y-12">
        {educationData.map((item) => (
          <div key={item.id} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            
            {/* Content Card */}
            <div className="bg-[#0c0c0e] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all">
              <span className="inline-block text-blue-400 text-sm font-semibold mb-2 bg-blue-500/10 px-3 py-1 rounded-full">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{item.institute}</h3>
              <p className="text-gray-300 font-medium text-sm mb-3">{item.course}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;