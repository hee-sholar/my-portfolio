import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {ContactIcon, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  return (
    <div>
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <section
          className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-400 mb-2 text-2xl">Hey, there</p>
          <p className="text-xl mb-4">
            This is <span className="text-white font-semibold">Balogun Rahmon Ishola</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FRONTEND Developer
          </h1>
          <p className="max-w-2xl text-gray-400 mb-8">
            My goal is to{" "}
            <span className="text-white">write maintainable, clean</span> and{" "}
            <span className="text-white">understandable</span> code to make development enjoyable.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/contact"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center"
            >
              <ContactIcon className="w-4 h-4 mr-2" />
              Contact
            </a>
            <a
              href="https://github.com/hee-sholar"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/dev_clever02"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </a>
            <a 
              href="https://instagram.com/boi_clever25"
              target="_blank"
              rel="noopeneer noreferrer"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    </div>
  );
};

export default HomePage;
