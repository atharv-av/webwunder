'use client'

import { Button } from '@/components/ui/button'
import { CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function SliderButtons(props: {
    api: CarouselApi
    className?: string
    bars?: boolean
    selectedBarColor?: string
    barColor?: string
    itemCount: number
}) {
    const [current, setCurrent] = useState(0)
    const [buttons, setButtons] = useState<string[]>([])

    const selectSlide = (index: number) => {
        if (!props.api) return
        props.api.scrollTo(index)
    }

    useEffect(() => {
        if (!props.api) return
        const len = props.api.scrollSnapList().length
        setCurrent(props.api.selectedScrollSnap() + 1)
        setButtons(() => new Array(len).fill('button'))
        props.api.on('select', () => {
            if (!props.api) return
            setCurrent(props.api.selectedScrollSnap() + 1)
        })
    }, [props.api])

    const barColor = props.barColor || 'bg-white/40'
    const selectedBarColor = props.selectedBarColor || 'bg-white'

    return (
        <div
            className={cn(
                'flex w-full justify-center space-x-4',
                props.className,
            )}
        >
            {props.bars ? (
                <div className="flex w-4/6 gap-2">
                    {buttons.map((e, i) => (
                        <div
                            key={i}
                            onClick={() => selectSlide(i)}
                            className={`h-2 rounded ${current === i + 1 ? selectedBarColor : barColor}`}
                            style={{
                                flexBasis: (1 / props.itemCount) * 100+'%'
                            }}
                        ></div>
                    ))}
                </div>
            ) : (
                buttons.map((e, i) => (
                    <Button
                        className={`h-[25px] min-h-[25px] w-[25px] min-w-[25px] rounded-full border-[1px] border-foreground p-0`}
                        variant={current === i + 1 ? 'default' : 'secondary'}
                        onClick={() => selectSlide(i)}
                        key={i}
                    ></Button>
                ))
            )}
        </div>
    )
}
