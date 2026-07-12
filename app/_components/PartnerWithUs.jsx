import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import StickyButton from '@/components/ui/StickyButton'
import Link from 'next/link'
import React from 'react'

const PartnerWithUs = () => {
    return (
        <section
            className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center gap-4 py-12"
        >
            <div className="relative">
                <AnimatedShinyText>Let's Do It</AnimatedShinyText>
            </div>
            <h2 className="max-sm:hidden text-4xl sm:text-6xl md:text-[5rem] font-medium leading-normal text-white text-center">
                Partner With Us
            </h2>
            <p className='text-gray text-lg max-w-4xl text-center'>
                This project is part of AM Legacy's continued commitment to helping investors, clubs, and academies build sustainable football ecosystems across Europe and Africa.
            </p>
            <div className="flex items-center gap-3 mt-12">
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

export default PartnerWithUs