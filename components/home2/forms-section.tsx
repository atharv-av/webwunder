'use client'
import Image from 'next/image'
import SignUp from './forms-section/signup'

import DesignRequestsPNG from '@/public/images/home/forms/design-requests.png'
import NewRevisionRequestsPNG from '@/public/images/home/forms/new-revision-requests.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { paths } from '@/paths'
import Link from 'next/link'
import Items from './forms-section/items'
import { useHomeContext } from '@/providers/home'

export default function FormsSection(props: Props) {
    const homeCtx = useHomeContext()
    return (
        <section className={props.className}>
            <div className="container px-4">
                <div className="mb-12 hidden gap-12 lg:grid-cols-3 xl:grid">
                    <div className="rounded-2xl bg-[#F8F8F8] p-12 shadow-2xl lg:pt-0">
                        <div className="mb-10 lg:mb-0 lg:scale-[65%]">
                            <SignUp className="" />
                        </div>
                        <h2 className="text-center text-[18px] leading-[26px] text-grayText">
                            Subscribe for unlimited designs and web development
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between rounded-2xl bg-[#F8F8F8] p-12 px-4 pt-4 shadow-2xl lg:pt-14">
                        <Image
                            className="mx-auto mb-10 max-h-[280px] lg:mb-10 lg:max-h-[400px]"
                            src={DesignRequestsPNG}
                            alt="WebWunder Design Request Image"
                        />
                        <h2 className="px-8 text-center text-[18px] leading-[26px] text-grayText">
                            Receive your designs in just 3 business days on
                            average
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between rounded-2xl bg-[#F8F8F8] p-12 px-4 pt-4 shadow-2xl lg:pt-12">
                        <Image
                            className="mx-auto mb-10 w-full lg:max-h-[280px] lg:w-auto"
                            src={NewRevisionRequestsPNG}
                            alt="WebWunder New Revision Request Image"
                        />
                        <h2 className="px-8 text-center text-[18px] leading-[26px] text-grayText">
                            We&apos;ll revise the designs until you&apos;re 100%
                            satisfied
                        </h2>
                    </div>
                </div>
                <Items className="mb-12 xl:hidden" />

                <div className="flex w-full justify-center">
                    <Button
                        asChild
                        className="mx-auto w-auto font-normal"
                        variant={'dark'}
                    >
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
        </section>
    )
}
