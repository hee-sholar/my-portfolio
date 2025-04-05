import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#aboutme", label: "About" },
  { href: "#skills", label: "Skill" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm"
      data-aos="fade-down"
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="text-white text-xl font-bold">
          Clever
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white hover:text-green-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="md:hidden bg-black/95 backdrop-blur-sm"
          data-aos="fade-left"
        >
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-white hover:text-green-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="block text-center border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
