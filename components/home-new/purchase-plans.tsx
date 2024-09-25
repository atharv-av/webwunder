'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import PricingCard, { PricingCardProps } from './pricing-card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { languageData } from '@/langauge'
import axios from 'axios'

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

/**
 * Component for Mobile View
 * Shows one card at a time
 */
const MobilePurchasePlans: React.FC = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const detectUserLanguage = async () => {
        setChangeLanguage('en');

        // try {
        //     const response = await axios.get('https://ipapi.co/json/')
        //     const countryCode = response.data.country_code

        //     const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

        //     if (germanSpeakingCountries.includes(countryCode)) {
        //         setChangeLanguage('de')
        //     } else {
        //         setChangeLanguage('en')
        //     }
        // } catch (error) {
        //     console.error('Error fetching user location:', error)
        //     // Default to English if there's an error
        //     setChangeLanguage('en')
        // }
    }
    useEffect(() => {
        detectUserLanguage()
    }, [])

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

    const plans: PlanProps[] = [
        {
            icon: '/images/home/purchase-plans/icon-1.png',
            iconBg: 'bg-[#FFDC26]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.features,
        },
        {
            icon: '/images/home/purchase-plans/icon-3.png',
            iconBg: 'bg-[#27DAB7]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.features,
            ctaText: 'Best Seller',
        },
        {
            icon: '/images/home/purchase-plans/icon-3.png',
            iconBg: 'bg-[#FB421F]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.features,
        },
        {
            icon: '/images/home/purchase-plans/icon-4.png',
            iconBg: 'bg-[#5D59E1]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.features,
        },
    ]

    return (
        <div className="w-full lg:hidden">
            <Slider {...settings}>
                {plans.map((plan, index) => (
                    <div key={index} className="px-4">
                        <PricingCard
                            {...plan}
                            isCenter={index === currentIndex}
                        />
                    </div>
                ))}
            </Slider>
            <div className="mt-8 flex items-center justify-center space-x-4">
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
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const detectUserLanguage = async () => {
        setChangeLanguage('en');

        // try {
        //     const response = await axios.get('https://ipapi.co/json/')
        //     const countryCode = response.data.country_code

        //     const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

        //     if (germanSpeakingCountries.includes(countryCode)) {
        //         setChangeLanguage('de')
        //     } else {
        //         setChangeLanguage('en')
        //     }
        // } catch (error) {
        //     console.error('Error fetching user location:', error)
        //     // Default to English if there's an error
        //     setChangeLanguage('en')
        // }
    }
    useEffect(() => {
        detectUserLanguage()
    }, [])

    const plans: PlanProps[] = [
        {
            icon: '/images/home/purchase-plans/icon-1.png',
            iconBg: 'bg-[#FFDC26]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[0]?.features,
        },
        {
            icon: '/images/home/purchase-plans/icon-3.png',
            iconBg: 'bg-[#27DAB7]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[1]?.features,
            ctaText: 'Best Seller',
        },
        {
            icon: '/images/home/purchase-plans/icon-3.png',
            iconBg: 'bg-[#FB421F]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[2]?.features,
        },
        {
            icon: '/images/home/purchase-plans/icon-4.png',
            iconBg: 'bg-[#5D59E1]',
            title: languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.title,
            description:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]
                    ?.description,
            price: languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.price,
            setupFee:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.setupFee,
            features:
                languageData?.paymentsCard?.[changeLanguage]?.tabs[3]?.features,
        },
    ]

    return (
        <>
            <div className="hidden h-full w-full overflow-hidden lg:block">
                <Slider {...settings}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="h-full px-1"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="flex h-full w-[107%] items-center justify-center p-1">
                                <PricingCard
                                    {...plan}
                                    isCenter={index === currentIndex}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="mt-8 flex items-center justify-center space-x-4">
                    {plans.map((_, i) => (
                        <button
                            key={i}
                            className={`h-1 w-12 cursor-pointer rounded-full ${
                                i === currentIndex
                                    ? 'bg-[#5D59E1]'
                                    : 'bg-white/20'
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
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const detectUserLanguage = async () => {
        setChangeLanguage('en');

        // try {
        //     const response = await axios.get('https://ipapi.co/json/')
        //     const countryCode = response.data.country_code

        //     const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

        //     if (germanSpeakingCountries.includes(countryCode)) {
        //         setChangeLanguage('de')
        //     } else {
        //         setChangeLanguage('en')
        //     }
        // } catch (error) {
        //     console.error('Error fetching user location:', error)
        //     // Default to English if there's an error
        //     setChangeLanguage('en')
        // }
    }
    useEffect(() => {
        detectUserLanguage()
    }, [])

    return (
        <div className="flex h-fit flex-col items-center justify-center gap-10 bg-black">
            <div className="flex w-5/6 flex-col items-center">
                <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                    {/* Market-Conquering Business Solutions */}
                    {languageData?.paymentsCard?.[changeLanguage]?.headline}
                </Badge>
                <p className="mt-4 font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                    {/* No Contracts, Just Results */}
                    {languageData?.paymentsCard?.[changeLanguage]?.subheadline}
                </p>
                <p className="text-center font-archivo text-sm font-normal text-white/50 lg:w-[59%] lg:text-base">
                    {/* Experience the power of a WebWunder website, perfectly
                    tailored to your business. Choose from three subscriptions
                    or our Unlimited Design Package. 100% flexible and cancel
                    anytime. But be warned: You&apos;ll feel so comfortable,
                    you&apos;ll never want to leave. */}
                    {languageData?.paymentsCard?.[changeLanguage]?.description}
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
