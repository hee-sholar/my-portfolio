import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ContactIcon,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const heading = "Full Stack Developer".split(" ");

  return (
    <div className="bg-black text-white">
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-8">
          <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center">
            <motion.p
              className="text-gray-400 text-xl sm:text-2xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Hey there,
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I’m <span className="font-bold">Balogun AbdulRahmon Ishola</span>
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight flex flex-wrap justify-center gap-2"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {heading.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariant}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="max-w-2xl text-gray-400 mb-10 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I build modern, fast, and scalable web applications. I focus on writing{" "}
              <span className="text-white font-medium">clean</span>,{" "}
              <span className="text-white font-medium">maintainable</span>, and{" "}
              <span className="text-white font-medium">scalable</span> code that delivers value.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Social buttons */}
              {[
                { href: "#contact", icon: <ContactIcon />, text: "Contact" },
                { href: "https://github.com/hee-sholar", icon: <Github />, text: "GitHub" },
                { href: "https://www.linkedin.com/in/rahmon-balogun-233b23362/", icon: <Linkedin />, text: "LinkedIn" },
                { href: "https://x.com/RayDevX16", icon: <Twitter />, text: "Twitter" },
                { href: "https://www.instagram.com/jargo1910/", icon: <Instagram />, text: "Instagram" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition flex items-center text-sm sm:text-base"
                >
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </a>
              ))}
            </motion.div>
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
