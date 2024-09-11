'use client'
import useBreakpoints from '@/hooks/useBreakpoints'
import { AnimationProps } from 'framer-motion'
import { Children, cloneElement, isValidElement } from 'react'

export default function DisableAnimationOnMobile({ children }: Props) {
    const { isMobile } = useBreakpoints()
    if (isMobile) {
        return children
    }
    const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const emptyAnimationProps = {
                animate: 'default',
                initial: undefined,
                exit: undefined,
                transition: { duration: 0 },
                variants: {
                    default: { opacity: 1, top: 'auto', bottom: 'auto' },
                },
            } as AnimationProps
            console.log('MODIFIED Children',emptyAnimationProps)

            return cloneElement(child, emptyAnimationProps)
        }
        return child
    })


    return modifiedChildren
}
