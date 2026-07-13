import { esentialTools } from "../constants";

const Tools = () => {
  return (
    <section className="max-w-7xl mx-auto md:py-0 py-4 px-6">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-400 max-w-lg leading-relaxed">
          I build high-performance applications using a modern stack designed for speed, 
          scalability, and maintainability.
        </p>
      </div>

      {/* Grid Display for Tools */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {esentialTools.map((tool) => (
          <div 
            key={tool.id} 
            className="flex items-center gap-4 p-3 md:p-4 bg-[#0c0c0e] border border-white/5 rounded-xl hover:border-gray-500/50 hover:bg-white/2 transition-all duration-300 group"
          >
            {/* Tool Icon Wrapper */}
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
              <img 
                src={tool.imgPath} 
                alt={tool.name} 
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            
            {/* Tool Name */}
            <span className="font-medium text-[14px] text-white tracking-wide">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;