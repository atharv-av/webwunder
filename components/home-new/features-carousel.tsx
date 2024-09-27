'use client'

import React, { useEffect, useState, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { languageData } from '@/langauge'

interface CarouselProps {
    bgColor: string
    tiltAngle: string
    carouselTextColor: string
}

interface CarouselItemProps {
    item: string
    textColor: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, textColor }) => (
    <p
        className={`md:mx-3 -mx-3 w-fit px-4 font-archivo text-sm font-bold lg:text-xl ${textColor}`}
    >
        {item}
    </p>
)

const FeaturesCarousel: React.FC<CarouselProps> = ({
    bgColor,
    tiltAngle,
    carouselTextColor,
}) => {
    const [position, setPosition] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current
        const content = contentRef.current
        if (!container || !content) return

        const totalWidth = content.scrollWidth / 2

        const animateCarousel = () => {
            setPosition((prevPosition) => {
                const newPosition = prevPosition + 1
                return newPosition >= totalWidth ? 0 : newPosition
            })
        }

        const intervalId = setInterval(animateCarousel, 20)

        return () => clearInterval(intervalId)
    }, [])
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang') as 'de' | 'en'
        if (storedLang) {
            setChangeLanguage(storedLang) // Set state from localStorage after component mounts
        }
    }
}, [])

const carouselItems: string[] = languageData?.services?.[changeLanguage];


    return (
        <div
            className="relative bottom-16 z-20 mt-20 h-16 overflow-hidden shadow-xl lg:h-20"
            style={{ transform: `${tiltAngle}` }}
            ref={containerRef}
        >
            <div
                className={`flex h-full w-full items-center justify-center ${bgColor}`}
            >
                <Marquee className="w-full" speed={50} gradient={false}>
                    <div className="flex flex-row items-center justify-center gap-x-12">
                        {carouselItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                item={item}
                                textColor={carouselTextColor}
                            />
                        ))}
                        {/* Duplicating the content to avoid gaps */}
                        {carouselItems.map((item, index) => (
                            <CarouselItem
                                key={`duplicate-${index}`}
                                item={item}
                                textColor={carouselTextColor}
                            />
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* <div
                ref={contentRef}
                className={flex h-full w-fit flex-row items-center lg:gap-20 gap-10 whitespace-nowrap ${bgColor}}
                style={{
                    transform: translateX(-${position}px),
                }}
            >
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} item={item} textColor={carouselTextColor} />
                ))}
                {carouselItems.map((item, index) => (
                    <CarouselItem
                        key={duplicate-${index}}
                        item={item}
                        textColor={carouselTextColor}
                    />
                ))}
            </div> */}
        </div>
    )
}

export default FeaturesCarousel
