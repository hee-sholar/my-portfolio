import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const techStack = [
    "React.js", "Next.js", "Tailwind CSS", "Node.js",
    "Express", "MongoDB", "Firebase", "Git/GitHub",
    "REST APIs", "JWT Auth", "Mongoose", "Prisma"
  ];

  const timeline = [
    {
      year: "2022",
      role: "Started Web Dev Journey",
      desc: "Began learning HTML, CSS & JavaScript and building mini-projects.",
    },
    {
      year: "2023",
      role: "Internship @ Malhub",
      desc: "Worked on full-stack projects using MERN stack and built production-grade applications.",
    },
    {
      year: "2024",
      role: "Freelance & Personal Projects",
      desc: "Shipped multiple apps including a booking site, crypto dashboard, and AI tools.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-8">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Animation */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-gray-800 w-[280px] sm:w-[320px] md:w-[400px] mx-auto border-2 border-white/20 shadow-xl transform transition-transform duration-700 hover:rotate-3 hover:scale-105">
              <img
                src="/my.jpg"
                alt="Balogun AbdulRahmon Ishola"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* About Me Text */}
          <div className="space-y-6" data-aos="fade-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white">
              Get to Know Me More
            </h1>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Hi, I'm <span className="text-white font-semibold">Balogun AbdulRahmon Ishola</span>, a{" "}
              <span className="text-white font-medium">Full Stack Developer</span> passionate about building modern,
              scalable applications using tools like <span className="text-white">React, Node.js, and MongoDB</span>.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I thrive in fast-paced environments, enjoy debugging and crafting clean UI/UX, and love learning new
              frameworks and design systems.
            </p>

            <a
              href="#projects"
              className="inline-block border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition mt-4 font-medium"
              data-aos="fade-up"
            >
              🚀 Explore Projects
            </a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm bg-white text-black rounded-full border border-white/20 shadow-sm hover:scale-105 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-20" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-6">📅 My Journey</h2>
          <ol className="border-l border-gray-600 space-y-6 pl-4">
            {timeline.map((item, index) => (
              <li key={index} className="relative">
                <div className="absolute -left-[7px] top-1 w-4 h-4 bg-white rounded-full border border-gray-800"></div>
                <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
