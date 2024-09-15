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

interface CarouselItemProps {
    item: string
    index: number | string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index }) => (
    <p
        className="w-fit px-4 font-archivo text-[20px] font-bold text-[#171411]"
        key={index}
    >
        {item}
    </p>
)

const FeaturesCarousel: React.FC = () => {
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

        const intervalId = setInterval(animateCarousel, 16) // Faster interval

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div
            className="relative bottom-8 z-10 h-16 bg-white"
            style={{ transform: 'rotate(0.97deg)' }}
        >
            <div
                ref={containerRef}
                className="flex h-full w-fit flex-row items-center gap-20 whitespace-nowrap bg-[#CAFF00]"
                style={{
                    transform: `translateX(-${position}px)`,
                    transition: 'transform 0.03s linear',
                }}
            >
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} item={item} index={index} />
                ))}
                {carouselItems.map((item, index) => (
                    <CarouselItem
                        key={`duplicate-${index}`}
                        item={item}
                        index={`duplicate-${index}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturesCarousel
