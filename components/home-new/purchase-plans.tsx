'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import PricingCard, { PricingCardProps } from './pricing-card'

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

    return (
        <div className="lg:hidden  flex flex-col items-center">
            <div className="relative w-full">
                <div className="overflow-hidden">
                    <div className="flex items-stretch justify-center transition-transform duration-500 ease-in-out">
                        <div className="w-full px-4">
                            <PricingCard {...plans[currentIndex]} />
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 items-center justify-center space-x-4">
                    {plans.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 w-12 cursor-pointer rounded-full ${
                                index === currentIndex ? 'bg-[#5D59E1]' : 'bg-white/20'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
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

    const handleNavClick = (index: number): void => {
        setCurrentIndex(index)
    }

    // Get the visible cards based on the current index
    const getVisiblePlans = () => {
        const leftIndex = (currentIndex - 1 + plans.length) % plans.length
        const rightIndex = (currentIndex + 1) % plans.length

        return [plans[leftIndex], plans[currentIndex], plans[rightIndex]]
    }

    const visiblePlans = getVisiblePlans()

    return (
        <div className="hidden lg:flex flex-col items-center">
            <div className="relative w-full max-w-[1400px]">
                <div className="overflow-hidden">
                    <div className="flex -space-x-6 items-stretch justify-center transition-transform duration-500 ease-in-out">
                        {visiblePlans.map((plan, index) => {
                            const isCenter = index === 1 // Center card
                            return (
                                <div
                                    key={index}
                                    className={`w-1/3 flex-shrink-0 px-2 transition-all duration-300 transform ${
                                        isCenter ? 'scale-100 shadow-lg z-10' : 'scale-90 opacity-75 z-0'
                                    }`}
                                    style={{
                                        height: '1100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div className="h-full p-3">
                                        <PricingCard {...plan} isCenter={isCenter} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex mt-8 items-center justify-center space-x-4">
                    {plans.map((_, i) => (
                        <button
                            key={i}
                            className={`h-1 w-12 cursor-pointer rounded-full ${
                                i === currentIndex ? 'bg-[#5D59E1]' : 'bg-white/20'
                            }`}
                            onClick={() => handleNavClick(i)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
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