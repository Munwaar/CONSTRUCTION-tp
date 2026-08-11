import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 450, suffix: "+", label: "Projects Completed" },
  { value: 380, suffix: "+", label: "Happy Clients" },
  { value: 120, suffix: "+", label: "Engineers" },
  { value: 35, suffix: "", label: "Awards Won" },
];

function Counter({ stat, isInView }: { stat: Stat; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = stat.value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-[Poppins] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-[#D4AF37]">{stat.suffix}</span>
      </span>
      <span className="font-[Manrope] text-xs tracking-[0.2em] text-white/40 uppercase">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 blueprint-grid opacity-5" />

      {/* Gold line divider top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="relative z-10 container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Counter stat={stat} isInView={isInView} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line divider bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}
