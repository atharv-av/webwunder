'use client'

import { AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/transitions/fade-in'
import { useEffect, useMemo, useState } from 'react'

import Package from './package'
import { cn } from '@/lib/utils'
import { PlanDetails, Plans } from '@/data/plans'
import PillSelect from '@/components/common/pill-select'
import { useHomeContext } from '@/providers/home'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import SliderButtons from '@/components/common/slider-buttons'

export default function Membership(
    props: Props & { pillSelectClassName?: string; packageClassName?: string },
) {
    const homeCtx = useHomeContext()
    const selectPackage = () => {
        return homeCtx.plan.value === 'website'
            ? 0
            : homeCtx.plan.value === 'service'
              ? 1
              : homeCtx.plan.value === 'unlimited'
                ? 2
                : 0
    }

    const [selected, setSelected] = useState(selectPackage())

    useEffect(() => {
        setSelected(selectPackage())
    }, [homeCtx.plan.value])

    const content = useMemo<PlanDetails[]>(() => {
        switch (selected) {
            case 0:
                return [Plans['website-standard'], Plans['website-pro']]

            case 1:
                return [Plans['service-standard'], Plans['service-pro']]

            case 2:
                return [Plans['unlimited-pro']]

            default:
                return []
        }
    }, [selected])

    const items = [
        { title: 'Website Plan' },
        { title: 'Service Pack' },
        { title: 'Unlimited Pack' },
    ]
    const [api, setApi] = useState<CarouselApi>()

    return (
        <div className={props.className}>
            <div>
                <PillSelect
                    className={cn(
                        'mb-8 flex justify-center',
                        props.pillSelectClassName,
                    )}
                    items={items}
                    selected={selected}
                    onSelect={(e) => {
                        setSelected(e)
                        homeCtx.plan.set(
                            e === 0
                                ? 'website'
                                : e === 1
                                  ? 'service'
                                  : e === 2
                                    ? 'unlimited'
                                    : 'website',
                        )
                    }}
                />
            </div>
            <AnimatePresence mode="wait">
                <FadeIn key={content[0].title} id={content[0].title}>
                    <div className="flex justify-center xl:grid xl:gap-8 xl:grid-cols-12">
                        {content.length > 1 ? (
                            <>
                                <Package
                                    className="col-span-6 hidden xl:flex"
                                    content={content[0]}
                                />
                                <Package
                                    className="col-span-6 hidden xl:flex"
                                    content={content[1]}
                                    dark
                                    bestOffer
                                />

                                <Carousel
                                    setApi={setApi}
                                    opts={{
                                        loop: true,
                                    }}
                                    className="w-full max-w-[92vw] xl:hidden"
                                >
                                    <CarouselContent>
                                        <CarouselItem>
                                            <Package
                                                className="col-span-6 shadow-none"
                                                content={content[0]}
                                            />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <Package
                                                className="col-span-6 shadow-none"
                                                content={content[1]}
                                                dark
                                                bestOffer
                                            />
                                        </CarouselItem>
                                    </CarouselContent>
                                    <SliderButtons
                                        itemCount={2}
                                        bars
                                        selectedBarColor="bg-primary"
                                        barColor="bg-[#D9D9D9]"
                                        className="mt-4"
                                        api={api}
                                    />
                                </Carousel>
                            </>
                        ) : content.length === 1 ? (
                            <Package
                                className={cn(
                                    'col-span-6',
                                    props.packageClassName,
                                )}
                                content={content[0]}
                                dark
                                bestOffer
                            />
                        ) : null}
                    </div>
                </FadeIn>
            </AnimatePresence>
        </div>
    )
}
