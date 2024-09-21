'use client'

import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import WebDesignTab from './tabs/web-design-tab'
import BrandingTab from './tabs/branding-tab'
import SocialMediaTab from './tabs/social-media-tab'
import GraphicDesigningTab from './tabs/graphic-designing-tab'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PortfolioMainContent = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <Badge className="w-fit self-center rounded-full bg-[#5D59E1] px-3 py-1 font-archivo text-sm font-normal">
                    Our Portfolio
                </Badge>
                <p className="w-2/3 text-center font-archivo text-[25px] font-bold leading-none text-white lg:w-auto lg:text-[45px]">
                    See How We Build Brands That Thrive
                </p>
                <p className="w-11/12 text-center font-archivo text-[13px] font-normal text-white/50 lg:w-3/5 lg:text-base">
                    Browse our portfolio and see how we deliver high-performance
                    websites tailored to boost your business. Each project
                    demonstrates our commitment to blending design, technology,
                    and strategy to create online platforms that truly stand out
                    and succeed. Ready for your transformation?
                </p>
            </div>
            <Tabs defaultValue="webdesign" className="mx-auto">
                <TabsList className="mx-auto mb-10 mt-5 grid h-fit w-fit grid-cols-4 rounded-full bg-[#191919] text-white">
                    <TabsTrigger
                        className="font-poppins rounded-full py-2 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="webdesign"
                    >
                        Web Design
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full py-2 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="branding"
                    >
                        Branding
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full py-2 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="socialmedia"
                    >
                        Social Media
                    </TabsTrigger>
                    <TabsTrigger
                        className="font-poppins rounded-full py-2 text-[10px] font-semibold data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white lg:p-4 lg:text-sm"
                        value="graphicdesigning"
                    >
                        Graphic Designing
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
                    Get in Touch
                </Badge>
                <p className="text-center font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                    Leave the Competition Behind!
                </p>
                <p className="lg:w-[65%] lg:px-0 px-1 self-center text-center font-archivo text-sm font-normal text-white/50 lg:text-base">
                    Join WebWunder&apos;s subscription web design service, built
                    by entrepreneurs for entrepreneurs, and watch your business
                    soar.
                </p>
                <button className="w-fit self-center rounded-full bg-white px-3 py-2 font-archivo text-sm font-medium lg:py-3">
                    <Link
                        href="#"
                        className="flex flex-row items-center justify-between gap-4"
                    >
                        <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                            Book a call
                        </p>
                        <ArrowRight
                            size={18}
                            fontWeight={100}
                            className="text-[#24252A]"
                        />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default PortfolioMainContent
