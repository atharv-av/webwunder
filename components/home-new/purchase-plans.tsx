'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import PricingCard, { PricingCardProps } from './pricing-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
        description:
            'Designed for growing businesses that need advanced features and additional design support.',
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
        description:
            'Designed for growing businesses that need advanced features and additional design support.',
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
        description:
            'Designed for growing businesses that need advanced features and additional design support.',
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
        description:
            'Designed for growing businesses that need advanced features and additional design support.',
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

const PurchasePlans: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [displayPlans, setDisplayPlans] = useState<PlanProps[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const updateDisplayPlans = () => {
            if (isMobile) {
                setDisplayPlans([plans[currentIndex]])
            } else {
                // For large screens, show 3 plans at a time
                const startIndex = currentIndex * 3
                setDisplayPlans(plans.slice(startIndex, startIndex + 3))
            }
        }
        updateDisplayPlans()
    }, [currentIndex, isMobile])

    const handleNavClick = (index: number): void => {
        // Adjust index for large screens to handle pagination
        if (isMobile) {
            setCurrentIndex(index)
        } else {
            const maxIndex = Math.floor(plans.length / 3)
            const newIndex = index >= maxIndex ? 0 : index
            setCurrentIndex(newIndex)
        }
    }

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
                    you&apos;ll never want to leave. After us, you won&apos;t
                    need another agency – and neither will your current one!
                </p>
            </div>
            <div className="relative w-full max-w-[1200px] lg:mt-8">
                <div className="overflow-visible">
                    <div
                        className={`flex items-stretch justify-center ${isMobile ? 'flex-col' : ''}`}
                        style={{ minHeight: isMobile ? '750px' : '1060px' }}
                    >
                        {displayPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2`}
                                style={{
                                    height: isMobile
                                        ? '950px'
                                        : index === 1
                                          ? '1250px'
                                          : '1100px',
                                    display: 'flex',
                                    alignItems: 'center', // Vertically centers the card content
                                }}
                            >
                                <div
                                    className={`h-full transform p-3 transition-all duration-300 lg:p-0 ${
                                        !isMobile && index === 1
                                            ? 'scale-105 shadow-lg'
                                            : isMobile
                                              ? ''
                                              : 'scale-95 opacity-75'
                                    }`}
                                    style={{
                                        margin:
                                            index === 1 && !isMobile
                                                ? 'auto'
                                                : '', // Center the larger card
                                        paddingTop:
                                            index === 1 && !isMobile
                                                ? '25px'
                                                : '', // Distribute top padding evenly
                                        paddingBottom:
                                            index === 1 && !isMobile
                                                ? '25px'
                                                : '', // Distribute bottom padding evenly
                                    }}
                                >
                                    <PricingCard
                                        {...plan}
                                        isCenter={!isMobile && index === 1}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mt-8 lg:-mt-24 items-center justify-center space-x-4">
                    {plans.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 w-12 cursor-pointer rounded-full lg:w-20 ${
                                index === currentIndex
                                    ? 'bg-[#5D59E1]'
                                    : 'bg-white/20'
                            }`}
                            onClick={() => handleNavClick(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PurchasePlans
