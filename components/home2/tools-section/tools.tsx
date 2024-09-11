'use client'
import AdobeCloudPNG from '@/public/images/brands/adobe-cloud.png'
import FigmaPNG from '@/public/images/brands/figma.png'
import WebflowPNG from '@/public/images/brands/webflow.png'
import NextjsPNG from '@/public/images/brands/nextjs.png'
import ReactjsPNG from '@/public/images/brands/reactjs.png'
import StripePNG from '@/public/images/brands/stripe.png'
import WordpressPNG from '@/public/images/brands/wordpress.png'
import CloudflarePagesPNG from '@/public/images/brands/cloudflare-pages.png'
import CloudflarePNG from '@/public/images/brands/cloudflare.png'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

export default function Tools() {
    const content: { title: string; icon: ReactNode }[] = [
        // {
        //     title: 'AdobeCloudPNG',
        //     icon: (
        //         <Image
        //             src={AdobeCloudPNG}
        //             alt="Webwunder Tools Image"
        //             className="object-contain"
        //         />
        //     ),
        // },
        {
            title: 'FigmaPNG',
            icon: (
                <Image
                    src={FigmaPNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        {
            title: 'WebflowPNG',
            icon: (
                <Image
                    src={WebflowPNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        {
            title: 'NextjsPNG',
            icon: (
                <Image
                    src={NextjsPNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        {
            title: 'ReactjsPNG',
            icon: (
                <Image
                    src={ReactjsPNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        {
            title: 'StripePNG',
            icon: (
                <Image
                    src={StripePNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        {
            title: 'WordpressPNG',
            icon: (
                <Image
                    src={WordpressPNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
        // {
        //     title: 'CloudflarePagesPNG',
        //     icon: (
        //         <Image
        //             src={CloudflarePagesPNG}
        //             alt="Webwunder Tools Image"
        //             className="object-contain"
        //         />
        //     ),
        // },
        {
            title: 'CloudflarePNG',
            icon: (
                <Image
                    src={CloudflarePNG}
                    alt="Webwunder Tools Image"
                    className="object-contain"
                />
            ),
        },
    ]

    const [api, setApi] = useState<CarouselApi>()
    // const plugin = React.useRef(
    //     Autoplay({ delay: 2000, stopOnInteraction: true }),
    // )
    const plugin = React.useRef(AutoScroll({ speed: 0.5, startDelay: 0, stopOnInteraction:false }))

    return (
        <div className="mt-6 w-full lg:pb-20">
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
                plugins={[plugin.current as any]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={() => {
                    plugin.current.play()
                }}
                className="w-full lg:hidden"
            >
                <CarouselContent className="">
                    {content.map((e) => (
                        <CarouselItem
                            key={e.title}
                            className="flex basis-1/3 items-center justify-center"
                        >
                            <div className={`select-none`}>{e.icon}</div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="absolute left-1/2 mx-auto hidden w-[calc(100svw-20px)] -translate-x-2/4 lg:block">
                <div className="flex items-center justify-evenly">
                    {content.map((e) => (
                        <div
                            key={e.title}
                            className="flex items-center justify-center"
                        >
                            <div className={`select-none`}>{e.icon}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
