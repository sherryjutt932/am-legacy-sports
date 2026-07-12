import React from "react";
import Content from "./Content";
import { TextAnimate } from "@/components/ui/text-animate";

const sections = [
  {
    title: "Connecting Capital to Football Assets",
    icon: "/whatwedo/contract-negotiation.webp",
    image: "/service1.jpeg",
    description: [
      "We advise investors on acquiring, investing in, and partnering with football clubs across Europe, with a strong focus on Scandinavia.",
    ],
    detail: [
      {
        title: "Club acquisition & minority stake advisory",
        description: "Offering strategic advice on career progression, including training, development, and transitions between teams or leagues.",
      },
      {
        title: "Deal structuring & valuation",
        description: "Assisting with the negotiation, interpretation, and management of contracts to ensure favorable terms and compliance with regulations.",
      },
      {
        title: "Due diligence & risk analysis",
        description: "Providing insights based on performance data to help athletes improve their skills and strategies.",
      },
      {
        title: "Investor representation in negotiations",
        description: "Advising on financial management, including budgeting, investments, tax planning, and retirement planning.",
      },
    ],
    cta: "Explore investment opportunities",
  },
  {
    title: "Building Sustainable Football Businesses",
    icon: "/whatwedo/player-management.webp",
    image: "/service4.jpeg",
    description: [
      "We support clubs post-investment with strategic planning, financial discipline, and sporting alignment.",
    ],
    detail: [
      {
        title: "Financial planning & cost optimization",
        description: "Identifying and attracting talented players.",
      },
      {
        title: "Governance and board advisory",
        description: "Providing training programs to enhance skills and performance.",
      },
      {
        title: "Sporting structure alignment",
        description: "Tracking player performance through statistics and metrics.",
      },
      {
        title: "Revenue growth strategies",
        description: "Tracking player performance through statistics and metrics.",
      },
    ],
    cta: "Build a sustainable club model",
  },
  {
    title: "Creating Value Through Talent",
    icon: "/whatwedo/consultation.webp",
    image: "/service2.jpeg",
    description: [
      "We design and manage structured player pipelines between Africa and Europe, enabling clubs to generate sustainable transfer revenue.",
    ],
    detail: [
      {
        title: "Talent pipeline development (Ghana → Europe)",
        description: "",
      },
      {
        title: "Player trading strategy",
        description: "Managing the transfer process when a player moves between clubs, ensuring all legal and financial aspects are handled smoothly.",
      },
      {
        title: "Recruitment model design",
        description: "Securing sponsorship and endorsement opportunities for players to enhance their income and public profile.",
      },
      {
        title: "Club-to-club partnerships",
        description: "Securing sponsorship and endorsement opportunities for players to enhance their income and public profile.",
      },
    ],
    cta: "Unlock talent-driven growth",
  },
  {
    title: "Unlocking Revenue Beyond the Pitch",
    icon: "/whatwedo/marketing-public-relations.webp",
    image: "/service3.jpeg",
    description: [
      "We connect clubs with commercial partners and sponsors, particularly linking African brands to European exposure.",
    ],
    detail: [
      {
        title: "Sponsorship acquisition",
        description: "Assessing the market value of a player based on performance, potential, and market conditions.",
      },
      {
        title: "Brand partnerships",
        description: "Assisting with the negotiation, interpretation, and management of contracts to ensure favorable terms and compliance with regulations.",
      },
      {
        title: "Market entry strategy (Africa 🇪🇺 Europe)",
        description: "Engaging in discussions with potential buyers to agree on transfer fees, contract terms, and conditions.",
      },
      {
        title: "Commercial deal structuring",
        description: "Engaging in discussions with potential buyers to agree on transfer fees, contract terms, and conditions.",
      },
    ],
    cta: "Grow your commercial network",
  },
];

const ServiceDetail = () => {
  return (
    <div className="flex flex-col items-center gap-12 sm:gap-24 py-14 sm:py-24">
      {/* content */}
      <Content List={sections} />

      {/* footer */}
      <div className="px-con w-full flex flex-col items-center gap-1 text-center">
        <p className="text-base sm:text-lg md:text-xl text-foreground">
          Not sure which services you need?
        </p>
        <p className="max-w-screen-lg text-base sm:text-lg md:text-xl text-gray mb-6">
          {`Reach us out to book a consultation with one of our experts today. We'll help you identify the best strategies
          to grow your career and achieve your goals.`}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
