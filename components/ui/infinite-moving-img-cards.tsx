'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import Image from 'next/image' // Import Image component from next/image

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        imageSrc: string
        altText: string
    }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])

    const [start, setStart] = useState(false)

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            // Duplicate the entire list to create the infinite scrolling effect
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            const animationDirection = direction === 'left' ? 'normal' : 'reverse'
            containerRef.current.style.setProperty(
                '--animation-direction',
                animationDirection,
            )
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            let duration
            switch (speed) {
                case 'fast':
                    duration = '40s'
                    break
                case 'normal':
                    duration = '60s'
                    break
                case 'slow':
                    duration = '80s'
                    break
                default:
                    duration = '20s'
            }
            containerRef.current.style.setProperty('--animation-duration', duration)
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 max-w-screen-3xl h-fit overflow-hidden md:scale-100',
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex w-max min-w-full shrink-0 flex-nowrap gap-4 pb-4',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 lg:w-[350px]"
                        key={idx}
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.altText}
                            width={350}
                            height={288}
                            className="rounded-2xl object-cover"
                        />
                    </li>
                ))}
                {/* Duplicate the list for infinite scrolling */}
                {items.map((item, idx) => (
                    <li
                        className="relative max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 lg:w-[350px]"
                        key={`duplicate-${idx}`}
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.altText}
                            width={350}
                            height={288}
                            className="rounded-2xl object-cover"
                        />
                    </li>
                ))}
            </ul>

            {/* CSS for Infinite Scroll Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 2)); /* Adjust based on the duplicated list */
                    }
                }

                .animate-scroll {
                    animation: scroll var(--animation-duration) linear infinite;
                    animation-direction: var(--animation-direction);
                }
            `}</style>
        </div>
    )
}