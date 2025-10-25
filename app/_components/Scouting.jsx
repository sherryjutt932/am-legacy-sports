"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { Eye } from "lucide-react";
import { Play } from "lucide-react";
import { ExternalLink } from "lucide-react";

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
    return scrollYProgress.on("change", (v) => {
      // v = 0 → top, v = 1 → bottom
      const index = Math.round(v * (total - 1));
      setActiveIndex(index);
    });
  }, [scrollYProgress, total]);

  return (
    <section ref={sectionRef} className="relative flex h-[300vh]">
      <div className="sticky top-0 pt-36 pb-20 px-con flex gap-8 w-full items-start h-fit min-h-screen overflow-hidden">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col">
          <div className="text-2xl grid grid-cols-[3px_1fr] gap-3">
            <div className="my-[50%] h-[90%] rounded-full bg-primary"></div>
            <span>New Players</span>
          </div>

          <TextAnimate
            key={players[activeIndex].name}
            animation="blurInUp"
            by="line"
            once
            className="text-[3rem] font-medium leading-normal text-foreground mt-4"
          >
            {players[activeIndex].name}
          </TextAnimate>
        </div>

        {/* CENTER IMAGE */}
        <div className="w-[42vw] ">
          <div className="aspect-video rounded-xl overflow-hidden bg-white/5 relative">
            <Image
              src={players[activeIndex].image}
              alt={players[activeIndex].name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-3 flex justify-between">
            <div className="text-gray flex items-center gap-4">
              <button className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-foreground/5 rounded-full h-8 w-auto aspect-square">
                  <Eye className="size-5" />
                </div>
                2002
              </button>
              <button className="cursor-pointer group flex items-center gap-2">
                <div className="transition-colors group-hover:text-white group-hover:bg-foreground/10 flex items-center justify-center bg-foreground/5 rounded-full h-8 w-auto aspect-square">
                  <Play className="size-4 fill-gray" />
                </div>
                <span className="transition-colors group-hover:text-white">
                  Watch
                </span>
              </button>
              <button className="cursor-pointer group flex items-center gap-2">
                <div className="transition-colors group-hover:text-white group-hover:bg-foreground/10 flex items-center justify-center bg-foreground/5 rounded-full h-8 w-auto aspect-square">
                  <ExternalLink className="size-4" />
                </div>
                <span className="transition-colors group-hover:text-white">
                  Profile
                </span>
              </button>
            </div>
            <div className="text-gray/50 px-1 py-0.5">01-01-2024</div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col items-end relative">
          {/* 🟡 Border that moves with scroll */}
          <div className="w-[14rem] aspect-[1.4] rounded-xl border-4 border-yellow-400 z-20 pointer-events-none" />

          <motion.div
            ref={listRef}
            style={{ y: borderY }}
            className="absolute top-0 right-0 flex flex-col gap-3 pb-3"
          >
            {players.map((p, i) => (
              <div
                key={i}
                className="w-[14rem] aspect-[1.4] rounded-xl overflow-hidden bg-white/5"
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
