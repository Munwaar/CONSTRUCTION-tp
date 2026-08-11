import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#050505" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-20" />

          {/* Animated blueprint lines */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Horizontal line */}
            <motion.div
              className="absolute left-0 top-1/2 h-px"
              style={{ backgroundColor: "#D4AF37", width: "100%" }}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
            />
            {/* Vertical line */}
            <motion.div
              className="absolute left-1/2 top-0 w-px"
              style={{ backgroundColor: "#D4AF37", height: "100%" }}
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            />
          </motion.div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <img
                src="/images/mv-logo-mark.svg"
                alt="MV Digital Studio logo"
                className="w-16 h-16 object-contain"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
                className="h-px bg-[#D4AF37]"
              />
            </motion.div>

            {/* Progress text */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <span className="font-[Manrope] text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase">
                Constructing
              </span>
              <span className="font-[Manrope] text-sm tracking-[0.15em] text-white/50">
                {Math.floor(progress)}%
              </span>
            </motion.div>
          </div>

          {/* Bottom progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-px"
            style={{ backgroundColor: "#D4AF37" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
