'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Slider from './Slider'
import {languageData} from '@/langauge'
import axios from 'axios';
interface CarouselItem {
    id: number
    icon: string
    title: string
    content: string
}

interface TimelineStepProps {
    number: number
    title: string
    description: string
    timeCommitment: string
}

const TimelineStep: React.FC<TimelineStepProps> = ({
    number,
    title,
    description,
    timeCommitment,
}) => (
    <div className="flex">
        <div className="mr-4 flex flex-col items-center">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white"></div>
            {number < 3 && (
                <div className="h-full border-l-2 border-dashed border-white"></div>
            )}
        </div>
        <div className="flex flex-col gap-2 pb-8">
            <p className="font-archivo text-base font-bold leading-none text-[#9DFF50]">
                Step {number}
            </p>
            <h3 className="font-archivo text-[25px] font-bold text-white">
                {title}
            </h3>
            <p className="font-archivo text-sm font-normal text-white/50">
                {description}
            </p>
            <p className="font-archivo text-sm font-bold text-[#9DFF50]">
                Time commitment: {timeCommitment}
            </p>
        </div>
    </div>
)

const JoinUs: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [items] = useState<CarouselItem[]>([
        {
            id: 1,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'No More Negotiations, No Surprises',
            content:
                'We keep it simple—what you see in your plan is what you pay. No hidden fees, no upsells, just consistent, top-tier service. Cancel anytime.',
        },
        {
            id: 2,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: 'Excellence in Custom Web Design',
            content:
                'Get a custom, powerhouse website with minimal effort—no templates, ensuring 100% unique designs and functionality.',
        },
        {
            id: 3,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'Effortless Updates Anytime, Anywhere',
            content:
                'Need changes? Email us from any device, and we’ll handle the rest. Our streamlined process makes updates seamless and stress-free.',
        },
        {
            id: 4,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: '24/7 Support and Maintenance',
            content:
                'Our dedicated support team is always ready to assist you with any issues or questions.',
        },
        {
            id: 5,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'Effortless Updates Anytime, Anywhere',
            content:
                'Need changes? Email us from any device, and we’ll handle the rest. Our streamlined process makes updates seamless and stress-free.',
        },
    ])

    const carouselRef = useRef<HTMLDivElement>(null)

    const nextSlide = useCallback(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' })
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1,
        )
    }, [items.length])

    const prevSlide = useCallback(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' })
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1,
        )
    }, [items.length])

    const goToSlide = (index: number) => {
        if (carouselRef.current) {
            const scrollPosition = index * carouselRef.current.offsetWidth
            carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' })
        }
        setCurrentIndex(index)
    }
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
        detectUserLanguage();
      }, []);
    return (
        <div className="flex h-fit flex-col items-center justify-center gap-5 bg-[#020202] pt-16 text-white">
            <Slider/>
            <div className="mt-5 flex w-full px-4 flex-col items-center justify-between lg:gap-20 gap-8 lg:flex-row">
                <div className="flex flex-col items-center gap-4 lg:hidden">
                    <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal">
                    {/* {languageData?.joinUsSection?.[changeLanguage]?.} */}

                    </Badge>
                    <p className="text-center font-archivo text-[25px] font-bold leading-none text-white">
                        Get Your Website in <br /> Three Easy Steps
                    </p>
                    <p className="mb-5 mt-0 text-center font-archivo text-sm font-normal text-white/50">
                        Hate meetings? Us too—that&apos;s why we&apos;ve
                        minimized them. In under an hour of your valuable time,
                        we help successful businesses become even more
                        successful. Here&apos;s how it works:
                    </p>
                    <div className="flex max-w-xl flex-col items-start rounded-lg">
                        <TimelineStep
                            number={1}
                            title="Book A Call"
                            description="A quick 15-minute chat to understand your needs and pick the perfect plan."
                            timeCommitment="15 minutes."
                        />
                        <TimelineStep
                            number={2}
                            title="Design & Content"
                            description="Share your content ideas, or let us help craft them. We'll handle everything and send it to you for final approval."
                            timeCommitment="15 minutes."
                        />
                        <TimelineStep
                            number={3}
                            title="Launch Your Site"
                            description="We turn your vision into reality and get your website live, ready to dominate the market."
                            timeCommitment="15 minutes."
                        />
                    </div>
                </div>
                <Image
                    src="/images/home/join-us/three-steps-bg.png"
                    alt="Three steps"
                    width={1000}
                    height={1000}
                />
                <div className="flex flex-col items-center justify-between lg:items-center">
                    <div className="hidden w-3/4 flex-col gap-4 lg:flex">
                        <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal">
                            Three Steps
                        </Badge>
                        <p className="font-archivo text-[45px] font-bold leading-none text-white">
                            Get Your Website in Three Easy Steps
                        </p>
                        <p className="mb-5 mt-0 font-archivo text-base font-normal text-white/50">
                            Hate meetings? Us too—that&apos;s why we&apos;ve
                            minimized them. In under an hour of your valuable
                            time, we help successful businesses become even more
                            successful. Here&apos;s how it works:
                        </p>
                        <div className="flex max-w-xl flex-col items-start rounded-lg">
                            <TimelineStep
                                number={1}
                                title="Book A Call"
                                description="A quick 15-minute chat to understand your needs and pick the perfect plan."
                                timeCommitment="15 minutes."
                            />
                            <TimelineStep
                                number={2}
                                title="Design & Content"
                                description="Share your content ideas, or let us help craft them. We'll handle everything and send it to you for final approval."
                                timeCommitment="15 minutes."
                            />
                            <TimelineStep
                                number={3}
                                title="Launch Your Site"
                                description="We turn your vision into reality and get your website live, ready to dominate the market."
                                timeCommitment="15 minutes."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
}

export default JoinUs