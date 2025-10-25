import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 mt-20" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center space-y-6">

        {/* Logo / Branding */}
        <h3 className="text-2xl font-bold tracking-wider" data-aos="zoom-in">
          RayDev<span className="text-accent">.</span>
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed" data-aos="fade-up">
          I build modern, scalable and visually stunning web experiences.  
          Let's collaborate and bring your ideas to reality.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 pt-4" data-aos="fade-up" data-aos-delay="150">
          <a href="https://www.facebook.com/yourprofile" target="_blank" className="group">
            <Facebook size={26} className="transition text-gray-400 group-hover:text-blue-500 group-hover:-translate-y-1" />
          </a>
          <a href="https://x.com/RayDevX16" target="_blank" className="group">
            <Twitter size={26} className="transition text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1" />
          </a>
          <a href="https://www.linkedin.com/in/rahmon-balogun-233b23362/" target="_blank" className="group">
            <Linkedin size={26} className="transition text-gray-400 group-hover:text-blue-300 group-hover:-translate-y-1" />
          </a>
          <a href="https://www.instagram.com/jargo1910" target="_blank" className="group">
            <Instagram size={26} className="transition text-gray-400 group-hover:text-pink-400 group-hover:-translate-y-1" />
          </a>
          <a href="https://github.com/hee-sholar" target="_blank" className="group">
            <Github size={26} className="transition text-gray-400 group-hover:text-white group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 w-1/2 mx-auto" />

        {/* Footer Bottom */}
        <p className="text-gray-500 text-sm" data-aos="fade-up" data-aos-delay="250">
          © {new Date().getFullYear()} <span className="text-white font-semibold">RayDev</span>. Crafted with ❤️ by Me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
