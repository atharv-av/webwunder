import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { HeroCardsLeft, HeroCardsRight } from './hero-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FeaturesCarousel from './features-carousel'

const StayOnTop = () => {
    return (
        <div className="flex flex-col items-center gap-6 bg-black py-20">
            <div className="flex flex-col items-center gap-4">
                <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                    Stay On Top
                </Badge>
                <p className="mb-4 w-5/6 text-center font-dm-sans text-[40px] font-bold leading-none text-white">
                    “WebWunder pushes Figma to its limits, delivering unique
                    designs that keep you ahead—stress-free.”
                </p>
                <Image
                    src="/images/home/stay-on-top/figma.png"
                    alt="Figma"
                    width={100}
                    height={25}
                />
            </div>
            <div className="mt-10">
                <HeroCardsRight />
                <HeroCardsLeft />
            </div>
            <div className="flex items-center justify-between gap-12">
                <div className="ml-24 flex flex-col">
                    <Image
                        src="/images/home/stay-on-top/icon-3.png"
                        alt="Umlimited Design"
                        width={75.56}
                        height={79.07}
                    />
                    <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                            Endless Creativity
                        </Badge>
                        <p className="font-archivo text-[45px] font-bold leading-none text-white">
                            Unlimited Design
                        </p>
                        <p className="font-archivo text-base font-normal text-white/50">
                            We&apos;ve created the Unlimited Design Package for
                            businesses that just can&apos;t get enough of our
                            exceptional design work. With limited spots
                            available, this exclusive package offers unlimited
                            requests, fast delivery, and 100% design ownership.
                            Interested? Let&apos;s talk!
                        </p>
                        <div className="flex items-center justify-center gap-3 sm:gap-5">
                            <Button
                                size={'base'}
                                className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#24252A] px-4 py-5 sm:gap-4 sm:p-4"
                            >
                                <p className="font-archivo text-xs font-normal text-white sm:text-sm">
                                    See Plans
                                </p>
                                <ArrowRight
                                    size={20}
                                    className="sm:size-27 rounded-full bg-white p-1 text-black"
                                />
                            </Button>
                            <Button
                                size={'sm'}
                                className="gap-2 rounded-full bg-white px-4 py-5 font-archivo text-sm font-medium sm:gap-3 sm:p-5 lg:flex"
                                asChild
                            >
                                <Link href="#">
                                    <p className="font-inter text-xs sm:text-sm">
                                        Book a call
                                    </p>
                                    <ArrowRight
                                        size={16}
                                        className="font-light text-black"
                                    />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex h-40 w-full flex-col justify-between">
                        <Image
                            src="/images/home/stay-on-top/icon-1.png"
                            alt="Umlimited Design"
                            width={76}
                            height={79}
                        />
                        <Image
                            className="self-end"
                            src="/images/home/stay-on-top/icon-4.png"
                            alt="Umlimited Design"
                            width={32.26}
                            height={33.76}
                        />
                    </div>
                </div>
                <Image
                    src="/images/home/stay-on-top/unlimited-design-img.png"
                    alt="Unlimited Design"
                    width={750}
                    height={500}
                />
            </div>
            <FeaturesCarousel
                bgColor="bg-[#FB421F]"
                tiltAngle="rotate(-0.97deg)"
                carouselTextColor="text-white"
            />
        </div>
    )
}

export default StayOnTop
