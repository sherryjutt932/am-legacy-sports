"use client";

import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // full rectangle
      }}
      animate={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // slides straight up
      }}
      transition={{
        duration: 2.5,
        delay: 0.5,
        ease: "anticipate",
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[999] bg-background flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <motion.img
        src="/logo-symbol.svg"
        alt="AM Legacy Sports Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "anticipate" }}
        className="w-32 h-auto"
      />
    </motion.div>
  );
}
