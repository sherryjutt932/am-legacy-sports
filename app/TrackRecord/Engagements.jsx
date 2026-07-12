import Image from 'next/image';
import React from 'react';

const engagements = [
    {
        logo: "/Mjondalen Toppfotball.png",
        title: "Advisory involvement with Mjøndalen Toppfotball",
        description: "In 2025, AM Legacy Sports Consult led by our Founder and CEO Ateeq Mahmoud, advised Stead....",
    },
    {
        logo: "/map.png",
        title: "Scandinavian market activity",
        description: "In 2025, AM Legacy Sports Consult led by our Founder and CEO Ateeq Mahmoud, advised Stead...",
    },
];

const Engagements = () => {
    return (
        <section className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center gap-8 py-6">
            {/* Big Text - WhyFootball style */}
            <div className='relative text-center font-semibold text-[11vw] *:leading-none -mb-10 sm:-mb-16'>
                <div className='relative'>
                    ENGAGEMENTS
                    <div className="absolute inset-0 bg-linear-180 from-transparent to-background z-10"></div>
                </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mx-auto max-w-3xl relative z-[100]'>
                {engagements.map((item, index) => (
                    <div
                        key={index}
                        className='border border-primary/40 hover:border-primary/80 transition-colors rounded-2xl p-5 flex flex-col gap-4 bg-white/[0.02] shadow-lg shadow-primary/5'
                    >
                        {/* Logo area */}
                        <div className='w-full h-32 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden'>
                            <Image
                                src={item.logo}
                                alt={item.title}
                                width={80}
                                height={80}
                                className='w-16 h-16 sm:h-20 sm:w-20 object-contain rounded-full'
                            />
                        </div>

                        {/* Text content */}
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg sm:text-xl font-medium text-white leading-snug'>{item.title}</h3>
                            <p className='text-sm sm:text-base text-gray leading-relaxed'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Engagements;
