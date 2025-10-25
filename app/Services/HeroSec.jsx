"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Spacer from "../_components/ui/Spacer";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";

const TextAnimate = dynamic(() =>
  import("@/components/ui/text-animate").then((mod) => mod.TextAnimate)
);

const BlurFade = dynamic(() =>
  import("@/components/ui/blur-fade").then((mod) => mod.BlurFade)
);

const HeroSec = () => {
  return (
    <section className="min-h-[700px] px-con w-full flex flex-col justify-between items-center gap-12">
      <div className="h-32" />

      <div className="grow flex flex-col gap-6 items-center justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            Our Services
          </TextAnimate>
        </h1>
      </div>

      <BlurFade delay={0.3} className="w-full flex justify-between">
        <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[45ch]">
          We provide a wide range of services including expert advice and
          guidance on Football Investment, Player Management, Intermediary
          Services and Strategic Recruitment.
        </p>
        <Link href={"/"}>
          <StickyButton
            parentClass={"text-dark"}
            text={"Contact us"}
            theme="light"
          />
        </Link>
      </BlurFade>

      <Spacer fullWidth delay={0.8} />
    </section>
  );
};

export default HeroSec;
