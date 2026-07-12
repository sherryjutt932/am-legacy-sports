"use client";

import React, { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const Steps = [
    {
      title: "Year 2012",
      points: [
        "Open 2 branches",
        "won city best school award",
        "got 2 top positions",
      ],
    },
    {
      title: "Year 2016",
      detail: [
        "challenge. The RILLS schools' guiding principle is that real education should be a harmonious combination of intelligence and character. We teach our students how to make the most of their intrinsic abilities while also modelling good social behavior, so preparing them to be responsible members of society on a worldwide scale.",
      ],
    },
    {
      title: "Year 2017, 2018",
      detail: [
        "Most of their intrinsic abilities while also modelling good social behavior, so preparing them to be responsible members of society on a worldwide scale.",
      ],
      link: {
        title: "See All",
        url: "/Track Record",
      },
    },
    {
      title: "Year 2019 - 2024",
      points: [
        "Open 2 branches",
        "won city best school award",
        "got 2 top positions",
      ],
    },
  ];

  const container = useRef();
  const progressLine = useRef();
  const progressRedLine = useRef();
  const iconsArray = useRef([]);
  const [isActive, setIsActive] = useState(-1);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      function SetProgressHeight(prog) {
        if (progressRedLine.current && prog) {
          gsap.to(progressRedLine.current, {
            height: `${100 * prog}%`,
            duration: 0.1,
          });
        }
      }

      ScrollTrigger.create({
        trigger: container.current,
        start: `top 50%`,
        end: `bottom 60%`,
        animation: timeline,
        scrub: 1,
        onUpdate: (self) => {
          let progress = self.progress;
          let bottomPos = 0;
          SetProgressHeight(progress);

          if (progressLine.current) {
            const progressLineT =
              progressLine.current.getBoundingClientRect().top;

            const progressLineH =
              progressLine.current.getBoundingClientRect().height * progress;

            bottomPos = progressLineH + progressLineT;
            if (iconsArray.current) {
              iconsArray.current.forEach((iconRef, index) => {
                if (iconRef) {
                  const topPos = iconRef.getBoundingClientRect().top;
                  if (bottomPos > topPos && index > isActive) {
                    setIsActive(index);
                  }
                }
              });
            }
          }
        },
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <section
      id="Timeline"
      ref={container}
      className="px-6 sm:px-16 md:px-20 w-full flex flex-col lg:flex-row py-16 max-w-7xl mx-auto"
    >
      <div className="w-fit flex-shrink-0 py-8 sm:py-12 relative">
        <div className="sticky top-28 flex flex-col max-lg:items-center max-lg:text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-medium leading-tight text-white">
            Past / <br className="max-sm:hidden" />
            Pipeline <br className="max-sm:hidden" />
            Deals
          </h2>
        </div>
      </div>

      <div className="flex-grow flex px-4 lg:px-0">
        {/* Progress */}
        <div className="w-9 flex-shrink-0 p-4 lg:py-12 flex justify-center">
          <div
            ref={progressLine}
            className="relative w-1 rounded-lg bg-white/10 my-1 overflow-hidden"
          >
            <div
              ref={progressRedLine}
              className="absolute w-full left-0 top-0 bg-primary"
            ></div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex-grow p-4 lg:p-12 flex flex-col gap-8 sm:gap-16">
          {Steps.map((item, i) => {
            return (
              <div key={i} className="relative">
                <div
                  ref={(el) => (iconsArray.current[i] = el)}
                  className={`w-5 aspect-square z-10 absolute -left-6 lg:-left-14 -translate-x-full top-0 bg-primary border-solid rounded-full flex justify-center items-center flex-col transition-all duration-200 ${isActive >= i && isActive != -1
                    ? "border-primary/30 border-4 scale-125"
                    : "border-transparent border-4"
                    }`}
                ></div>

                <div className="flex">
                  <div className="flex flex-col gap-3 sm:gap-6">
                    <h3 className="text-xl sm:text-2xl font-medium text-white">{item.title}</h3>
                    {item.detail && (
                      <p className="text-gray space-y-3 text-sm sm:text-base leading-relaxed w-full max-w-2xl">
                        {item.detail.map((detailText, detailIndex) => {
                          return (
                            <span className="block" key={detailIndex}>
                              {detailText}
                            </span>
                          );
                        })}
                      </p>
                    )}
                    {item.points && (
                      <ul className="text-gray text-sm sm:text-base w-full list-disc pl-5 space-y-1">
                        {item.points.map((point, i) => {
                          return (
                            <li key={i} className="leading-snug py-0.5">
                              {point}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {item.link && (
                      <Link
                        href={item.link.url}
                        className="w-fit text-primary text-sm sm:text-base flex items-center gap-2 hover:gap-4 transition-all duration-300"
                      >
                        <span>{item.link.title}</span>
                        <svg
                          className="h-auto w-4"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                            fill="#F2D953"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
