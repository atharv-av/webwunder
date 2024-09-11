'use client'
import { cn } from '@/lib/utils'
import OtherItems from './why-webwunder-subscription-section/other-items'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { paths } from '@/paths'
import { useHomeContext } from '@/providers/home'

export default function WhyWebWunderSubscriptionSection(props: Props) {
    const homeCtx = useHomeContext()
    return (
        <section className={cn('w-full', props.className)}>
            <div className="container px-4">
                <div className="xl:hidden">
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-4xl font-bold">
                            Why Choose WebWunder&apos;s Subscription{' '}
                            <span className="text-primary">Websites?</span>
                        </h2>
                        <p className="text-grayText">
                            Struggling with an outdated website and unsure where
                            to start? Tired of high costs and unreliable
                            agencies?
                        </p>
                    </div>
                    <OtherItems mobile />
                    <div className="mt-8 flex flex-col gap-4 text-center">
                        <p className="text-grayText">
                            With WebWunder, transform your digital presence
                            effortlessly and enjoy a reliable, all-inclusive web
                            solution that drives growth.
                        </p>
                        <Button asChild variant={'dark'}>
                            <Link
                                href={paths.pages.pricing.href}
                                onClick={() => {
                                    homeCtx.plan.set('website')
                                }}
                            >
                                See plans
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="hidden grid-cols-3 gap-14 xl:grid">
                    <div className="flex flex-col justify-center gap-4 text-start">
                        <h2 className="pe-4 text-6xl font-bold">
                            Why Choose WebWunder&apos;s Subscription{' '}
                            <span className="text-primary">Websites?</span>
                        </h2>
                        <p className="text-lg text-grayText">
                            Struggling with an outdated website and unsure where
                            to start? Tired of high costs and unreliable
                            agencies?
                        </p>
                    </div>
                    <OtherItems />
                    <div className="mt-8 flex flex-col justify-center gap-8 text-start">
                        <p className="text-lg text-grayText">
                            With WebWunder, transform your digital presence
                            effortlessly and enjoy a reliable, all-inclusive web
                            solution that drives growth.
                        </p>
                        <Button className="w-[180px]" asChild variant={'dark'}>
                            <Link
                                href={paths.pages.pricing.href}
                                onClick={() => {
                                    homeCtx.plan.set('website')
                                }}
                            >
                                See plans
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
