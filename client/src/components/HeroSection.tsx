import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(1.1)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="/images/hero-placeholder.svg"
          alt="Placeholder hero image of premium architecture"
          loading="eager"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]/90" />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Floating gold accent lines */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent"
        animate={{ scaleY: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] top-[30%] w-px h-48 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"
        animate={{ scaleY: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl">
          {/* Subtitle */}
          <motion.p
            className="font-[Manrope] text-xs sm:text-sm tracking-[0.35em] text-[#D4AF37]/80 uppercase mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            Architecture &bull; Engineering &bull; Design
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="font-[Poppins] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Building Tomorrow's{" "}
            <span className="gold-text">Landmarks</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-[Manrope] text-lg sm:text-xl md:text-2xl text-white/60 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Engineering Excellence. Crafting Timeless Structures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-[Poppins] text-sm tracking-wider uppercase px-8 py-4 bg-[#D4AF37] text-[#050505] hover:bg-[#E5C158] transition-all duration-300 active:scale-[0.97]"
            >
              Start Your Project
            </button>
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-[Poppins] text-sm tracking-wider uppercase px-8 py-4 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 active:scale-[0.97]"
            >
              View Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.8 }}
      >
        <span className="font-[Manrope] text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#D4AF37]/60" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
