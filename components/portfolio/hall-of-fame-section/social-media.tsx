import Image from 'next/image'

import social1 from '@/public/images/portfolio/social-media/social1.png'
import social2 from '@/public/images/portfolio/social-media/social2.png'
import social3 from '@/public/images/portfolio/social-media/social3.png'
import social4 from '@/public/images/portfolio/social-media/social4.png'
import social5 from '@/public/images/portfolio/social-media/social5.png'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function SocialMedia(props: Props) {
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
        { img: social1, className: 'xl:col-span-5' },
        { img: social2, className: 'xl:col-span-7' },
        { img: social3, className: 'xl:col-span-12' },
        { img: social4, className: 'xl:col-span-7' },
        { img: social5, className: 'xl:col-span-5' },
    ]

    return (
        <div className={cn('container px-4', props.className)}>
            <div className="grid gap-4 xl:grid-cols-12 xl:gap-8">
                {items.map((e, i) => (
                    <motion.div
                        layout
                        initial={'hide'}
                        animate={'animate'}
                        exit={'hide'}
                        transition={{
                            bounce: 0,
                            duration: 0.2 * (i+1),
                        }}
                        custom={i}
                        variants={variants}
                        key={'imgSM_' + i}
                        className={cn(
                            'relative overflow-clip rounded-[20px] xl:rounded-[30px]',
                            e.className,
                        )}
                    >
                        <Image
                            className={`h-full w-full object-cover`}
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
