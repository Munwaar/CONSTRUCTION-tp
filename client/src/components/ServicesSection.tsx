import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building,
  Home,
  Crown,
  Paintbrush,
  Compass,
  Ruler,
  Hammer,
  TreePine,
  ClipboardList,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Iconic office towers, retail complexes, and mixed-use developments that define urban landscapes.",
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Bespoke homes and residential communities designed around lifestyle, comfort, and enduring quality.",
  },
  {
    icon: Crown,
    title: "Luxury Villas",
    description: "Ultra-premium private residences with bespoke finishes, smart technology, and resort-grade amenities.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Curated interior environments that blend material richness with spatial intelligence and artistry.",
  },
  {
    icon: Compass,
    title: "Architecture",
    description: "Award-winning architectural design that pushes boundaries while respecting context and culture.",
  },
  {
    icon: Ruler,
    title: "Structural Engineering",
    description: "Advanced structural solutions including seismic-resistant systems and innovative material applications.",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Transformative renovation of heritage and existing structures with sensitivity to original character.",
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Integrated outdoor environments that harmonize built structures with natural ecosystems.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project delivery with precision scheduling, cost control, and stakeholder coordination.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
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
            What We Do
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative glass p-8 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Hover gold line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-[Poppins] text-base font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-[Manrope] text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
