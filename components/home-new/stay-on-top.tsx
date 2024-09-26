'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { HeroCardsLeft, HeroCardsRight } from './hero-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FeaturesCarousel from './features-carousel'
import { languageData } from '@/langauge'
import axios from 'axios'
const StayOnTop = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const detectUserLanguage = async () => {

        try {
            const response = await axios.get('https://ipapi.co/json/')
            const countryCode = response.data.country_code

            const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

            if (germanSpeakingCountries.includes(countryCode)) {
                setChangeLanguage('de')
            } else {
                setChangeLanguage('en')
            }
        } catch (error) {
            console.error('Error fetching user location:', error)
            // Default to English if there's an error
            setChangeLanguage('en')
        }
    }
    useEffect(() => {
        detectUserLanguage()
    }, [])
    return (
        <div className="flex flex-col items-center gap-6 bg-black py-10 lg:pb-10 lg:pt-20">
            <div className="flex flex-col items-center gap-4">
                <Badge
                    data-aos="fade-up"
                    className="bg-[#5D59E1] font-archivo text-sm font-normal"
                >
                    {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.badge
                    }
                </Badge>
                <p className="mb-4 w-5/6 lg:w-[86%] xl:w-[66%] text-center font-dm-sans text-[30px] font-bold  leading-none text-white lg:text-[40px]">
                    {/* “WebWunder pushes Figma to its limits, delivering unique
                    designs that keep you ahead—stress-free.” */}
                    {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.stayonTopDescription
                    }
                </p>
                <Image
                    src="/images/home/stay-on-top/figma.png"
                    alt="Figma"
                    width={100}
                    height={25}
                />
            </div>
            <div className="mt-10 lg:mb-36 xl:mb-0">
                <HeroCardsRight />
                <HeroCardsLeft />
            </div>
            <div className="relative flex flex-col items-center justify-between gap-12 lg:mt-14 xl:mt-0 2xl:mt-20 lg:flex-row">
                <div className="flex flex-col lg:ml-24">
                    <div className="flex max-w-[575px] flex-col items-center justify-center gap-4 p-4 lg:items-start">
                        <Badge
                            data-aos="fade-up"
                            className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal"
                        >
                            {/* Endless Creativity */}
                            {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.creativity
                    }
                        </Badge>
                        <p className="font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px]">
                            {/* Unlimited Design */}
                            {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.title
                    }
                        </p>
                        <p className="w-11/12 text-left font-archivo text-[13px] font-normal text-white/50 lg:w-auto lg:text-start lg:text-base">
                            {/* We&apos;ve created the Unlimited Design Package for
                            businesses that just can&apos;t get enough of our
                            exceptional design work. With limited spots
                            available, this exclusive package offers unlimited
                            requests, fast delivery, and 100% design ownership.
                            Interested? Let&apos;s talk! */}
                            {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.description
                    }
                        </p>
                        <div className="my-4 flex items-center justify-start gap-2 lg:my-2 lg:gap-3">
                            <button className="flex w-fit min-w-40 flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95">
                                <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                    {/* See Plans */}
                                    {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.seePlans
                    }
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </div>
                            </button>

                            <button className="w-fit min-w-40 rounded-full bg-white px-3 py-2 font-archivo text-sm font-medium transition-all hover:scale-95 lg:py-3">
                                <Link
                                    href="#"
                                    className="flex flex-row items-center justify-between gap-4"
                                >
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                        {/* Book a call */}
                                        {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.bookCall
                    }
                                    </p>
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <Image
                            className="absolute left-4 top-4 lg:left-48 lg:top-12 xl:left-48 xl:top-12"
                            src="/images/home/stay-on-top/icon-3.png"
                            alt="Unlimited Design"
                            width={75.56}
                            height={79.07}
                        />
                        <Image
                            className="absolute right-4 top-4 lg:bottom-44 lg:left-12 xl:bottom-44 xl:left-12"
                            src="/images/home/stay-on-top/icon-5.png"
                            alt="Unlimited Design"
                            width={50}
                            height={50}
                        />
                        <Image
                            className="absolute left-8 top-96 lg:right-12 lg:top-12 xl:right-12 xl:top-12"
                            src="/images/home/stay-on-top/icon-1.png"
                            alt="Unlimited Design"
                            width={76}
                            height={79}
                        />
                        <Image
                            className="absolute bottom-80 right-12 lg:bottom-16 lg:left-[43%] xl:bottom-44 xl:left-[48%]"
                            src="/images/home/stay-on-top/icon-4.png"
                            alt="Unlimited Design"
                            width={32.26}
                            height={33.76}
                        />
                    </div>

                    <div className="hidden lg:flex">
                        <Image
                            className="absolute lg:left-48 lg:top-12 xl:left-48 xl:top-12"
                            src="/images/home/stay-on-top/icon-3.png"
                            alt="Unlimited Design"
                            width={75.56}
                            height={79.07}
                        />
                        <Image
                            className="absolute lg:bottom-44 lg:left-12 xl:bottom-44 xl:left-12"
                            src="/images/home/stay-on-top/icon-5.png"
                            alt="Unlimited Design"
                            width={50}
                            height={50}
                        />
                        <Image
                            className="absolute lg:right-12 lg:top-12 xl:right-12 xl:top-12"
                            src="/images/home/stay-on-top/icon-1.png"
                            alt="Unlimited Design"
                            width={76}
                            height={79}
                        />
                        <Image
                            className="absolute lg:bottom-16 lg:left-[43%] xl:bottom-44 xl:left-[48%]"
                            src="/images/home/stay-on-top/icon-4.png"
                            alt="Unlimited Design"
                            width={32.26}
                            height={33.76}
                        />
                    </div>
                </div>

                {/* Show the image on all screen sizes but apply specific height for smaller screens */}
                <div
                    className="block w-full max-w-full self-end lg:w-[60vw]" // Ensure image responsiveness
                >
                    <Image
                        src="/images/home/stay-on-top/unlimited-design-img.png"
                        alt="Unlimited Design"
                        layout="responsive"
                        width={800}
                        height={1000}
                        priority // Ensures it's visible faster
                    />
                </div>
            </div>
            <div className="w-full relative bottom-12">
                <FeaturesCarousel
                    bgColor="bg-[#FB421F]"
                    tiltAngle="rotate(-0.97deg)"
                    carouselTextColor="text-white"
                />
            </div>
        </div>
    )
}

export default StayOnTop
