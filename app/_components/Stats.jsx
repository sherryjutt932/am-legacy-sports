"use client";

import dynamic from "next/dynamic";
import React from "react";
import Spacer from "./ui/Spacer";
import Image from "next/image";

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const BlurFade = dynamic(
  () => import("@/components/ui/blur-fade").then((mod) => mod.BlurFade),
  { ssr: false }
);
const stats = [
  {
    value: 40,
    label: (
      <>
        Registered <br /> Players
      </>
    ),
    icon: "/tabler-icon-notebook.svg",
  },
  {
    value: 199,
    label: (
      <>
        Channel <br /> Audience
      </>
    ),
    icon: "/tabler-icon-users.svg",
  },
  {
    value: 1,
    label: (
      <>
        Year <br /> Experience
      </>
    ),
    icon: "/tabler-icon-calendar.svg",
  },
];

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto px-20 pt-24 flex flex-col w-full">
      {stats.map((stat, i) => (
        <div className="flex flex-col w-full" key={i}>
          <div className="flex-1 flex gap-9 px-10 py-8 items-center">
            <div className="min-w-[2.5ch] text-right text-[3rem] font-medium text-foreground">
              <TextAnimate animation="blurIn" by="character">
                {stat.value}
              </TextAnimate>
            </div>
            <BlurFade
              inView={true}
              delay={0.1}
              className="grow text-xl text-gray leading-snug"
            >
              {stat.label}
            </BlurFade>
            <BlurFade inView={true} delay={0.2} className="w-fit">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={150}
                height={150}
                className="size-16"
              />
            </BlurFade>
          </div>
          {i < stats.length - 1 && <Spacer fullWidth />}
        </div>
      ))}
    </section>
  );
};

export default Stats;
