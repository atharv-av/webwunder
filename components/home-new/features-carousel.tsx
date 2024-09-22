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
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, textColor }) => (
    <p className={`w-fit px-4 font-archivo lg:text-xl text-sm font-bold ${textColor}`}>
        {item}
    </p>
)

const FeaturesCarousel: React.FC<CarouselProps> = ({bgColor, tiltAngle, carouselTextColor}) => {
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
                if (newPosition >= totalWidth) {
                    // Reset the position once it reaches the halfway point
                    return 0
                }
                return newPosition
            })
        }

        const intervalId = setInterval(animateCarousel, 20)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div
            className="relative shadow-xl bottom-16 z-20 lg:h-20 h-16 overflow-hidden"
            style={{ transform: `${tiltAngle}` }}
            ref={containerRef}
        >
            <div
                ref={contentRef}
                className={`flex h-full w-fit flex-row items-center lg:gap-20 gap-10 whitespace-nowrap ${bgColor}`}
                style={{
                    transform: `translateX(-${position}px)`,
                    transition: 'transform 0.03s linear', // Smooth transition
                }}
            >
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} item={item} textColor={carouselTextColor} />
                ))}
                {carouselItems.map((item, index) => (
                    <CarouselItem
                        key={`duplicate-${index}`}
                        item={item}
                        textColor={carouselTextColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturesCarousel
