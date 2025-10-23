"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import Tags from "./ui/Tags";
import Spacer from "./ui/Spacer";
// import WordReveal from "./ui/WordReveal";

const Partners = () => {
  return (
    <section className="overflow-hidden relative z-10 px-20 py-24 flex flex-col gap-16">
      <h2 className="mx-auto text-center text-[3rem] font-medium leading-normal text-foreground">
        <TextAnimate animation="blurInUp" once={false} by="character">
          Our Partners
        </TextAnimate>
      </h2>
      <div className="mx-auto w-full max-w-7xl">
        <Spacer fullWidth />
        <div className="overflow-hidden">
          <Tags />
        </div>
      </div>
    </section>
  );
};

export default Partners;
