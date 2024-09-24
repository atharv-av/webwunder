"use client"
import React, { useEffect } from 'react'
import Header from '../layout/home-template-new/header'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import FeaturesCarousel from './features-carousel'
import { gsap, ScrollTrigger } from 'gsap/all'
const AllInOne = () => {


    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Select all words in the text
        const words = document.querySelectorAll('.word2');

        // Create a timeline for scroll-triggered animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.animated-text2', // The container for the text
                start: 'top 75%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 1, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });

        // Animate each word individually
        words.forEach((word, index) => {
            tl.to(word, {
                color: '#24252A', // Change to black
                duration: 1,
                ease: 'none',
                stagger: {
                    amount: 0.5, // Delay between each word's animation
                    from: "start", // Start from the first word
                },
            }, index * 0.2); // Stagger start time for each word
        });
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#e8e8e6] to-[#4c4a4b]">
            <div className="lg:min-h-screen lg:pt-10">
                <FeaturesCarousel
                    bgColor="bg-[#CAFF00]"
                    tiltAngle="rotate(0.97deg)"
                    carouselTextColor="text-[#171411]"
                />
           
                <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center pt-12 gap-4">
                    <Badge data-aos="fade-up" className="rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                        All-in-one Agency
                    </Badge>
                    <div className='animated-text2 flex flex-col items-center leading-none'>

                        <p className="w-4/5 text-center font-archivo text-[25px] font-bold leading-none lg:text-zinc-400 text-zinc-800 lg:w-3/5 lg:text-[45px] animated-text-1">
                        <span className="word2">With</span>   <span className="word2">WebWunder,</span> <span className="word2">You&apos;ll</span> <span className="word2">Never</span> <span className="word2">Need</span> <span className="word2">Another</span> <span className="word2">Agency.</span> <span className="word2">Ever.</span>
                        </p>
                    </div>

                    <p className="text-center font-archivo text-sm font-normal text-black px-4 lg:w-[65%] lg:text-base">
                        Our comprehensive, all-in-one solution that addresses
                        every facet of your digital presence, from website
                        design to marketing strategies, ensuring you&apos;ll
                        never need to rely on another agency again. We handle it
                        all, so you can focus on growing your business with
                        confidence.
                    </p>

                    <div className="flex items-center justify-center gap-3 sm:gap-5">
                        <button className="flex  hover:scale-95 transition-all  w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                Explore Plans
                            </p>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fbfbfb] lg:h-8 lg:w-8">
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </div>
                        </button>
                        <button className="flex w-fit  hover:scale-95 transition-all  flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
                            <Link
                                href="#"
                                className="flex flex-row items-center justify-between gap-4"
                            >
                                <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    Book a call
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#ffffff]"
                                />
                            </div>
                            </Link>
                        </button>
                    </div>
                    <div className=" mt-8 translate-y-8">
                        <Image
                        className=''
                            src="/images/home/all-in-one/allInOne.png"
                            alt="All in one agency"
                            width={5000}
                            height={5000}
                        />
                    </div>
                    {/* Todo - Add animation in images */}
                </div>
            </div>
        </div>
    )
}

export default AllInOne
