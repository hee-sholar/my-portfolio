import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TechnologyCard({ name, description, icon, color, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all p-6 rounded-xl text-center shadow-lg group relative transform hover:scale-105 duration-300 border border-gray-800"
    >
      <img
        src={icon}
        alt={name}
        className="w-16 h-16 mx-auto mb-4 rounded-full border border-gray-700"
      />

      <h2 className={`text-xl font-semibold mb-2 ${color}`}>{name}</h2>
      <p className="text-gray-400 text-sm">{description}</p>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white group-hover:w-3/4 transition-all duration-500"></span>
    </div>
  );
}

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technologies = [
    { name: "HTML", description: "Structures web content.", icon: "https://i.pinimg.com/236x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg", color: "text-[#E44D26]" },
    { name: "CSS", description: "Styles and formats websites.", icon: "https://i.pinimg.com/236x/17/65/0d/17650db87fb5752364a9a4b6885290ac.jpg", color: "text-[#264DE4]" },
    { name: "JavaScript", description: "Adds interactivity to websites.", icon: "https://i.pinimg.com/236x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg", color: "text-[#F7DF1E]" },
    { name: "React JS", description: "Builds user interfaces.", icon: "https://i.pinimg.com/474x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg", color: "text-[#61DAFB]" },
    { name: "Node.js", description: "Server-side JavaScript runtime.", icon: "https://i.pinimg.com/236x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg", color: "text-[#339933]" },
    { name: "Express.js", description: "Fast backend framework.", icon: "data:image/jpeg;base64,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", color: "text-[#A8A8A8]" },
  ];

  return (
    <section id="skills" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center px-6">

        <p className="text-accent font-semibold tracking-wide mb-2">
          ⚡ Tech Stack
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools I Work With</h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I build clean UI, scalable backend systems and smooth user experiences using modern web technologies.
        </p>

        {/* TECHNOLOGY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} index={index} />
          ))}
        </div>

        {/* TOOL ENVIRONMENT */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Other Tools & Platforms</h2>
          <p className="text-gray-400">
            Git • GitHub • Tailwind CSS • MongoDB • Firebase • AOS • Vercel • Figma
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
