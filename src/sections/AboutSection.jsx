const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl pb-4 md:text-4xl font-bold text-white mb-4 text-center">
        About Me
      </h2>

      <div className="grid lg:grid-cols-12 gap-12 items-start bg-[#0c0c0e] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
        
        {/* Left: Image */}
        <div className="lg:col-span-4  border-4 rounded-3xl border-white/30 flex justify-center">
          <img
            src="/images/BD_photo.png"
            alt="Samuel Ojiemen"
            className="w-full max-w-sm aspect-[/16]  object-cover rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Right: Bio & Experience */}
        <div className="lg:col-span-8 space-y-10">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Samuel Ojiemen</span>. 
            I am a Software Developer driven by the challenge of turning complex problems into 
            impactful, scalable digital solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Technical Stack</h3>
              <p className="text-gray-400 leading-relaxed">
                I specialize in full-stack development with <span className="text-white/90">React, Tailwind CSS, Supabase, and Node.js</span>. 
                I bridge the gap between intuitive UI and robust, secure backend architecture.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Professional Work</h3>
              <p className="text-gray-400 leading-relaxed">
                I have a proven track record of engineering software solutions for the 
                <span className="text-white/90"> Abia State Government</span>, including projects like 
                AlertAbia and the Nkuzi platform.
              </p>
            </div>
          </div>

          {/* <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Let's Work Together
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;