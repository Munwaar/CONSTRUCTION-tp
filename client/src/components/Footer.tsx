import { useState } from "react";
import { ArrowUp } from "lucide-react";

const QUICK_LINKS = ["About", "Services", "Projects", "Process", "Team", "Contact"];
const SERVICES_LINKS = [
  "Commercial",
  "Residential",
  "Luxury Villas",
  "Interior Design",
  "Architecture",
  "Renovation",
];
const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Munwaar" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "WhatsApp", url: "https://wa.me/917418604048" },
  { name: "Email", url: "mailto:mvdigitalstudio007@gmail.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/mv-logo-mark.svg"
                alt="MV Digital Studio logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-[Poppins] text-lg font-semibold tracking-wider text-white">
                MV DIGITAL STUDIO
              </span>
            </div>
            <p className="font-[Manrope] text-sm text-white/40 leading-relaxed mb-6">
              Building Modern Digital Experiences. Engineering excellence and timeless structures since 1998.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`MV Digital Studio on ${social.name}`}
                  className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/30 hover:text-[#D4AF37] transition-colors duration-300 uppercase"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Manrope] text-[10px] tracking-[0.3em] text-[#D4AF37]/70 uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                    className="font-[Poppins] text-sm text-white/40 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Manrope] text-[10px] tracking-[0.3em] text-[#D4AF37]/70 uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <span className="font-[Poppins] text-sm text-white/40 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-[Manrope] text-[10px] tracking-[0.3em] text-[#D4AF37]/70 uppercase mb-6">
              Stay Updated
            </h4>
            <p className="font-[Manrope] text-sm text-white/40 mb-4">
              Receive project updates, industry insights, and exclusive invitations.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-2 outline-none transition-colors duration-300 placeholder:text-white/20"
              />
              <button
                type="submit"
                className="ml-3 font-[Manrope] text-[10px] tracking-[0.15em] text-[#D4AF37] uppercase hover:text-[#E5C158] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <span className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/20">
              &copy; {new Date().getFullYear()} MV Digital Studio. All rights reserved.
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/30">
              Designed &amp; Developed by MV Digital Studio
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <ArrowUp size={14} className="text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
