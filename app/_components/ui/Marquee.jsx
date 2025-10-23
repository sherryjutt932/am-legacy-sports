"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const DefaultList = ["AM LEGACY SPORTS"];

export default function Marquee({ List = DefaultList, direction, speed }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;
  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    const rightAnimation = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(rightAnimation);
      xPercent += speed / 10;
    };

    const leftAnimation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(leftAnimation);
      xPercent -= speed / 10;
    };

    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  const Content = () => {
    return ArrayData.map((item, i) => {
      return (
        <div
          key={i}
          className="flex items-center w-fit py-3 px-6 gap-12 flex-shrink-0"
        >
          <div className="text-[7.5vw] text-dark whitespace-nowrap flex-shrink-0 font-semibold">
            {item}
          </div>
          {i != ArrayData.length && (
            <div className="size-12 bg-secondary rounded-full"></div>
          )}
        </div>
      );
    });
  };
  return (
    <section
      style={{
        maskImage: `linear-gradient(
        to right,
        transparent 5%,
        black 25%,
        black 75%,
        transparent 95%
      )`,
        WebkitMaskImage: `linear-gradient(
        to right,
        transparent 5%,
        black 25%,
        black 75%,
        transparent 95%
      )`,
      }}
      className="maxWSec w-full flex justify-center items-center pt-8 overflow-hidden"
    >
      <div
        ref={marquee}
        className="h-fit w-fit flex-nowrap relative flex flex-shrink-0"
      >
        <div
          className="h-full flex-1 flex w-fit flex-nowrap items-center flex-shrink-0"
          ref={first}
        >
          <Content />
        </div>
        <div
          ref={second}
          className="flex-shrink-0 h-full flex w-full flex-nowrap items-center absolute left-full top-0"
        >
          <Content />
        </div>
      </div>
    </section>
  );
}
