"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

const Spacer = ({
  className,
  delay,
  children,
  width = "20rem",
  fullWidth = false,
  ...props
}) => {
  const isMobile = useIsMobile();

  // Adjust animation width for mobile
  const startWidth = isMobile ? "0rem" : "2rem";
  const endWidth = isMobile ? "2rem" : width;

  return (
    <motion.div
    key={isMobile?"mob":"des"}
      initial={
        fullWidth
          ? { opacity: 0, width: "5%" }
          : { width: startWidth, opacity: 0 }
      }
      whileInView={
        fullWidth
          ? { opacity: 1, width: "100%" }
          : { width: endWidth, opacity: 1 }
      }
      transition={{
        delay: delay ?? 0.2,
        duration: fullWidth ? 1.2 : 2.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={cn(
        "flex items-center gap-0 shrink",
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      <motion.div
        className="w-[1px] h-[.5rem] sm:h-[.75rem] bg-primary"
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
        className="w-[1px] h-[.5rem] sm:h-[.75rem] bg-primary"
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
