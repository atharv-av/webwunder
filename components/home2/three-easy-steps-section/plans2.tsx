'use client'
import Img6 from '@/public/images/home/game-changer/img6.png'
import Img7 from '@/public/images/home/game-changer/img7.png'
import Img8 from '@/public/images/home/game-changer/img8.png'
import Img9 from '@/public/images/home/game-changer/img9.png'
import Img10 from '@/public/images/home/game-changer/img10.png'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode, useEffect, useState } from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { cn } from '@/lib/utils'

export default function Plans(props: Props) {
    const content: { title: string; img: StaticImageData }[] = [
        { title: 'Img6', img: Img6 },
        { title: 'Img7', img: Img7 },
        { title: 'Img8', img: Img8 },
        { title: 'Img9', img: Img9 },
        { title: 'Img10', img: Img10 },
    ]

    const plugin = React.useRef(
        AutoScroll({
            speed: 1,
            startDelay: 0,
            direction: 'backward',
            stopOnInteraction: false,
        }),
    )

    return (
        <div className={cn('w-full', props.className)}>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[plugin.current as any]}
            >
                <CarouselContent className="">
                    {content.map((e) => (
                        <CarouselItem
                            key={e.title}
                            className="flex basis-2/3 items-center justify-center xl:basis-1/3 2xl:basis-1/4"
                        >
                            <Image src={e.img} alt="WebWunder Image" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
