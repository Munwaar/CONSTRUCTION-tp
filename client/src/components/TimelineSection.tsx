import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, PenTool, CheckSquare, HardHat, ClipboardCheck, Key } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    number: "01",
    title: "Planning",
    description: "Comprehensive feasibility studies, site analysis, and strategic project planning with stakeholder alignment.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Conceptual and detailed architectural design using advanced BIM technology and parametric modeling.",
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "Approval",
    description: "Regulatory compliance, permit acquisition, and environmental impact assessments for seamless authorization.",
  },
  {
    icon: HardHat,
    number: "04",
    title: "Construction",
    description: "Precision execution with real-time monitoring, quality assurance protocols, and sustainable building practices.",
  },
  {
    icon: ClipboardCheck,
    number: "05",
    title: "Inspection",
    description: "Rigorous multi-phase inspections ensuring structural integrity, safety compliance, and design fidelity.",
  },
  {
    icon: Key,
    number: "06",
    title: "Handover",
    description: "Final documentation, system commissioning, and comprehensive client briefing for seamless occupancy.",
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
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
            Our Process
          </span>
          <h2 className="font-[Poppins] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Construction <span className="gold-text">Timeline</span>
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent" />

          <div className="space-y-12 lg:space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Center dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#D4AF37] bg-[#050505] z-10" />

                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div className="glass p-6 sm:p-8 group hover:border-[#D4AF37]/30 transition-all duration-500 inline-block">
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-300">
                        <step.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="font-[Manrope] text-[10px] tracking-[0.3em] text-[#D4AF37]/60 uppercase block">
                          Step {step.number}
                        </span>
                        <h3 className="font-[Poppins] text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-[Manrope] text-sm text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
