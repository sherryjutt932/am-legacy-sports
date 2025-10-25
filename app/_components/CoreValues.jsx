import React from "react";

import Image from "next/image";
const values = [
  {
    title: "Accountability",
    text: "We take full responsibility for our actions and decisions. At AM Legacy Sports, accountability means being answerable not only to our clients but also to ourselves and the industry standards. We strive to correct any mistakes promptly and learn from them to avoid future occurrences, ensuring continuous improvement and trustworthiness.",
    image: "/user-check.svg",
  },
  {
    title: "Transparency",
    text: "We believe in maintaining an open and clear line of communication with all stakeholders. Our clients are kept informed about every aspect of their career management, contract negotiations, and any other relevant processes. This transparency builds a foundation of trust and ensures that our clients are always aware of their options and the reasoning behind our advice.",
    image: "/eye.svg",
  },
  {
    title: "Ethical Practices",
    text: "At AM Legacy Sports, we conduct all business dealings with the highest level of honesty and fairness. Our commitment to ethical practices ensures that every decision and action we take aligns with our moral principles, fostering trust and respect from our clients and partners.",
    image: "/scale.svg",
  },
];

const CoreValues = () => {
  return (
    <section className="pt-16 px-con flex flex-col gap-20">
      {/* Core Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {values.map((value, index) => (
          <div
            key={index}
            className="lex-1 p-4 text-center flex flex-col justify-start items-center"
          >
            <Image
              src={value.image}
              alt={value.title}
              width={400}
              height={400}
              className="size-32"
            />
            <h3 className="text-[2rem] md:text-[2.5rem] font-medium leading-normal text-foreground mt-4">
              {value.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[90%]">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
