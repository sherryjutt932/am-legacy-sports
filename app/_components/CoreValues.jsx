import React from "react";

import Image from "next/image";
const focus = [
  {
    title: "Scandinavia",
    image: "/market focus/1.png",
  },
  {
    title: "Ghana / West Africa",
    image: "/market focus/2.png",
  },
  {
    title: "Cross-Border Strategy",
    image: "/market focus/3.png",
  },
];

const values = [
  {
    title: "Sustainability",
    text: "We take full responsibility for our actions and decisions. At AM Legacy Sports, accountability means being answerable not only to our clients but also to ourselves and the industry standards. We strive to correct any mistakes promptly and learn from them to avoid future occurrences, ensuring continuous improvement and trustworthiness.",
    image: "/user-check.svg",
  },
  {
    title: "Disciplined investment",
    text: "We believe in maintaining an open and clear line of communication with all stakeholders. Our clients are kept informed about every aspect of their career management, contract negotiations, and any other relevant processes. This transparency builds a foundation of trust and ensures that our clients are always aware of their options and the reasoning behind our advice.",
    image: "/eye.svg",
  },
  {
    title: "long-term value creation",
    text: "At AM Legacy Sports, we conduct all business dealings with the highest level of honesty and fairness. Our commitment to ethical practices ensures that every decision and action we take aligns with our moral principles, fostering trust and respect from our clients and partners.",
    image: "/scale.svg",
  },
];

const CoreValues = () => {
  return (
    <section className="pt-12 sm:pt-16 px-con flex flex-col gap-10 sm:gap-20">
      <h2 className="text-center text-2xl sm:text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">Market Focus</h2>
      <div className="grid grid-cols-3 gap-12 mx-auto">
        {focus.map((value, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">
            <Image
              src={value.image}
              alt={value.title}
              width={400}
              height={400}
              className="w-14 sm:h-48 w-auto"
            />
            <h3 className="text-xl md:text-2xl font-medium leading-normal text-foreground max-w-[18ch] text-center">
              {value.title}
            </h3>
          </div>
        ))}

      </div>
      {/* Core Values */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex-1 p-4 flex sm:justify-center sm:items-center max-sm:bg-white/5 max-sm:rounded-lg gap-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-4 md:p-6 mx-auto"
          >
            <div className="flex flex-col max-sm:gap-2 items-center">
              <Image
                src={value.image}
                alt={value.title}
                width={400}
                height={400}
                className="size-14 sm:size-28"
              />
              <h3 className="text-xl md:text-xl font-medium leading-normal text-foreground max-w-[12ch] text-center">
                {value.title}
              </h3>
            </div>
            <p className="text-base text-left md:text-lg text-gray mt-4 w-[60ch]">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
