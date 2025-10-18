"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const team = [
  { name: "Amir Khan", role: "CEO & Founder", img: "/avatar.png" },
  { name: "Sarah Malik", role: "Marketing Director", img: "/avatarG.png" },
  { name: "James Morgan", role: "Head of Operations", img: "/avatar.png" },
  { name: "Amina Yusuf", role: "Creative Strategist", img: "/avatarG.png" },
];

// Animation variants
const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const textVariants = {
  rest: { y: 30, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Team = () => {
  return (
    <section className="px-20 py-24 flex flex-col justify-center items-center gap-16">
      {/* Heading */}
      <h2 className="text-[3rem] font-medium leading-normal text-foreground">
        <TextAnimate animation="blurInUp" once={false} by="character">
          Our Team
        </TextAnimate>
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.2)] transition-shadow duration-500 cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          >
            {/* Apple-style animated border glow */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%)",
                filter: "blur(1px)",
              }}
            />

            {/* Top-left & bottom-right animated corners */}
            <motion.span
              variants={overlayVariants}
              className="absolute left-0 top-0 w-10 h-[2px] bg-secondary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <motion.span
              variants={overlayVariants}
              className="absolute left-0 top-0 h-10 w-[2px] bg-secondary rounded-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <motion.span
              variants={overlayVariants}
              className="absolute right-0 bottom-0 w-10 h-[2px] bg-secondary rounded-full origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <motion.span
              variants={overlayVariants}
              className="absolute right-0 bottom-0 h-10 w-[2px] bg-secondary rounded-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full h-[22rem] overflow-hidden"
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
              <motion.div
                variants={overlayVariants}
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              variants={textVariants}
              className="absolute bottom-6 left-0 right-0 text-center px-4"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-gray/70">{member.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
