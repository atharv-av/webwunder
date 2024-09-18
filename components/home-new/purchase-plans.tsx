'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import PricingCard from './pricing-card'
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

    useEffect(() => {
        const updateDisplayPlans = () => {
            const wrappedPlans = [...plans, ...plans, ...plans]
            const startIndex = currentIndex + plans.length
            setDisplayPlans(wrappedPlans.slice(startIndex - 1, startIndex + 2))
        }
        updateDisplayPlans()
    }, [currentIndex])

    const handleNavClick = (index: number): void => {
        setCurrentIndex(index)
    }
    return (
        <div className="flex h-fit flex-col items-center justify-center gap-10 bg-black">
            <div className="flex flex-col items-center">
                <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                    Market-Conquering Business Solutions
                </Badge>
                <p className="mt-4 font-archivo text-[45px] font-bold text-white">
                    No Contracts, Just Results
                </p>
                <p className="w-[59%] text-center font-archivo text-base font-normal text-white/50">
                    Experience the power of a WebWunder website, perfectly
                    tailored to your business. Choose from three subscriptions
                    or our Unlimited Design Package. 100% flexible and cancel
                    anytime. But be warned: You&apos;ll feel so comfortable,
                    you&apos;ll never want to leave. After us, you won&apos;t
                    need another agency – and neither will your current one!
                </p>
            </div>
            <div className="relative mt-20 w-full max-w-[1200px]">
                <div className="overflow-visible">
                    <div
                        className="flex items-stretch justify-center"
                        style={{ minHeight: '1060px' }}
                    >
                        {displayPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`w-1/3 flex-shrink-0 px-2 flex items-center justify-center ${
                                    index === 1
                                        ? 'mt-[-30px]'
                                        : ''
                                }`}
                            >
                                <div
                                    className={`h-full transform transition-all duration-300 ${
                                        index === 1
                                            ? 'scale-105 shadow-lg'
                                            : 'scale-95 opacity-75'
                                    }`}
                                >
                                    <PricingCard
                                        {...plan}
                                        isCenter={index === 1}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-2">
                    {plans.map((_, index) => (
                        <Button
                            key={index}
                            className={`h-1 w-16 rounded-full p-0 ${
                                index === currentIndex
                                    ? 'bg-[#5D59E1]'
                                    : 'bg-white/20'
                            }`}
                            onClick={() => handleNavClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PurchasePlans
