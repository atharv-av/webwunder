import BGBigW from '@/public/images/home/steps/big-w.png'
import ArrowDown from '@/public/images/home/steps/arrow-down.png'
import AngledArrowDown from '@/public/images/home/steps/angled-arrow-down.png'
import AngledArrowLeft from '@/public/images/home/steps/angled-arrow-left.png'

import GreenPolygonPNG from '@/public/images/home/steps/green-polygon.png'
import BlueCylinderPNG from '@/public/images/home/steps/blue-cylinder.png'
import RedHalfDonutPNG from '@/public/images/home/steps/red-half-donut.png'
import PurpleEdgedDonutPNG from '@/public/images/home/steps/purple-edged-donut.png'

import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

export default function Steps(props: Props) {
    const steps: {
        step: string
        title: string
        text: string
        className: string
    }[] = [
        {
            step: 'Step 1',
            title: 'Straight to Work',
            text: "Hate meetings? Us too - that's why we've banned them",
            className: 'bg-[#FB421F]',
        },
        {
            step: 'Step 2',
            title: 'Start Project',
            text: "Manage your design requests effortlessly from our custom backend. You'll love it!",
            className: 'bg-[#27DAB7]',
        },
        {
            step: 'Step 3',
            title: 'Smile Connection',
            text: 'Invite your team, submit projects, and enjoy the results. When you smile, we smile back',
            className: 'bg-[#9F26FF]',
        },
    ]

    return (
        <div className={cn('max-w-[900px]', props.className)}>
            <div className="grid gap-4 lg:hidden">
                {steps.map((e, i) => (
                    <React.Fragment key={e.title}>
                        <div
                            className={`relative flex flex-col gap-y-3 rounded-3xl p-8 text-white ${e.className}`}
                        >
                            <div>{e.step}</div>
                            <h2 className="text-2xl font-bold">{e.title}</h2>
                            <p className="text-lg text-white">{e.text}</p>
                        </div>
                        <div
                            className={`w-full ${i >= steps.length - 1 ? 'hidden' : ''}`}
                        >
                            <Image
                                className="mx-auto"
                                src={ArrowDown}
                                alt="WebWunder arrow down image"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="relative hidden grid-cols-5 gap-4 gap-y-12 lg:grid">
                <div className="absolute h-full w-full">
                    <Image
                        className="absolute -left-[50%]"
                        src={BGBigW}
                        alt="WebWunder Image"
                    />

                    <Image
                        className="absolute -left-40 -top-40 w-[80px]"
                        src={GreenPolygonPNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute -right-40 -top-28 w-[50px]"
                        src={BlueCylinderPNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute left-10 bottom-[45%] w-[100px]"
                        src={RedHalfDonutPNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute right-10 bottom-[10%] w-[70px]"
                        src={PurpleEdgedDonutPNG}
                        alt="WebWunder Image"
                    />
                </div>

                <div
                    className={`relative col-span-3 flex flex-col gap-y-3 rounded-3xl p-14 text-white ${steps[0].className}`}
                >
                    <div className="text-xl">{steps[0].step}</div>
                    <h2 className="text-5xl text-4.5xl font-bold">
                        {steps[0].title}
                    </h2>
                    <p className="text-lg text-white">{steps[0].text}</p>
                </div>
                <div className="relative col-span-2">
                    <Image
                        className="absolute -bottom-8 left-0 mx-auto"
                        src={AngledArrowDown}
                        alt="WebWunder angled arrow down image"
                    />
                </div>
                <div
                    className={`relative col-span-3 col-start-3 flex flex-col gap-y-3 rounded-3xl p-14 text-white ${steps[1].className}`}
                >
                    <div className="text-xl">{steps[1].step}</div>
                    <h2 className="text-5xl text-4.5xl font-bold">
                        {steps[1].title}
                    </h2>
                    <p className="text-lg text-white">{steps[1].text}</p>
                </div>

                <div
                    className={`relative col-span-3 flex flex-col gap-y-3 rounded-3xl p-14 text-white ${steps[2].className}`}
                >
                    <div className="text-xl">{steps[2].step}</div>
                    <h2 className="text-5xl text-4.5xl font-bold">
                        {steps[2].title}
                    </h2>
                    <p className="text-lg text-white">{steps[2].text}</p>
                </div>
                <div className="relative">
                    <Image
                        className="absolute -top-8 left-0 mx-auto"
                        src={AngledArrowLeft}
                        alt="WebWunder angled arrow left image"
                    />
                </div>
            </div>
        </div>
    )
}
