import FadeIn from '@/components/transitions/fade-in'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { app } from '@/config'
import Link from 'next/link'

import Logo from '@/public/webwunder-logo.png'
import { paths } from '@/paths'

export default function Footer() {
    const locale = useLocale() as Locale
    return (
        <footer className="">
            <FadeIn>
                <div className="container px-5">
                    <div className="grid grid-flow-dense grid-cols-2 gap-y-8 lg:flex lg:flex-row-reverse lg:justify-between">
                        <div className="col-span-2 mb-4 flex flex-col text-center lg:w-[400px] lg:items-end">
                            <Link className="mb-4" href={`/`}>
                                <Image
                                    src={Logo}
                                    className="mx-auto w-[336px] object-contain"
                                    alt="WebWunder Logo"
                                />
                            </Link>
                            <p className="text-[16px] text-grayText lg:text-end">
                                End bad designs and endless negotiations. Join
                                WebWunder for effortless, top-tier designs.
                            </p>
                        </div>
                        <div className="col-start-2">
                            <p className="text-[16px] text-grayText">
                                Get in touch
                            </p>
                            <div className="mt-3 flex flex-col gap-x-6 gap-y-3 text-darkbtn lg:mt-3 lg:flex-col lg:gap-y-3">
                                <Link
                                    target="_blank"
                                    href={`mailto:${app.email}`}
                                    className=""
                                >
                                    Write an Email
                                </Link>

                                <Link href={paths.pages.getInTouch.href}>
                                    Send a Message
                                </Link>
                                <Link
                                    target="_blank"
                                    href={paths.pages.bookCall.href}
                                >
                                    Book a call
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://wa.me/+4915114039455"
                                >
                                    Chat on WhatsApp
                                </Link>
                            </div>
                        </div>
                        <div className="col-start-1 row-span-2 ps-4 lg:min-w-max lg:ps-0">
                            <p className="text-[16px] text-grayText">
                                Quick Connect
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-darkbtn lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <a href="#">Get Started</a>
                                {/* <a href={paths.pages.howItWorks.href}>
                                    {paths.pages.howItWorks.name}
                                </a> */}
                                <Link href={paths.pages.service.href}>
                                    {paths.pages.service.name}
                                </Link>
                                <Link href={paths.pages.benefits.href}>
                                    {paths.pages.benefits.name}
                                </Link>
                                <Link href={paths.pages.pricing.href}>
                                    {paths.pages.pricing.name}
                                </Link>
                                <Link href={paths.pages.faq.href}>
                                    {paths.pages.faq.name}
                                </Link>
                            </div>
                        </div>
                        <div className="col-start-1 ps-4 lg:min-w-max lg:ps-0">
                            <p className="text-[16px] text-grayText">
                                Legal Info
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-darkbtn lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <Link href={paths.pages.privacy.href}>
                                    {paths.pages.privacy.name}
                                </Link>
                                <Link href={paths.pages.terms.href}>
                                    {paths.pages.terms.name}
                                </Link>
                                <Link href={paths.pages.imprint.href}>
                                    {paths.pages.imprint.name}
                                </Link>
                                {/* <Link
                                    target="_blank"
                                    href={paths.pages.cookie.href}
                                >
                                    {paths.pages.cookie.name}
                                </Link> */}
                            </div>
                        </div>
                        <div className="row-span-2 lg:min-w-max">
                            <p className="text-[16px] text-grayText">
                                Follow us
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-darkbtn lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/webwunder-io"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=61559097817136"
                                >
                                    Facebook
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/@WebWunder-io"
                                >
                                    YouTube
                                </a>
                                <a
                                    target="_blank"
                                    href="https://dribbble.com/webwunder"
                                >
                                    Dribble
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 mt-12 w-full border-b opacity-60"></div>
                    <div className="mb-6 text-center text-[14px] text-darkbtn lg:text-start">
                        <p>
                            Copyright © 2024{' '}
                            <span className="text-primary">WebWunder</span> All
                            Rights Reserved
                        </p>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}
