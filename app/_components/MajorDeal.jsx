import React from 'react'
import Image from 'next/image'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { 
  Check, 
  Globe, 
  Zap, 
  Users, 
  TrendingUp, 
  Settings,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* DATA CONFIG                                 */
/* -------------------------------------------------------------------------- */

const DEAL_SPECS = [
  {
    title: "Client",
    value: "Steadfast Football Holdings Ltd",
    iconSrc: "tabler-icon-building-skyscraper.svg"
  },
  {
    title: "Role",
    value: "Lead Advisor & Negotiator",
    iconSrc: "tabler-icon-briefcase.svg"
  },
  {
    title: "Category",
    value: "Club Investment & Strategic Football Operations",
    iconSrc: "tabler-icon-puzzle.svg"
  }
];

const FEATURES = [
  {
    text: "Full control of commercial operations",
    icon: Settings,
    color: "text-blue-600"
  },
  {
    text: "Ability for long-term financial planning",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    text: "Talent development structure setup",
    icon: Users,
    color: "text-purple-600"
  },
  {
    text: "International expansion capabilities",
    icon: Globe,
    color: "text-indigo-600"
  },
  {
    text: "Modernization of sporting & commercial operations",
    icon: Zap,
    color: "text-amber-600"
  }
];

const AM_ROLES = [
  "Commercial strategy & revenue roadmap",
  "Deal structuring & review with legal teams",
  "Strategic club development planning",
  // Keeping this as a JSX element to preserve the specific gap/flex styling from original
  <span key="talent" className="flex items-center gap-2">Talent pipeline design (Scandinavia - Africa)</span>,
  "Full negotiation leadership"
];

const CLUB_STRATEGIES = [
  "Sporting excellence & squad optimization",
  "African-Scandinavian talent pathway",
  "Operational stability & high-performance culture",
  "Commercial revenue expansion",
  "Digital audience growth (YouTube, media rights, licensing)"
];

/* -------------------------------------------------------------------------- */
/* SUB-COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

const SpecCard = ({ title, value, iconSrc }) => (
  <div className='border border-primary p-3 sm:p-4 flex items-center gap-3 sm:gap-4 rounded-xl'>
    <div className='bg-white/5 rounded-md aspect-square shrink-0 w-12 sm:w-20 grid place-content-center'>
      <Image src={iconSrc} alt='icon' width={24} height={24} className='size-8 sm:size-12' />
    </div>
    <div className='flex flex-col sm:gap-1'>
      <h3 className='text-base sm:text-xl'>{title}</h3>
      <p className='text-sm sm:text-base text-gray'>{value}</p>
    </div>
  </div>
);

const FeatureRow = ({ text, icon: Icon, color }) => (
  <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl items-center bg-background border border-border">
    <div className={`p-2 rounded-lg bg-current/10 ${color}`}>
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <h3 className="text-sm sm:text-base font-medium text-gray leading-tight">
      {text}
    </h3>
  </div>
);

const RoleItem = ({ content }) => (
  <div className="flex items-start gap-2 sm:gap-3">
    <Check className="size-4 sm:size-5 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
    <span className="text-sm sm:text-base font-light text-gray">{content}</span>
  </div>
);

const StrategyCard = ({ number, text }) => (
  <div className="flex items-start gap-2 p-2 sm:gap-3 sm:p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
    <span className="text-primary font-medium text-base sm:text-lg sm:mt-0.5">{number}.</span>
    <p className="text-sm sm:text-base font-light text-gray leading-snug">
      {text}
    </p>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="text-base sm:text-xl grid grid-cols-[3px_1fr] gap-3">
    <div className="my-[50%] h-[90%] rounded-full bg-primary"></div>
    <span>{title}</span>
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

const MajorDeal = () => {
  return (
    <section className="px-con py-12 sm:py-24 flex flex-col justify-center items-center gap-4">
      {/* Header */}
      <div className='flex flex-col gap-2 items-center'>
        <div className="text-sm mb-4 block">
          <AnimatedShinyText>Major Deal</AnimatedShinyText>
        </div>
        <h2 className="text-3xl sm:text-[3rem] font-medium leading-normal text-foreground transition-opacity duration-500 text-center max-w-[36ch]">
          Advisory Role in Mjøndalen IF Investment Project (Norway)
        </h2>
      </div>

      {/* Deal Specs Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mx-auto max-w-6xl mt-6 sm:mt-10'>
        {DEAL_SPECS.map((spec, index) => (
          <SpecCard key={index} {...spec} />
        ))}
      </div>

      {/* Content Split */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto max-w-6xl'>
        
        {/* Left Column: Context & Features */}
        <div className="p-4 sm:p-6 space-y-2 rounded-2xl border bg-black/5 backdrop-blur-xs">
          <h3 className="text-lg sm:text-2xl font-medium leading-normal text-foreground">
            Context
          </h3>
          <p className="text-sm sm:text-lg md:text-xl text-gray">
            In 2025, AM Legacy Sports Consult — led by our Founder and CEO Ateeq Mahmoud, advised Steadfast Football Holdings Ltd in negotiating a long-term strategic investment partnership with Mjøndalen IF, one of Norway's historic professional clubs.
          </p>
          <p className="text-sm sm:text-lg md:text-xl text-gray">
            Through the established investment vehicle Lagånd AS, the investor secured 80% ownership of the commercial company under Norway's Dual Model (NFF-regulated), enabling:
          </p>

          <div className="grid grid-cols-1 gap-2 mt-6">
            {FEATURES.map((item, index) => (
              <FeatureRow key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Right Column: Strategic Execution */}
        <div className="relative overflow-hidden p-4 sm:p-6 space-y-2 rounded-2xl border bg-black/5 backdrop-blur-xs">
          
          {/* Background Dot Pattern Effect */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 space-y-10">
            <h2 className="text-lg sm:text-2xl font-medium leading-normal text-foreground">
              Strategic execution and roadmap
            </h2>

            {/* SECTION 1: AM Legacy's Role */}
            <div className="space-y-6">
              <SectionHeader title="AM Legacy's Role" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-y-4 gap-x-8">
                {AM_ROLES.map((role, index) => (
                  <RoleItem key={index} content={role} />
                ))}
              </div>
            </div>

            {/* SECTION 2: 5-Year Club Strategy */}
            <div className="space-y-6">
              <SectionHeader title="5-Year Club Strategy (Delivered by AM Legacy)" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {CLUB_STRATEGIES.map((strategy, index) => (
                  <StrategyCard key={index} number={index + 1} text={strategy} />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default MajorDeal