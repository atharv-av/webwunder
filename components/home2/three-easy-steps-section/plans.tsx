'use client'
import Img1 from '@/public/images/home/game-changer/img1.png'
import Img2 from '@/public/images/home/game-changer/img2.png'
import Img3 from '@/public/images/home/game-changer/img3.png'
import Img4 from '@/public/images/home/game-changer/img4.png'
import Img5 from '@/public/images/home/game-changer/img5.png'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { cn } from '@/lib/utils'

export default function Plans2(props: Props) {
    const content: { title: string; img: StaticImageData }[] = [
        { title: 'Img1', img: Img1 },
        { title: 'Img2', img: Img2 },
        { title: 'Img3', img: Img3 },
        { title: 'Img4', img: Img4 },
        { title: 'Img5', img: Img5 },
    ]

    const plugin = React.useRef(
        AutoScroll({ speed: 1, startDelay: 0, stopOnInteraction: false }),
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
