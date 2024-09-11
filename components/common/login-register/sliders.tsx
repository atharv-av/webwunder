'use client'
import Img1 from '@/public/images/home/game-changer/img1.png'
import Img2 from '@/public/images/home/game-changer/img2.png'
import Img3 from '@/public/images/home/game-changer/img3.png'
import Img4 from '@/public/images/home/game-changer/img4.png'
import Img5 from '@/public/images/home/game-changer/img5.png'

import SliderButtons from '@/components/common/slider-buttons'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { cn } from '@/lib/utils'

export default function Sliders(props: Props) {
    const content: {
        title: string
        img: StaticImageData
        mainText: string
        text: string
    }[] = [
        {
            title: 'Img1',
            img: Img1,
            mainText: "The Best Creative Partner You'll Ever Have",
            text: 'No more cost questions. Enjoy your in-house extension!',
        },
        {
            title: 'Img2',
            img: Img2,
            mainText: 'Traditional Hiring or Outsourcing? Neither.',
            text: "Let's face it: old methods of scaling design and development are relics of the past. You don't need an agency or freelancer—you need a seamless extension to your in-house team.",
        },
        {
            title: 'Img3',
            img: Img3,
            mainText: "The Best Creative Partner You'll Ever Have",
            text: 'No more cost questions. Enjoy your in-house extension!',
        },
    ]

    const [api, setApi] = useState<CarouselApi>()

    return (
        <div className={cn('w-full', props.className)}>
            <Carousel
                className="h-full [&_>_div:first-child]:h-full"
                setApi={setApi}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-full">
                    {content.map((e) => (
                        <CarouselItem
                            key={e.title}
                            className="flex h-full items-end justify-center"
                        >
                            <div className="relative h-full w-full overflow-clip rounded-[50px] md:rounded-[75px] xl:rounded-[85px]">
                                <Image
                                    className="h-full w-full object-cover"
                                    src={e.img}
                                    alt="WebWunder Image"
                                />
                                <div className="absolute bottom-0 flex h-full w-full flex-col items-center justify-end bg-black/60">
                                    <h2 className="px-4 text-center text-4xl font-bold text-white xl:px-12">
                                        {e.mainText}
                                    </h2>
                                    <p className="mb-12 px-4 text-center text-white">
                                        {e.text}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <SliderButtons
                    itemCount={content.length}
                    bars
                    className="relative -top-8 mt-0"
                    api={api}
                />
            </Carousel>
        </div>
    )
}
