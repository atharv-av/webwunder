import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import RocketSVG from '@/public/images/home/advantages/rocket.svg'
import MoneySVG from '@/public/images/home/advantages/money.svg'
import PuzzleSVG from '@/public/images/home/advantages/puzzle.svg'
import TargetSVG from '@/public/images/home/advantages/target.svg'
import OtherItems from './advantage-section/other-items'
import { paths } from '@/paths'

export default function AdvantageSection(props: Props) {
    const items = [
        {
            title: 'Boost Revenue',
            text: `Convert visitors into loyal customers with our strategic design and tailored CRO strategies, optimizing every interaction for success.`,
            icon: <RocketSVG />,
        },
        {
            title: 'Comprehensive Solutions',
            text: 'We manage design, maintenance, and updates, keeping your site cutting-edge and optimized.',
            icon: <PuzzleSVG />,
        },
        {
            title: 'Reduce Costs',
            text: 'Attract qualified leads and save time with efficient communication and manageable subscription-based expenses.',
            icon: <MoneySVG />,
        },
        {
            title: 'Expert Marketing & Design',
            text: 'Full-service support from flyers to social media posts, backed by our comprehensive marketing expertise.',
            icon: <TargetSVG />,
        },
    ]

    return (
        <section className={cn('', props.className)}>
            <div className="container px-4">
                <div className="flex flex-col gap-10 rounded-3xl bg-[#29292F] px-6 py-12 text-white xl:flex-row xl:px-20 xl:py-20 xl:gap-20 mb-4">
                    <div className="flex flex-col items-center justify-center gap-4 text-center xl:items-start xl:gap-8 xl:text-start">
                        <h2 className="text-4xl font-bold xl:text-6xl">
                            The
                            <br className="hidden xl:inline" />{' '}
                            <span className="text-[#27DAB7]">WebWunder</span>{' '}
                            Advantage
                        </h2>
                        <p className="text-lg text-white xl:text-xl">
                            Finally, a hassle-free website solution with lasting
                            value and support
                        </p>
                        <Button
                            asChild
                            className="w-full bg-[#27DAB7]  xl:w-auto xl:min-w-44"
                        >
                            <Link target='_blank' href={paths.pages.bookCall.href}>Book a call</Link>
                        </Button>
                    </div>
                    <div className="grid gap-10 xl:grid-flow-col xl:grid-rows-2 xl:grid-cols-2 xl:gap-x-20 xl:gap-y-15">
                        {items.map((e) => (
                            <div
                                key={e.title}
                                className="flex flex-col items-center justify-center gap-4 text-center xl:text-start xl:items-start xl:justify-start"
                            >
                                <div className="text-7xl">{e.icon}</div>
                                <h2 className="text-2xl xl:text-4xl font-bold">
                                    {e.title}
                                </h2>
                                <p className="text-lg text-white">{e.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <OtherItems />
            </div>
        </section>
    )
}
