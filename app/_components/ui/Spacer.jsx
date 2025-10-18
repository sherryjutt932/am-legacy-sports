"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Spacer = ({ className, children, ...props }) => {
  return (
    <motion.div
      initial={{ width: "2rem", opacity: 0 }}
      whileInView={{ width: "20rem", opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 2.4, // 🕰 slower, cinematic pace
        ease: [0.16, 1, 0.3, 1], // 🪶 soft "ease-out" curve
      }}
      className={cn("shrink flex items-center gap-0", className)}
      {...props}
    >
      <motion.div
        className="w-[1px] h-[.75rem] bg-primary"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      />
      <div className="flex-1 h-[1px] bg-gray-light/50" />
      <motion.div
        className="w-[1px] h-[.75rem] bg-primary"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      />
      {children}
    </motion.div>
  );
};

export default Spacer;
