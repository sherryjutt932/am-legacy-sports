import React from "react";
import Content from "./Content";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import StickyButton from "@/components/ui/StickyButton";

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

const ServiceDetail = () => {
  const List = [
    {
      title: "SEO (Search Engine Optimization)",
      detail: "Boost your online visibility and attract more organic traffic.",
      image: "/service3.jpeg",
    },
    {
      title: "PPC (Pay-Per-Click)",
      detail:
        "Advertising: Maximize your ROI with targeted advertising campaigns.",
      image: "/service3.jpeg",
    },
    {
      title: "Social Media Marketing",
      detail:
        "Engage your audience and build your brand across all major social platforms.",
      image: "/service3.jpeg",
    },
    {
      title: "Content Marketing",
      detail:
        "Create compelling content that resonates with your audience and drives conversions.",
      image: "/service3.jpeg",
    },
    {
      title: "Email Marketing",
      detail:
        "Develop effective email campaigns to nurture leads and retain customers.",
      image: "/service3.jpeg",
    },
    {
      title: "Web Design & Development",
      detail: "Build a user-friendly, accessible, and SEO-optimized website.",
      image: "/service3.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-24 py-24">
      {/* header */}
      <div className="px-8 sm:px-24 w-full flex flex-col items-center gap-1">
        <h2 className="text-[3rem] font-medium leading-normal text-foreground">
          <TextAnimate animation="blurInUp" once by="character">
            What We Provide
          </TextAnimate>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray mt-4 max-w-[65ch] text-center">
          We connect elite African talent with global football opportunities
          while advising investors and clubs on sustainable sporting
          partnerships.
        </p>
      </div>

      {/* content */}
      <Content List={sections} />

      {/* footer */}
      <div className="px-8 sm:px-24 w-full flex flex-col items-center gap-1 text-center">
        <p className="text-base sm:text-lg md:text-xl text-foreground">
          Not sure which services you need?
        </p>
        <p className="max-w-screen-lg text-base sm:text-lg md:text-xl text-gray mb-6">
          {`Reach us out to book a consultation with one of our experts today. We'll help you identify the best strategies
          to grow your career and achieve your goals.`}
        </p>
        <Link href={"/"}>
          <StickyButton
            parentClass={"text-dark"}
            text={"Contact us"}
            theme="light"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
