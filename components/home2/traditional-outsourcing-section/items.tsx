'use client'

import SliderButtons from '@/components/common/slider-buttons'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'

import CreativeAgenciesSVG from '@/public/images/home/traditional-outsourcing/creative-agencies.svg'
import FreelancersSVG from '@/public/images/home/traditional-outsourcing/freelancers.svg'
import InHouseTeamsSVG from '@/public/images/home/traditional-outsourcing/in-house-teams.svg'
import SelfServiceToolsSVG from '@/public/images/home/traditional-outsourcing/self-service-tools.svg'
import { ReactNode, useState } from 'react'

export default function Items() {
    const items: { title: string; text: string; img: ReactNode }[] = [
        {
            title: 'In-House Teams',
            text: 'Hiring additional designers and developers for every need is costly and impractical.',
            img: <InHouseTeamsSVG className="" />,
        },
        {
            title: 'Freelancers',
            text: 'Independent contractors can be unreliable and difficult to scale, resulting in inconsistent and questionable quality.',
            img: <FreelancersSVG className="" />,
        },
        {
            title: 'Creative Agencies',
            text: 'Agencies are expensive, slow, and inflexible, adding complexity and delays to your projects.',
            img: <CreativeAgenciesSVG className="" />,
        },
        {
            title: 'Self-Service Tools',
            text: 'DIY solutions offer incremental improvements but are limited to simpler, repetitive tasks.',
            img: <SelfServiceToolsSVG className="" />,
        },
    ]
    const [api, setApi] = useState<CarouselApi>()

    return (
        <>
            <div className="mb-6 hidden gap-6 lg:mb-8 lg:grid-cols-2 lg:gap-8 xl:grid">
                {items.map((e) => (
                    <article
                        key={e.title}
                        className="flex flex-col items-center justify-center gap-y-4 rounded-3xl bg-[#F8F8F8] p-8 text-center shadow-2xl lg:items-start lg:gap-y-5 lg:p-14 lg:text-start"
                    >
                        <div className="flex items-center justify-center text-7xl">
                            {e.img}
                        </div>
                        <h3 className="text-2xl font-bold lg:text-4.5xl">
                            {e.title}
                        </h3>
                        <p className="text-grayText lg:text-lg">{e.text}</p>
                    </article>
                ))}
            </div>

            <div className="mb-12 w-full xl:hidden">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent className="mx-auto">
                        {items.map((e) => (
                            <CarouselItem
                                key={e.title}
                                className="flex items-center justify-center p-8 pt-0"
                            >
                                <article className="flex select-none flex-col items-center justify-center gap-y-4 rounded-3xl bg-[#F8F8F8] p-8 text-center shadow-xl lg:items-start lg:gap-y-5 lg:p-14 lg:text-start">
                                    <div className="flex items-center justify-center text-7xl">
                                        {e.img}
                                    </div>
                                    <h3 className="text-2xl font-bold lg:text-4.5xl">
                                        {e.title}
                                    </h3>
                                    <p className="text-grayText lg:text-lg">
                                        {e.text}
                                    </p>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <SliderButtons
                        itemCount={items.length}
                        className="mt-0"
                        api={api}
                    />
                </Carousel>
            </div>
        </>
    )
}
