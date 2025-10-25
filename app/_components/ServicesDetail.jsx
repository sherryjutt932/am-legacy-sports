"use client";

import React, { useState } from "react";
import Spacer from "./ui/Spacer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    title: "Career and Investment Advisory",
    icon: "/whatwedo/contract-negotiation.webp",
    image: "/service1.jpeg",
    description: [
      "We empower players and stakeholders to plan strategically for life beyond the pitch. From establishing foundations to exploring investment opportunities, our advisory services ensure every decision contributes to lasting value.",
      "We work closely with clients to develop business structures, investment portfolios, and governance frameworks that reflect professionalism and purpose.",
    ],
    detail: [
      "Investment and financial planning",
      "UK & EU company setup and compliance",
      "Governance and foundation development",
      "Career transition and retirement planning",
    ],
    cta: "Plan your legacy with confidence",
  },
  {
    title: "Player Representation & Transfers",
    icon: "/whatwedo/player-management.webp",
    image: "/service4.jpeg",
    description: [
      "At AM Legacy Sports, we represent professional and emerging footballers with transparency and strategy. Our role goes far beyond contract negotiation- we guide players through every stage of their careers, ensuring every move aligns with their sporting ambition and personal growth",
      "We manage the full transfer process, leveraging our strong relationships across Europe, Africa, and the Middle East to secure the right opportunities and protect our client's interests.",
    ],
    detail: [
      "Contract negotiation and legal support",
      "Transfer market and career planning",
      "Image rights and personal brand management",
      "Post-transfer relocation and adaptation support",
    ],
    cta: "Start your professional journey with us",
  },
  {
    title: "Scouting & Strategic Recruitment",
    icon: "/whatwedo/consultation.webp",
    image: "/service2.jpeg",
    description: [
      "We combine advanced analytics, global networks, and on-ground scouting to help clubs identify, evaluate, and recruit exceptional talent. Our recruitment framework ensures clubs invest in players who not only fit the system but also hold long-term value.",
      "From youth prospects to first-team ready talent, we work with clubs and academies to design sustainable recruitment pipelines.",
    ],
    detail: [
      "Talent identification and scouting coordination",
      "Data-based player performance analysis",
      "Succession and squad-planning strategies",
      "Recruitment consulting for European and African markets",
    ],
    cta: "Enhance your recruitment strategy today",
  },
  {
    title: "Brand & Sponsorship Management",
    icon: "/whatwedo/marketing-public-relations.webp",
    image: "/service3.jpeg",
    description: [
      "We believe that off-the-pitch presence matters as much as on-field performance. Our branding team works with players and coaches to define their image, tell their story, and connect with sponsors who share their values",
      "Whether it's kit deals, ambassador roles, or CSR initiatives, we negotiate partnerships that elevate both profile and purpose.",
    ],
    detail: [
      "Sponsorship and endorsement negotiations",
      "Personal brand and social media development",
      "Corporate and ambassadorial partnerships",
      "CSR and community campaign planning",
    ],
    cta: "Grow your brand with our expertise",
  },
];

const ServicesDetail = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-con flex gap-28 relative">
      <div className="py-[12rem] w-full flex flex-col gap-[12rem]">
        {sections.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="flex flex-col gap-10">
              <div className="flex gap-2 items-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="size-16"
                />
                <h2 className="text-[3rem] font-medium leading-normal text-foreground">
                  {item.title}
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray flex flex-col gap-4">
                {item.description.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
              </p>

              <Spacer delay={0.2 + index * 0.1} fullWidth />

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
                              className="text-base sm:text-lg text-gray-light overflow-hidden border rounded-lg p-4"
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
          );
        })}
      </div>

      <div className="sticky top-0 shrink-0 w-[36vw] h-screen grid content-center bg-white/5">
        icon
      </div>
    </section>
  );
};

export default ServicesDetail;
