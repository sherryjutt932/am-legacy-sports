"use client";

import dynamic from "next/dynamic";
const TagsMarquee = dynamic(() => import("./TagsMarquee"), { ssr: false });

const defaultLogos = [
  "/Logos/Addidas logo.svg",
  "/Logos/Nike logo.svg",
  "/Logos/Skechers logo.svg",
  "/Logos/Bluedge logo.svg",
  "/Logos/Addidas logo.svg",
  "/Logos/Nike logo.svg",
  "/Logos/Skechers logo.svg",
  "/Logos/Bluedge logo.svg",
];

export default function Tags({ data = defaultLogos }) {
  const maskStyle = {
    maskImage:
      "linear-gradient(to right, transparent 2%, black 15%, black 88%, transparent 98%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 2%, black 15%, black 88%, transparent 98%)",
  };

  const reversedData = [...data].reverse();

  return (
    <section className="relative my-12 flex flex-col items-center gap-12">
      {/* Top marquee */}
      <div style={maskStyle} className="max-w-[85%] w-full">
        <TagsMarquee data={data} direction="left" triggerId="TopTagsMarquee" />
      </div>

      {/* Bottom marquee */}
      <div style={maskStyle} className="max-w-full w-full">
        <TagsMarquee
          data={reversedData}
          direction="right"
          triggerId="BottomTagsMarquee"
        />
      </div>
    </section>
  );
}
