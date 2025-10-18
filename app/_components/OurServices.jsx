"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AnimatedShinyText = dynamic(
  () => import("@/components/ui/animated-shiny-text").then(),
  { ssr: false }
);

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false }
);

const services = [
  {
    id: "01",
    title: "Player Representation & Transfers",
    description:
      "We represent elite players from Africa and Europe, securing life-changing transfers and ensuring their contractual and personal interests are protected every step of the way.",
  },
  {
    id: "02",
    title: "Contract Negotiation & Legal Advisory",
    description:
      "Our experienced legal and negotiation team ensures players receive fair, secure, and optimized contracts with top-tier clubs and brands.",
  },
  {
    id: "03",
    title: "Brand Management & Sponsorships",
    description:
      "We build strong, authentic brands for our players, connecting them with sponsorships and partnerships that elevate their image and income.",
  },
  {
    id: "04",
    title: "Career Development & Mentorship",
    description:
      "We guide athletes beyond the pitch—offering mentorship, financial advice, and post-career planning for long-term success.",
  },
];

const OurServices = () => {
  const sectionRef = useRef(null);

  // Scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scroll tracking specifically for football rotation (full continuous)
  const { scrollYProgress: footballScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Store active index in state for text + bar changes
  const [activeService, setActiveService] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(3, Math.floor(v * 4));
    setActiveService(idx);
  });

  // Progress per service bar (0 → 1 per segment)
  const barProgress = services.map((_, i) =>
    useTransform(scrollYProgress, [i / 4, (i + 1) / 4], [0, 1], { clamp: true })
  );

  // ⚽ Football rotation – continuous through full scroll
  const rotate = useTransform(footballScroll, [0, 1], [-45, 65]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen px-20 flex flex-col justify-between gap-12 overflow-hidden">
        {/* Header */}
        <div className="pt-16 text-2xl flex items-center gap-3">
          <div className="h-[90%] rounded-full w-[3px] bg-primary"></div>
          <span>Our Services</span>
        </div>

        {/* Main content area */}
        <main className="flex items-center relative">
          {/* Service text */}
          <h2 className="text-[3rem] font-medium leading-normal text-foreground text-shadow-2xs drop-shadow-2xl transition-opacity duration-500 mr-[24vw]">
            <TextAnimate
              key={activeService}
              delay={0.2}
              duration={1}
              animation="blurInUp"
              once={false}
              by="word"
            >
              {services[activeService]?.description}
            </TextAnimate>
          </h2>

          {/* Football — independent continuous scroll animation */}
          <div className="absolute z-20 right-0 top-1/2 -translate-y-1/2 translate-x-[58%]">
            <motion.div className="relative px-4 w-[35vw]" style={{ rotate }}>
              <div className="w-full h-auto bg-background rounded-full">
                <Image
                  src="/Football-Big.png"
                  width={500}
                  height={500}
                  alt="Football"
                  className="w-full h-auto mix-blend-color-dodge"
                />
              </div>
              <Link
                href="/"
                className="absolute left-0 bottom-1/2 -translate-1/2 rotate-270 w-fit"
              >
                <AnimatedShinyText>Explore All</AnimatedShinyText>
                <div className="absolute left-1/2 top-full w-[2px] h-12 bg-gradient-to-b from-secondary to-transparent -translate-x-1/2 pointer-events-none"></div>
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Progress Bars */}
        <div className="pb-6 grid gap-8 grid-cols-4">
          {services.map((service, i) => {
            let active = activeService >= i;
            return (
              <motion.div
                key={service.id}
                className={`flex flex-col gap-6 transition-opacity duration-500 ${
                  active ? "opacity-100" : "opacity-50"
                }`}
              >
                <motion.div
                  animate={{
                    x: active ? 10 : 0,
                  }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  {service.id}
                </motion.div>
                <div className="h-px bg-foreground/30 w-full relative">
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-foreground origin-left"
                    style={{
                      height: 4,
                      width: barProgress[i]
                        ? useTransform(barProgress[i], [0, 1], ["0%", "100%"])
                        : "0%",
                    }}
                  />
                </div>
                <motion.div
                  animate={{
                    x: active ? 10 : 0,
                  }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="text-sm"
                >
                  {service.title}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
