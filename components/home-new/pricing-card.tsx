import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { gsap } from 'gsap'

import {languageData} from '@/langauge'
import axios from 'axios';

export interface PricingCardProps {
    icon: string
    iconBg: string
    title: string
    description: string
    price: number
    setupFee: number
    features: string[]
    ctaText?: string
    onSignUp?: () => void
    isCenter?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
    icon,
    iconBg,
    title,
    description,
    price,
    setupFee,
    features,
    ctaText,
    onSignUp,
    isCenter = false,
}) =>
     {
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
        <Card
            className={`flex cursor-grab flex-col justify-between rounded-3xl border-2 border-white bg-[#191919] text-white transition-all duration-300 lg:w-[500px] xl:w-[700px] lg:scale-[87%] lg:border lg:border-[#D9D9D9] ${
                isCenter
                    ? 'lg:h-[1000px] lg:scale-[200%] xl:scale-90 lg:border-[6px] relative lg:bottom-10  lg:border-white'
                    : 'lg:h-[900px]'
            }`}
        >
            <div className="flex flex-col">
                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col items-start space-y-2">
                            <div
                                className={`flex h-fit w-fit rounded-full p-2 ${iconBg}`}
                            >
                                <Image
                                    src={icon}
                                    alt={title}
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <p className="font-inter text-base font-semibold text-white lg:text-2xl">
                                {title}
                            </p>
                        </div>
                        {ctaText && (
                            <Badge className="rounded-full bg-[#5D59E1] px-2 font-archivo text-sm font-normal text-white">
                                {ctaText}
                            </Badge>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                    <div className="leading-none">
                        <div className="font-inter text-[45px] font-semibold text-white lg:text-[70px]">
                            €{price}
                            <span className="font-inter text-base font-normal text-white">
                                / {languageData?.paymentsCard?.[changeLanguage]?.priceTag}
                            </span>
                        </div>
                        <div className="font-inter text-lg font-semibold text-white lg:text-xl">
                            {/* €{setupFee} */}
                            {languageData?.paymentsCard?.[changeLanguage]?.setupFeetag}

                        </div>
                    </div>
                    <p className="font-inter text-sm font-normal text-white/50 lg:text-base">
                        {description}
                    </p>
                    <div className="space-y-2">
                        <p className="font-inter text-sm font-bold text-white lg:text-base">
                            {/* What You Get: */}
                            {languageData?.paymentsCard?.[changeLanguage]?.whatYouGet}

                        </p>
                        <div className={`space-y-2  ${
                isCenter
                    ? 'flex flex-col gap-3 leading-2'
                    : ''
            }`}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#46B277] p-1">
                                        <Check
                                            size={12}
                                            className="font-extrabold text-black"
                                        />
                                    </div>
                                    <span className="my-1 font-inter text-[13px] font-normal leading-none text-white/50 lg:my-0 lg:text-base">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2 space-y-2 text-white">
                <button
                    className="w-full rounded-full bg-[#5D59E1] py-4 font-inter text-base font-semibold text-white transition-all duration-200 hover:scale-95"
                    onClick={onSignUp}
                >
                    {/* Sign Me Up! */}
                    {languageData?.paymentsCard?.[changeLanguage]?.signMeUp}

                </button>
                <button className="w-full rounded-full border border-black bg-transparent py-4 font-inter text-base font-normal text-white transition-all hover:scale-95 hover:border hover:border-blue-500">
                    {/* Cancel Anytime */}
                     {languageData?.paymentsCard?.[changeLanguage]?.cancelAnytime   }

                </button>
            </CardFooter>
        </Card>
    )
}

export default PricingCard
