"use client";

import dynamic from "next/dynamic";
import HeroSec from "./HeroSec";

// Dynamically imported components (lazy + preloading)
const CoreValues = dynamic(() => import("../_components/CoreValues"));
import AboutBackground from "./AboutBackground";
import AboutExpertise from "./AboutExpertise";

const About = () => {
  return (
    <>
      <HeroSec />
      <AboutBackground />
      <AboutExpertise />
      <CoreValues />
    </>
  );
};

export default About;
