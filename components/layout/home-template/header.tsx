'use client'

import Menu from './menu'
import Logo from '@/components/common/logo'
import NextTopLoader from 'nextjs-toploader'
import { motion, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import ContactUsMenu from './contact-us-menu'
import Link from 'next/link'
import { paths } from '@/paths'

import PenSVG from '@/assets/icons/search-refraction.svg'
import { useTranslations } from 'next-intl'

interface Props {
    showBanner?: boolean
}

export default function Header({ showBanner = false }: Props) {
    const t = useTranslations('home')

    const viewHolder = useRef(null)
    const isInView = useInView(viewHolder)
    const init = useRef(false)
    useEffect(() => {
        init.current = true
    }, [])

    const isScrolling = useMemo(() => {
        return init.current && !isInView
    }, [isInView])

    const variants = {
        hide: {
            y: 20,
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
            <div
                ref={viewHolder}
                className="absolute top-[100px] -z-50 w-full bg-transparent"
            ></div>
            <header
                className={`relative z-10 flex w-full flex-col items-center justify-between`}
            >
                <NextTopLoader color="hsl(241 77% 63%)" showSpinner={false} />
                {showBanner ? (
                    <div className="flex w-full justify-center bg-gradient-to-r from-pink-700 to-fuchsia-700 text-primary-foreground">
                        <Link
                            className="flex items-center justify-center py-1"
                            href={'/'}
                        >
                            {/* paths.pages.contactUs.href */}
                            <PenSVG className="me-2" />
                            {t('request-consultation')}
                        </Link>
                    </div>
                ) : null}

                <motion.div
                    layout
                    initial={'hide'}
                    animate={'animateState'}
                    variants={variants}
                    transition={{
                        bounce: 0,
                        duration: 0.3,
                        delay: 0,
                    }}
                    className={`z-20 flex w-full flex-col border-b bg-white ${isScrolling ? 'fixed top-0' : ''}`}
                >
                    <div className="container flex w-full items-center justify-between px-0">
                        <Logo className="my-4 ms-6" />
                        <div className="flex items-center">
                            <Menu />
                            <ContactUsMenu className="me-4 hidden md:flex" />
                        </div>
                    </div>
                </motion.div>
            </header>
        </>
    )
}
