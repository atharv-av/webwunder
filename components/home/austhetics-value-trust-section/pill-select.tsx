'use client'
import { cn } from "@/lib/utils"
import styles from "./pill-select.module.scss"

import { AnimatePresence, motion } from "framer-motion"

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
        if (i === selected) return styles['selected']
        else return ''
    }

    const move = () => {
        switch (selected) {
            case 0:
                return 'w-[120px] left-[13px]'
            case 1:
                return 'w-[80px] left-[134px]'
            case 2:
                return 'w-[80px] left-[215px]'

            default:
                return ''
        }
    }


    return (
        <div className={`${styles['pill-select']} ${className}`}>
            <ol className="flex border-secondary border-2 rounded-xl relative" >
                <li className="absolute top-[11px] left-0 w-full h-[50px] z-0">
                    <motion.div
                        transition={{
                            bounce: 0,
                            duration: 0.1
                        }}
                        layout className={`absolute h-full bg-primary rounded-xl ${move()}`}></motion.div>
                </li>
                <li className={`${isSelected(0)}`} onClick={() => handle(0)}>
                    <div className={styles.item}> Aesthetics</div>
                </li>
                <li className={`${isSelected(1)}`} onClick={() => handle(1)}>
                    <div className={styles.item}> Value</div>
                </li>
                <li className={`${isSelected(2)}`} onClick={() => handle(2)}>
                    <div className={styles.item}> Trust</div>
                </li>
            </ol>
        </div>
    )
}