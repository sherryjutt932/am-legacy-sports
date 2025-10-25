"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";

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

const textVariants = {
  rest: { x: "-1rem" },
  hover: { x: 0 },
};

const imageVariant = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const Team = () => {
  return (
    <section className="px-20 py-24 flex flex-col justify-center items-center gap-16">
      {/* Heading */}
      <h2 className="text-[3rem] font-medium leading-normal text-foreground">
        <TextAnimate animation="blurInUp" once by="character">
          Our Team
        </TextAnimate>
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {team.map((member) => (
          <motion.div
            key={member.name}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray/50 via-background to-gray/50 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.2)] transition-shadow duration-500 cursor-pointer p-px"
          >
            {/* Apple-style animated border glow */}

            {/* Image */}
            <div className="relative w-full h-[22rem] overflow-hidden rounded-[calc(1rem+1px)]">
              <motion.img
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                variants={imageVariant}
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 via-30% to-transparent" />
            </div>

            {/* Info */}
            <div className="absolute bottom-4 left-5 right-5 flex gap-3 overflow-hidden">
              <motion.div
                variants={textVariants}
                className="flex items-center gap-3"
              >
                {/* Accent Line */}
                <div className="py-1 h-full w-[3px]">
                  <div className="h-full w-full bg-primary rounded-full"></div>
                </div>

                {/* Text */}
                <div
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-base text-gray">{member.role}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link href={"/"} className="mx-auto">
        <StickyButton
          parentClass={"text-dark"}
          text={"Contact us"}
          theme="light"
        />
      </Link>
    </section>
  );
};

export default Team;
