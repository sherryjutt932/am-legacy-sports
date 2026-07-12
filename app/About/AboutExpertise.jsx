import React from 'react'
import Image from 'next/image'

const AboutExpertise = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-center items-center py-16 sm:py-24 bg-accent/50">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-16">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-20 sm:gap-32 w-full">
                    <div className="mt-auto flex flex-col sm:gap-4 text-center items-center justify-center">
                        <Image
                            src={"/Logos/africa.png"}
                            alt={"africa"}
                            width={400}
                            height={400}
                            className="max-sm:h-20 w-[24vw] sm:w-56 rounded-lg object-contain"
                        />
                        <h3 className="text-2xl sm:text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">
                            Africa
                        </h3>
                    </div>
                    <div className="mt-auto flex flex-col sm:gap-4 text-center items-center justify-center">
                        <Image
                            src={"/Logos/europe.png"}
                            alt={"europe"}
                            width={400}
                            height={400}
                            className="w-[24vw] sm:w-[20rem] rounded-lg object-contain"
                        />
                        <h3 className="text-2xl sm:text-[2.5rem] md:text-[3rem] font-medium leading-normal text-foreground">
                            Europe
                        </h3>
                    </div>
                </div>

                <p className="text-center text-gray text-lg sm:text-xl max-w-5xl leading-relaxed">
                    Our expertise spans both the African talent ecosystem and European football markets, allowing us to create unique, vertically integrated investment strategies.
                </p>
            </div>
        </section>
    )
}

export default AboutExpertise
