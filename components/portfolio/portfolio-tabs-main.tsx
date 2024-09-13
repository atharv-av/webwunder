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

const PortfolioMainContent = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <p className="rounded-full bg-[#5D59E1] px-3 py-1 text-center text-base font-semibold text-white">
                    Our Portfolio
                </p>
                <p className="text-center text-5xl font-semibold text-white">
                    See How We Build Brands That Thrive
                </p>
                <p className="w-1/2 text-center text-sm font-light text-gray-500">
                    Browse our portfolio and see how we deliver high-performance
                    websites tailored to boost your business. Each project
                    demonstrates our commitment to blending design, technology,
                    and strategy to create online platforms that truly stand out
                    and succeed. Ready for your transformation?
                </p>
            </div>
            <Tabs defaultValue="webdesign" className="mx-auto">
                <TabsList className="mx-auto grid h-fit w-fit grid-cols-4 rounded-full bg-[#191919] text-white">
                    <TabsTrigger
                        className="rounded-full p-4 data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white"
                        value="webdesign"
                    >
                        Web Design
                    </TabsTrigger>
                    <TabsTrigger
                        className="rounded-full p-4 data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white"
                        value="branding"
                    >
                        Branding
                    </TabsTrigger>
                    <TabsTrigger
                        className="rounded-full p-4 data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white"
                        value="socialmedia"
                    >
                        Social Media
                    </TabsTrigger>
                    <TabsTrigger
                        className="rounded-full p-4 data-[state=active]:bg-[#5D59E1] data-[state=active]:text-white"
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
            <div className="item-center flex flex-col gap-4 mb-16 ">
                <Badge className="w-fit self-center rounded-full bg-[#5D59E1] p-2">
                    Get in Touch
                </Badge>
                <p className="text-center text-3xl font-bold text-white">
                    Leave the Competition Behind!
                </p>
                <p className="w-[65%] self-center text-center text-base font-normal text-gray-500">
                    Join WebWunder&apos;s subscription web design service, built by
                    entrepreneurs for entrepreneurs, and watch your business
                    soar.
                </p>
                <Button className="flex w-fit bg-white text-black items-center gap-7 self-center rounded-full px-6">
                    <p>Book a call</p>
                    <ArrowRight size={25} />
                </Button>
            </div>
        </div>
    )
}

export default PortfolioMainContent
