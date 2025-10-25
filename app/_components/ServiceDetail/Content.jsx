"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Spacer from "../ui/Spacer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Content = ({ List = [] }) => {
  const container = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useGSAP(
    () => {
      if (!container.current) return;
      let isMobile = false;
      if (typeof window !== "undefined") {
        isMobile = window.innerWidth < 640;
      }

      if (!isMobile) {
        gsap.to(".StickyContent", {
          scrollTrigger: {
            trigger: ".StickyContent",
            start: "top top",
            end: `+=${container.current.offsetHeight - window.innerHeight}`,
            pin: true,
            pinSpacer: true,
          },
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          animation: tl,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress + 0.1;
            const itemCount = List.length - 1;
            const currentItemIndex = Math.floor(progress * itemCount);
            if (progress < 0.2) {
              setActiveIndex(0);
            }
            if (activeIndex != currentItemIndex) {
              setActiveIndex(currentItemIndex);
            }
          },
        });
      }

      const parallexImages = document.querySelectorAll(".parallexImage");
      parallexImages.forEach((parallexImage, index) => {
        gsap.set(parallexImage.querySelector("img"), {
          yPercent: isMobile ? -10 : -20,
          scale: 1.2,
        });
        gsap.to(parallexImage.querySelector("img"), {
          opacity: 1,
        });

        gsap.to(parallexImage.querySelector("img"), {
          yPercent: isMobile ? 10 : 20,
          ease: "none",
          scrollTrigger: {
            trigger: parallexImage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    {
      scope: container,
      dependencies: [],
    }
  );

  useGSAP(
    () => {
      let isMobile = false;
      if (typeof window !== "undefined") {
        isMobile = window.innerWidth < 640;
      }

      if (!isMobile) {
        const contentBoxes = document.querySelectorAll(".contentBox");
        contentBoxes.forEach((contentBox, index) => {
          if (index != activeIndex) {
            gsap.to(contentBox, {
              opacity: 0,
              overwrite: true,
              duration: 0.5,
              ease: "sine",
              onComplete: () => {
                gsap.set(contentBox, { zIndex: 1 });
              },
            });
          }

          if (index === activeIndex) {
            gsap.set(contentBox, { zIndex: 10 });
            gsap.fromTo(
              contentBox,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
                overwrite: true,
                ease: "sine",
              }
            );
          }
        });
      }
    },
    {
      scope: container,
      dependencies: [activeIndex],
    }
  );

  return (
    <div ref={container} className="w-full flex h-fit">
      {/* text */}
      <div className=" max-sm:hidden w-1/2 relative">
        <div className="StickyContent h-screen pl-6 sm:pl-16 md:pl-20 py-24 flex items-center gap-10">
          <div
            style={{
              height: `${3 * List.length}rem`,
            }}
            className="w-1 rounded-full bg-white/20"
          >
            <div
              style={{
                top: `${3 * activeIndex}rem`,
              }}
              className="transition-top duration-300 relative w-1 h-12 rounded-full bg-primary"
            ></div>
          </div>
          <div className="relative h-full flex-1">
            {List.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center`}
                >
                  <div
                    className={`opacity-0 contentBox relative flex flex-col gap-4`}
                  >
                    <div className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="size-16"
                      />
                      <h2 className="text-[2.4rem] font-medium leading-[1.1] text-foreground">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-gray flex flex-col gap-4">
                      {item.description.map((item, index) => {
                        return <span key={index}>{item}</span>;
                      })}
                    </p>
                    <div className="w-full my-4">
                      <Spacer delay={0.2 + index * 0.1} fullWidth />
                    </div>

                    <div className="">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="hover:text-primary transition-colors font-medium cursor-pointer select-none flex gap-1 items-center"
                      >
                        See Detail{" "}
                        <ChevronDown
                          className={`size-5 transition-all ease-linear ${
                            isOpen ? "-rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* AnimatePresence handles mounting/unmounting animations */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="detail"
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{
                              duration: 0.6,
                              ease: [0.33, 1, 0.68, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="min-h-fit grid grid-cols-2 gap-4 pt-4">
                              {item.detail.map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="text-base sm:text-lg text-gray-white overflow-hidden border rounded-lg p-4"
                                  >
                                    {item}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* images */}
      <div className="w-full sm:w-1/2 h-fit">
        <div className="ImagesStack w-full h-fit sm:pt-[10vh]">
          {List.map((item, index) => {
            return (
              <div key={index} className="px-8 sm:px-24 py-6">
                <div className={`sm:hidden mb-4 mountAnimBelow`}>
                  <div className=" text-4xl leading-tight mb-2">
                    {item.title}
                  </div>
                  <div className="text-xl text-grayL leading-relaxed max-w-[40ch] mb-10">
                    {item.detail}
                  </div>
                </div>

                <div className="parallexImage w-full h-[25rem] sm:h-[80vh] flex">
                  <div className="flex-1 skeleton overflow-hidden bg-white/5">
                    <Image
                      src={item.image}
                      width={1000}
                      height={1000}
                      alt="Service Image"
                      className="opacity-0 h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
