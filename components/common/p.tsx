import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"

interface Props extends ComponentProps<'h2'> {
    children?: ReactNode, className?: string
}

export default function P({ children, className, ...props }: Props) {
    return (
        <p {...props} className={`${cn('lg:text-xl', className)}`} >
            {children}
        </p>
    )
}