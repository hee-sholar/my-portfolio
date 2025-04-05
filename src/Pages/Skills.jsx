import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TechnologyCard({ name, description, icon, color }) {
  return (
    <div data-aos="fade-up" className="bg-black p-6 rounded-lg text-center shadow-lg relative group">
      <img src={icon} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <h2 className={`text-xl font-semibold ${color}`}>{name}</h2>
      <p className="text-gray-400 mt-2">{description}</p>
      {/* Underline animation on hover */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full bottom-0"></div>
    </div>
  );
}

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const technologies = [
    { name: 'HTML', description: 'Structures web content.', icon: 'https://i.pinimg.com/236x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg', color: 'text-[#E44D26]' },
    { name: 'CSS', description: 'Styles and formats websites.', icon: 'https://i.pinimg.com/236x/17/65/0d/17650db87fb5752364a9a4b6885290ac.jpg', color: 'text-[#264DE4]' },
    { name: 'VITE', description: 'JavaScript build tool that aims to provide a fast.', icon: 'https://i.pinimg.com/236x/1d/c7/9d/1dc79dd660b33a71d2f8f7ab405cfe1b.jpg', color: 'text-[#FFCA28]' },
    { name: 'NODE JS', description: 'Runs JavaScript on the server.', icon: 'https://i.pinimg.com/236x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg', color: 'text-[#339933]' },
    { name: 'JAVASCRIPT', description: 'Adds interactivity to websites.', icon: 'https://i.pinimg.com/236x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg', color: 'text-[#F7DF1E]' },
    { name: 'TAILWIND', description: 'Utility-first CSS framework.', icon: 'https://i.pinimg.com/236x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg', color: 'text-[#06B6D4]' },
    { name: 'NPM', description: 'JavaScript packages and pre-written code modules.', icon: 'https://i.pinimg.com/236x/f8/7b/c1/f87bc1d0961dbe754bf67a6c0c773ac1.jpg', color: 'text-[#FF0000]' },
    { name: 'REACT JS', description: 'Builds user interfaces.', icon: 'https://i.pinimg.com/474x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg', color: 'text-[#61DAFB]' },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Technologies I Use</h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable, and interactive websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.name} {...tech} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;
