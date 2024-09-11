'use client'

import SliderButtons from '@/components/common/slider-buttons'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import SignUp from './signup'
import Image from 'next/image'

import DesignRequestsPNG from '@/public/images/home/forms/design-requests.png'
import NewRevisionRequestsPNG from '@/public/images/home/forms/new-revision-requests.png'

export default function Items(props: Props) {
    const [api, setApi] = useState<CarouselApi>()
    return (
        <div className={cn('w-full max-w-[90vw] select-none', props.className)}>
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="mx-auto">
                    <CarouselItem
                        key="item_1"
                        className="flex items-center justify-center p-4 pt-0"
                    >
                        <div className="w-full rounded-2xl p-2 lg:pt-0">
                            <div className="mb-10 lg:mb-0 lg:scale-[65%]">
                                <SignUp className="" />
                            </div>
                            <h2 className="text-center text-[18px] leading-[26px] text-grayText">
                                Subscribe for unlimited designs and web
                                development
                            </h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem
                        key="item_2"
                        className="flex items-center justify-center"
                    >
                        <div className="flex flex-col justify-between rounded-2xl p-2 px-4 pt-4 lg:pt-14">
                            <Image
                                className="mx-auto mb-10 max-h-[280px] lg:mb-10 lg:max-h-[400px]"
                                src={DesignRequestsPNG}
                                alt="WebWunder Design Request Image"
                            />
                            <h2 className="px-8 text-center text-[18px] leading-[26px] text-grayText">
                                Receive your designs in just 3 business days on
                                average
                            </h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem
                        key="item_3"
                        className="flex items-center justify-center"
                    >
                        <div className="flex flex-col justify-between rounded-2xl p-2 px-4 pt-4 lg:pt-12">
                            <Image
                                className="mx-auto mb-10 w-full lg:max-h-[280px] lg:w-auto"
                                src={NewRevisionRequestsPNG}
                                alt="WebWunder New Revision Request Image"
                            />
                            <h2 className="px-8 text-center text-[18px] leading-[26px] text-grayText">
                                We&apos;ll revise the designs until you&apos;re
                                100% satisfied
                            </h2>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <SliderButtons itemCount={3} className="mt-2" api={api} />
            </Carousel>
        </div>
    )
}
