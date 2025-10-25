"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MountAnim = ({
  animation = "below",
  children,
  delay = 0,
  duration = 0.65,
  margin = "-50px",
  once = true,
  childonly = false,
  stagger = 0.1,
  className,
  customVar = null,
  ...props
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: once, margin: margin });

  const belowVariants = {
    hidden: { y: childonly ? 0 : 40, opacity: childonly ? 1 : 0 },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: stagger,
        delayChildren: delay * i,
      },
    }),
  };

  const opacityVariants = {
    hidden: { opacity: childonly ? 1 : 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: stagger,
        delayChildren: delay * i,
      },
    }),
  };

  const animations = {
    below: belowVariants,
    opacity: opacityVariants,
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVar || animations[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MountAnim;
