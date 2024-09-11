'use client'

import { Button } from '@/components/ui/button'
import { paths } from '@/paths'
import Link from 'next/link'
import DotSVG from '@/assets/icons/dot.svg'

import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const variantsLeft = {
    hide: {
        x: '-100%',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
}
const variantsRight = {
    hide: {
        x: '100%',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
}

export function StartLeft(
    props: Props<{
        image: StaticImageData
        list: string[]
        title: string
        projectUrl: string
        text: string
        color: string
        revers?: boolean
    }>,
) {
    return (
        <div className={cn('relative', props.className)}>
            <div className="grid gap-x-12 gap-y-0 xl:grid-cols-2">
                <motion.div
                    key={props.title}
                    className="relative flex justify-center overflow-clip xl:justify-end"
                    initial={'hide'}
                    whileInView={'animate'}
                    transition={{
                        bounce: 0,
                        duration: 0.4,
                    }}
                    variants={variantsLeft}
                    viewport={{
                        once: true,
                    }}
                >
                    <div
                        className={`${cn('rounded-tr-3x absolute right-2 top-[15%] h-[70%] w-full rounded-br-[100px] rounded-tr-[100px]', props.color)}`}
                    ></div>
                    <Image
                        className="relative p-4"
                        src={props.image}
                        alt="WebWunder Digitar Image"
                        priority
                    />
                </motion.div>

                <motion.div
                    key={props.title + '_text'}
                    className="flex flex-col justify-center px-6"
                    initial={'hide'}
                    whileInView={'animate'}
                    transition={{
                        bounce: 0,
                        duration: 0.4,
                    }}
                    variants={variantsRight}
                    viewport={{
                        once: true,
                    }}
                >
                    <h2 className="my-4 text-6xl font-bold xl:text-8xl">
                        {props.title}
                    </h2>
                    <div className="mb-2 flex max-w-[500px] flex-wrap gap-x-4 font-bold [&_>_div]:flex [&_>_div]:items-center [&_>_div]:leading-tight [&_>_div_>_svg]:text-2xl">
                        {props.list.map((e) => (
                            <div key={e}>
                                <DotSVG />
                                {e}
                            </div>
                        ))}
                    </div>
                    <p className="mb-4 max-w-[500px] text-grayText">
                        {props.text}
                    </p>
                    <div className="flex gap-4">
                        <Button
                            asChild
                            className="w-full bg-[#FADB41] xl:w-auto xl:min-w-44"
                        >
                            <Link target="_blank" href={props.projectUrl}>
                                View Project
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="w-full bg-[#27DAB7] xl:w-auto xl:min-w-44"
                        >
                            <Link
                                target="_blank"
                                href={paths.pages.bookCall.href}
                            >
                                Book a call
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export function StartRight(
    props: Props<{
        image: StaticImageData
        list: string[]
        title: string
        projectUrl: string
        text: string
        color: string
        revers?: boolean
    }>,
) {
    return (
        <div className={cn('relative', props.className)}>
            <div className="grid gap-x-12 gap-y-0 xl:grid-cols-2">
                <motion.div
                    key={props.title}
                    className="order-2 flex items-center px-6 xl:order-1 xl:justify-end"
                    initial={'hide'}
                    whileInView={'animate'}
                    transition={{
                        bounce: 0,
                        duration: 0.4,
                    }}
                    variants={variantsLeft}
                    viewport={{
                        once: true,
                    }}
                >
                    <div className="flex w-full flex-col xl:w-auto">
                        <h2 className="my-4 text-6xl font-bold xl:text-8xl">
                            {props.title}
                        </h2>
                        <div className="mb-2 flex max-w-[500px] flex-wrap gap-x-4 font-bold [&_>_div]:flex [&_>_div]:items-center [&_>_div]:leading-tight [&_>_div_>_svg]:text-2xl">
                            {props.list.map((e) => (
                                <div key={e}>
                                    <DotSVG />
                                    {e}
                                </div>
                            ))}
                        </div>
                        <p className="mb-4 max-w-[500px] text-grayText">
                            {props.text}
                        </p>
                        <div className="flex gap-4">
                            <Button
                                asChild
                                className="w-full bg-[#FADB41] xl:w-auto xl:min-w-44"
                            >
                                <Link target="_blank" href={props.projectUrl}>
                                    View Project
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="w-full bg-[#27DAB7] xl:w-auto xl:min-w-44"
                            >
                                <Link
                                    target="_blank"
                                    href={paths.pages.bookCall.href}
                                >
                                    Book a call
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    key={props.title + '_text'}
                    className="relative order-1 flex justify-center overflow-clip xl:order-2 xl:justify-start"
                    initial={'hide'}
                    whileInView={'animate'}
                    transition={{
                        bounce: 0,
                        duration: 0.4,
                    }}
                    variants={variantsRight}
                    viewport={{
                        once: true,
                    }}
                >
                    <div
                        className={`${cn('rounded-tr-3x absolute left-2 top-[15%] h-[70%] w-full rounded-bl-[100px] rounded-tl-[100px]', props.color)}`}
                    ></div>
                    <Image
                        className="relative p-4 xl:left-20"
                        src={props.image}
                        alt="WebWunder Digitar Image"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    )
}
