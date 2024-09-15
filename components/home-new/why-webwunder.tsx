import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MainCard from './card-main'

const mainItems = [
    {
        cardWidth: 'lg:w-[700px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-1.png',
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
            'From design to SEO, content creation, and AI-driven updates, we take care of everything—so you don’t have to.',
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
    return (
        <div className="mb-10 flex flex-col items-center justify-center gap-6 px-4">
            {/* Heading */}
            <div className="flex flex-col items-center gap-3 text-center">
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
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                    <Button
                        size={'base'}
                        className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#24252A] px-4 py-3 sm:gap-4 sm:p-4"
                    >
                        <p className="font-archivo text-xs font-normal text-white sm:text-sm">
                            Explore Plans
                        </p>
                        <ArrowRight
                            size={20}
                            className="sm:size-27 rounded-full bg-white p-1 text-black"
                        />
                    </Button>
                    <Button
                        size={'sm'}
                        className="gap-2 rounded-full bg-white p-4 font-archivo text-sm font-medium sm:gap-3 sm:p-5 lg:flex"
                        asChild
                    >
                        <Link className="border bg-[#E9EAE9]" href="#">
                            <p className="font-inter text-xs sm:text-sm">
                                Book a call
                            </p>
                            <ArrowRight
                                size={16}
                                className="font-light text-black"
                            />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center lg:gap-4 gap-16">
                {/* First row - 2 items */}
                <div className="flex w-full flex-wrap justify-center lg:gap-4 gap-16">
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
                <div className="flex w-full flex-wrap justify-center lg:gap-4 gap-16">
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
        </div>
    )
}

export default WhyWebWunder
