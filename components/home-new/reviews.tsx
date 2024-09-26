'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { InfiniteMovingCards } from '../ui/infinite-moving-review-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
import axios from 'axios'

const Reviews = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const testimonials = [
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[0].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[0]
                .name,
            rating: 5,
        },
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[1].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[1]
                .name,
            rating: 5,
        },
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[2].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[2]
                .name,
            rating: 5,
        },
    ]
    return (
        <div className="flex flex-col items-center gap-4 bg-black px-4 lg:px-0">
            <Badge
                data-aos="fade-up"
                className="mt-10 bg-[#5D59E1] font-archivo text-sm font-normal lg:mt-20"
            >
                {languageData?.ourClient?.[changeLanguage]?.reviewsTitle}
            </Badge>
            <p className="font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                {languageData?.ourClient?.[changeLanguage]?.whatClientsSay}{' '}
            </p>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
            <div className="flex flex-col items-center gap-2 lg:w-4/5 2xl:w-3/4 lg:items-start">
                <p className="font-archivo text-lg font-bold text-white lg:text-[26px]">
                    {languageData?.ourClient?.[changeLanguage]?.reviewPrompt}
                </p>
                <div className="lg:flex lg:justify-between">
                    <p className="text-center font-archivo text-sm font-normal text-white/50 lg:w-3/5 lg:text-start lg:text-base">
                        {
                            languageData?.ourClient?.[changeLanguage]
                                ?.reviewDescription
                        }
                    </p>
                    <div className="my-5 flex items-center justify-center lg:my-0">
                        <Button
                            size={'base'}
                            className="flex items-center justify-between gap-3 bg-[#FFDC26] transition-all hover:scale-95"
                        >
                            <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                                {
                                    languageData?.ourClient?.[changeLanguage]
                                        ?.writeReview
                                }

                                {/* Write a Review */}
                            </p>
                            <ArrowRight size={15} className="text-[#24252A]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
