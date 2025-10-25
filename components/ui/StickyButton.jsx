"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import LinkEffect from "./LinkEffect";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const StickyButton = ({ text, multiArrow, theme = "trans", parentClass }) => {
  const arrowControls = useAnimation();
  const buttonRef = useRef(null);

  const handleArrowAnimation = () => {
    arrowControls.set({ x: "0%" });
    arrowControls.start({
      x: "100%",
      transition: { duration: 0.5 },
    });
  };

  const parentClasses = {
    light: "bg-primary border border-background text-background",
    dark: "bg-white border border-[#CFCFCF] text-white",
    trans: "bg-white/20 border border-[#CFCFCF] text-white",
  };

  const arrowClasses = {
    light: "bg-foreground text-background",
    dark: "bg-primary text-white",
    trans: "bg-foreground text-white",
  };

  const textClasses = {
    light: "px-4 sm:px-7 relative z-10 text-background",
    dark: "px-4 sm:px-7 relative z-10",
    trans: "px-4 sm:px-7 relative z-10",
  };

  return (
    <motion.div
      ref={buttonRef}
      className={cn(
        "shrink-0 capitalize group cursor-pointer flex items-center justify-center p-1.5 rounded-2xl text-base sm:text-lg backdrop-blur-sm overflow-hidden transition-colors duration-300",
        parentClasses[theme],
        parentClass
      )}
      whileHover="hover"
      initial="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02 },
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={handleArrowAnimation}
      onHoverEnd={handleArrowAnimation}
    >
      {/* Button text */}
      <span className={textClasses[theme]}>
        <LinkEffect text={text} noicon parentClass="py-0" />
      </span>

      {/* Right arrow area */}
      <div
        className={cn(
          "relative h-12 sm:h-12 flex rounded-xl items-center justify-center transition-colors",
          multiArrow ? "w-28" : "w-12",
          arrowClasses[theme]
        )}
      >
        <motion.div className="overflow-hidden relative z-20">
          {/* Arrows sliding animation */}
          <motion.div
            className="absolute left-[-100%] flex items-center px-0.5"
            animate={arrowControls}
          >
            {multiArrow && (
              <>
                <ChevronRight className="h-5 opacity-30" />
                <ChevronRight className="h-5 opacity-60" />
              </>
            )}
            <ChevronRight className="h-5" />
          </motion.div>

          <motion.div
            className="flex items-center px-0.5"
            animate={arrowControls}
          >
            {multiArrow && (
              <>
                <ChevronRight className="h-5 opacity-30" />
                <ChevronRight className="h-5 opacity-60" />
              </>
            )}
            <ChevronRight className="h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StickyButton;
