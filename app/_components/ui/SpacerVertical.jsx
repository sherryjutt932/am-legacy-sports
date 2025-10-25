"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SpacerVertical = ({
  className,
  delay,
  children,
  fullHeight = false,
  ...props
}) => {
  return (
    <motion.div
      initial={
        fullHeight
          ? { opacity: 0, height: "5%" }
          : { opacity: 0, height: "2rem" }
      }
      whileInView={
        fullHeight
          ? { opacity: 1, height: "100%" }
          : { opacity: 1, height: "20rem" }
      }
      transition={{
        delay: delay ? delay : 0.2,
        duration: fullHeight ? 1.2 : 2.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={cn(
        "my-auto flex flex-col items-center gap-0 shrink-0",
        fullHeight ? "h-full" : "",
        className
      )}
      {...props}
    >
      {/* Top bar */}
      <motion.div
        className="h-[1px] w-[.75rem] bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      />

      {/* Middle line */}
      <div className="flex-1 w-[1px] bg-gray-light/50" />

      {/* Bottom bar */}
      <motion.div
        className="h-[1px] w-[.75rem] bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
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

export default SpacerVertical;
