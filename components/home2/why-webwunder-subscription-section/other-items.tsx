'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import SliderButtons from '@/components/common/slider-buttons'
import { useState } from 'react'

import AffordableSVG from '@/public/images/home/why-webwunder-subscription/affordable.svg'
import AlwaysSVG from '@/public/images/home/why-webwunder-subscription/always.svg'
import BusinessSVG from '@/public/images/home/why-webwunder-subscription/business.svg'
import ComprehensiveSVG from '@/public/images/home/why-webwunder-subscription/comprehensive.svg'
import ContentSVG from '@/public/images/home/why-webwunder-subscription/content.svg'
import ContinousSVG from '@/public/images/home/why-webwunder-subscription/continous.svg'
import FreeSVG from '@/public/images/home/why-webwunder-subscription/free.svg'

export default function OtherItems(props: Props & { mobile?: boolean }) {
    const items = [
        {
            title: 'Affordable & Predictable Costs',
            text: 'One low monthly payment covers everything—no hidden fees.',
            icon: <AffordableSVG />,
        },
        {
            title: 'Always <br/>Up-to-Date',
            text: 'Our websites direct visitors to take action and become loyal customers.',
            icon: <AlwaysSVG />,
        },
        {
            title: 'Comprehensive Management',
            text: 'We handle hosting, maintenance, and backups — your site stays online and secure.',
            icon: <ComprehensiveSVG />,
        },
        {
            title: 'Continuous Support',
            text: `We're always here for updates and extensions.`,
            icon: <ContinousSVG />,
        },
        {
            title: 'Free Design Refresh',
            text: 'Stay ahead with a complimentary design upgrade every 36 months.',
            icon: <FreeSVG />,
        },
        {
            title: 'Content & Design Expertise',
            text: ' We support your content creation and design needs.',
            icon: <ContentSVG />,
        },
        {
            title: 'Business-Savvy Solutions',
            text: 'Our entrepreneurial insight ensures we deliver results that matter.',
            icon: <BusinessSVG />,
        },
    ]

    const [api, setApi] = useState<CarouselApi>()
    return (
        <>
            {props.mobile ? (
                <div className="flex items-center justify-center">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                        }}
                        className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {items.map((e) => (
                                <CarouselItem key={e.title}>
                                    <div className="mx-2 my-8 flex min-h-[355px] flex-col items-start justify-center gap-3 rounded-2xl bg-[#F8F8F8] px-8 py-12 shadow-xl">
                                        <div className="mb-3 text-8xl">
                                            {e.icon}
                                        </div>
                                        <h3
                                            dangerouslySetInnerHTML={{
                                                __html: e.title,
                                            }}
                                            className="text-start text-2xl font-bold"
                                        ></h3>
                                        <p className="text-start">{e.text}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <SliderButtons
                            itemCount={items.length}
                            bars
                            selectedBarColor="bg-primary"
                            barColor="bg-[#D9D9D9]"
                            className="mt-1"
                            api={api}
                        />
                    </Carousel>
                </div>
            ) : (
                items.map((e) => (
                    <div
                        key={e.title}
                        className="flex min-h-[400px] flex-col items-start justify-center gap-3 rounded-2xl bg-[#F8F8F8] px-8 py-12 shadow-xl"
                    >
                        <div className="mb-3 text-8xl">{e.icon}</div>
                        <h3
                            dangerouslySetInnerHTML={{ __html: e.title }}
                            className="break-words pe-6 text-start text-4xl font-bold"
                        ></h3>
                        <p className="text-start">{e.text}</p>
                    </div>
                ))
            )}
        </>
    )
}
