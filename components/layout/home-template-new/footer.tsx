import FadeIn from '@/components/transitions/fade-in'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { app } from '@/config'
import Link from 'next/link'

import Logo from '@/public/assets/webwunder-logo.png'
import { paths } from '@/paths'

const paymentMethods = [
    {
        image: '/images/paypal.png',
    },
    {
        image: '/images/applepay.png',
    },
    {
        image: '/images/mastercard.png',
    },
    {
        image: '/images/americanexpress.png',
    },
    {
        image: '/images/googleplay.png',
    },
    {
        image: '/images/visa.png',
    },
    {
        image: '/images/bancontact.png',
    },
    {
        image: '/images/sepa.png',
    },
]

const Footer = () => {
    const locale = useLocale() as Locale
    return (
        <footer className="mt-6 px-20">
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
                            <p className="text-gray-500 lg:text-end text-white/50 text-[18px] font-normal font-dm-sans">
                                Winning Websites. Unshakable Support.
                            </p>
                            <p className="mt-5 text-end font-bold text-white text-[18px] font-dm-sans">
                                We Accept:
                            </p>
                            <div className="mt-3 grid grid-cols-4 gap-5">
                                {paymentMethods.map((item, index) => (
                                    <Image
                                        key={index}
                                        src={item.image}
                                        alt="Payment"
                                        height={25}
                                        width={50}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="row-span-2 lg:min-w-max">
                            <p className="text-[16px] text-gray-500 invisible">
                                Follow us
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-white text-[18px] font-normal font-dm-sans lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <a
                                    target="_blank"
                                    href="#"
                                >
                                    Dribble
                                </a>
                                <a
                                    target="_blank"
                                    href="#"
                                >
                                    Behance
                                </a>
                                <a target="_blank" href="#">
                                    Pintrest
                                </a>
                            </div>
                        </div>

                        <div className="row-span-2 lg:min-w-max">
                            <p className="text-[16px] text-white/50 font-normal font-dm-sans">
                                Follow Us
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-white text-[18px] font-normal font-dm-sans lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <a
                                    target="_blank"
                                    href="#"
                                >
                                    Instagram
                                </a>        <a
                                    target="_blank"
                                    href="#"
                                >
                                    Twitter
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
                            </div>
                        </div>
                        <div className="row-span-2 lg:min-w-max">
                            <p className="text-[16px] text-gray-500 invisible">
                                Follow us
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-white text-[18px] font-normal font-dm-sans lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                <a
                                    target="_blank"
                                    href={paths.pages.pricing.href}
                                >
                                    Pricing
                                </a>
                                <a
                                    target="_blank"
                                    href={paths.pages.portfolio.href}
                                >
                                    Portfolio
                                </a>
                                <a target="_blank" href={paths.pages.faq.href}>
                                    FAQs
                                </a>
                            </div>
                        </div>
                        <div className="col-start-1 row-span-2 ps-4 lg:min-w-max lg:ps-0">
                            <p className="text-[16px] text-white/50 font-normal font-dm-sans">
                                Quick Connect
                            </p>
                            <div className="mt-3 flex flex-col gap-x-4 gap-y-3 text-white text-[18px] font-normal font-dm-sans lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
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
                        <div className="col-start-2">
                            <p className="text-[16px] text-white/50 font-normal font-dm-sans">
                                Get in touch
                            </p>
                            <div className="mt-3 flex flex-col gap-x-6 gap-y-3 text-white text-[18px] font-normal font-dm-sans lg:mt-3 lg:flex-col lg:gap-y-3">
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
                    </div>
                    <div className="mb-6 mt-12 w-full border-b opacity-60"></div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-4 text-white font-normal text-[18px] font-dm-sans">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms">Term & Conditions</Link>
                            <Link href="imprint">Imprint</Link>
                        </div>
                        <p className="text-white/50 font-normal text-[18px] font-dm-san">
                            Copyright © 2024.{' '}
                            <span className="text-[#5D59E1]">WebWunder</span>.
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}

export default Footer
