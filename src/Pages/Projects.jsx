import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "AgricConnect",
    description:
      "Farmer-to-consumer platform that simplifies local produce sales and logistics.",
    image: "/agric.png",
    github: "https://github.com/hee-sholar/agricconnect",
    liveDemo: "https://agricconnect.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "CryptoPlace",
    description:
      "Live crypto tracking dashboard with search, charts, and global stats.",
    image: "/crypto.png",
    github: "https://github.com/hee-sholar/cryptoplace",
    liveDemo: "https://crytoplace.vercel.app/",
    technologies: ["React", "CoinGecko API", "Tailwind"],
  },
  {
    title: "WeatherAPI",
    description:
      "Weather forecast app using OpenWeatherMap API with smooth animations.",
    image: "weather.png",
    github: "https://github.com/hee-sholar/weatherapi",
    liveDemo: "https://weather-api-five-opal.vercel.app/",
    technologies: ["React", "OpenWeather API", "Tailwind"],
  },
];

const ProjectCard = ({ title, description, image, github, liveDemo, technologies, aosDirection }) => {
  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
      data-aos={aosDirection}
    >
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-5 py-2 rounded-lg text-sm shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            🌐 Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold px-5 py-2 rounded-lg text-sm shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Real-world apps that demonstrate my skills in frontend, backend, and full-stack development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              aosDirection={index % 2 === 0 ? "fade-right" : "fade-left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
