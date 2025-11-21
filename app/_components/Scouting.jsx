"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { Eye } from "lucide-react";
import { Play } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/lib/hooks";

const players = [
  { name: "Isac Benson", image: "/Players/player2.jpeg" },
  { name: "Leon Grant", image: "/Players/player3.jpeg" },
  { name: "Amina Yusuf", image: "/Players/player2.jpeg" },
  { name: "Daniel Ruiz", image: "/Players/player3.jpeg" },
  { name: "Sarah Malik", image: "/Players/player2.jpeg" },
];

const Scouting = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const isMobile = useIsMobile();

  // Track scroll progress of section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const total = players.length;
  const itemPercent = 100 / total;
  const moveRange = (total - 1) * itemPercent;
  const borderY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${moveRange}%`]
  );

  // Calculate activeIndex based on scroll progress
  useEffect(() => {
    if (!isMobile) {

      return scrollYProgress.on("change", (v) => {
        // v = 0 → top, v = 1 → bottom
        const index = Math.round(v * (total - 1));
        setActiveIndex(index);
      });
    }
  }, [scrollYProgress, total, isMobile]);

   const handleSelect = (i) => {
    if (isMobile) setActiveIndex(i);
  };
  
  return (
    <section ref={sectionRef} className="relative flex sm:h-[300vh] bg-background">
      <div className="sm:sticky sm:top-0 pt-12 sm:pt-36 pb-8 sm:pb-20 px-con flex max-sm:flex-col gap-4 sm:gap-8 w-full items-start h-fit sm:min-h-screen overflow-hidden">
        {/* LEFT TEXT */}
        <div className="sm:flex-1 max-sm:w-full flex flex-col">
          <div className="text-2xl grid grid-cols-[3px_1fr] gap-3">
            <div className="my-[50%] h-[90%] rounded-full bg-primary"></div>
            <span>New Players</span>
          </div>

          <TextAnimate
            key={players[activeIndex].name}
            animation="blurInUp"
            by="line"
            once
            className="text-3xl sm:text-[3rem] font-medium leading-normal text-foreground mt-8 sm:mt-4 max-sm:text-center max-sm:w-full"
          >
            {players[activeIndex].name}
          </TextAnimate>
        </div>

        {/* CENTER IMAGE */}
        <div className="w-full sm:w-[42vw] ">
          <div className="aspect-video rounded-xl overflow-hidden bg-white/5 relative">
            <Image
              src={players[activeIndex].image}
              alt={players[activeIndex].name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2 sm:p-3 flex justify-center sm:justify-between max-sm:flex-col-reverse gap-1">
            <div className="text-gray flex items-center max-sm:justify-center gap-4 text-sm sm:text-base">
              <button className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-foreground/5 rounded-full h-[2.1em] w-auto aspect-square">
                  <Eye className="size-[1.2em]" />
                </div>
                2002
              </button>
              <button className="cursor-pointer group flex items-center gap-2">
                <div className="transition-colors group-hover:text-white group-hover:bg-foreground/10 flex items-center justify-center bg-foreground/5 rounded-full h-[2.1em]  w-auto aspect-square">
                  <Play className="size-[1em] fill-gray" />
                </div>
                <span className="transition-colors group-hover:text-white">
                  Watch
                </span>
              </button>
              <button className="cursor-pointer group flex items-center gap-2">
                <div className="transition-colors group-hover:text-white group-hover:bg-foreground/10 flex items-center justify-center bg-foreground/5 rounded-full h-[2.1em]  w-auto aspect-square">
                  <ExternalLink className="size-[1em]" />
                </div>
                <span className="transition-colors group-hover:text-white">
                  Profile
                </span>
              </button>
            </div>
            <div className="max-sm:mx-auto text-gray/50 px-1 py-0.5">01-01-2024</div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="sm:flex-1 max-sm:w-full flex flex-col items-end relative max-sm:overflow-hidden">
          {/* 🟡 Border that moves with scroll */}
          <div className="max-sm:hidden w-[14rem] aspect-[1.4] rounded-xl border-4 border-yellow-400 z-20 pointer-events-none" />

          <motion.div
            ref={listRef}
            style={{ y: isMobile ? 0 : borderY }}
            className="sm:absolute sm:top-0 sm:right-0 flex sm:flex-col gap-2 sm:gap-3 pb-3 max-sm:w-full max-sm:overflow-auto max-sm:h-full max-sm:flex-nowrap"
          >
            {players.map((p, i) => (
              <div
                key={i}
                onClick={() => handleSelect(i)}
                className={`shrink-0 w-[8rem] sm:w-[14rem] aspect-[1.4] rounded-xl overflow-hidden bg-white/5 border-2 transition-all duration-300
                ${activeIndex === i ? "max-sm:border-yellow-400" : "max-sm:border-transparent"}`}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="object-cover block h-full w-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Scouting;
