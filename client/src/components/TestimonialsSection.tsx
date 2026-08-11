import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Richard Ashworth",
    role: "Chairman, Ashworth Holdings",
    rating: 5,
    text: "MV Digital Studio delivered our corporate headquarters on time and beyond expectations. The architectural vision they brought to the table was nothing short of extraordinary. Every detail speaks to their commitment to excellence.",
  },
  {
    name: "Dr. Amara Osei",
    role: "Director, Meridian Health Systems",
    rating: 5,
    text: "Working with MV Digital Studio on our medical complex was a transformative experience. Their structural engineering team solved challenges we thought were impossible. The result is a facility that will serve our community for generations.",
  },
  {
    name: "Henrik Lindqvist",
    role: "CEO, Nordheim Properties",
    rating: 5,
    text: "The level of craftsmanship MV Digital Studio brings to every project is unmatched in the industry. Our luxury residential tower has become the most sought-after address in the city. Their attention to detail is remarkable.",
  },
  {
    name: "Yuki Tanaka",
    role: "Founder, Tanaka Architecture Studio",
    rating: 5,
    text: "As a fellow architect, I can say MV Digital Studio's engineering capabilities are world-class. Their collaborative approach and willingness to push boundaries make them the ideal partner for ambitious projects.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Client <span className="gold-text">Voices</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="glass-strong p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Quote mark */}
            <span className="font-[Manrope] text-6xl text-[#D4AF37]/20 absolute top-4 left-8">
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-[Manrope] text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
                  {TESTIMONIALS[current].text}
                </p>

                {/* Author */}
                <div>
                  <span className="font-[Poppins] text-base font-semibold text-white block">
                    {TESTIMONIALS[current].name}
                  </span>
                  <span className="font-[Manrope] text-[10px] tracking-[0.2em] text-[#D4AF37]/70 uppercase">
                    {TESTIMONIALS[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <ChevronLeft size={18} className="text-white/60" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37]/40 transition-colors duration-300"
              >
                <ChevronRight size={18} className="text-white/60" />
              </button>
              {/* Dots */}
              <div className="flex gap-2 ml-4">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-[#D4AF37] w-6" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
