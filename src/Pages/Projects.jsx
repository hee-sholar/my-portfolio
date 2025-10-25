import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Book Appointment Website",
    category: "Fullstack Development",
    image: "/.png",
    description: "A modern medical appointment platform that allows users to book consultations online with secure authentication and real-time scheduling.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    demo: "https://your-book-appointment-live-link.com",
    code: "https://github.com/your-appointment-system"
  },
  {
    title: "AgricConnect Platform",
    category: "Web Platform",
    image: "/agric.png",
    description: "A digital marketplace connecting farmers with buyers. It supports product listing, order management, secure payments, and chat support.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT Auth"],
    demo: "https://your-agricconnect-live-link.com",
    code: "https://github.com/agricconnect"
  },
  {
    title: "Crypto Price Tracker Dashboard",
    category: "Frontend Development",
    image: "/crypto.png",
    description: "A real-time crypto dashboard that fetches live market prices, charts, and watchlists using public APIs.",
    stack: ["React", "Tailwind CSS", "CoinGecko API"],
    demo: "https://your-crypto-live-demo.com",
    code: "https://github.com/your-crypto-dashboard"
  },
  {
    title: "Personal Portfolio Website",
    category: "UI/UX + Frontend",
    image: "/personal-portfolio.png",
    description: "A visually appealing personal brand portfolio showcasing services, skills, case studies, and testimonials.",
    stack: ["React", "Tailwind", "AOS Animation"],
    demo: "https://your-portfolio-demo.com",
    code: "https://github.com/your-portfolio"
  }
];


export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Fullstack Development", "Web Platform", "Frontend Development", "UI/UX + Frontend"];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-accent font-semibold">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects I've Worked On
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A selection of projects where I designed and developed beautiful and scalable digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition border text-sm font-medium
              ${activeCategory === cat ? "bg-accent text-black border-accent" : "border-border hover:bg-accent hover:text-black"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/40 border border-border rounded-xl overflow-hidden hover:border-accent transition"
              data-aos="fade-up"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-accent text-sm font-semibold">{project.category}</p>
                <h3 className="text-xl font-semibold text-foreground mt-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-accent/15 text-accent px-3 py-1 text-xs rounded-full">{tech}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <a href={project.demo} target="_blank" className="flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full hover:bg-accent/90 transition text-sm">
                    <ExternalLink size={16}/> Live Demo
                  </a>
                  <a href={project.code} target="_blank" className="flex items-center gap-2 border border-border px-4 py-2 rounded-full hover:bg-secondary transition text-sm">
                    <Github size={16}/> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
