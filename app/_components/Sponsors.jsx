import React from 'react'
import Spacer from './ui/Spacer'
import Image from 'next/image'

const Sponsors = () => {
    return (
        <section
            className="px-6 sm:px-16 md:px-20 w-full flex flex-col justify-between items-center gap-12 py-6"
        >
            <Spacer fullWidth delay={0.8} />
            <div className='flex justify-center items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <Image src="/Scandinavian Football.png" alt="Scandinavian Football" width={100} height={100} className='size-24' />
                    <p className='max-w-[26ch]'>Partnerships across Scandinavian football markets</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/Mjondalen Toppfotball.png" alt="Mjøndalen Toppfotball" width={100} height={100} className='size-24' />
                    <p className='max-w-[26ch]'>Advisory involvement with Mjøndalen Toppfotball</p>
                </div>
            </div>
            <Spacer fullWidth delay={0.8} />
        </section>
    )
}

export default Sponsors