"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Spacer from "../_components/ui/Spacer";
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

const HeroSec = () => {
  return (
    <section className="min-h-[600px] sm:min-h-[700px] px-con w-full flex flex-col justify-between items-center gap-12">
      <div className="h-20 sm:h-32" />

      <div className="grow flex flex-col gap-6 items-center justify-center">
        <div className="sm:mx-20 text-xl sm:text-2xl flex max-sm:flex-col max-sm:text-center sm:items-center sm:justify-center gap-3 pr-[2ch]">
          <span>Explore</span>
          <Spacer width="10rem" className={"max-sm:hidden"} />
          <Spacer fullWidth className={"sm:hidden"} />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
            <div className="opacity-0 px-1">Investment</div>
            <div className={"absolute inset-0 w-fit "}>
              <TextAnimate animation="blurInUp" by="character" once>
                Investment
              </TextAnimate>
            </div>
          </h1>
          <Spacer width="10rem" className={"max-sm:hidden"} />
          <Spacer fullWidth className={"sm:hidden"} />
          <span>Opportunities</span>
        </div>
      </div>

      <BlurFade delay={0.3} className="w-full flex max-sm:flex-col max-sm:items-center sm:justify-between gap-4">
        <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[min(45ch,95%)] max-sm:text-center">
          We present curated football investment opportunities across European markets.
        </p>
        <div className="flex items-center gap-3">
          <Link href={"#contact"}>
            <StickyButton
              parentClass={"text-dark"}
              text={"Explore Opportunities"}
              theme="trans"
            />
          </Link>
          <Link href={"#contact"}>
            <StickyButton
              parentClass={"text-dark"}
              text={"Book a Consultation"}
              theme="light"
            />
          </Link>
        </div>
      </BlurFade>

      <Spacer fullWidth delay={0.8} />
    </section>
  );
};

export default HeroSec;
