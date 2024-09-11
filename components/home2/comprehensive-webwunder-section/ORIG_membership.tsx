'use client'

import { AnimatePresence } from 'framer-motion'
// import PillSelect from './pill-select'
import FadeIn from '@/components/transitions/fade-in'
import { useMemo, useState } from 'react'

// import CheckSVG from "@/assets/icons/check.svg"
import CheckSVG from '@/assets/icons/check-circle-broken.svg'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Anchor from '@/components/common/anchor'

export default function Membership(props: Props) {
    const [selected, setSelected] = useState(0)

    const content = useMemo<{
        title: string
        text: string
        price: string
        per: string
        included: string[]
    }>(() => {
        switch (selected) {
            case 0:
                return {
                    title: `Design`,
                    text: `One request at a time. Pause or cancel anytime.`,
                    price: '3.995',
                    per: 'per month',
                    included: [
                        'Fast delivery: ~72 hours',
                        'Unlimited brands',
                        'Unlimited designs',
                        '100% design ownership',
                        'Top priority for each request',
                        'Pause or cancel anytime',
                    ],
                }
            case 1:
                return {
                    title: `Website`,
                    text: `One request at a time. Pause or cancel anytime.`,
                    price: '7.995',
                    per: 'per month',
                    included: [
                        'Fast delivery: ~1 week (Webflow)',
                        'Fast delivery: ~4 weeks (Custom)',
                        'Installation, Hosting, Upgrades',
                        '100% website ownership',
                        'Top priority for each request',
                        'Pause or cancel anytime',
                    ],
                }
            case 2:
                return {
                    title: `Design & Website`,
                    text: `Double the request. Pause or cancel anytime.`,
                    price: '9.995',
                    per: 'per month',
                    included: [
                        'Unlimited designs & websites',
                        'Fast delivery for both',
                        'Save €2.000/m with this bundle',
                        '100% ownership of all work',
                        'Integrated design & development',
                        'Pause or cancel anytime',
                    ],
                }
            default:
                return {
                    title: ``,
                    text: ``,
                    price: '',
                    per: '',
                    included: [],
                }
        }
    }, [selected])

    return (
        <div
            className={cn(
                'flex flex-col rounded-3xl border p-6 shadow-lg lg:p-20',
                props.className,
            )}
        >
            <Anchor id="pricing"></Anchor>
            <h2 className="mb-3 text-3xl font-bold lg:mb-6">Membership</h2>
            {/* <PillSelect
                className="mb-4 lg:mb-8"
                onSelect={setSelected}
                selected={selected}
            /> */}
            <AnimatePresence mode="wait">
                <FadeIn key={content.title} id={content.title}>
                    <div className="mb-6 lg:mb-12">
                        <div className="lg:hidden">
                            <h2 className="mb-2 whitespace-nowrap text-4xl font-bold lg:text-7xl">
                                {content.title}
                            </h2>
                            <p className="mb-4 text-base text-grayText">
                                {content.text}
                            </p>

                            <div className="mb-6">
                                <h2 className="text-4.5xl font-bold text-primary">
                                    &euro; {content.price}
                                </h2>
                                <p className="text-grayText">{content.per}</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="mb-2 flex items-end justify-between">
                                <div>
                                    <h2 className="text-4xl font-bold lg:text-5xl">
                                        {content.title}
                                    </h2>
                                </div>
                                <div className="">
                                    <h2 className="whitespace-nowrap text-4.5xl font-bold text-primary lg:text-5xl">
                                        &euro; {content.price} <br />
                                    </h2>
                                </div>
                            </div>

                            <div className="flex items-baseline justify-between">
                                <p className="mb-4 text-base text-grayText">
                                    {content.text}
                                </p>
                                <p className="text-grayText">{content.per}</p>
                            </div>

                            <div className="mb-6"></div>
                        </div>

                        <h3 className="mb-2 text-xl font-bold">
                            What&apos;s included?
                        </h3>
                        <ol className="grid w-full gap-3 lg:grid-cols-2">
                            {content.included.map((e) => (
                                <li key={e} className="flex items-center gap-2">
                                    <CheckSVG className="text-xl text-primary" />{' '}
                                    {e}
                                </li>
                            ))}
                        </ol>
                    </div>
                </FadeIn>
            </AnimatePresence>

            <div className="mb-4 grid w-full grid-cols-2 gap-4">
                <Button className="max-w bg-[#FB421F] px-4 text-lg font-normal">
                    Get started
                </Button>
                <Button className="bg-[#27DAB7] px-4 text-lg font-normal">
                    Book call
                </Button>
            </div>
        </div>
    )
}
