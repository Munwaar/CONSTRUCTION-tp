import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "120 Finsbury Square, London EC2A 1AS, United Kingdom",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 (0) 20 7946 0958",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mvdigitalstudio007@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday - Friday: 08:00 - 18:00 GMT",
  },
  {
    icon: AlertTriangle,
    label: "Emergency Line",
    value: "+44 (0) 800 012 3456 (24/7)",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-40"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="font-[Manrope] text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Start Your <span className="gold-text">Project</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-3 outline-none transition-colors duration-300"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-3 outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-3 outline-none transition-colors duration-300"
                    placeholder="+44 20 7946 0958"
                  />
                </div>
                <div>
                  <label className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-3 outline-none transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-[#050505]">Select type</option>
                    <option value="commercial" className="bg-[#050505]">Commercial</option>
                    <option value="residential" className="bg-[#050505]">Residential</option>
                    <option value="luxury" className="bg-[#050505]">Luxury Villa</option>
                    <option value="renovation" className="bg-[#050505]">Renovation</option>
                    <option value="interior" className="bg-[#050505]">Interior Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#D4AF37] text-white font-[Poppins] text-sm py-3 outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="font-[Poppins] text-sm tracking-wider uppercase px-10 py-4 bg-[#D4AF37] text-[#050505] hover:bg-[#E5C158] transition-all duration-300 active:scale-[0.97]"
              >
                {submitted ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Contact details */}
            <div className="space-y-6">
              {CONTACT_INFO.map((info, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-300">
                    <info.icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-1">
                      {info.label}
                    </span>
                    <span className="font-[Poppins] text-sm text-white/80">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-video bg-[#111111] overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[#D4AF37]/40 mx-auto mb-3" />
                  <span className="font-[Manrope] text-xs tracking-[0.2em] text-white/30 uppercase">
                    Finsbury Square, London
                  </span>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#D4AF37]/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#D4AF37]/40" />
            </div>

            {/* Regional offices */}
            <div className="glass p-6">
              <h4 className="font-[Poppins] text-sm font-semibold text-white mb-4">
                Global Offices
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {["London", "Dubai", "Singapore", "New York", "Tokyo", "Sydney"].map((city) => (
                  <span key={city} className="font-[Manrope] text-[10px] tracking-[0.15em] text-white/40 uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
