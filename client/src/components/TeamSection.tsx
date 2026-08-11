import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Alexander Volkov",
    role: "CEO & Founder",
    initials: "AV",
    bio: "25+ years leading transformative architectural projects across three continents.",
  },
  {
    name: "Sofia Chen",
    role: "Chief Architect",
    initials: "SC",
    bio: "Pritzker Prize nominee known for parametric design innovation and sustainable architecture.",
  },
  {
    name: "Marcus Sterling",
    role: "Head of Engineering",
    initials: "MS",
    bio: "Structural engineering visionary specializing in seismic-resistant mega-structures.",
  },
  {
    name: "Isabella Rossi",
    role: "Creative Director",
    initials: "IR",
    bio: "Award-winning interior designer with a passion for luxury material curation.",
  },
  {
    name: "James Okonkwo",
    role: "Project Director",
    initials: "JO",
    bio: "Expert in delivering complex multi-phase construction programs on time and budget.",
  },
  {
    name: "Elena Petrova",
    role: "Sustainability Lead",
    initials: "EP",
    bio: "Driving LEED certification and net-zero carbon initiatives across all MV Digital Studio projects.",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
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
            Our Team
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The <span className="gold-text">Visionaries</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              className="glass group hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Initials avatar */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#111111] to-[#050505] flex items-center justify-center overflow-hidden">
                <span className="font-[Poppins] text-4xl font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors duration-500">
                  {member.initials}
                </span>
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-[Poppins] text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <span className="font-[Manrope] text-[10px] tracking-[0.2em] text-[#D4AF37]/70 uppercase block mb-3">
                  {member.role}
                </span>
                <p className="font-[Manrope] text-sm text-white/50 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <button className="font-[Manrope] text-[10px] tracking-[0.2em] text-white/30 hover:text-[#D4AF37] transition-colors duration-300 uppercase flex items-center gap-2">
                  <Linkedin size={12} />
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
