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
    title: "Intermediatory Services",
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

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(list.length - 1) * 100}%`]
  );
  const seg = 1 / (list.length - 1);

  // Track active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest / seg);
    if (index !== activeIndex) setActiveIndex(index);
  });

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
      style={{ height: `calc(${list.length} * 100vh)` }}
      className="relative w-full bg-background"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-between items-center text-center gap-12 overflow-hidden">
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
          <div className="w-fit flex flex-nowrap px-[5vw]">
            {list.map((item, i) => {
              // rotate continuously with horizontal scroll
              const rotate = useTransform(
                scrollYProgress,
                [seg * (i - 1), seg * (i + 1)],
                [55, -25]
              );
              return (
                <motion.div
                  style={{ x }}
                  key={item.id}
                  className="w-[90vw] min-w-fit text-[10rem] flex justify-center items-center relative overflow-hidden"
                >
                  <div className="relative w-[13ch]">
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
                    <div className="absolute left-1/2 -translate-1/2 top-[75%] z-10 animate-[float_3s_ease-in-out_infinite]">
                      <motion.div style={{ rotate }}>
                        <Image
                          src={item.img}
                          width={100}
                          height={100}
                          alt={item.title}
                          className="text-xs size-[25rem] object-contain"
                          priority
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-radial from-transparent to-background z-30"></div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full bg-radial from-25% from-transparent to-70% to-background aspect-[1.4] z-40 pointer-events-none"></div>
        </div>

        {/* Description */}
        <div className="min-h-16 mx-20 text-xl text-gray max-w-[56ch]">
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
          className="mx-20 my-6 py-1.5 px-2 flex items-center justify-center bg-foreground/5 rounded-full w-fit origin-bottom "
        >
          {list.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer p-1 group`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
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
