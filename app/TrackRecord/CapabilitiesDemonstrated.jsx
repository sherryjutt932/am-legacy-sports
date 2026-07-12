"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
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
    title: "Deal structuring",
    description:
      "We represent elite players from Africa and Europe, securing life-changing transfers and ensuring their contractual and personal interests are protected every step of the way.",
  },
  {
    id: "02",
    title: "Cross-border execution",
    description:
      "Our experienced legal and negotiation team ensures players receive fair, secure, and optimized contracts with top-tier clubs and brands.",
  },
  {
    id: "03",
    title: "Stakeholder management",
    description:
      "We build strong, authentic brands for our players, connecting them with sponsorships and partnerships that elevate their image and income.",
  }
];

const CapabilitiesDemonstrated = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeService, setActiveService] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(services.length - 1, Math.floor(v * services.length));
    setActiveService(idx);
  });

  const barProgress = services.map((_, i) =>
    useTransform(scrollYProgress, [i / 3, (i + 1) / 3], [0, 1], { clamp: true })
  );

  return (
    <section ref={sectionRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen px-con flex flex-col justify-between gap-12 overflow-hidden">
        {/* Header */}
        <div className="pt-8 sm:pt-16 flex flex-col gap-5">
          <div className="text-2xl flex items-center gap-3">
            <div className="h-[85%] rounded-full w-[3px] bg-primary"></div>
            <span>Capabilities Demonstrated</span>
          </div>
        </div>

        {/* Main content area */}
        <main className="flex items-center">
          <h2 className="text-3xl sm:text-[3rem] font-medium leading-normal text-foreground transition-opacity duration-500 max-w-5xl relative z-50 text-center mx-auto">
            <TextAnimate
              key={activeService}
              delay={0.2}
              duration={0.5}
              animation="blurInUp"
              once={false}
              by="word"
            >
              {services[activeService]?.description}
            </TextAnimate>
          </h2>
        </main>

        {/* Progress Bars */}
        <div className="pb-6 grid gap-8 grid-cols-1 sm:grid-cols-3">
          {services.map((service, i) => {
            const active = activeService >= i;
            const isVisibleOnSmall = activeService === i;

            return (
              <motion.div
                key={service.id}
                className={`flex flex-col gap-4 sm:gap-6 transition-opacity duration-500
                            ${active ? "opacity-100" : "opacity-50"}
                            ${!isVisibleOnSmall ? "hidden sm:flex" : "flex"}`}
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
                      height: 3,
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

export default CapabilitiesDemonstrated;
