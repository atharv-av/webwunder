'use client'

import FadeIn from '@/components/transitions/fade-in'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    onSelect: (index: number) => void
    selected: number
    className?: string
}

export default function PillSelect({ onSelect, selected, className }: Props) {
    const handle = (i: number) => {
        onSelect(i)
    }

    const isSelected = (i: number) => {
        if (i === selected) return true
        else return false
    }

    // [&:last-child_div]:-right-[5px] [&:first-child_div]:-left-[5px]
    const li =
        'cursor-pointer relative z-[1] text-white text-sm flex justify-center  select-none mix-blend-normal '

    const items = [
        { title: 'Website Plan' },
        { title: 'Service Pack' },
        { title: 'Unlimited Pack' },
    ]

    return (
        <div className={`${className}`}>
            <ol className="relative w-fit flex justify-start rounded-lg bg-white">
                {items.map((e, i) => (
                    <li key={e.title} className={' '+li} onClick={() => handle(i)}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                layout
                                className={`absolute h-full rounded-lg bg-primary ${isSelected(i) ? 'w-full' : ''}`}
                            ></motion.div>
                        </AnimatePresence>
                        <div className={`relative xl:text-xl px-4 xl:px-6 py-3 whitespace-nowrap ${isSelected(i)?'text-white':'text-black'}`}>{e.title}</div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
