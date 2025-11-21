"use client";

import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeedbackCarousel from "./FeedbackCarousel";
import MountAnim from "./ui/MountAnim";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { useResponsiveStates } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Data = [
  {
    id: "01",
    name: "Ellie Nguyen",
    position: "Jellice",
    feedback:
      "Club acquisition and minority stake advisory",
    customClass: "bottom-0 left-[108rem] bg-blue-light border-blue-dark",
    customIndex: "",
  },
  {
    id: "02",
    name: "Liam Walker",
    position: "Zenith",
    feedback:
      "Market research and financial due diligence",
    customClass: "top-0 left-[182rem] bg-green-light border-green-dark",
    customIndex: "",
  },
  {
    id: "03",
    name: "Ivan Petrov",
    position: "Daxo Event Management",
    feedback:
      "Deal structuring and valuation support",
    customClass: "bottom-0 left-[254rem] bg-purple-light border-purple-dark",
    customIndex: "",
  },
  {
    id: "04",
    name: "Nathan Pierce",
    position: "Fundex Marketing",
    feedback:
      "Post-acquisition governance and sporting strategy",
    customClass: "top-0 left-[330rem] bg-yellow-light border-yellow-dark",
    customIndex: "",
  },
];

const HorizontalSec = () => {
  const containerRef = useRef(null);
  const { isTab, isMobile } = useResponsiveStates();

  useGSAP(
    () => {
      if (!isTab && !isMobile) {
        const items = gsap.utils.toArray(".HRItems");
        const tl = gsap.timeline();

        tl.fromTo(
          "#text",
          {
            x: "0",
            xPercent: -0,
          },
          {
            x: "100vw",
            xPercent: -100,
            ease: "none",
          }
        );

        items?.forEach((item, i) => {
          tl.fromTo(
            item,
            { x: "60vw" },
            { x: "-60vw", ease: "none" },
            "<" // Play simultaneously with the previous animation
          );
        });

        tl.to(
          "#text > *:not(#worktext)",
          { opacity: 0, ease: "none", duration: 0.05 },
          "worktext"
        ).to(
          "#worktext",
          { scale: 1.5, ease: "none", duration: 0.1 },
          "worktext"
        );

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: true,
          animation: tl,
        });

        if (!isTab) {
          const tl2 = gsap.timeline();
          tl2.to("#sticky", { yPercent: 100, ease: "none" });

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom top",
            invalidateOnRefresh: true,
            scrub: true,
            animation: tl2,
          });
        }
      }
    },
    {
      scope: containerRef,
      dependencies: [isTab, isMobile],
    }
  );

  return (
    <section ref={containerRef} className="relative lg:h-[1000vh]">
      {!isMobile && !isTab && (
        <div
          id="sticky"
          className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center pointer-events-none"
        >
          <div
            id="text"
            className={
              "px-con text-[10rem] leading-none whitespace-nowrap w-fit capitalize flex flex-nowrap items-center gap-[.5ch] font-normal relative h-full"
            }
          >
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "HRItems absolute my-[6vh] text-base p-8 flex gap-6 border-2 rounded-2xl w-full max-w-[89ch] translate-x-[60vw]",
                    item.customClass
                  )}
                >
                  <div className="flex gap-6 mt-2">
                    <div
                      className={cn(
                        "text-[1.125rem] size-10 rounded-lg grid place-content-center bg-primary/10 text-primary border-primary/30 border",
                        item.customIndex
                      )}
                    >
                      0{index + 1}
                    </div>
                  </div>
                  <p className="text-[2.5rem] max-w-full whitespace-normal text-wrap leading-snug text-gray-light">
                    {item.feedback}
                  </p>
                </div>
              );
            })}
            <span className="relative">
              Strategic investment
              <MountAnim className={"left-0 bottom-full absolute text-2xl"}>
                <AnimatedShinyText>Explore All</AnimatedShinyText>
              </MountAnim>
            </span>
            <div className="size-[10rem] flex-shrink-0">
              <Image
                src={"/whatwedo/player-sales.webp"}
                alt={"contract-negotiation"}
                width={100}
                height={100}
                className="size-full animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
            <span>advisory for global</span>
            <div className="size-[10rem] flex-shrink-0">
              <Image
                src={"/whatwedo/consultation.webp"}
                alt={"player-management"}
                width={100}
                height={100}
                className="size-full animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
            <span>investors in European </span>
            <div className="size-[10rem] flex-shrink-0">
              <Image
                src={"/whatwedo/contract-negotiation.webp"}
                alt={"consultation"}
                width={100}
                height={100}
                className="size-full animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
            <span>and Scandinavian</span>
            <div className="size-[10rem] flex-shrink-0">
              <Image
                src={"/whatwedo/player-management.webp"}
                alt={"consultation"}
                width={100}
                height={100}
                className="size-full animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
            <span id="worktext" className="inline-block">
              football
            </span>
            <div className="flex-shrink-0 w-[calc(50vw-3.25ch-7.4rem)]"></div>
          </div>
        </div>
      )}

      {!isMobile && isTab && (
        <div className="max-sm:hidden lg:hidden w-full py-con flex flex-col gap-2 overflow-hidden">
          <MountAnim className="px-con pt-20 w-full text-[2.6rem] capitalize leading-snug flex flex-col gap-3">
            <MountAnim className={"text-lg"}>
              <AnimatedShinyText>Key Services</AnimatedShinyText>
            </MountAnim>
            <div className="leading-[1.5]">
              <span>Strategic investment</span>
              <div className="inline-block -mb-4 mx-2 size-[3.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/contract-negotiation.webp"}
                  alt={"contract-negotiation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>advisory for global</span>
              <div className="inline-block -mb-4 mx-2 size-[3.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/player-management.webp"}
                  alt={"player-management"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>investors in European</span>
              <div className="inline-block -mb-4 mx-2 size-[3.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/player-sales.webp"}
                  alt={"consultation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>and Scandinavian football</span>
              <div className="inline-block -mb-4 mx-2 size-[3.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/consultation.webp"}
                  alt={"consultation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>

            </div>
          </MountAnim>

          <div className="flex flex-col gap-4 mt-8">
            <FeedbackCarousel Data={Data} />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="sm:hidden py-con flex flex-col gap-2">
          <MountAnim className="px-con pt-20 w-full text-2xl capitalize leading-snug flex flex-col gap-3">
            <MountAnim className={"text-sm"}>
              <AnimatedShinyText>Key Services</AnimatedShinyText>
            </MountAnim>
            <div className="leading-[1.5]">
              <span>Strategic</span>
              <div className="inline-block -mb-4 mx-2 size-[2.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/contract-negotiation.webp"}
                  alt={"contract-negotiation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>investment advisory for</span>
              <div className="inline-block -mb-4 mx-2 size-[2.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/consultation.webp"}
                  alt={"player-management"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>global investors in European</span>
              <div className="inline-block -mb-4 mx-2 size-[2.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/player-sales.webp"}
                  alt={"consultation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>and Scandinavian</span>
              <div className="inline-block -mb-4 mx-2 size-[2.25rem] flex-shrink-0">
                <Image
                  src={"/whatwedo/player-management.webp"}
                  alt={"consultation"}
                  width={100}
                  height={100}
                  className="size-full animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <span>football</span>
            </div>
          </MountAnim>

          <div className=" flex flex-col gap-4 mb-8">
            <FeedbackCarousel Data={Data} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HorizontalSec;
