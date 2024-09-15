import React from 'react'
import Header from '../layout/home-template-new/header'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const HomeLanding = () => {
    return (
        <div className="bg-white p-5">
            <div className="relative min-h-screen overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 flex min-h-screen bg-[url('/images/home/hero/hero-main-bg.png')] bg-cover bg-center"></div>
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative bottom-48 flex h-screen flex-col items-center justify-center gap-2 px-4 sm:bottom-32 sm:px-4 md:bottom-32 md:px-0 lg:bottom-48">
                    <div className="rounded-full bg-[#5D59E1] px-5 py-2 font-archivo text-xs font-light text-white sm:text-sm">
                        Rock-Solid Business Growth
                    </div>
                    <div>
                        <p className="text-center font-archivo text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[42px]">
                            Winning Websites
                        </p>
                        <p className="text-center font-archivo text-xl font-bold leading-tight text-[#9DFF50] sm:text-2xl md:text-[32px]">
                            Unshakable Support
                        </p>
                    </div>
                    <div>
                        <p className="text-center font-archivo text-sm font-bold text-white sm:text-base">
                            Websites by Entrepreneurs for Entrepreneurs
                        </p>
                        <p className="text-center font-archivo text-xs font-normal text-white sm:text-sm">
                            Proven to Boost Sales and Cut Costs.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-5">
                        <Button
                            size={'base'}
                            className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#24252A] py-3 px-4 sm:gap-4 sm:p-4"
                        >
                            <p className="font-archivo text-xs font-normal text-white sm:text-sm">
                                Explore Plans
                            </p>
                            <ArrowRight
                                size={20}
                                className="rounded-full bg-white p-1 text-black sm:size-27"
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
                    <p className="font-archivo text-center text-sm relative top-2 font-bold text-white sm:top-3 sm:text-lg">
                        Hundreds of perfect projects delivered to hundreds of
                        thrilled customers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding
