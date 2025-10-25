"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const BlurFade = dynamic(
  () => import("@/components/ui/blur-fade").then((mod) => mod.BlurFade),
  { ssr: false }
);

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  // Trigger content after background reveal
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE WITH CURVED MASK REVEAL (BOTTOM → TOP) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20 pointer-events-none"
      >
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.img
            src="/Hero.webp"
            alt="AM Legacy Hero"
            loading="eager"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </motion.div>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute left-0 top-0 w-full h-[45%] bg-gradient-to-b from-background to-transparent -z-10" />
      <div className="absolute left-0 bottom-0 w-full h-[35%] bg-gradient-to-t from-background to-transparent -z-10" />

      {/* CONTENT */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="px-6 sm:px-16 md:px-20 min-h-screen w-full flex flex-col justify-between items-center gap-12"
      >
        <div className="h-32" />

        {loaded && (
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
            <TextAnimate
              duration={0.9}
              animation="blurInUp"
              by="character"
              once
            >
              Empowering Football Talent <br />
              and Strategic Investment <br />
              Across Borders
            </TextAnimate>
          </h1>
        )}

        {loaded && (
          <div className="flex flex-col w-full gap-16">
            <BlurFade className="w-full flex justify-between" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[45ch]">
                We connect elite African talent with global football
                opportunities while advising investors and clubs on sustainable
                sporting partnerships.
              </p>
              <Link href={"/"}>
                <StickyButton
                  parentClass={"text-dark"}
                  text={"Contact us"}
                  theme="light"
                />
              </Link>
            </BlurFade>

            <BlurFade
              delay={0.5}
              className="relative mb-5 w-full flex justify-between"
            >
              <div>email</div>
              <div className="absolute left-1/2 top-1/2 -translate-1/2">
                Open Hours: Mon - Sun 9:00 - 17:00
              </div>
              <div>phone</div>
            </BlurFade>
          </div>
        )}
      </motion.section>
    </header>
  );
}
