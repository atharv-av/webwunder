'use client'

import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'
import Marquee from 'react-fast-marquee'

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
        rating: number
    }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLUListElement>(null)

    const [scale, setScale] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth

            // Define breakpoints at intervals of 100px
            if (windowWidth >= 1536) {
                setScale('max-w-[1700px]') // For 1536px and above
            } else if (windowWidth >= 1280) {
                setScale('max-w-[1700px]') // For 1400px to 1535px
            } else if (windowWidth >= 1024) {
                setScale('max-w-[1300px]') // For 1300px to 1399px
            } else {
                setScale('max-w-[1300px]') // Default or fallback width
            }
        }

        // Call the function on mount and when window is resized
        window.addEventListener('resize', handleResize)
        handleResize() // Call it once to set the initial width

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        setAnimationProperties()
    }, [])

    const [start, setStart] = useState(false)

    const setAnimationProperties = () => {
        if (containerRef.current) {
            setSpeed()
            setDirection()
            setStart(true)
        }
    }

    const setDirection = () => {
        if (containerRef.current) {
            const animationDirection =
                direction === 'left' ? 'normal' : 'reverse'
            containerRef.current.style.setProperty(
                '--animation-direction',
                animationDirection,
            )
        }
    }

    const setSpeed = () => {
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
            containerRef.current.style.setProperty(
                '--animation-duration',
                duration,
            )
        }
    }

    return (
        <div
            ref={containerRef}
            className={`scroller relative z-20 max-w-[1400px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] xl:max-w-[1700px] xl:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]`}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex w-max animate-scroll flex-nowrap gap-4 py-4',
                    start && 'start-animation',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                )}
            >
                {items.map((item, idx) => (
                  <li
                  className="relative h-[300px] w-[250px] max-w-full flex-shrink-0 rounded-3xl p-5 sm:w-[300px] md:h-auto md:w-[500px] md:px-8 md:py-10 overflow-hidden" // Added overflow-hidden here
                  style={{
                      background:
                          'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                  }}
                  key={`${item.writer}-${idx}`}
                >
                  <blockquote>
                      <div
                          aria-hidden="true"
                          className="user-select-none pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+_4px)] w-[calc(100%+_4px)] rounded-3xl bg-[#191919]" // Ensure the border radius is consistent
                      ></div>
                      <span className="relative z-20 font-figtree text-base font-semibold leading-none text-white md:mb-1 md:text-[22px] md:leading-[1.6]">
                          &quot;{item.content}&quot;
                      </span>
                      <div className="relative z-20 mt-6 flex flex-col items-start">
                          <span className="mb-1 font-figtree text-sm font-normal leading-[1.6] text-white/50 md:mb-3">
                              {item.writer}
                          </span>
                
                          <div className="flex flex-row items-center">
                              {[...Array(Math.floor(item.rating))].map((_, i) => (
                                  <span key={i} className="text-[#FFDC26]">
                                      <Star size={20} fill="#FFDC26" />
                                  </span>
                              ))}
                              {item.rating % 1 !== 0 && (
                                  <span className="text-[#FFDC26]">
                                      <Star size={20} fill="#FFDC26" />
                                  </span>
                              )}
                          </div>
                      </div>
                  </blockquote>
                </li>
                
                ))}
                {/* Duplicate the list to create the illusion of infinite scrolling */}
                {items.map((item, idx) => (
                    <li
                        className="relative h-[300px] w-[250px] max-w-full flex-shrink-0 rounded-3xl border border-b-0 border-slate-700 p-5 sm:w-[300px] md:h-auto md:w-[500px] md:px-8 md:py-10"
                        style={{
                            background:
                                'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                        }}
                        key={`duplicate-${item.writer}-${idx}`}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+_4px)] w-[calc(100%+_4px)] rounded-3xl bg-[#191919]"
                            ></div>
                            <span className="relative z-20 font-figtree text-base font-semibold leading-none text-white md:mb-1 md:text-[22px] md:leading-[1.6]">
                                &quot;{item.content}&quot;
                            </span>
                            <div className="relative z-20 mt-6 flex flex-col items-start">
                                <span className="mb-1 font-figtree text-sm font-normal leading-[1.6] text-white/50 md:mb-3">
                                    {item.writer}
                                </span>

                                <div className="flex flex-row items-center">
                                    {[...Array(Math.floor(item.rating))].map(
                                        (_, i) => (
                                            <span
                                                key={i}
                                                className="text-[#FFDC26]"
                                            >
                                                <Star
                                                    size={20}
                                                    fill="#FFDC26"
                                                />
                                            </span>
                                        ),
                                    )}
                                    {item.rating % 1 !== 0 && (
                                        <span className="text-[#FFDC26]">
                                            <Star size={20} fill="#FFDC26" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </blockquote>
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
                        transform: translateX(calc(-100% / 2));
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
