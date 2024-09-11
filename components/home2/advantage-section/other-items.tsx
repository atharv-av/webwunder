'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import SliderButtons from '@/components/common/slider-buttons'
import { useState } from 'react'

export default function OtherItems(props: Props) {
    const items = [
        {
            title: 'Your Partner in Growth',
            text: 'No hidden costs. Subscription websites that drive business and boost profits!',
            className:'bg-[#3AE62C]'
        },
        {
            title: 'Design with Purpose',
            text: 'Enhance your brand and command premium pricing with our strategic designs.',
            className:'bg-[#27DAB7]'
        },
        {
            title: 'Clear Paths to Success',
            text: 'Our websites direct visitors to take action and become loyal customers.',
            className:'bg-[#FADB41]'
        },
    ]

    // w-full max-w-sm md:max-w-md
    const [api, setApi] = useState<CarouselApi>()
    return (
        <>
            <div className="flex items-center justify-center xl:hidden">
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
                                <div className={`mx-2 my-8 flex min-h-[215px] flex-col items-center justify-center gap-3 rounded-2xl px-8 py-12 text-center shadow-xl ${e.className}`}>
                                    <h3 className="text-2xl font-bold">
                                        {e.title}
                                    </h3>
                                    <p className="">{e.text}</p>
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
            <div className="hidden items-center justify-center gap-8 xl:flex">
                {items.map((e) => (
                    <div
                        key={e.title}
                        className={`mx-2 my-8 flex min-h-[240px] flex-col items-start justify-center gap-3 rounded-2xl  px-8 py-12 text-start shadow-xl ${e.className}`}
                    >
                        <h3 className="pe-8 text-4xl font-bold">{e.title}</h3>
                        <p className="">{e.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
