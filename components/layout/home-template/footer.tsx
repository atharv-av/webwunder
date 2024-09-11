import FadeIn from "@/components/transitions/fade-in"
import { useLocale } from "next-intl"
import { Locale } from "@/i18n.config"
import SocialMedia from "@/components/common/social-media"
import Image from "next/image"
import { Link } from "@/services/navigation"
import MailSVG from "@/assets/icons/mail-01.svg"
import TelSVG from "@/assets/icons/phone.svg"
import DotSVG from "@/assets/icons/dot.svg"
import LocaleSwitcher from "@/components/common/locale"
import { app } from "@/config" 

export default function Footer() {

    const locale = useLocale() as Locale
    return (
        <footer className="border-t 
        bg-gradient-to-r to-blue-900 from-indigo-950
        text-primary-foreground
        ">
            <FadeIn>
                <div className="container flex flex-col items-start mx-auto py-12 pb-8" >

                    <div className="mb-12 w-full lg:grid lg:grid-cols-2 lg:gap-8">


                        <div className='text-start mb-12 lg:mb-0'>

                            {/* <h2 className='font-bold text-xl mb-4'>About Us</h2> */}
                            <Link className="flex mb-8 lg:mb-6 " href={`/`}>
                                <Image src="/webwunder-logo-white.png"
                                    className="object-contain lg:w-[400px]"
                                    alt="WebWunder Logo"
                                    width="300"
                                    height="17" />
                            </Link>
                            <p className='text-primary-foreground lg:text-xl lg:max-w-[500px]'>Exceptional websites and marketing that catapult you to the digital top.</p>
                        </div>
                        <div className="lg:flex lg:flex-col lg:justify-center">

                            <h2 className='font-bold text-2xl mb-4'>Contact Us</h2>
                            <div className="flex flex-col flex-wrap gap-3 mb-12 lg:flex-row lg:gap-8">
                                <a href={`mailto:${app.email}`}
                                    className="flex items-center text-primary-foreground text-xl">
                                    <MailSVG className="me-4 text-2xl" />
                                    info@webwunder.de
                                </a>
                                <a href={`tel:${app.tel}`}
                                    className="flex items-center text-primary-foreground text-xl">
                                    <TelSVG className="me-4 text-2xl" />
                                    +49 170 234 6983
                                </a>
                            </div>


                            <h2 className='font-bold text-2xl mb-4'>Socials</h2>
                            <SocialMedia 
                            itemClassName="p-2 text-3xl"
                            className="flex flex-wrap gap-1 text-primary-foreground lg:gap-2" />
                        </div>
                    </div>

                    <div className='border-b opacity-60 w-full mb-12 lg:mb-6'></div>

                    <div className='flex flex-col items-center mb-0 lg:mb-0 lg:flex-row lg:justify-between  w-full'>
                        <div className='flex text-center lg:items-start mb-2 lg:mb-0'>
                            © 2024 WEBWUNDER. All Rights Reserved.
                        </div>

                        <ul className='flex justify-center gap-4 '>
                            <li className='hidden lg:flex items-center py-4 lg:px-4'>
                                <LocaleSwitcher />
                            </li>
                            <li className='flex items-center py-2 lg:px-4'>Terms Of Use</li>
                            <li className="flex items-center ">
                                <DotSVG className="text-xl" />
                            </li>
                            <li className='flex items-center py-2 lg:px-4'>Privacy Policy</li>
                        </ul>

                        <div className='flex items-center py-2 lg:hidden lg:px-4'>
                            <LocaleSwitcher />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}

