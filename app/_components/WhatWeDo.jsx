"use client";

import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Spacer from "./ui/Spacer";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const list = [
  {
    id: "01",
    img: "/whatwedo/player-management.webp",
    title: "Player Management",
    description:
      "Comprehensive management services to support and develop player's careers.",
  },
  {
    id: "02",
    img: "/whatwedo/player-sales.webp",
    title: "Player Sales",
    description:
      "Facilitating the transfer and sale of players to clubs worldwide.",
  },
  {
    id: "03",
    img: "/whatwedo/intermediatory-services.webp",
    title: "Intermediary Services",
    description:
      "Acting as an intermediary to connect players, clubs, and other stakeholders.",
  },
  {
    id: "04",
    img: "/whatwedo/contract-negotiation.webp",
    title: "Contract Negotiation",
    description:
      "Expert negotiation to secure the best terms and conditions for player contracts.",
  },
  {
    id: "05",
    img: "/whatwedo/marketing-public-relations.webp",
    title: "Marketing & Public Relations",
    description:
      "Promoting player's brands and managing public relations to enhance their marketability.",
  },
  {
    id: "06",
    img: "/whatwedo/consultation.webp",
    title: "Consultation",
    description:
      "Providing professional advice and strategic planning for player's careers and personal development.",
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const isMobile = useIsMobile();
  const seg = 1 / (list.length - 1);

  // Track active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest / seg);
    if (index !== activeIndex) setActiveIndex(index);
  });

  // Horizontal scroll motion
  // Always call the hook
  const xMotion = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(list.length - 1) * 100}%`]
  );

  // Conditionally use its value
  const x = isMobile ? "0%" : xMotion;


  // Scroll to section on dot click
  const handleDotClick = (index) => {
    const target = sectionRef.current;
    if (!target) return;

    const sectionTop = target.offsetTop;
    const scrollTo = sectionTop + window.innerHeight * index;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{ "--h": `calc(${list.length} * 100vh)` }}
      className="h-fit sm:h-[var(--h)] relative w-full bg-background"
    >
      <div className="sm:sticky top-0 h-fit sm:h-screen flex flex-col justify-between items-center text-center gap-12 overflow-hidden">
        {/* Header */}
        <div className="mx-20 pt-16 text-2xl flex items-center justify-center gap-3">
          <span>What</span>
          <Spacer />
          <span>We</span>
          <Spacer />
          <span>Do</span>
        </div>

        {/* Horizontal Scroller */}
        <div className="w-full grow flex overflow-hidden relative">
          <div className="w-full sm:w-fit flex max-sm:gap-6 max-sm:flex-col sm:flex-nowrap px-[5vw]">
            {list.map((item, i) => {
              // rotate continuously with horizontal scroll
              const rotateMotion = useTransform(
                scrollYProgress,
                [seg * (i - 1), seg * (i + 1)],
                [55, -25]
              );

              const rotate = isMobile ? 0 : rotateMotion;

              return (
                <motion.div
                  style={{ x }}
                  key={item.id}
                  className="w-full sm:w-[90vw] sm:min-w-fit text-[10vw] sm:text-[clamp(3rem,10vw,10rem)] flex justify-center items-center relative overflow-hidden max-sm:bg-white/10 max-sm:rounded-xl"
                >
                  <div className="sm:w-[13ch]">
                    <div className="relative sm:w-full max-sm:mt-10">
                      <h2 className="uppercase text-foreground font-semibold leading-none">
                        {item.title}
                      </h2>
                      <h2
                        className="uppercase font-semibold leading-none text-transparent absolute inset-0 z-20"
                        style={{
                          WebkitTextStroke: "1px var(--color-foreground)",
                        }}
                      >
                        {item.title}
                      </h2>
                      <div className="absolute left-1/2 -translate-1/2 top-[100%] sm:top-[75%] z-10 animate-[float_3s_ease-in-out_infinite]">
                        <motion.div style={{ rotate }}>
                          <Image
                            src={item.img}
                            width={100}
                            height={100}
                            alt={item.title}
                            className="text-xs size-[min(25vw,25rem)] object-contain"
                            priority
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="relative z-50 sm:hidden text-base text-gray max-w-[80%] mx-auto mt-14 mb-8">
                      <TextAnimate
                        key={item?.id}
                        delay={0.1}
                        duration={1}
                        animation="blurInUp"
                        once={false}
                        by="line"
                      >
                        {item?.description}
                      </TextAnimate>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-radial from-transparent to-background z-30"></div>
                </motion.div>
              );
            })}
          </div>
          <div className="max-sm:hidden absolute left-1/2 top-1/2 -translate-1/2 w-full bg-radial from-25% from-transparent to-70% to-background aspect-[1.4] z-40 pointer-events-none"></div>
        </div>

        {/* Description */}
        <div className="max-sm:hidden min-h-16 mx-20 text-xl text-gray max-w-[56ch]">
          <TextAnimate
            key={list[activeIndex]?.id}
            delay={0.1}
            duration={1}
            animation="blurInUp"
            once={false}
            by="line"
          >
            {list[activeIndex]?.description}
          </TextAnimate>
        </div>

        {/* Pagination Dots */}
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          className="max-sm:hidden mx-20 my-6 py-1.5 px-2 flex items-center justify-center bg-foreground/5 rounded-full w-fit origin-bottom "
        >
          {list.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer p-1 group`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${activeIndex === i
                    ? "bg-secondary h-2 w-6"
                    : "bg-gray/40 group-hover:bg-gray group-hover:scale-125 h-2 w-2"
                  }`}
              ></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
