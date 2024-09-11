import { cn } from '@/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<'div'> {
    icon?: ReactNode
}

export default function Box({ className, icon, ...props }: Props) {
    return (
        <div
            {...props}
            className={cn(
                `flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-primary px-4 py-8 text-center duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground`,
                className,
            )}
        >
            {icon ? (
                <div className="mb-3 text-5xl lg:text-6xl">{icon}</div>
            ) : null}
            <h2 className="text-lg font-bold lg:text-xl">{props.children}</h2>
        </div>
    )
}
