"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const feedbacks = [
  {
    name: "Abdul Basit Sualla",
    title: "Puebla CP - Spanish Tercera division",
    img: "/avatar.png",
    text: "I was skeptical about switching agents, but AM Legacy Sports exceeded all my expectations. Their industry knowledge and network opened up incredible opportunities for me.",
    rating: 5,
  },
  {
    name: "Daniel Ruiz",
    title: "Real Betis Academy Player",
    img: "/avatarG.png",
    text: "The support I received from AM Legacy Sports was outstanding. They believed in my potential and guided me every step of the way. Truly a life-changing experience.",
    rating: 4,
  },
];

export default function Feedback() {
  const [current, setCurrent] = useState(0);
  const total = feedbacks.length;

  // generates a truly unique key each time (timestamp)
  const uniqueKey = `${current}-${Date.now()}`;

  const handleNext = () => setCurrent((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const { name, title, img, text, rating } = feedbacks[current];

  return (
    <section className="overflow-hidden relative z-10 px-6 md:px-20 py-24 flex flex-col justify-center items-center gap-16">
      <div className="w-full max-w-7xl bg-[#73737320] flex flex-col md:flex-row gap-9 p-10 rounded-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden">
        {/* IMAGE CONTAINER */}
        <div className="w-full md:w-[25vw] shrink-0 relative aspect-square rounded-xl overflow-hidden">
          <div className="relative w-full h-full">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={uniqueKey} // ✅ always unique → always animates
                initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.02 }}
                animate={{
                  clipPath: "inset(0% 0% 0% 0%)",
                  scale: 1,
                }}
                exit={{
                  clipPath: "inset(0% 0% 100% 0%)",
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="absolute inset-0 rounded-xl overflow-hidden will-change-[clip-path,transform]"
              >
                <Image
                  src={img}
                  alt={name}
                  fill
                  priority
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Gradient overlay */}
          <div className="absolute z-20 inset-0 bg-gradient-to-t from-background via-background/60 via-30% to-transparent flex flex-col justify-end items-start p-4 pointer-events-none overflow-hidden">
            <TextAnimate
              animation="fadeIn"
              once
              by="line"
              className="text-lg font-semibold text-foreground"
            >
              {name}
            </TextAnimate>
            <TextAnimate
              once
              animation="fadeIn"
              by="line"
              className="text-base text-gray"
            >
              {title}
            </TextAnimate>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="grow flex flex-col justify-between py-3 gap-10">
          {/* Buttons */}
          <div className="flex justify-between items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Next feedback"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="ml-auto flex gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-xl transition-all ${
                    i === current ? "bg-primary" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <TextAnimate
            duration={0.5}
            animation="blurInUp"
            by="character"
            once
            className="grow text-xl leading-relaxed transition-all duration-500 text-foreground/90"
          >
            " {text} "
          </TextAnimate>

          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <Image
          src={"/trophy.png"}
          alt={"trophy"}
          width={500}
          height={500}
          className="absolute pointer-events-none right-0 bottom-0 w-[15vw] h-auto saturate-0 translate-[20%] rotate-[-30deg]"
        />
      </div>
    </section>
  );
}
