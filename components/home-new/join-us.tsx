'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Slider from './Slider'
import { languageData } from '@/langauge'

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
}) => {
    return (
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
}

const JoinUs: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])

    const [items] = useState<CarouselItem[]>([
        {
            id: 1,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[0].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[0]
                    .description,
        },
        {
            id: 2,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[1].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[1]
                    .description,
        },
        {
            id: 3,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[2].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[2]
                    .description,
        },
        {
            id: 4,
            icon: '/images/home/join-us/join-us-icon-4.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[3].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[3]
                    .description,
        },
        {
            id: 5,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[4].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[4]
                    .description,
        },
        {
            id: 6,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[5].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[5]
                    .description,
        },
    ])

    const carouselRef = useRef<HTMLDivElement>(null)

    const nextSlide = useCallback(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: 'smooth',
            })
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1,
        )
    }, [items.length])

    const prevSlide = useCallback(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: 'smooth',
            })
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1,
        )
    }, [items.length])

    const goToSlide = (index: number) => {
        if (carouselRef.current) {
            const scrollPosition = index * carouselRef.current.offsetWidth
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            })
        }
        setCurrentIndex(index)
    }

    const [imageWidth, setImageWidth] = useState(900)

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth

            // Define breakpoints at intervals of 100px
            if (windowWidth >= 1536) {
                setImageWidth(windowWidth * 0.4) // For 1536px and above
            } else if (windowWidth >= 1400) {
                setImageWidth(windowWidth * 0.65) // For 1400px to 1535px
            } else if (windowWidth >= 1300) {
                setImageWidth(windowWidth * 0.8) // For 1300px to 1399px
            } else if (windowWidth >= 1200) {
                setImageWidth(windowWidth * 1.2) // For 1200px to 1299px
            } else if (windowWidth >= 1100) {
                setImageWidth(windowWidth * 1.3) // For 1100px to 1199px
            } else if (windowWidth >= 1024) {
                setImageWidth(windowWidth * 1.4) // For 1024px to 1099px
            } else if (windowWidth >= 900) {
                setImageWidth(windowWidth * 0.5) // For 900px to 1023px
            } else {
                setImageWidth(900) // Default or fallback width
            }
        }

        // Call the function on mount and when window is resized
        window.addEventListener('resize', handleResize)
        handleResize() // Call it once to set the initial width

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="flex h-fit flex-col items-center justify-center gap-5 bg-[#020202] text-white lg:pt-16">
            <Slider />
            <div className="-mt-20 flex w-full scale-90 flex-col items-center justify-between px-4 lg:mt-0 lg:flex-row lg:gap-20 2xl:gap-0 2xl:px-28">
                <div className="flex flex-col items-center gap-4 lg:hidden">
                    <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal">
                        {
                            languageData?.joinUsSection?.[changeLanguage]?.steps
                                ?.cta
                        }
                    </Badge>
                    <p className="text-center font-archivo text-[25px] font-bold leading-none text-white">
                        {
                            languageData?.joinUsSection?.[changeLanguage]?.steps
                                ?.title
                        }
                    </p>
                    <p className="mb-5 mt-0 text-center font-archivo text-sm font-normal text-white/50 lg:w-1/2">
                        {
                            languageData?.joinUsSection?.[changeLanguage]?.steps
                                ?.description
                        }
                    </p>
                    <div className="flex max-w-xl flex-col items-start rounded-lg">
                        <TimelineStep
                            number={1}
                            title={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.title
                            }
                            description={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.description
                            }
                            timeCommitment={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.time
                            }
                        />
                        <TimelineStep
                            number={2}
                            title={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.title
                            }
                            description={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.description
                            }
                            timeCommitment={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.time
                            }
                        />
                        <TimelineStep
                            number={3}
                            title={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.title
                            }
                            description={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.description
                            }
                            timeCommitment={
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.steps[0]?.time
                            }
                        />
                    </div>
                </div>

                <Image
                    src="/images/home/join-us/three-steps-bg.png"
                    alt="Three steps"
                    height={800}
                    width={imageWidth}
                />

                <div className="flex flex-col items-center lg:items-center lg:justify-between">
                    <div
                        className={`hidden flex-col items-start gap-4 lg:flex lg:w-11/12 ${changeLanguage === 'de' ? '2xl:w-3/4' : '2xl:w-1/2'}`}
                    >
                        <Badge className="w-fit self-start bg-[#5D59E1] font-archivo text-sm font-normal">
                            {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.cta
                            }
                        </Badge>
                        <p className="font-archivo text-[45px] font-bold leading-none text-white">
                            {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.title
                            }
                        </p>
                        <p className="mb-5 mt-0 font-archivo text-base font-normal text-white/50">
                            {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.steps?.description
                            }
                        </p>
                        <div className="flex max-w-xl 2xl:max-w-3xl flex-col items-start rounded-lg">
                            <TimelineStep
                                number={1}
                                title={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.title
                                }
                                description={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.description
                                }
                                timeCommitment={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.time
                                }
                            />
                            <TimelineStep
                                number={2}
                                title={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.title
                                }
                                description={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.description
                                }
                                timeCommitment={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.time
                                }
                            />
                            <TimelineStep
                                number={3}
                                title={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.title
                                }
                                description={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.description
                                }
                                timeCommitment={
                                    languageData?.joinUsSection?.[
                                        changeLanguage
                                    ]?.steps?.steps[0]?.time
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    ;<style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
    `}</style>
}

export default JoinUs
