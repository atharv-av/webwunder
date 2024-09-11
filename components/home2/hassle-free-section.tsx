'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { paths } from '@/paths'
import Image from 'next/image'

import HassleFree from '@/public/images/home/hassle-free/hassle-free.png'
import { cn } from '@/lib/utils'

import CylinderPink from '@/public/images/home/hassle-free/cylinder-pink.png'
import HalfDonutViolet from '@/public/images/home/hassle-free/half-donut-violet.png'
import Polygon3dViolet from '@/public/images/home/hassle-free/polygon-3d-violet.png'
import { useHomeContext } from '@/providers/home'

export default function HassleFreeSection(props: Props) {
    const homeCtx = useHomeContext()
    return (
        <section className={cn('w-full', props.className)}>
            <div className="absolute hidden h-full w-full xl:block">
                <Image
                    className="absolute -top-5 left-10 2xl:-top-5 2xl:left-16"
                    src={CylinderPink}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute bottom-14 left-[35%] 2xl:bottom-24 2xl:left-[40%]"
                    src={HalfDonutViolet}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute right-[40%] top-1/4 2xl:right-[45%]"
                    src={Polygon3dViolet}
                    alt="Webwunder Image"
                />
            </div>

            <div className="container relative px-4">
                <div className="grid xl:grid-cols-2">
                    <div className="mb-12 flex flex-col justify-center gap-4 text-center xl:gap-8 xl:pe-6 xl:text-start">
                        <h2 className="text-4xl font-bold xl:text-6xl">
                            Hassle-Free Updates and{' '}
                            <span className="text-primary">Maintenance</span>{' '}
                        </h2>
                        <p className="xl:text-lg">
                            At WebWunder, we handle all updates and maintenance,
                            so you can focus on your business. Each month,
                            benefit from one or two free design tasks, such as a
                            new flyer, social media content, or ad design.
                        </p>
                        <Button
                            asChild
                            className="mx-auto w-full font-normal xl:ms-0 xl:w-auto"
                            variant={'dark'}
                        >
                            <Link
                                href={{
                                    hash: paths?.pages?.pricing?.href ?? '#',
                                }}
                                onClick={() => {
                                    homeCtx.plan.set('service')
                                }}
                            >
                                See plans
                            </Link>
                        </Button>
                    </div>
                    <Image src={HassleFree} alt="WebWunder Image" />
                </div>
            </div>
        </section>
    )
}
