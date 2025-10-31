"use client";

import { cn } from "@/lib/utils";
import { MotionConfig, motion } from "framer-motion";

const Hamburger = ({ active, className, dark = false, ...props }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        {...props}
        initial={false}
        animate={active ? "open" : "closed"}
        className={cn(
          "outline-none relative h-9 w-9 overflow-hidden rounded-lg transition-colors duration-300 bg-white border border-background/20 text-background z-[1000000]",
          className
        )}
      >
        <div className="scale-75 absolute h-10 w-10 left-1/2 top-1/2 -translate-1/2">
          <motion.span
          variants={VARIANTS.top}
          className={cn(
            "origin-left absolute h-[2px] w-6",
            dark ? "bg-current" : "bg-current"
          )}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "37%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={cn(
            "origin-left absolute h-[2px] w-6",
            dark ? "bg-current" : "bg-current"
          )}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "63%" }}
        />
        </div>
      </motion.div>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: "31%",
      left: "60%",
      scale: 0.9,
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: "37%",
      left: "50%",
      scale: 1,
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      top: "71%",
      left: "60%",
      scale: 0.9,
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      top: "63%",
      left: "50%",
      scale: 1,
    },
  },
};

export default Hamburger;
