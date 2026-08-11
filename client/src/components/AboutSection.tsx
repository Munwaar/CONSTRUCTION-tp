import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Eye, BookOpen, Heart } from "lucide-react";

const VALUES = [
  {
    icon: Building2,
    title: "Our Mission",
    description: "To construct architectural masterpieces that redefine skylines and set new benchmarks in structural excellence across the globe.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where every structure tells a story of innovation, sustainability, and uncompromising craftsmanship for generations to come.",
  },
  {
    icon: BookOpen,
    title: "Our History",
    description: "Founded in 1998, MV Digital Studio has grown from a regional firm into a global powerhouse, completing over 450 landmark projects across 23 countries.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Precision in every detail. Integrity in every decision. Innovation in every challenge. Excellence as our only standard.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="font-[Manrope] text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase block mb-4">
            About MV Digital Studio
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where Vision Meets{" "}
            <span className="gold-text">Engineering</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* About content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="font-[Manrope] text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              For over two decades, MV Digital Studio has been at the forefront of transforming ambitious visions into permanent structures that define cities and inspire communities. Our multidisciplinary team of architects, engineers, and designers work in concert to deliver projects that push the boundaries of what's possible.
            </p>
            <p className="font-[Manrope] text-lg sm:text-xl text-white/50 leading-relaxed">
              From towering commercial complexes to intimate residential retreats, every project we undertake is driven by a singular commitment to excellence. We don't just build structures — we craft legacies that stand the test of time.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/about-placeholder.svg"
                alt="Placeholder image representing MV Digital Studio project work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              {/* Gold border accent */}
              <div className="absolute top-0 left-0 w-20 h-px bg-[#D4AF37]" />
              <div className="absolute top-0 left-0 h-20 w-px bg-[#D4AF37]" />
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              className="glass p-8 group hover:border-[#D4AF37]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <value.icon className="w-8 h-8 text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-[Poppins] text-lg font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="font-[Manrope] text-sm text-white/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
