'use client'


import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { useMemo, useState } from 'react'

import styles from "./date-picker.module.scss"

export function DatePicker(
    props: Props & { date: string; onSelect: (value: string) => void },
) {
    const [open, setOpen] = useState(false)
    const year = new Date().getFullYear()

    const date = useMemo<Date | undefined>(() => {
        if (props.date) return new Date(props.date)
    }, [props.date])

    const onSelectHandler = (val: Date | undefined) => {
        if (val) {
            const d = `${val.getFullYear()}-${(val.getMonth() + 1).toString().padStart(2, '0')}-${val.getDate().toString().padStart(2, '0')}`
            props.onSelect(d)
            setOpen(false)
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{props.children}</PopoverTrigger>
            <PopoverContent className={`w-auto p-0`} align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelectHandler}
                    initialFocus
                    captionLayout="dropdown"
                    fromYear={1920}
                    toYear={year}
                    classNames={{
                        caption:'flex justify-between',
                        caption_label:'hidden',
                        caption_dropdowns:`flex ${styles.dropdowns}`,
                    }}
                />
            </PopoverContent>
        </Popover>
    )
}
