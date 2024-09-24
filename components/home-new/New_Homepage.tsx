"use client"
import React, { useEffect, useState } from 'react';
import Header from '../layout/home-template-new/header';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { gsap } from 'gsap'
import AOS from "aos";
import "aos/dist/aos.css"
import {languageData} from '@/langauge'
import axios from 'axios';

const New_Homepage = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en');
    
    const detectUserLanguage = async () => {
        try {
          const response = await axios.get('https://ipapi.co/json/');
          const countryCode = response.data.country_code;
    
          const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH']; // Belgium, Germany, Austria, Switzerland
    
          if (germanSpeakingCountries.includes(countryCode)) {
            setChangeLanguage('de');
          } else {
            setChangeLanguage('en');
          }
        } catch (error) {
          console.error('Error fetching user location:', error);
          // Default to English if there's an error
          setChangeLanguage('en');
        }
      };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    useEffect(() => {
        detectUserLanguage();
      }, []);
    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin();

        // Get all heading elements you want to animate
        const headings = document.querySelectorAll('.heading span');

        // Set a timeout to delay the animation
        const timeoutId = setTimeout(() => {
            // Animate each letter into view
            gsap.from(headings, {
                y: 80, // Start 30px below

                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            });
        }, 300); // Delay of 300ms

        return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }, []);
    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block">{char}</span>
        ));
    };

    return (
        <div className='lg:min-h-screen h-full lg:p-5 bg-white'>
            <div className='bg-gradient-to-br from-[#393939] via-[#545455] to-[#323232] lg:rounded-t-xl'>

                <div className="relative z-10">
                    <Header />
                </div>

                <div className='flex justify-center flex-col items-center gap-4 max-w-6xl mx-auto pt-4'>
                    <Badge data-aos="fade-up" className="rounded-full w-fit bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                        
                    <h1>{languageData?.heroSection?.[changeLanguage]?.headline}</h1>
                    Rock-Solid Business Growth
                    </Badge>
      1              <div className='heading'>
                        <p className="text-center font-archivo  overflow-hidden text-[40px] font-bold leading-none text-white lg:text-7xl">
                            {splitText("Winning")} {"  "}{splitText("Websites")}
                        </p>
                        <p className="text-center font-archivo overflow-hidden text-[35px] font-bold leading-none text-[#9DFF50] lg:text-6xl">
                            {splitText("Unshakable")}  {"  "}  {splitText("Support")}
                        </p>
                    </div>
                    <div>
                        <p data-aos="fade-up" className="text-center font-archivo text-base font-bold text-white lg:text-lg">
                            Websites by Entrepreneurs for Entrepreneurs
                        </p>
                        <p data-aos="fade-up" className="text-center font-archivo text-sm font-normal text-white lg:text-base">
                            Proven to Boost Sales and Cut Costs.
                        </p>
                    </div>

                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">

                        <button className="flex hover:scale-95 transition-all w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                Watch Video
                            </p>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8">
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

                    <p className="relative toptrigger text-center font-archivo text-base font-bold text-white sm:top-3 lg:text-xl mb-6">
                        Hundreds of perfect projects delivered to hundreds of
                        thrilled customers.
                    </p>

                </div>
                <Image data-aos="fade-up" data-aos-duration="3000"
                    src="/images/home/hero/homebg.png"
                    alt="Figma"
                    className='w-screen hidden md:flex'
                    width={5000}
                    height={5000}
                />
                <Image data-aos="fade-up" data-aos-duration="3000"
                    src="/images/homebg2.png"
                    alt="Figma"
                    className='w-screen flex mt-6 md:hidden'
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    )
}

export default New_Homepage
