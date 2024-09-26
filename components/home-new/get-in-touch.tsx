'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
const GetInTouch = () => {
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
        <div className="relative h-[400px] bg-black">
            <div
                className="absolute inset-0 scale-150"
                style={{
                    backgroundImage: "url('/images/bg-grad-review.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <Badge
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="mb-3 bg-[#5D59E1] font-archivo text-sm font-normal"
                >
                    {languageData?.faqPage?.[changeLanguage]?.contactCta}
                </Badge>
                <h2 className=" font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                    {/* Leave the Competition Behind! */}
                    {languageData?.faqPage?.[changeLanguage]?.contactTitle}
                </h2>
                <p className="max-w-2xl font-archivo text-sm font-normal text-gray-400 md:text-[16px] lg:text-base">
                    {
                        languageData?.faqPage?.[changeLanguage]
                            ?.contactDescription
                    }
                </p>
                <button className="flex w-fit items-center justify-between gap-3 rounded-full bg-white px-2 py-1 transition-all hover:scale-95 lg:px-4 lg:py-2">
                    <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                        {languageData?.faqPage?.[changeLanguage]?.bookCall}
                    </p>
                    <ArrowRight size={15} className="text-[#24252A]" />
                </button>
            </div>
        </div>
    )
}

export default GetInTouch
