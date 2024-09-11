'use client'

import SliderButtons from '@/components/common/slider-buttons'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'

import BlazingFast from '@/public/images/home/membership/blazing-fast.png'
import DesignBoard from '@/public/images/home/membership/design-board.png'
import Exclusively from '@/public/images/home/membership/exclusively.png'
import Flexible from '@/public/images/home/membership/flexible.png'
import PredictablePricing from '@/public/images/home/membership/predictable-pricing.png'
import TopQuality from '@/public/images/home/membership/top-quality.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export default function Items() {
    const items: { title: string; text: string; img: StaticImageData }[] = [
        {
            title: 'Comprehensive Design Board',
            img: DesignBoard,
            text: 'Effortlessly manage design and web development tasks, boosting workflow and productivity.',
        },
        {
            title: 'Blazing Fast Delivery',
            img: BlazingFast,
            text: 'Receive each design or development task in just a few days on average.',
        },
        {
            title: 'Predictable Pricing',
            img: PredictablePricing,
            text: 'No surprises—enjoy consistent, predictable pricing with the same cost every month.',
        },
        {
            title: 'Top-Tier Quality',
            img: TopQuality,
            text: 'Exceptional design and web development quality at your fingertips, whenever you need it.',
        },
        {
            title: 'Flexible and Scalable',
            img: Flexible,
            text: 'Scale your projects up or down, and pause or cancel anytime, hassle-free.',
        },
        {
            title: 'Exclusively Yours',
            img: Exclusively,
            text: 'Every design and web development project is crafted uniquely for you and is 100% yours.',
        },
    ]

    const [api, setApi] = useState<CarouselApi>()

    return (
        <>
            <div className="hidden gap-10 lg:grid-cols-3 xl:grid">
                {items.map((e) => (
                    <article
                        key={e.title}
                        className="flex flex-col items-center text-center"
                    >
                        <Image
                            className="mb-4"
                            src={e.img}
                            alt="WebWunder Image"
                        />
                        <div className="mb-4 max-w-44 text-2xl font-bold">
                            {e.title}
                        </div>
                        <p className="text-base text-grayText">{e.text}</p>
                    </article>
                ))}
            </div>
            <div className="w-full max-w-[90svw] xl:hidden">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {items.map((e) => (
                            <CarouselItem
                                key={e.title}
                                className="flex items-center justify-center"
                            >
                                <article className="flex select-none flex-col items-center text-center">
                                    <Image
                                        className="mb-4"
                                        src={e.img}
                                        alt="WebWunder Image"
                                    />
                                    <div className="mb-4 max-w-44 text-2xl font-bold">
                                        {e.title}
                                    </div>
                                    <p className="text-base text-grayText">
                                        {e.text}
                                    </p>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <SliderButtons
                        itemCount={items.length}
                        className="mt-8"
                        api={api}
                    />
                </Carousel>
            </div>
        </>
    )
}
