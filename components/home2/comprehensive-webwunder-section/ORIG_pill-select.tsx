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
        { title: 'Design' },
        { title: 'Website' },
        { title: 'Design & Website' },
    ]

    return (
        <div className={`${className}`}>
            <ol className="relative w-fit flex justify-start rounded-full bg-[#29292F]">
                {items.map((e, i) => (
                    <li key={e.title} className={' '+li} onClick={() => handle(i)}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                layout
                                className={`absolute h-full rounded-full bg-primary ${isSelected(i) ? 'w-full' : ''}`}
                            ></motion.div>
                        </AnimatePresence>
                        <div className="relative px-4 py-3 whitespace-nowrap">{e.title}</div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
