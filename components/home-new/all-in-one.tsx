import React from 'react'
import Header from '../layout/home-template-new/header'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import FeaturesCarousel from './features-carousel'

const AllInOne = () => {
    return (
        <div className="bg-white">
            <div className="relative mt-28 min-h-screen pt-10">
                <FeaturesCarousel
                    bgColor="bg-[#CAFF00]"
                    tiltAngle="rotate(0.97deg)"
                    carouselTextColor="text-[#171411]"
                />
                <div className="absolute inset-0 flex min-h-screen bg-[url('/images/home/all-in-one/all-in-one-bg.png')] bg-cover bg-center"></div>
                <div className="relative bottom-48 flex h-screen flex-col items-center justify-center gap-2 px-4 sm:bottom-32 sm:px-4 md:bottom-32 md:px-0 lg:bottom-48">
                    <Badge className="rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white hover:text-black sm:text-sm">
                        All-in-one Agency
                    </Badge>

                    <p className="w-3/5 text-center font-archivo text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[42px]">
                        With WebWunder, You’ll Never Need Another Agency. Ever.
                    </p>

                    <p className="w-[70%] text-center font-archivo text-sm font-bold text-black/50 sm:text-base">
                        Our comprehensive, all-in-one solution that addresses
                        every facet of your digital presence, from website
                        design to marketing strategies, ensuring you’ll never
                        need to rely on another agency again. We handle it all,
                        so you can focus on growing your business with
                        confidence.
                    </p>

                    <div className="flex items-center justify-center gap-3 sm:gap-5">
                        <Button
                            size={'base'}
                            className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#24252A] px-4 py-3 sm:gap-4 sm:p-4"
                        >
                            <p className="font-archivo text-xs font-normal text-white sm:text-sm">
                                Explore Plans
                            </p>
                            <ArrowRight
                                size={20}
                                className="sm:size-27 rounded-full bg-white p-1 text-black"
                            />
                        </Button>
                        <Button
                            size={'sm'}
                            className="gap-2 rounded-full bg-white p-4 font-archivo text-sm font-medium sm:gap-3 sm:p-5 lg:flex"
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
                    {/* <Image
                    src="/images/home/all-in-one/all-in-one-main-2.png"
                    alt="ALl in one agency"
                    width={1000}
                    height={100}
                /> */}
                    {/* TODO - Add image here */}
                </div>
            </div>
        </div>
    )
}

export default AllInOne
