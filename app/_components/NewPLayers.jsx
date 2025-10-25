"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Spacer from "./ui/Spacer";

// ---------------------- Data ----------------------
const players = [
  {
    name: "Isac Benson",
    image: "/Players/isac-benson.png",
    date: "01 July 2024",
    author: "Mr Joe Doe",
    description:
      "We have signed a new player, Isac Benson, scouted for his exceptional skills and potential. We are expecting fresh energy and contribution significantly to the team's performance. This signing could influence the team's strategy and future success.",
  },
  {
    name: "Leon Grant",
    image: "/Players/player2.jpeg",
    date: "15 August 2024",
    author: "Ms Clara Stone",
    description:
      "Leon Grant joins us as a forward known for his agility and sharp goal-scoring instincts. His addition brings depth to our attacking options and creativity in the final third.",
  },
  {
    name: "Amina Yusuf",
    image: "/Players/player3.jpeg",
    date: "02 September 2024",
    author: "Coach Amir Khan",
    description:
      "Amina is a dynamic midfielder with an incredible vision for the game. Her arrival will strengthen the teams tactical play and control in midfield battles.",
  },
];

// ---------------------- Component ----------------------
const NewPlayers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const player = players[activeIndex];
  const uniqueKey = `${player.name}-${Date.now()}`; // unique for animation refresh

  return (
    <section className="px-con pt-20 flex flex-col gap-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image with Feedback-style animation */}
        <div className="flex-1 h-[35rem] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center relative">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={uniqueKey}
              initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.02 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)", scale: 1.02 }}
              transition={{
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-0 rounded-xl overflow-hidden will-change-[clip-path,transform]"
            >
              <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text with smooth fade / slide like Feedback */}
        <AnimatePresence mode="wait">
          <motion.div
            key={player.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.37, 0, 0.63, 1],
                  staggerChildren: 0.12,
                },
              },
              exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 py-4 flex flex-col gap-4"
          >
            {/* Each child (except Spacer) gets its own subtle fade-slide */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="pt-16 text-2xl flex items-center gap-3"
            >
              <div className="h-[90%] rounded-full w-[3px] bg-primary"></div>
              <span>New Player Signed</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="text-[3rem] font-medium leading-normal text-foreground transition-opacity duration-500"
            >
              {player.name}
            </motion.h2>

            <Spacer fullWidth />

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="p-4 text-base sm:text-lg md:text-xl text-gray"
            >
              {player.description}
            </motion.p>

            <Spacer fullWidth />

            <motion.h6
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="p-4 text-base sm:text-lg md:text-xl text-gray"
            >
              Date posted | {player.date} | Posted By | {player.author}
            </motion.h6>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mx-auto my-8 origin-bottom w-fit flex gap-2"
      >
        {/* <div className="cursor-pointer flex items-center justify-center bg-foreground/5 rounded-full h-7 w-auto aspect-square hover:bg-foreground/15 transform-colors text-secondary">
          {"<"}
        </div> */}
        <div className="h-7 px-2 flex items-center justify-center bg-foreground/5 rounded-full w-fit">
          {players.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer p-1 group`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-secondary h-2 w-6"
                    : "bg-gray/40 group-hover:bg-gray group-hover:scale-125 h-2 w-2"
                }`}
              ></div>
            </div>
          ))}
        </div>
        {/* <div className="cursor-pointer flex items-center justify-center bg-foreground/5 rounded-full h-7 w-auto aspect-square hover:bg-foreground/15 transform-colors text-gray/80 hover:text-secondary">
          {">"}
        </div> */}
      </motion.div>
    </section>
  );
};

export default NewPlayers;
