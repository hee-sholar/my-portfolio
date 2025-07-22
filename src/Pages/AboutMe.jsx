import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square rounded-full overflow-hidden bg-gray-800 max-w-[500px] mx-auto">
              <img
                src="https://i.pinimg.com/236x/3a/93/23/3a93230f9140c43031ea0bdd0f23c37e.jpg"
                alt="Balogun AbdulRahmon Ishola"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h1 className="text-4xl font-bold mb-8">Get to Know Me More</h1>

            <p className="text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Balogun AbdulRahmon Ishola</span>, a passionate front-end developer
              skilled in creating dynamic, responsive, and visually appealing web applications. My expertise lies in
              technologies like <span className="text-white">React, Tailwind CSS, and JavaScript</span>. I thrive on
              solving challenging problems and delivering seamless user experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in web development began with a curiosity for building interactive websites, and it has grown
              into a deep love for crafting elegant and functional digital solutions. I've worked on exciting projects
              like some <span className="text-white">Landing Pages</span>, where I combined creativity and technical knowledge
              to deliver a fantasy page platform.
            </p>

            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy playing video games, watching some video on youtube to improve skills, exploring new frameworks, and sharpening my skills to keep
              pace with industry trends. Want to collaborate or learn more about me? Check out my projects below!
            </p>

            <a
              href="/projects"
              className="inline-block text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition mt-4"
              data-aos="fade-up"
            >
              Explore Projects
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
export default AboutMe;