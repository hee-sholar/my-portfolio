import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "RealtyFlow - Streamlining Real Estate Transactions",
    description:
      "RealtyFlow is a modern real estate platform designed to simplify property buying, selling, and management processes.",
    image: "loan service.png",
    github: "https://github.com/YOUR_GITHUB_USERNAME/RealtyFlow",
    liveDemo: "https://realtyflow-demo.com",
    technologies: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tastr - Restaurant Management System",
    description:
      "The purpose of this project is to provide a seamless platform for food enthusiasts to browse, order, and enjoy their favorite dishes.",
    image: "woodwork.png",
    github: "https://github.com/YOUR_GITHUB_USERNAME/Tastr",
    liveDemo: "#",
    technologies: ["React.jsx", "Tailwind CSS", "Html"],
  },
  {
    title: "EquiSports - Sports Equipment Online Store",
    description:
      "EquiSports is an online platform offering a wide range of premium sports equipment and accessories for athletes and enthusiasts.",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/YOUR_GITHUB_USERNAME/EquiSports",
    liveDemo: "#",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  
];

const ProjectCard = ({ title, description, image, github, liveDemo, technologies }) => {
  return (
    <div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center 
      transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
      data-aos="fade-up"
    >
      <img src={image} alt={title} className="w-full h-44 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800"
        >
          GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-600"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">Work Highlights</h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            From concept to deployment, these projects highlight my journey as a developer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
