
'use client'
import Link from 'next/link'
import { paths } from '@/paths'
import { Button } from '@/components/ui/button'
import MenuMobile from '@/components/layout/home-template-new/menu-mobile'
import { CircleUserRound, MoveUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { languageData } from '@/langauge'
export default function Menu() {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])

    const newMainMenu = {
        benefits: {
            href: '/#benefits',
            name:  languageData?.navItems?.[changeLanguage]?.benefits,
        },
        yourWebsite: {
            href: '/#your-website',
            name: languageData?.navItems?.[changeLanguage]?.yourWebsite,
        },
        prices: {
            href: '/#prices',
            name: languageData?.navItems?.[changeLanguage]?.prices,
        },
        portfolio: {
            href: '/portfolio',
            name: languageData?.navItems?.[changeLanguage]?.portfolio,
        },
        faq: {
            href: '/#faq',
            name: languageData?.navItems?.[changeLanguage]?.faqs,
        },
        contact: {
            href: '/#join-webwunder',
            name: languageData?.navItems?.[changeLanguage]?.contact,
        },
       
        
    }
    return (
        <nav className="flex items-center gap-3">
            <ol className="mr-32 hidden py-8 lg:flex lg:gap-5">
                {Object.entries(newMainMenu).map(([key, value]) => (
                    <li
                        key={value.href}
                        className="flex items-center justify-center"
                    >
                        <Link
                            scroll
                            className="text-sm font-inter text-white"
                            href={value.href}
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ol>
            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' ? (
                <Button
                    size={'sm'}
                    className="hidden text-base font-medium gap-3 rounded-full bg-white/20 p-5 hover:text-white text-white lg:flex"
                    asChild
                >
                    <Link href={paths.pages.login.href}>
                        <div className='font-inter text-sm'>{ languageData?.navItems?.[changeLanguage]?.login}</div>
                        <CircleUserRound />
                    </Link>
                </Button>
            ) : null}
            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' ? (
                <Button
                    size={'sm'}
                    className="hidden text-base font-medium gap-3 rounded-full bg-white p-5 lg:flex"
                    asChild
                >
                    <Link href={paths.pages.login.href}>
                        <p className='font-inter text-sm'>{ languageData?.navItems?.[changeLanguage]?.signup}</p>
                        <MoveUpRight className="text-gray-500" />
                    </Link>
                </Button>
            ) : null}

            <MenuMobile />
        </nav>
    )
}
