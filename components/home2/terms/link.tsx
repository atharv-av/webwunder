'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps, useState } from 'react'

export default function TermLinks({ items }: Props<{ items: string[] }>) {
    const [selected, setSelected] = useState(0)

    return (
        <>
            {items.map((e, i) => (
                <TermLink
                    key={e}
                    onSelect={() => setSelected(i)}
                    className={selected === i ? 'text-primary' : ''}
                    title={e}
                />
            ))}
        </>
    )
}

function TermLink({
    title,
    className,
    onSelect,
}: ComponentProps<'div'> & { title: string; onSelect: () => void }) {
    const id = title.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')
    return (
        <Link
            className={cn('text-2xl font-bold', className)}
            href={`/terms#${id}`}
            onClick={() => {
                onSelect()
            }}
        >
            {title}
        </Link>
    )
}
