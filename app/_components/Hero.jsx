"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import { demo1Config } from "./ImageEffect/demo1";

const ImageEffect = dynamic(() => import("./ImageEffect").then(), {
  ssr: false,
});

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const BlurFade = dynamic(
  () => import("@/components/ui/blur-fade").then((mod) => mod.BlurFade),
  { ssr: false }
);

const Hero = () => {
  return (
    <header className="relative w-full overflow-hidden">
      <motion.div
        id="container"
        className="origin-[22%_100%] absolute inset-0 -z-20 pointer-events-none"
        style={{
          y: useTransform(useScroll().scrollY, [0, 800], [0, 200]),
          //   scale: useTransform(useScroll().scrollY, [0, 800], [1, 1.6]),
        }}
      >
        <ImageEffect
          config={{
            images: ["/HeroBg.png", "/Hero.webp"],
            loop: false,
            autoPlay: true,
            delay: 0,
            duration: demo1Config.duration,
            autoPlayDuration: demo1Config.autoPlayDuration,
            fragment: demo1Config.fragment,
            easing: demo1Config.easing,
            debug: demo1Config.debug,
            uniforms: demo1Config.uniforms,
          }}
        />
        {/* <Image
          src="/Hero.webp"
          alt="AM Legacy Sports Logo"
          fill
          className="absolute inset-0 object-cover -z-20"
          priority
        /> */}
      </motion.div>
      <div className="absolute left-0 top-0 w-full h-[45%] bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute left-0 bottom-0 w-full h-[35%] bg-gradient-to-t from-background to-transparent -z-10"></div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-20 min-h-screen w-full flex flex-col justify-between items-center gap-12"
      >
        <div className="h-32"></div>
        <h1 className="text-7xl font-medium text-center text-foreground text-shadow-2xs drop-shadow-2xl">
          <TextAnimate
            delay={4}
            duration={1}
            animation="blurInUp"
            by="character"
            once
          >
            Empowering Football Talent <br />
            and Strategic Investment <br />
            Across Borders
          </TextAnimate>
        </h1>
        <div className="flex flex-col w-full gap-16">
          <BlurFade className="w-full flex justify-between" delay={5}>
            <p className="text-xl text-gray mt-4 max-w-[40ch]">
              We connect elite African talent with global football opportunities
              while advising investors and clubs on sustainable sporting
              partnerships.
            </p>
            <div>button</div>
          </BlurFade>
          <BlurFade
            delay={5.5}
            className="relative mb-5 w-full flex justify-between"
          >
            <div>email</div>
            <div className="absolute left-1/2 top-1/2 -translate-1/2">
              Open Hours: Mon - Sun 9:00 - 17:00
            </div>
            <div>phone</div>
          </BlurFade>
        </div>
      </motion.section>
    </header>
  );
};

export default Hero;
