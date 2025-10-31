"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";
import LinkEffect from "@/components/ui/LinkEffect";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

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
      <div className="absolute left-0 bottom-0 w-full h-[65%] sm:h-[35%] bg-gradient-to-t from-background to-transparent -z-10" />

      {/* CONTENT */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="px-6 sm:px-16 md:px-20 min-h-screen w-full flex flex-col justify-between items-center gap-12"
      >
        <div className="h-20 sm:h-32" />

        {loaded && (
          <>
            <h1 className="sm:hidden text-4xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
              <TextAnimate
                duration={0.9}
                animation="blurInUp"
                by="word"
                once
              >
                Empowering Football Talent and Strategic Investment Across Borders
              </TextAnimate>
            </h1>
            <h1 className="max-sm:hidden text-4xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
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
          </>
        )}

        {loaded && (
          <div className="flex flex-col w-full gap-16">
            <BlurFade className="w-full flex max-sm:flex-col gap-4 max-sm:items-center justify-center sm:justify-between" delay={0.3}>
              <p className="max-sm:text-center text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[min(45ch,95%)]">
                We connect elite African talent with global football
                opportunities while advising investors and clubs on sustainable
                sporting partnerships.
              </p>
              <Link href={"#contact"}>
                <StickyButton
                  parentClass={"text-dark"}
                  text={"reach out to book"}
                  theme="light"
                />
              </Link>
            </BlurFade>

            <BlurFade
              delay={0.5}
              className="max-sm:text-gray text-sm relative mb-5 w-full flex max-sm:items-start justify-center sm:justify-between flex-wrap max-sm:text-center"
            >
              <a
                href="mailto:info@amlegacysports.com"
                className="max-sm:flex-1"
              >
                <LinkEffect
                  text="info@amlegacysports.com"
                  icon={<Mail />}
                />
              </a>

              <a
                href="tel:+447708321576"
                className="max-sm:flex-1"
              >
                <LinkEffect
                  text="+44 7708 321 576"
                  icon={<Phone />}
                />
              </a>

              <div className="text-center max-sm:mt-2 max-sm:w-full max-sm:bg-white/10 max-sm:p-2 rounded-lg sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-1/2">
                Open Hours: Mon - Sun 9:00 - 17:00
              </div>
            </BlurFade>
          </div>
        )}
      </motion.section>
    </header>
  );
}
