import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new
            projects and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <ContactInfo icon={<Mail />} title="Email" value="rahmonbalogun449@gmail.com" link="mailto:rahmonbalogun449@gmail.com" />
                <ContactInfo icon={<Phone />} title="Phone" value="+2349159329752" link="tel:+2349159329752" />
                <ContactInfo icon={<MapPin />} title="Location" value="Kwara State, ILORIN" />
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <SocialButton icon={<Github />} href="https://github.com/hee-sholar" />
                  <SocialButton icon={<Linkedin />} href="#" />
                  <SocialButton icon={<Twitter />} href="https://twitter.com/dev_clever02" />
                  <SocialButton icon={<Instagram />} href="https://instagram.com/boi_clever25" />
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8" data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField label="Your Name" id="name" type="text" value={formData.name} onChange={handleChange} />
                <InputField label="Your Email" id="email" type="email" value={formData.email} onChange={handleChange} />
                <InputField label="Subject" id="subject" type="text" value={formData.subject} onChange={handleChange} />
                <TextAreaField label="Message" id="message" value={formData.message} onChange={handleChange} />

                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactInfo({ icon, title, value, link }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-400">{title}</p>
        {link ? <a href={link} className="hover:text-green-400 transition-colors">{value}</a> : <p>{value}</p>}
      </div>
    </div>
  );
}

function SocialButton({ icon, href }) {
  return (
    <a href={href} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}

function InputField({ label, id, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 border border-gray-700 focus:border-green-400 text-white p-3 rounded-lg"
        required
      />
    </div>
  );
}

function TextAreaField({ label, id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 border border-gray-700 focus:border-green-400 text-white p-3 rounded-lg min-h-[150px]"
        required
      />
    </div>
  );
}
