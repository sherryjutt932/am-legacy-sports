"use client";

import dynamic from "next/dynamic";
import HeroSec from "./HeroSec";
import AboutUs from "../_components/AboutUs";
import NewPLayers from "../_components/NewPLayers";

// Dynamically imported components (lazy + preloading)
const CoreValues = dynamic(() => import("../_components/CoreValues"));
const Team = dynamic(() => import("../_components/Team"));
const Partners = dynamic(() => import("../_components/Partners"));
const Feedback = dynamic(() => import("../_components/Feedback"));

const About = () => {
  return (
    <>
      <HeroSec />
      <AboutUs />
      <NewPLayers />
      <CoreValues />
      <Team />
      <Partners />
      <Feedback />
    </>
  );
};

export default About;
