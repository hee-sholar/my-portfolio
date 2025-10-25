import { Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });
}, []);
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <p className="text-accent font-semibold mb-2">Contact Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Build Your Next
                <br />
                Big Idea Together.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project idea or collaboration in mind? I’d be glad to talk. 
              Whether you're a startup, business owner, or brand, I create 
              high-performance websites tailored to your vision.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:rahmonbalogun449@gmail.com"
                    className="text-foreground font-semibold hover:text-accent transition"
                  >
                    rahmonbalogun449@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+2349159329752"
                    className="text-foreground font-semibold hover:text-accent transition"
                  >
                    +234 9159329752
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="bg-secondary/50 border border-border rounded-2xl p-8"
            data-aos="fade-left"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition"
                data-aos="zoom-in"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
