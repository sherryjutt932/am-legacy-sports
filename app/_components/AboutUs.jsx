"use client";

import Image from "next/image";
import React from "react";
import SpacerVertical from "./ui/SpacerVertical";

const aboutSections = [
  {
    title: "Our Mission",
    text: "To provide comprehensive and personalised management services to football players and clubs, ensuring their best interests are represented.",
  },
  {
    title: "Our Vision",
    text: "To be the premier football agency recognised globally for empowering football talent, fostering sustainable career growth, and shaping the future of the sport through ethical representation and innovative solutions.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 px-con flex flex-col gap-20">
      {/* Mission & Vision */}
      <div className="flex flex-col lg:flex-row gap-12">
        {aboutSections.map((item, index) => (
          <div
            key={index}
            className="flex-1 p-6 space-y-2 rounded-2xl border bg-black/5 backdrop-blur-xs"
          >
            <h3 className="text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[90%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="py-12 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-12 item-center">
          <div className="mt-auto flex flex-col gap-4 text-center items-center justify-center">
            <Image
              src={"/Logos/africa.png"}
              alt={"africa"}
              width={400}
              height={400}
              className="w-[14rem] rounded-lg object-contain"
            />
            <h3 className="text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">
              Africa
            </h3>
          </div>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={400}
            height={400}
            className="w-[20rem] rounded-lg object-contain"
          />
          <div className="mt-auto flex flex-col gap-4 text-center items-center justify-center">
            <Image
              src={"/Logos/europe.png"}
              alt={"europe"}
              width={400}
              height={400}
              className="w-[20rem] rounded-lg object-contain"
            />
            <h3 className="text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">
              Europe
            </h3>
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray max-w-[90%] w-[40ch] text-center *:text-white *:font-semibold">
          From Africa to Europe, we bridge <b>opportunity</b> and ambition with
          professionalism and purpose.
        </p>
      </div>

      <div className="grid grid-flow-col gap-4">
        <div className="flex-1 p-6 flex flex-col justify-start items-center text-center gap-6">
          <div className="flex gap-4">
            <Image
              src={"/Logos/FIFA.png"}
              alt={"owner"}
              width={400}
              height={400}
              className="size-40 rounded-lg object-cover"
            />
            <Image
              src={"/Logos/FIFA.png"}
              alt={"fifa"}
              width={400}
              height={400}
              className="size-40 rounded-lg object-cover"
            />
          </div>
          <p className="*:text-white *:font-semibold text-base sm:text-lg md:text-xl text-gray max-w-[90%]">
            Founded by <b>FIFA-licensed</b> agent <b>Ateeq Mahmoud</b>, we
            specialize in player representation, football club investment, and
            long-term advisory services.
          </p>
        </div>
        <div className="h-full py-4">
          <SpacerVertical fullHeight />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-start items-center text-center gap-6">
          <div className="flex gap-4">
            <Image
              src={"/Logos/FMSC.png"}
              alt={"fmsc"}
              width={400}
              height={400}
              className="size-40 rounded-lg object-cover"
            />
            <Image
              src={"/Logos/SG.png"}
              alt={"sg"}
              width={400}
              height={400}
              className="size-40 rounded-lg object-cover"
            />
          </div>
          <p className="*:text-white *:font-semibold text-base sm:text-lg md:text-xl text-gray max-w-[90%]">
            We work with some of the most respected academies and clubs,
            including <b>Steadfast FC</b> and <b>FDM Fieldmasters SC</b>, known
            for producing talents like Abdul Fatawu Issahaku and Nathaniel
            Opoku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
