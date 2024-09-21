'use client'

import React, { useEffect, useState, useRef } from 'react'

const carouselItems: string[] = [
    'Web Design',
    'Graphic Design',
    'Video Editing',
    'Motion Graphics',
    'Web Development',
    'Branding',
    'SEO',
    'Digital Marketing',
    'Brochure',
]

interface CarouselProps {
    bgColor: string
    tiltAngle: string
    carouselTextColor: string
}

interface CarouselItemProps {
    item: string
    textColor: string
    index: number | string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, textColor, index }) => (
    <p
        className={`w-fit px-4 font-archivo lg:text-xl text-sm font-bold ${textColor}`}
        key={index}
    >
        {item}
    </p>
)

const FeaturesCarousel: React.FC<CarouselProps> = ({bgColor, tiltAngle, carouselTextColor}) => {
    const [position, setPosition] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const animateCarousel = () => {
            setPosition((prevPosition) => {
                const newPosition = prevPosition + 2 // Increased speed
                const maxPosition = container.scrollWidth / 2
                return newPosition >= maxPosition ? 0 : newPosition
            })
        }

        const intervalId = setInterval(animateCarousel, 16) // Faster interval - TODO fix carousel

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div
            className="relative shadow-xl bottom-16 z-20 lg:h-20 h-16 bg-transparent"
            style={{ transform: `${tiltAngle}` }}
        >
            <div
                ref={containerRef}
                className={`flex h-full w-fit flex-row items-center lg:gap-20 gap-10 whitespace-nowrap ${bgColor}`}
                style={{
                    transform: `translateX(-${position}px)`,
                    transition: 'transform 0.03s linear',
                }}
            >
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} item={item} index={index} textColor={carouselTextColor} />
                ))}
                {carouselItems.map((item, index) => (
                    <CarouselItem
                        key={`duplicate-${index}`}
                        item={item}
                        index={`duplicate-${index}`}
                        textColor={carouselTextColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturesCarousel
