'use client'

import React, { useEffect, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import WebDesignTab from './tabs/web-design-tab'
import BrandingTab from './tabs/branding-tab'
import SocialMediaTab from './tabs/social-media-tab'
import GraphicDesigningTab from './tabs/graphic-designing-tab'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
import axios from 'axios'

const PortfolioMainContent = () => {
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
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <Badge className="w-fit self-center rounded-full bg-[#5D59E1] px-3 py-1 font-archivo text-sm font-normal">
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.portfolioHeading
                    }
                </Badge>
                <p className="px-16 text-center font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px] xl:text-[50px]">
                    {/* See How We Build Brands That Thrive/ */}
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.portfolioSubHeading
                    }
                </p>
                <p className="px-8 text-center font-archivo text-sm font-normal text-white/50 lg:w-3/5 lg:text-base xl:text-lg">
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.portfolioDescription
                    }
                </p>
            </div>
            <Tabs defaultValue="webdesign" className="mx-auto">
                <TabsList className="mx-2 mb-10 mt-5 grid h-fit w-fit grid-cols-4 rounded-full bg-[#191919] text-white lg:mx-auto">
                    <TabsTrigger
                        className="font-poppins rounded-full px-3 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="webdesign"
                    >
                        {
                            languageData?.portfolioPage?.[changeLanguage]
                                ?.tabs[0]?.name
                        }
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full px-3 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="branding"
                    >
                        {
                            languageData?.portfolioPage?.[changeLanguage]
                                ?.tabs[1]?.name
                        }
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full px-3 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="socialmedia"
                    >
                        Social Media
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full px-3 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="graphicdesigning"
                    >
                        <p className="px-5 text-white">
                           Graphic Designing
                        </p>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="webdesign">
                    <WebDesignTab />
                </TabsContent>
                <TabsContent value="branding">
                    <BrandingTab />
                </TabsContent>
                <TabsContent value="socialmedia">
                    <SocialMediaTab />
                </TabsContent>
                <TabsContent value="graphicdesigning">
                    <GraphicDesigningTab />
                </TabsContent>
            </Tabs>
            <div className="item-center mb-16 flex flex-col gap-4">
                <Badge className="w-fit self-center rounded-full bg-[#5D59E1] px-3 py-1 font-archivo text-sm font-normal">
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.getInTouchSection?.title
                    }
                </Badge>
                <p className="text-center font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.getInTouchSection?.subtitle
                    }
                </p>
                <p className="w-[65%] self-center text-center font-archivo text-base font-normal text-white/50">
                    {
                        languageData?.portfolioPage?.[changeLanguage]
                            ?.getInTouchSection?.description
                    }
                </p>
                <Button
                    size="base"
                    className="flex w-fit items-center justify-center gap-7 self-center rounded-full bg-white px-6 text-[#24252A]"
                >
                    <p className="font-archivo text-[15px] font-normal">
                        {
                            languageData?.portfolioPage?.[changeLanguage]
                                ?.getInTouchSection?.cta
                        }
                    </p>
                    <ArrowRight size={20} />
                </Button>
            </div>
        </div>
    )
}

export default PortfolioMainContent
