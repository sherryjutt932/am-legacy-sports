import StickyButton from "@/components/ui/StickyButton";
import HorizontalSec from "../_components/HorizontalSec";
import Scouting from "../_components/Scouting";
import Button from "../_components/ui/Button";
import HeroSec from "./HeroSec";
import Link from "next/link";
import MajorDeal from "../_components/MajorDeal";
import CurrentOpportunities from "./CurrentOpportunities";
import InvestorForm from "./InvestorForm";
import Pipeline from "./Pipeline";

const Investment = () => {
  return (
    <>
      <HeroSec />
      <CurrentOpportunities />
      <Pipeline />
      <InvestorForm />

      {/* <HorizontalSec />
      <section className="relative z-50 py-10 sm:py-20 px-con bg-background text-foreground flex flex-col gap-8 sm:gap-12 rounded-[1.5rem] sm:rounded-[2.5rem] items-center justify-center text-center">
        <p className="text-base sm:text-3xl max-w-[40ch]">
          Our advisory team provides complete guidance - from due diligence to post-acquisition strategy,
          ensuring every investment is commercially sound and football-focused. Explore Scandinavian, UK and other European club investment opportunities by clicking the button below.
        </p>
        <div className="w-fit">
          <Link href={"#contact"}>
            <StickyButton
              parentClass={"text-dark"}
              text={"Explore investment opportunities"}
              theme="light"
            />
          </Link>
        </div>
      </section>
      <MajorDeal /> */}
      {/* <Scouting /> */}
    </>
  );
};

export default Investment;
