"use client";

import dynamic from "next/dynamic";
import React from "react";
import Spacer from "../_components/ui/Spacer";

const TextAnimate = dynamic(() =>
  import("@/components/ui/text-animate").then((mod) => mod.TextAnimate)
);

const BlurFade = dynamic(() =>
  import("@/components/ui/blur-fade").then((mod) => mod.BlurFade)
);

const HeroSec = () => {
  return (
    <section className="min-h-[400px] sm:min-h-[500px] px-con w-full flex flex-col justify-between items-center gap-12">
      <div className="h-20 sm:h-32" />

      <div className="grow flex flex-col gap-6 items-center justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center text-foreground drop-shadow-2xl leading-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            Contact Us
          </TextAnimate>
        </h1>
      </div>

      <Spacer fullWidth delay={0.8} />
    </section>
  );
};

export default HeroSec;
