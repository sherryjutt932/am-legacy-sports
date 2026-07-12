import StickyButton from '@/components/ui/StickyButton'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const WhyFootball = () => {
    const DEAL_SPECS = [
        {
            title: "Client",
            value: "Growing global football economy",
            iconSrc: "tabler-icon-building-skyscraper.svg"
        },
        {
            title: "Role",
            value: "Inefficiencies in smaller European leagues",
            iconSrc: "tabler-icon-briefcase.svg"
        },
        {
            title: "Category",
            value: "African talent pipeline advantage",
            iconSrc: "tabler-icon-puzzle.svg"
        }
    ];

    const SpecCard = ({ title, value, iconSrc }) => (
        <div className='border border-primary p-3 sm:p-4 flex items-center gap-3 sm:gap-4 rounded-xl'>
            <div className='bg-white/5 rounded-md aspect-square shrink-0 w-10 sm:w-16 grid place-content-center'>
                <Image src={iconSrc} alt='icon' width={24} height={24} className='size-6 sm:size-8' />
            </div>
            <div className='flex flex-col sm:gap-1'>
                {/* <h3 className='text-base sm:text-xl'>{title}</h3> */}
                <p className='text-base sm:text-lg'>{value}</p>
            </div>
        </div>
    );

    return (
        <section
            className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center gap-16 py-6"
        >
            <div className='relative text-center font-semibold text-[11vw] *:leading-none -mb-16'>
                <div className='relative'>WHY FOOTBALL  <div className="absolute inset-0 bg-linear-180 from-transparent to-background z-10"></div></div>
                <div className='relative translate-y-[-40%] z-20'>WHY NOW  <div className="absolute inset-0 bg-linear-180 from-transparent to-background z-30"></div></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mx-auto max-w-6xl'>
                {DEAL_SPECS.map((spec, index) => (
                    <SpecCard key={index} {...spec} />
                ))}
            </div>
            <div className="flex items-center gap-3">
                <Link href={"#contact"}>
                    <StickyButton
                        parentClass={"text-dark"}
                        text={"Explore Opportunities"}
                        theme="trans"
                    />
                </Link>
                <Link href={"#contact"}>
                    <StickyButton
                        parentClass={"text-dark"}
                        text={"Book a Consultation"}
                        theme="light"
                    />
                </Link>
            </div>

        </section>
    )
}

export default WhyFootball