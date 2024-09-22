'use client'
import React, { useState, useEffect } from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MainCard from './card-main'
import { motion } from 'framer-motion'
import { gsap, ScrollTrigger } from 'gsap/all'

const mainItems = [
    {
        cardWidth: 'lg:w-[700px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-1.png',
        smallImage: "/images/home/why-webwunder/why-webwunder-1-small.png",
        imgWidth: 700,
        title: 'Boost Revenue with Strategic, Conversion-Optimized Solutions',
        description:
            'Turn visitors into loyal customers with designs that drive lasting success.',
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-2.png',
        imgWidth: 350,
        title: 'Purpose-Driven Design',
        description:
            'Our strategic designs empower your brand to command premium pricing and boost profitability.',
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-3.png',
        imgWidth: 350,
        title: 'All-Inclusive Services for Design, SEO, and Continuous Optimization',
        description:
            "From design to SEO, content creation, and AI-driven updates, we take care of everything—so you don't have to.",
    },
    {
        cardWidth: 'lg:w-[350px] w-full',
        image: '/images/home/why-webwunder/why-webwunder-4.png',
        imgWidth: 350,
        title: 'Cost-Effective Solution That Streamlines Lead Generation',
        description:
            'Streamline your customer journey, attract qualified leads, and save valuable time with efficient communication.',
    },
    {
        cardWidth: 'lg:w-[350px] w-fit',
        image: '/images/home/why-webwunder/why-webwunder-5.png',
        imgWidth: 350,
        title: 'Tailored Marketing Support to Enhance Brand Visibility and Growth',
        description:
            'Comprehensive support, covering everything from branding to social media, guarantees your business stands out and grows.',
    },
]

// Container and Item Animations
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const WhyWebWunder = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }


    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Select all words in the text
        const words = document.querySelectorAll('.word');

        // Create a timeline for scroll-triggered animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.animated-text', // The container for the text
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


    useEffect(() => {
        // Register GSAP plugins
    
        // Get all heading elements you want to animate
        const upperdiv = document.querySelectorAll('.upperdiv');

        // Set a timeout to delay the animation
        const timeoutId = setTimeout(() => {
            // Animate each letter into view
            gsap.from(upperdiv, {
                height: 0, // Start 30px below

                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: upperdiv, // The container for the text
                    start: 'top 75%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                    // markers: true, // Enable markers for debugging (optional)
                },
            });
        }, 300); // Delay of 300ms

        return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }, []);
    
    useEffect(() => {
        // Register GSAP plugins
       

        // Get all heading elements you want to animate
        const lowerrdiv = document.querySelectorAll('.lowerrdiv');

        // Set a timeout to delay the animation
        const timeoutId = setTimeout(() => {
            // Animate each letter into view
            gsap.from(lowerrdiv, {
                height: 0, // Start 30px below

                duration: 1,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ".trig", // The container for the text
                    start: 'top 30%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom -50%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                    // markers: true, // Enable markers for debugging (optional)
                },
            });
        }, 300); // Delay of 300ms

        return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }, []);


    return (
        <div className="my-10 flex flex-col items-center justify-center gap-6 px-4">
            {/* Heading */}
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge data-aos="fade-up" className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal text-white">
                    Designed to Dominate
                </Badge>
                <div className="flex flex-col items-center leading-none animated-text">
                    {/* Split text into individual words */}
                    <p className="font-archivo text-[32px] font-bold text-zinc-400 md:text-[45px]">
                        <span className="word">Why</span> <span className="word">WebWunder?</span> <br />
                        <span className="word">We</span> <span className="word">Make</span> <span className="word">it</span> <span className="word">Clear.</span>
                    </p>
                </div>
                <p className="font-archivo text-sm font-normal text-black/50 md:text-base">
                    Your business deserves more than just a website—it deserves
                    a game-changer.
                </p>

                {/* Buttons */}
                <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                    <button className="flex  hover:scale-95 transition-all  w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                        <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                            Explore Plans
                        </p>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                            <ArrowRight
                                size={18}
                                fontWeight={100}
                                className="text-[#24252A]"
                            />
                        </div>
                    </button>
                    <button className="flex border  hover:scale-95 transition-all  w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
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
            </div>


            <div
                style={{
                    backgroundImage:
                        'url("/images/home/why-webwunder/why-webwunder-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="w-full h-full lg:min-h-screen"
            >
                {isSmallScreen ? (
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {mainItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full items  flex-shrink-0"


                                    >
                                        <MainCard
                                            cardWidth="w-full"
                                            image={item.image}
                                            smallImage={item.smallImage}
                                            imgWidth={item.imgWidth}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-2">
                            {mainItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`h-1 w-16 rounded-full transition-colors ${currentSlide === index
                                        ? 'bg-[#5D59E1]'
                                        : 'bg-[#D9D9D9]'
                                        }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div
                        className="flex flex-wrap justify-center gap-16 lg:gap-4"


                    >
                        {/* First row - 2 items */}
                        <div className="flex w-full h-full flex-wrap justify-center gap-16 lg:gap-4">
                            {mainItems.slice(0, 2).map((item, index) => (
                                <div key={index} className='upperdiv trig'>
                                    <MainCard
                                        cardWidth={item.cardWidth}
                                        image={item.image}
                                        imgWidth={item.imgWidth}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Second row - 3 items */}
                        <div className="flex w-full flex-wrap justify-center gap-16 lg:gap-4">
                            {mainItems.slice(2).map((item, index) => (
                                <div key={index} className='lowerrdiv rounded-xl'>
                                    <MainCard
                                        cardWidth={item.cardWidth}
                                        image={item.image}
                                        imgWidth={item.imgWidth}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhyWebWunder
