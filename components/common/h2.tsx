import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"

interface Props extends ComponentProps<'h2'> {
    children?: ReactNode, className?: string
}

export default function H2({ children, className, ...props }: Props) {
    return (
        <h2 {...props} 
        className={`${cn('text-3xl font-extrabold lg:text-5xl lg:leading-tight', className)}`} >
            {children}
        </h2>
    )
}