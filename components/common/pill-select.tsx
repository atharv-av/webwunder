'use client'

import FadeIn from '@/components/transitions/fade-in'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    onSelect: (index: number) => void
    selected: number
    className?: string
    olClassName?: string
    liClassName?: string
    items: { title: string }[]
}

export default function PillSelect({
    onSelect,
    selected,
    className,
    items,
    olClassName,
    liClassName,
}: Props) {
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

    return (
        <div className={`${className}`}>
            <ol
                className={cn(
                    'relative flex w-fit justify-start rounded-lg bg-white',
                    olClassName,
                )}
            >
                {items.map((e, i) => (
                    <li
                        key={e.title}
                        className={cn(li, liClassName)}
                        onClick={() => handle(i)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                layout
                                className={`absolute h-full rounded-lg bg-primary ${isSelected(i) ? 'w-full' : ''}`}
                            ></motion.div>
                        </AnimatePresence>
                        <div
                            className={`relative whitespace-nowrap px-4 py-3 xl:px-6 xl:text-xl ${isSelected(i) ? 'text-white' : 'text-black'}`}
                        >
                            {e.title}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
