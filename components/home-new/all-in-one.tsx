"use client"
import React, { useEffect, useRef, useState } from 'react'
import Header from '../layout/home-template-new/header'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import FeaturesCarousel from './features-carousel'
import { gsap, ScrollTrigger } from 'gsap/all'
import { languageData } from '@/langauge'
const AllInOne = () => {

    const textSectionRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLImageElement>(null);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentageScrolled = (scrollPosition / documentHeight) * 100;
            setScrollPercent(percentageScrolled); // Corrected the setScrollPercent line

            console.log(percentageScrolled); // Log the correct value of percentageScrolled
            
            // Only start the parallax effect when scrolled 30% of the page
            if (percentageScrolled >= 20) {
                const adjustedScrollPosition = scrollPosition - (0.2 * documentHeight);
                
                if (textSectionRef.current) {
                    textSectionRef.current.style.transform = `translateY(${adjustedScrollPosition * 0.3}px`;
                }
                
                if (image1Ref.current) {
                    const adjustedScrollPercentage = (adjustedScrollPosition / (documentHeight * 0.7)); // Adjusted for the remaining 70%
                    const scale = 1 + adjustedScrollPercentage * 0.15; // Scale from 1 to 1.05
                    image1Ref.current.style.transform = `scale(${scale})`; // Adjusted transformation
                    image1Ref.current.style.transformOrigin = 'center bottom';
                }
            } else {
                // Reset transformations if scroll is less than 30%
                if (textSectionRef.current) {
                    textSectionRef.current.style.transform = 'none';
                }
                if (image1Ref.current) {
                    image1Ref.current.style.transform = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPercent]); // Added scrollPercent as dependency

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
            <div className="lg:min-h-[60vh] ">
                <FeaturesCarousel
                    bgColor="bg-[#CAFF00]"
                    tiltAngle="rotate(0.97deg)"
                    carouselTextColor="text-[#171411]"
                />
           
                <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center  gap-4">
                  <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-4" ref={textSectionRef}>
                        
                  <div className='lg:translate-y-20'>
                        <Badge data-aos="fade-up" className="rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                        {languageData?.allInOnePage?.[changeLanguage]?.title}                        </Badge>
                  </div>

                  <div className='lg:translate-y-20 animated-text2 flex flex-col items-center leading-none'>
                    <p className="w-4/5 text-center font-archivo text-[25px] font-bold leading-none lg:text-zinc-400 text-zinc-800 lg:w-3/5 lg:text-[45px] animated-text-1">
                    {languageData?.allInOnePage?.[changeLanguage]?.header}
                    </p>
                  </div>

                  <p className="lg:translate-y-20 text-center font-archivo text-sm font-normal text-black px-4 lg:w-[65%] lg:text-base">
                  {languageData?.allInOnePage?.[changeLanguage]?.description}                  </p>

                  <div className="lg:translate-y-20 flex items-center justify-center gap-3 sm:gap-5">
                    <button className="flex hover:scale-95 transition-all w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                        <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">{languageData?.allInOnePage?.[changeLanguage]?.explorePlans}</p>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fbfbfb] lg:h-8 lg:w-8">
                            <ArrowRight size={18} className="text-[#24252A]" />
                        </div>
                    </button>

                    <button className="flex w-fit hover:scale-95 transition-all flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
                        <Link href="#" className="flex flex-row items-center justify-between gap-4">
                            <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">{languageData?.allInOnePage?.[changeLanguage].getInTouch}</p>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                <ArrowRight size={18} className="text-[#ffffff]" />
                            </div>
                        </Link>
                    </button>
                  </div>

                  </div>
                  
                  <div className="lg:translate-y-[132px]">
                      <Image
                          ref={image1Ref}
                          src="/images/rock-group-image.png"
                          alt="All in one agency"
                          width={5000}
                          height={5000}
                      />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default AllInOne