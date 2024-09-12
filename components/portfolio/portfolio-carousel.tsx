'use client'

import React, { useEffect, useState, useRef } from 'react';

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
];

interface CarouselItemProps {
    item: string;
    index: number | string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index }) => (
    <p 
        className="text-lg w-fit font-semibold text-white px-4" 
        key={index}
    >
        {item}
    </p>
);

const PortfolioCarousel: React.FC = () => {
    const [position, setPosition] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animateCarousel = () => {
            setPosition((prevPosition) => {
                const newPosition = prevPosition + 2; // Increased speed
                const maxPosition = container.scrollWidth / 2;
                return newPosition >= maxPosition ? 0 : newPosition;
            });
        };

        const intervalId = setInterval(animateCarousel, 16); // Faster interval

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative bottom-8 z-10 bg-white h-16" style={{ transform: 'rotate(-1.55deg)' }}>
            <div 
                ref={containerRef}
                className="flex h-full w-fit flex-row items-center gap-20 bg-[#5D59E1] whitespace-nowrap"
                style={{ 
                    transform: `translateX(-${position}px)`,
                    transition: 'transform 0.03s linear',
                }}
            >
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} item={item} index={index} />
                ))}
                {carouselItems.map((item, index) => (
                    <CarouselItem key={`duplicate-${index}`} item={item} index={`duplicate-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioCarousel;
