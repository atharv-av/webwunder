import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

interface Props extends ComponentProps<'div'> { }

export default function Anchor({ className, ...props }: Props) {
    return (
        <div {...props} className={`${cn('w-full h-0 z-0 relative -top-14 xl:-top-20', className)}`}></div>
    )
}