import React from 'react'
import Header from '../layout/home-template-new/header'
import { Badge } from '../ui/badge'
import Image from 'next/image'

const PortfolioLanding = () => {
    return (
        <div className="bg-white lg:p-4">
            <div className='bg-gradient-to-br lg:p-0 from-[#393939] via-[#545455] to-[#323232] lg:rounded-t-xl'>

                <div className="relative z-10">
                    <Header />
                </div>

                <div className='flex justify-center p-4 flex-col items-center gap-4 max-w-6xl mx-auto pt-4'>
                    <Badge data-aos="fade-up" className="rounded-full w-fit bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                        Rock-Solid Business Growth
                    </Badge>

                    <div>
                        <p data-aos="fade-up" className="text-center font-archivo text-[28px] leading-none font-bold text-white lg:text-5xl">
                        Entrepreneurial Insight and Precision, Transforming Businesses into Success Stories
                        </p>
                        
                    </div>

                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">




                    </div>

                    <p className="relative toptrigger max-w-4xl mx-auto text-center font-archivo text-base text-white mb-6">
                    Browse our portfolio and see how we deliver high-performance websites tailored to boost your business. Each project demonstrates our commitment to blending design, technology, and strategy to create online platforms that truly stand out and succeed.
                    </p>

                </div>
                <Image data-aos="fade-up" data-aos-duration="3000"
                    src="/images/portfolio/portImg.png"
                    alt="Figma"
                    className='w-screen lg:flex hidden'
                    width={5000}
                    height={5000}
                />
                
                <Image data-aos="fade-up" data-aos-duration="3000"
                    src="/images/portfolio/porthome-mob.png"
                    alt="Figma"
                    className='w-screen lg:hidden'
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    )
}

export default PortfolioLanding
