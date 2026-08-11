import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What types of projects does MV Digital Studio specialize in?",
    answer: "We specialize in commercial high-rises, luxury residential developments, mixed-use complexes, cultural institutions, and hospitality projects. Our portfolio spans from boutique villas to 200+ meter skyscrapers across 23 countries.",
  },
  {
    question: "How long does a typical project take from planning to completion?",
    answer: "Timelines vary significantly based on project scope and complexity. A luxury villa typically takes 18-24 months, while a commercial tower ranges from 36-48 months. We provide detailed project schedules during our initial consultation phase.",
  },
  {
    question: "Do you offer sustainable and green building solutions?",
    answer: "Absolutely. Sustainability is core to our practice. We pursue LEED, BREEAM, and WELL certifications across our projects. Our engineering team specializes in net-zero carbon design, renewable energy integration, and circular material systems.",
  },
  {
    question: "What is your approach to project budgeting?",
    answer: "We operate with full transparency through detailed quantity surveying and value engineering. Our project management team provides real-time cost tracking and works within your budget parameters while maintaining our uncompromising quality standards.",
  },
  {
    question: "Can you work with architects from outside your firm?",
    answer: "Yes. We regularly collaborate with independent architects and design studios worldwide. Our engineering and construction teams are equipped to bring any architectural vision to life with the same level of precision and quality.",
  },
  {
    question: "What regions do you operate in?",
    answer: "MV Digital Studio operates globally with headquarters in London and regional offices in Dubai, Singapore, New York, and Tokyo. We have completed projects across Europe, the Middle East, Asia-Pacific, and North America.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="border-b border-white/5 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-[Poppins] text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-[#D4AF37]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="font-[Manrope] text-base text-white/50 leading-relaxed pb-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-32 lg:py-40"
    >
      <div className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="font-[Manrope] text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase block mb-4">
            FAQ
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Common <span className="gold-text">Questions</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
