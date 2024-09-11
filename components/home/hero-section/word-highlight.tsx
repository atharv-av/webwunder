import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

interface Props extends ComponentProps<'span'> {
    word?: string,
    svgClassName?: string,
    height?: number,
}

export default function WordHighlight({ children, word, height = 11, svgClassName = 'text-[#FFDC60]', ...props }: Props) {



    return (
        <span className={cn('inline-block relative', props.className)}>
            <span className={svgClassName} >
                <svg className="absolute -bottom-1 z-0 w-full" width="160" height={height} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L400 11H0V0Z" fill="currentColor"></path></svg>
            </span>
            <span className="relative">{word ? word : children}</span>
        </span>
    )
}