"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";
import { useIsMobile } from "@/lib/hooks";

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const team = [
  { name: "Ateeq Mahmoud", role: "Founder and CEO | FIFA License Agent", img: "/avatar.png" },
  { name: "Nadia Mohammed", role: "Digital Manager", img: "/avatarG.png" },
  { name: "Abdul Fataw Mikail", role: "Scout", img: "/avatar.png" },
  { name: "Rose Okyere", role: "Marketing", img: "/avatarG.png" },
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
  const isMobile = useIsMobile();

  return (
    <section className="px-con py-12 sm:py-24 flex flex-col justify-center items-center gap-6 sm:gap-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-[3rem] font-medium leading-normal text-foreground">
        <TextAnimate animation="blurInUp" once by="character">
          Our Team
        </TextAnimate>
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 w-full max-w-7xl">
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
            <div className="relative w-full h-[15rem] sm:h-[22rem] overflow-hidden rounded-[calc(1rem+1px)]">
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
            <div className="absolute left-3 right-3 bottom-3 sm:bottom-4 sm:left-5 sm:right-5 flex gap-3 overflow-hidden">
              <motion.div
                variants={isMobile ? {
                  rest: { x: 0 },
                  hover: { x: 0 },
                } : textVariants}
                className="flex items-center gap-3"
              >
                {/* Accent Line */}
                <div className="max-sm:hidden py-1 h-full w-[3px]">
                  <div className="h-full w-full bg-primary rounded-full"></div>
                </div>

                {/* Text */}
                <div
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="flex flex-col"
                >
                  <h3 className="text-sm sm:text-lg font-medium sm:font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-base text-gray">{member.role}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link href={"#contact"} className="mx-auto">
        <StickyButton
          parentClass={"text-dark"}
          text={"reach out to book"}
          theme="light"
        />
      </Link>
    </section>
  );
};

export default Team;
