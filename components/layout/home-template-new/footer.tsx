import FadeIn from '@/components/transitions/fade-in'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { app } from '@/config'
import Link from 'next/link'

import Logo from '@/public/assets/webwunder-logo.png'
import { paths } from '@/paths'

const paymentMethods = [
    { image: '/images/paypal.png', height: 50, width: 60 },
    { image: '/images/applepay.png', height: 50, width: 50 },
    { image: '/images/mastercard.png', height: 50, width: 50 },
    { image: '/images/americanexpress.png', height: 50, width: 50 },
    { image: '/images/googleplay.png', height: 50, width: 70 },
    { image: '/images/visa.png', height: 50, width: 50 },
    { image: '/images/bancontact.png', height: 50, width: 50 },
    { image: '/images/sepa.png', height: 50, width: 50 },
]


const Footer = () => {
    const locale = useLocale() as Locale

    return (
        <footer className="bg-[#020202] px-2 py-6 lg:px-20 lg:pb-8">
            <FadeIn>
                <div className="container mx-auto">
                    {/* Mobile Layout */}
                    <div className="flex flex-col items-center lg:hidden">
                        <Link href="/" className="mb-4">
                            <Image
                                src={Logo}
                                className="w-48 object-contain"
                                alt="WebWunder Logo"
                            />
                        </Link>
                        <p className="mb-6 text-center text-base text-white/50">
                            Winning Websites. Unshakable Support.
                        </p>
                        <p className="mb-4 text-base font-bold text-white">
                            We Accept:
                        </p>
                        <div className="mb-8 grid grid-cols-8 place-items-center gap-4">
                            {paymentMethods.map((item, index) => (
                                    <Image key={index}
                                        src={item.image}
                                        alt="Payment"
                                        height={item.height}
                                        width={item.width}
                                    />
                            ))}
                        </div>

                        <div className="mb-8 flex w-full flex-col gap-6">
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    Get in touch
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <Link href={`mailto:${app.email}`}>
                                        Write an Email |
                                    </Link>
                                    <Link href={paths.pages.getInTouch.href}>
                                        Send a Message |
                                    </Link>
                                    <Link href={paths.pages.bookCall.href}>
                                        Book a call |
                                    </Link>
                                    <Link href="https://wa.me/+4915114039455">
                                        Chat on WhatsApp
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    Quick connect
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <Link href="/signup">Sign up |</Link>
                                    <Link href="#">Pricing |</Link>
                                    <Link href="/login">Sign in |</Link>
                                    <Link href="#">Portfolio |</Link>
                                    <Link href={paths.pages.service.href}>
                                        Services |
                                    </Link>
                                    <Link href="#">FAQs |</Link>
                                    <Link href={paths.pages.benefits.href}>
                                        Benifits
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    Follow Us
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <a href="#">Instagram |</a>
                                    <a href="#">Dribble |</a>
                                    <a href="#">Twitter |</a>
                                    <a href="#">Behance |</a>
                                    <a href="#">Facebook |</a>
                                    <a href="#">Pinterest |</a>
                                    <a href="#">YouTube</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-4 text-center text-xs text-white">
                            <p className="text-center text-base text-white/50">
                                Legal Pages
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-1">
                                <Link href="/privacy-policy">
                                    Privacy Policy |
                                </Link>
                                <Link href="/terms">Terms & Conditions |</Link>
                                <Link href="/imprint">Imprint</Link>
                            </div>
                            <p className="text-white/50">
                                Copyright © 2024.{' '}
                                <span className="text-[#5D59E1]">
                                    WebWunder
                                </span>
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block">
                        <div className="grid grid-flow-dense grid-cols-2 gap-y-8 lg:flex lg:flex-row-reverse lg:justify-between">
                            <div className="col-span-2 mb-4 flex flex-col text-center lg:w-[400px] lg:items-end">
                                <Link className="mb-4" href={`/`}>
                                    <Image
                                        src={Logo}
                                        className="mx-auto w-[336px] object-contain"
                                        alt="WebWunder Logo"
                                    />
                                </Link>
                                <p className="font-dm-sans text-[18px] font-normal text-gray-500 text-white/50 lg:text-end">
                                    Winning Websites. Unshakable Support.
                                </p>
                                <p className="mt-5 text-end font-dm-sans text-[18px] font-bold text-white">
                                    We Accept:
                                </p>
                                <div className="mt-3 grid grid-cols-4 place-items-center gap-5">
                                    {paymentMethods.map((item, index) => (
                                         <Image key={index}
                                         src={item.image}
                                         alt="Payment"
                                         height={item.height}
                                         width={item.width}
                                     />
                                    ))}
                                </div>
                            </div>
                            <div className="row-span-2 lg:min-w-max">
                                <p className="invisible text-[16px] text-gray-500">
                                    Follow us
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                    <a target="_blank" href="#">
                                        Dribble
                                    </a>
                                    <a target="_blank" href="#">
                                        Behance
                                    </a>
                                    <a target="_blank" href="#">
                                        Pinterest
                                    </a>
                                </div>
                            </div>
                            <div className="row-span-2 lg:min-w-max">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    Follow Us
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                    <a target="_blank" href="#">
                                        Instagram
                                    </a>
                                    <a target="_blank" href="#">
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
                                <p className="invisible text-[16px] text-gray-500">
                                    Follow us
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
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
                                    <a
                                        target="_blank"
                                        href={paths.pages.faq.href}
                                    >
                                        FAQs
                                    </a>
                                </div>
                            </div>
                            <div className="col-start-1 row-span-2 ps-4 lg:min-w-max lg:ps-0">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    Quick Connect
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                    <Link href="/signup">Sign up</Link>
                                    <Link href="/login">Sign in</Link>
                                    <Link href={paths.pages.service.href}>
                                        Services
                                    </Link>
                                    <Link href={paths.pages.benefits.href}>
                                        Benefits
                                    </Link>
                                </div>
                            </div>
                            <div className="col-start-2">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    Get in touch
                                </p>
                                <div className="mt-3 flex flex-col gap-x-6 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:gap-y-3">
                                    <Link
                                        target="_blank"
                                        href={`mailto:${app.email}`}
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
                        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                            <div className="flex flex-row items-center gap-4 font-dm-sans text-[18px] font-normal text-white">
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms">Term & Conditions</Link>
                                <Link href="imprint">Imprint</Link>
                            </div>
                            <p className="font-dm-san text-[18px] font-normal text-white/50">
                                Copyright © 2024.{' '}
                                <span className="text-[#5D59E1]">
                                    WebWunder
                                </span>
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}

export default Footer
