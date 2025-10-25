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
    <section className="min-h-[700px] px-con w-full flex flex-col justify-between items-center gap-12">
      <div className="h-32" />

      <div className="grow flex flex-col gap-6 items-center justify-center">
        <div className="mx-20 text-2xl flex items-center justify-center gap-3 pr-[2ch]">
          <span>Football</span>
          <Spacer width="10rem" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight relative whitespace-nowrap">
            <div className="opacity-0 px-1">Investment</div>
            <div className={"absolute inset-0 w-fit "}>
              <TextAnimate animation="blurInUp" by="character" once>
                Investment
              </TextAnimate>
            </div>
          </h1>
          <Spacer width="10rem" />
          <span>Advisory</span>
        </div>
      </div>

      <BlurFade delay={0.3} className="w-full flex justify-between">
        <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[45ch]">
          Connecting Capital With the Future of Football.
          <br />
          As football evolves into a global investment ecosystem, AM Legacy
          Sports serves as the trusted link between investors, clubs, and
          sporting opportunities.
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
