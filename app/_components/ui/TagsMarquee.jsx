"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TagsMarquee({
  direction = "left",
  data = [],
  triggerId,
}) {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  // Duplicate data for seamless scrolling effect
  const repeatedData = [...data, ...data, ...data];

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      const moveX = direction === "left" ? -50 : 50;

      const tween = gsap.to(trackRef.current, {
        xPercent: moveX,
        ease: "none",
        scrollTrigger: {
          trigger: triggerId ? `#${triggerId}` : marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, marqueeRef);

    return () => ctx.revert();
  }, [direction, triggerId]);

  return (
    <section
      ref={marqueeRef}
      className="w-full flex justify-center items-center overflow-hidden py-2 md:py-4"
    >
      <div
        ref={trackRef}
        className="flex flex-nowrap items-center will-change-transform"
      >
        {repeatedData.map((item, i) => (
          <div
            key={i}
            className="bg-black/10 hover:bg-white/5 transition-colors duration-200 ease-in-out flex-shrink-0 grid place-content-center mx-2 md:mx-4 border border-[#313131] hover:border-main/60 p-4 min-w-[12rem] md:min-w-[20rem] h-[6rem] md:h-[10rem] rounded-[1.25rem] backdrop-blur-2xl"
          >
            <img
              src={item}
              alt={`brand-${i}`}
              loading="lazy"
              className="h-16 w-auto max-w-48 block object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
