'use client'
import React, { useEffect, useState } from 'react'
import Header from '../layout/home-template-new/header'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { languageData } from '@/langauge'
import axios from 'axios'
const PortfolioLanding = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    return (
        <div className="bg-white lg:p-4">
            <div className="bg-gradient-to-br from-[#393939] via-[#545455] to-[#323232] lg:rounded-2xl lg:p-0">
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 p-4 pt-4">
                    <Badge
                        data-aos="fade-up"
                        className="w-fit rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm"
                    >
                        {/* Rock-Solid Business Growth */}
                        {languageData?.portfolioPage?.[changeLanguage]?.title}
                    </Badge>

                    <div>
                        <p
                            data-aos="fade-up"
                            className="text-center font-archivo text-[28px] font-bold leading-none text-white lg:text-5xl"
                        >
                            {/* Entrepreneurial Insight and Precision, Transforming

                            Businesses into Success Stories */}
                             {languageData?.portfolioPage?.[changeLanguage]?.subtitle}
                        </p>
                    </div>

                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3"></div>

                    <p className="toptrigger relative mx-auto mb-6 max-w-4xl text-center font-archivo text-base text-white">
                    {languageData?.portfolioPage?.[changeLanguage]?.description}
                    </p>
                </div>
                <Image
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    src="/images/portfolio/portImg.png"
                    alt="Figma"
                    className="hidden w-screen lg:flex"
                    width={5000}
                    height={5000}
                />

                <Image
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    src="/images/portfolio/porthome-mob.png"
                    alt="Figma"
                    className="w-screen lg:hidden"
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    )
}

export default PortfolioLanding
