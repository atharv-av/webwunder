import Image from 'next/image'

import design1 from '@/public/images/portfolio/graphic-design/design1.png'
import design2 from '@/public/images/portfolio/graphic-design/design2.png'
import design3 from '@/public/images/portfolio/graphic-design/design3.png'
import design4 from '@/public/images/portfolio/graphic-design/design4.png'
import design5 from '@/public/images/portfolio/graphic-design/design5.png'
import design6 from '@/public/images/portfolio/graphic-design/design6.png'
import { cn } from '@/lib/utils'
import FadeIn from '@/components/transitions/fade-in'
import { motion } from 'framer-motion'

export default function GraphicDesign(props: Props) {
    const variants = {
        hide: {
            y: 100,
            opacity: 0,
        },
        animate: (data: number) => {
            return {
                y: 0,
                opacity: 1,
            }
        },
    }
    const items = [
        { img: design1, className: 'bg-[#37CBE5] xl:col-span-5' },
        { img: design2, className: 'bg-[#F93042] xl:col-span-7' },
        {
            img: design3,
            className: 'bg-[#FCCA3C] xl:col-span-12 p-0 max-h-[650px]',
        },
        { img: design4, className: 'bg-[#E5322C] xl:col-span-7' },
        { img: design5, className: 'bg-[#454545] xl:col-span-5' },
        { img: design6, className: 'bg-[#2C3440] xl:col-span-12' },
    ]

    return (
        <div className={cn('container px-4', props.className)}>
            <div className="grid gap-4 xl:grid-cols-12 xl:gap-8 [&_>_div]:overflow-clip [&_>_div]:rounded-[20px] xl:[&_>_div]:rounded-[30px]">
                {items.map((e, i) => (
                    <motion.div
                        className={cn('relative p-12', e.className)}
                        initial={'hide'}
                        animate={'animate'}
                        exit={'hide'}
                        transition={{
                            bounce: 0,
                            duration: 0.2 * (i + 1),
                        }}
                        custom={i}
                        variants={variants}
                        key={'imggd_' + i}
                    >
                        <Image
                            className={'h-full w-full object-cover'}
                            src={e.img}
                            alt="WebWunder Social Media Images"
                            priority
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
