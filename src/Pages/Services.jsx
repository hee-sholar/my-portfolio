import { useEffect } from "react";
import { Palette, Laptop, Rocket } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "🎨",
    title: "Website Design",
    description:
      "We create beautiful, user-friendly websites that capture your brand's identity and engage your audience.",
    link: "Learn More",
    anim: "fade-up",
  },
  {
    icon: "💻",
    title: "Application Design",
    description:
      "Our creative, high-performing interfaces create engaging digital experiences that users love.",
    link: "Learn More",
    anim: "fade-up",
  },
  {
    icon: "⚡",
    title: "Custom Development",
    description:
      "We build powerful, scalable digital products using the latest technologies.",
    link: "Learn More",
    anim: "fade-up",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <p className="text-accent font-semibold mb-2">Services I Provide</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovative solutions in
            <br />
            design and development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I work with businesses to shape their vision into meaningful digital experiences.
            From concept to launch, I focus on creating products that are both beautiful and built to last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.anim}
              data-aos-delay={index * 150}
              className="bg-secondary/50 border border-border rounded-2xl p-8 hover:border-accent/60 transition group hover:-translate-y-2 duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent/30 icon-float group-hover:scale-125 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <a
                href="#"
                className="text-accent font-semibold hover:text-accent/70 transition flex items-center gap-2"
              >
                {service.link} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="zoom-in">
          <button className="bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition">
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
}
