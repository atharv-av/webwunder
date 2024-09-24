'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import PricingCard, { PricingCardProps } from './pricing-card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


interface PlanProps {
    icon: string
    iconBg: string
    title: string
    description: string
    price: number
    setupFee: number
    features: string[]
    ctaText?: string
}

const plans: PlanProps[] = [
    {
        icon: '/images/home/purchase-plans/icon-1.png',
        iconBg: 'bg-[#FFDC26]',
        title: 'Start',
        description: 'Designed for growing businesses that need advanced features and additional design support.',
        price: 490,
        setupFee: 2000,
        features: [
            'Fully responsive, optimized for all devices',
            'Continuous updates, plug-ins, and AI-powered SEO',
            'Secure hosting, backups, and full Google indexing',
            'Professional copywriting and branding',
            'One monthly design task',
            'Design refresh every 36 months',
        ],
    },
    {
        icon: '/images/home/purchase-plans/icon-3.png',
        iconBg: 'bg-[#27DAB7]',
        title: 'Scale',
        description: 'Designed for growing businesses that need advanced features and additional design support.',
        price: 690,
        setupFee: 2000,
        features: [
            'Fully responsive, optimized for all devices',
            'Continuous updates, plug-ins, and AI-powered SEO',
            'Secure hosting, backups, and full Google indexing',
            'Professional copywriting and branding',
            'One monthly design task',
            'Design refresh every 36 months',
            'Two design tasks per month for enhanced flexibility',
            'More extensive site capabilities to support your business growth',
            'Three design tasks per month for continuous creativity',
        ],
        ctaText: 'Best Seller',
    },
    {
        icon: '/images/home/purchase-plans/icon-3.png',
        iconBg: 'bg-[#FB421F]',
        title: 'Pro',
        description: 'Designed for growing businesses that need advanced features and additional design support.',
        price: 990,
        setupFee: 2000,
        features: [
            'Fully responsive, optimized for all devices',
            'Continuous updates, plug-ins, and AI-powered SEO',
            'Secure hosting, backups, and full Google indexing',
            'Professional copywriting and branding',
            'One monthly design task',
            'Design refresh every 36 months',
            'Two design tasks per month for enhanced flexibility',
            'More extensive site capabilities to support your business growth',
            'Three design tasks per month for continuous creativity',
            'Social media posting and management support',
            'Extra time dedicated monthly to your project for top-tier performance',
        ],
    },
    {
        icon: '/images/home/purchase-plans/icon-4.png',
        iconBg: 'bg-[#5D59E1]',
        title: 'Unlimited Design',
        description: 'Designed for growing businesses that need advanced features and additional design support.',
        price: 4990,
        setupFee: 2000,
        features: [
            'Unlimited design requests (one at a time)',
            'Priority delivery (around 72 hours)',
            'Support for multiple brands',
            'Full ownership of all designs',
            'Exclusive, top-priority service',
        ],
    },
]

/**
 * Component for Mobile View
 * Shows one card at a time
 */
const MobilePurchasePlans: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
    }

    return (
        <div className="lg:hidden w-full">
            <Slider {...settings}>
                {plans.map((plan, index) => (
                    <div key={index} className="px-4">
                        <PricingCard {...plan} isCenter={index === currentIndex} />
                    </div>
                ))}
            </Slider>
            <div className="flex mt-8 items-center justify-center space-x-4">
                    {plans.map((_, i) => (
                        <button
                            key={i}
                            className={`h-1 w-12 cursor-pointer rounded-full ${
                                i === currentIndex ? 'bg-[#5D59E1]' : 'bg-white/20'
                            }`}
                          
                        ></button>
                    ))}
                </div>
        </div>
    )
}

/**
 * Component for Desktop View
 * Shows 3 cards at a time with center focus effect
 */
const DesktopPurchasePlans: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        
    }

    return (
        <>
        <div className="hidden lg:block h-full overflow-hidden  w-full">
            <Slider {...settings}>
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="px-1 h-full"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div className="h-full p-1 flex justify-center w-full items-center">
                            <PricingCard {...plan} isCenter={index === currentIndex} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex mt-8 items-center justify-center space-x-4">
                    {plans.map((_, i) => (
                        <button
                            key={i}
                            className={`h-1 w-12 cursor-pointer rounded-full ${
                                i === currentIndex ? 'bg-[#5D59E1]' : 'bg-white/20'
                            }`}
                          
                        ></button>
                    ))}
                </div>
        </div>
           
                </>
    )
}





/**
 * Main Component
 * Shows the appropriate component based on the screen size
 */
const PurchasePlans: React.FC = () => {
    return (
        <div className="flex h-fit flex-col items-center justify-center gap-10 bg-black">
            <div className="flex w-5/6 flex-col items-center">
                <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                    Market-Conquering Business Solutions
                </Badge>
                <p className="mt-4 font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                    No Contracts, Just Results
                </p>
                <p className="text-center font-archivo text-sm font-normal text-white/50 lg:w-[59%] lg:text-base">
                    Experience the power of a WebWunder website, perfectly
                    tailored to your business. Choose from three subscriptions
                    or our Unlimited Design Package. 100% flexible and cancel
                    anytime. But be warned: You&apos;ll feel so comfortable,
                    you&apos;ll never want to leave.
                </p>
            </div>
            {/* Mobile Component */}
            <MobilePurchasePlans />
            {/* Desktop Component */}
            <DesktopPurchasePlans />
        </div>
    )
}

export default PurchasePlans