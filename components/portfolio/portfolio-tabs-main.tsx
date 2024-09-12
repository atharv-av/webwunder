'use client'

import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import WebDesignTab from './tabs/web-design-tab'

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
                <TabsList className="grid w-fit mx-auto h-fit grid-cols-4 rounded-full bg-[#191919] text-white">
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
                {/* <TabsContent value="branding">
                <ContentCard />
            </TabsContent>
            <TabsContent value="socialmedia">
                <ContentCard />
            </TabsContent>
            <TabsContent value="graphicdesigning">
                <ContentCard />
            </TabsContent> */}
            </Tabs>
        </div>
    )
}

export default PortfolioMainContent
