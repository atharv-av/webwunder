'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ComponentProps, useEffect, useRef } from 'react'

interface Props extends ComponentProps<'div'> {
    id?: string
    delay?: number
    right?: boolean
}

function Reveal({ children, className, id, right = false, delay = 0 }: Props) {
    const variants = {
        hide: {
            y: 10,
            opacity: 0,
        },
        rightHide: {
            x: 10,
            opacity: 0,
        },
        animateState: {
            x: 0,
            y: 0,
            opacity: 1,
        },
    }

    return (
        <>
            <motion.div
                key={id}
                layout
                className={className}
                initial={right ? 'rightHide' : 'hide'}
                animate={'animateState'}
                exit={'hide'}
                transition={{
                    bounce: 0,
                    duration: 0.2,
                    delay,
                }}
                variants={variants}
            >
                {children}
            </motion.div>
        </>
    )
}

export function RevealInView({
    children,
    className,
    id,
    right = false,
    delay = 0,
}: Props) {
    const variants = {
        hide: {
            y: 30,
            opacity: 0,
        },
        rightHide: {
            x: 10,
            opacity: 0,
        },
        animateState: {
            x: 0,
            y: 0,
            opacity: 1,
        },
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

    const mainControls = useAnimation()

    useEffect(() => {
        console.log('Element is in view: ', isInView)
        if (isInView) {
            mainControls.start('animateState')
        }
    }, [isInView, mainControls])

    return (
        <>
            <motion.div
                ref={ref}
                key={id}
                layout
                className={className}
                initial={right ? 'rightHide' : 'hide'}
                animate={mainControls}
                exit={'hide'}
                transition={{
                    bounce: 0,
                    duration: 0.3,
                    delay,
                }}
                variants={variants}
            >
                {children}
            </motion.div>
        </>
    )
}

/**
 * Using <Reveal.H1> in server components will
 * throw error that its not in client manifest
 */
const H1 = ({ children, className, id, delay = 0 }: Props) => {
    const variants = {
        hide: {
            y: 10,
            opacity: 0,
        },
        animateState: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <>
            <motion.h1
                key={id}
                layout
                className={className}
                initial={'hide'}
                animate={'animateState'}
                exit={'hide'}
                transition={{
                    bounce: 0,
                    duration: 0.2,
                    delay,
                }}
                variants={variants}
            >
                {children}
            </motion.h1>
        </>
    )
}
H1.displayName = 'H1'
Reveal.H1 = H1

export default Reveal
