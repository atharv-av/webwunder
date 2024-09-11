import { cn } from "@/lib/utils"
import { ComponentPropsWithRef, forwardRef } from "react"

interface Props extends ComponentPropsWithRef<'section'> {}

const Section = forwardRef<HTMLElement, Props>(function Section(props, ref) {
    return (
        <section ref={ref} {...props} className={`${cn('px-0 py-14 w-full lg:px-14 lg:py-20', props.className)}`} >
            {props.children}
        </section>
    )
})

export default Section 