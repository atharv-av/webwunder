import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { HeroCardsLeft, HeroCardsRight } from './hero-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FeaturesCarousel from './features-carousel'

const StayOnTop = () => {
    return (
        <div className="flex flex-col items-center gap-6 bg-black py-10 lg:pb-10 lg:pt-20">
            <div className="flex flex-col items-center gap-4">
                <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                    Stay On Top
                </Badge>
                <p className="mb-4 w-5/6 text-center font-dm-sans text-[30px] font-bold leading-none text-white lg:text-[40px]">
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
            <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row">
                <div className="flex">
                    <Image
                        className="absolute bottom-[38rem] right-80 lg:bottom-[35rem] lg:left-64 xl:top-5"
                        src="/images/home/stay-on-top/icon-3.png"
                        alt="Unlimited Design"
                        width={75.56}
                        height={79.07}
                    />
                    <Image
                        className="xl: absolute left-[22rem] lg:bottom-[39rem] lg:left-[74rem]"
                        src="/images/home/stay-on-top/icon-5.png"
                        alt="Unlimited Design"
                        width={45}
                        height={30}
                    />
                    <Image
                        className="absolute right-80 top-[26rem] lg:left-20 lg:top-[31rem] xl:left-20 xl:top-96"
                        src="/images/home/stay-on-top/icon-1.png"
                        alt="Unlimited Design"
                        width={76}
                        height={79}
                    />
                    <Image
                        className="xl: absolute right-14 top-[22rem] self-end lg:bottom-20 lg:left-[32rem]"
                        src="/images/home/stay-on-top/icon-4.png"
                        alt="Unlimited Design"
                        width={32.26}
                        height={33.76}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-4 lg:relative lg:left-28 lg:items-start lg:gap-2">
                        <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                            Endless Creativity
                        </Badge>
                        <p className="font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px]">
                            Unlimited Design
                        </p>
                        <p className="w-11/12 text-center font-archivo text-[13px] font-normal text-white/50 lg:w-full lg:text-start lg:text-base">
                            We&apos;ve created the Unlimited Design Package for
                            businesses that just can&apos;t get enough of our
                            exceptional design work. With limited spots
                            available, this exclusive package offers unlimited
                            requests, fast delivery, and 100% design ownership.
                            Interested? Let&apos;s talk!
                        </p>
                        <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                            <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                                <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                    See Plans
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </div>
                            </button>

                            <button className="w-fit rounded-full bg-white px-3 py-2 font-archivo text-sm font-medium lg:py-3">
                                <Link
                                    href="#"
                                    className="flex flex-row items-center justify-between gap-4"
                                >
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                        Book a call
                                    </p>
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <Image
                    className="block w-full max-w-full lg:w-auto" // Ensure image responsiveness
                    src="/images/home/stay-on-top/unlimited-design-img.png"
                    alt="Unlimited Design"
                    width={800}
                    height={500}
                    sizes="(min-width: 1023px) 800px, (min-width: 1439px) 1200px, 1200px"
                    priority
                />
            </div>
            <div className="w-full">
                <FeaturesCarousel
                    bgColor="bg-[#FB421F]"
                    tiltAngle="rotate(-0.97deg)"
                    carouselTextColor="text-white"
                />
            </div>
        </div>
    )
}

export default StayOnTop
