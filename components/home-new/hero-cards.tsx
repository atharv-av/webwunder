'use client'

import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-img-cards'

export function HeroCardsRight() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
            <InfiniteMovingCards
                items={imageItems}
                direction="right"
                speed="slow"
            />
        </div>
    )
}
export function HeroCardsLeft() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
            <InfiniteMovingCards
                items={imageItems}
                direction="left"
                speed="slow"
            />
        </div>
    )
}

const imageItems = [
    {
        imageSrc: '/images/home/stay-on-top/hero-4.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-2.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-3.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-4.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-6.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-7.png',
        altText: 'Stay on top',
    },
    {
        imageSrc: '/images/home/stay-on-top/hero-8.png',
        altText: 'Stay on top',
    },
]
