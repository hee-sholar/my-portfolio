import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Facebook size={24} />
          </a>
          <a href="https://x.com/dev_boi16" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rahmon-balogun-233b23362/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/boi_clever25" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <Instagram size={24} />
          </a>
          <a href="https://github.com/hee-sholar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <Github size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400">© {new Date().getFullYear()} Clever. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
