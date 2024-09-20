'use client'

import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        content: string
        writer: string
        rating: number // Changed to accept rating as a number
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
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse',
                )
            }
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s',
                )
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s',
                )
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                )}
            >
                {items.map((item, idx) => (
                    <li
                    className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-10 md:w-[500px]"
                    style={{
                        background:
                            'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                    }}
                    key={item.writer}
                >
                    <blockquote>
                        <div
                            aria-hidden="true"
                            className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] bg-[#191919] rounded-xl"
                        ></div>
                        <span className="font-figtree relative z-20 text-[22px] font-semibold leading-[1.6] text-white mb-1">
                            &quot;{item.content}&quot;
                        </span>
                        <div className="relative z-20 mt-6 flex flex-col items-start">
                            <span className="text-sm font-normal leading-[1.6] font-figtree text-white/50 mb-3">
                                {item.writer}
                            </span>
                
                            {/* Displaying the rating as stars */}
                            <div className="flex flex-row items-center">
                                {[...Array(Math.floor(item.rating))].map((_, i) => (
                                    <span key={i} className="text-[#FFDC26]">
                                        <Star size={20} fill='#FFDC26'/>
                                    </span>
                                ))}
                                {item.rating % 1 !== 0 && (
                                    <span className="text-[#FFDC26]">
                                        <Star size={20} fill='#FFDC26' />
                                    </span>
                                )}
                            </div>
                        </div>
                    </blockquote>
                </li>
                
                ))}
            </ul>
        </div>
    )
}
