'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MainCard from './card-main'

const mainItems = [
    {
        cardWidth: 'lg:w-[700px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-1.png',
        smallImage: "/images/home/why-webwunder/why-webwunder-1-small.png",
        imgWidth: 700,
        title: 'Boost Revenue with Strategic, Conversion-Optimized Solutions',
        description:
            'Turn visitors into loyal customers with designs that drive lasting success.',
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-2.png',
        imgWidth: 350,
        title: 'Purpose-Driven Design',
        description:
            'Our strategic designs empower your brand to command premium pricing and boost profitability.',
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-3.png',
        imgWidth: 350,
        title: 'All-Inclusive Services for Design, SEO, and Continuous Optimization',
        description:
            "From design to SEO, content creation, and AI-driven updates, we take care of everything—so you don't have to.",
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-4.png',
        imgWidth: 350,
        title: 'Cost-Effective Solution That Streamlines Lead Generation',
        description:
            'Streamline your customer journey, attract qualified leads, and save valuable time with efficient communication.',
    },
    {
        cardWidth: 'lg:w-[350px] w-fit',
        image: '/images/home/why-webwunder/why-webwunder-5.png',
        imgWidth: 350,
        title: 'Tailored Marketing Support to Enhance Brand Visibility and Growth',
        description:
            'Comprehensive support, covering everything from branding to social media, guarantees your business stands out and grows.',
    },
]

const WhyWebWunder = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <div className="my-10 flex flex-col items-center justify-center gap-6 px-4">
            {/* Heading */}
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal text-white hover:text-black">
                    Designed to Dominate
                </Badge>
                <div className="flex flex-col items-center leading-none">
                    <p className="font-archivo text-[32px] font-bold text-[#24252A] md:text-[45px]">
                        Why WebWunder?
                    </p>
                    <p className="font-archivo text-[32px] font-bold text-[#24252A] md:text-[45px]">
                        We Make it Clear.
                    </p>
                </div>
                <p className="font-archivo text-sm font-normal text-black/50 md:text-base">
                    Your business deserves more than just a website—it deserves
                    a game-changer.
                </p>

                {/* Buttons */}
                <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                    <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                        <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                            Explore Plans
                        </p>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                            <ArrowRight
                                size={18}
                                fontWeight={100}
                                className="text-[#24252A]"
                            />
                        </div>
                    </button>
                    <button className="w-fit rounded-full border border-[#E9EAE9] bg-[#FAFAFA] px-3 py-2 font-archivo text-sm font-medium lg:py-3">
                        <Link
                            href="#"
                            className="flex flex-row items-center justify-between gap-4"
                        >
                            <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                Book a call
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

            {/* Cards */}
            <div
                style={{
                    backgroundImage:
                        'url("/images/home/why-webwunder/why-webwunder-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="w-full"
            >
                {isSmallScreen ? (
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {mainItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0"
                                    >
                                        <MainCard
                                            cardWidth="w-full"
                                            image={item.image}
                                            smallImage={item.smallImage}
                                            imgWidth={item.imgWidth}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-2">
                            {mainItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`h-1 w-16 rounded-full transition-colors ${
                                        currentSlide === index
                                            ? 'bg-[#5D59E1]'
                                            : 'bg-[#D9D9D9]'
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-16 lg:gap-4">
                        {/* First row - 2 items */}
                        <div className="flex w-full flex-wrap justify-center gap-16 lg:gap-4">
                            {mainItems.slice(0, 2).map((item, index) => (
                                <MainCard
                                    key={index}
                                    cardWidth={item.cardWidth}
                                    image={item.image}
                                    imgWidth={item.imgWidth}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                        {/* Second row - 3 items */}
                        <div className="flex w-full flex-wrap justify-center gap-16 lg:gap-4">
                            {mainItems.slice(2).map((item, index) => (
                                <MainCard
                                    key={index}
                                    cardWidth={item.cardWidth}
                                    image={item.image}
                                    imgWidth={item.imgWidth}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhyWebWunder