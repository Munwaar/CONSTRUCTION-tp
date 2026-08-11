import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  location: string;
  size: string;
  budget: string;
  year: string;
  technology: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Aether Tower",
    location: "Dubai, UAE",
    size: "185,000 sqm",
    budget: "$2.4 Billion",
    year: "2024",
    technology: "BIM, 3D Printing, Smart Glass",
    image: "/images/project-commercial-placeholder.svg",
  },
  {
    id: 2,
    title: "Villa Serenità",
    location: "Lake Como, Italy",
    size: "4,200 sqm",
    budget: "$85 Million",
    year: "2023",
    technology: "Parametric Design, Geothermal",
    image: "/images/project-villa-placeholder.svg",
  },
  {
    id: 3,
    title: "Meridian Commerce Hub",
    location: "Singapore",
    size: "92,000 sqm",
    budget: "$680 Million",
    year: "2024",
    technology: "Green Building, IoT Integration",
    image: "/images/project-commerce-hub-placeholder.svg",
  },
  {
    id: 4,
    title: "The Horizon Residences",
    location: "Los Angeles, USA",
    size: "28,000 sqm",
    budget: "$320 Million",
    year: "2023",
    technology: "Modular Construction, Solar Integration",
    image: "/images/project-residences-placeholder.svg",
  },
];

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={project.image}
          alt={`Placeholder image for ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

        {/* Project info overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <span className="font-[Manrope] text-[10px] tracking-[0.25em] text-[#D4AF37]/80 uppercase mb-2">
            {project.location}
          </span>
          <h3 className="font-[Poppins] text-xl sm:text-2xl font-bold text-white mb-4">
            {project.title}
          </h3>

          {/* Expandable details */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div>
                <span className="font-[Manrope] text-[9px] tracking-[0.2em] text-white/40 uppercase block">
                  Size
                </span>
                <span className="font-[Poppins] text-sm text-white/80">
                  {project.size}
                </span>
              </div>
              <div>
                <span className="font-[Manrope] text-[9px] tracking-[0.2em] text-white/40 uppercase block">
                  Budget
                </span>
                <span className="font-[Poppins] text-sm text-white/80">
                  {project.budget}
                </span>
              </div>
              <div>
                <span className="font-[Manrope] text-[9px] tracking-[0.2em] text-white/40 uppercase block">
                  Year
                </span>
                <span className="font-[Poppins] text-sm text-white/80">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="font-[Manrope] text-[9px] tracking-[0.2em] text-white/40 uppercase block">
                  Technology
                </span>
                <span className="font-[Poppins] text-xs text-white/80">
                  {project.technology}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#D4AF37]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            Portfolio
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
