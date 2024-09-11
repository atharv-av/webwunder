'use client'

import FadeIn from '@/components/transitions/fade-in'
import Img1 from '@/public/images/home/websites-logos-creatives/img1.png'
import Img2 from '@/public/images/home/websites-logos-creatives/img2.png'
import Img3 from '@/public/images/home/websites-logos-creatives/img3.png'
import Img4 from '@/public/images/home/websites-logos-creatives/img4.png'
import Img5 from '@/public/images/home/websites-logos-creatives/img5.png'
import Img6 from '@/public/images/home/websites-logos-creatives/img6.png'
import Image, { StaticImageData } from 'next/image'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Img = { id: string; img: StaticImageData }

const images = [
    { id: 'Img1', img: Img1 },
    { id: 'Img2', img: Img2 },
    { id: 'Img3', img: Img3 },
    { id: 'Img4', img: Img4 },
    { id: 'Img5', img: Img5 },
    { id: 'Img6', img: Img6 },
] as const
const tabs = [
    {
        title: 'Web Design',
        images: [...images],
        bg: 'bg-green-500',
    },
    {
        title: 'Branding',
        images: [...images],
        bg: 'bg-[#27DAB7]',
    },
    {
        title: 'Social Media',
        images: [...images],
        bg: 'bg-[#FB421F]',
    },
    {
        title: 'Videos',
        images: [...images],
        bg: 'bg-[#FFDC26]',
    },
    {
        title: 'Web Development',
        images: [...images],
        bg: 'bg-[#1FD3FB]',
    },
    {
        title: 'Digital Marketing',
        images: [...images],
        bg: 'bg-[#FF00E5]',
    },
    {
        title: 'Slide Decks',
        images: [...images],
        bg: 'bg-[#FA419A]',
    },
    {
        title: 'Brochures',
        images: [...images],
        bg: 'bg-[#4148FA]',
    },

]
export default function Works() {
    const [selected, setSelected] = useState(0)


    const itemsSelected = useMemo(() => {
        return tabs[selected].images
    }, [selected])

    return (
        <div className="flex flex-col items-center pb-8">
            <div className="mb-6 grid w-full select-none grid-cols-2 gap-4 px-4 lg:mb-8 lg:w-auto lg:grid-cols-4">
                {tabs.map((e, i) => (
                    <div
                        // onClick={() => setSelected(i)}
                        key={e.title}
                        className={`relative flex  items-center justify-center overflow-clip rounded-3xl px-2 py-4 text-center text-sm text-white lg:px-8 ${e.bg}`}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                layout
                                className={`absolute bottom-0 left-0 w-full rounded-3xl bg-primary ${i === selected ? 'h-full' : 'h-0'}`}
                            ></motion.div>
                        </AnimatePresence>
                        <span
                            className={`relative ${i === selected ? 'text-white mix-blend-normal' : ''}`}
                        >
                            {e.title}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                {itemsSelected.map((e) => (
                    <AnimatePresence key={e.id + '_' + selected} mode="wait">
                        <FadeIn
                            key={e.id + '_' + selected}
                            id={e.id + '_' + selected}
                            className="w-[45%] lg:w-[30%]"
                        >
                            <Image
                                key={e.id + '_' + selected}
                                className="rounded-[20px]"
                                src={e.img}
                                alt="WebWunder Image"
                            />
                        </FadeIn>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    )
}
