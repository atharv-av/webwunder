import React from 'react'
import Header from '../layout/home-template-new/header'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'

const HomeLanding = () => {
    return (
        <div className="bg-white lg:p-5">
            <div className="relative min-h-screen overflow-hidden lg:rounded-t-lg">
                <div className="absolute inset-0 flex bg-[url('/images/home/hero/hero-img-bg.png')] bg-cover bg-center bg-no-repeat lg:hidden"></div>
                <div className="inset-0 hidden min-h-screen bg-cover bg-center bg-no-repeat lg:absolute lg:flex lg:bg-[url('/images/home/hero/hero-main-bg.png')]"></div>
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative bottom-48 flex h-screen flex-col items-center justify-center gap-6 px-4 sm:bottom-52 sm:px-4 md:bottom-32 md:px-0 lg:bottom-48 lg:gap-2">
                    <Badge className="rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                        Rock-Solid Business Growth
                    </Badge>
                    <div>
                        <p className="text-center font-archivo text-[40px] font-bold leading-none text-white lg:text-[48px]">
                            Winning Websites
                        </p>
                        <p className="text-center font-archivo text-[35px] font-bold leading-none text-[#9DFF50] lg:text-[35px]">
                            Unshakable Support
                        </p>
                    </div>
                    <div>
                        <p className="text-center font-archivo text-base font-bold text-white lg:text-lg">
                            Websites by Entrepreneurs for Entrepreneurs
                        </p>
                        <p className="text-center font-archivo text-sm font-normal text-white lg:text-base">
                            Proven to Boost Sales and Cut Costs.
                        </p>
                    </div>
                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                        <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                Watch Video
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
                    <p className="relative top-2 text-center font-archivo text-base font-bold text-white sm:top-3 lg:text-xl">
                        Hundreds of perfect projects delivered to hundreds of
                        thrilled customers.
                    </p>
                    <div className="absolute top-[50rem] block w-screen md:top-[44rem] lg:hidden">
                        <Image
                            // className="block lg:hidden"
                            src="/images/home/hero/hero-small-bg.png"
                            alt="Hero Background"
                            width={1000}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding
