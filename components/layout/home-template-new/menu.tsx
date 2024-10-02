import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { paths } from '@/paths'
import { Button } from '@/components/ui/button'
import MenuMobile from '@/components/layout/home-template-new/menu-mobile'
import { ArrowDown, CircleUserRound, Flag, MoveUpRight } from 'lucide-react'
import { languageData } from '@/langauge'
import {
    Select,
    SelectContent,
    SelectLabel,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'

export default function Menu() {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])

    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en'
        setChangeLanguage(newLang)
        localStorage.setItem('lang', newLang)
        location.reload()
    }

    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }

    const newMainMenu = {
        benefits: {
            href: '/#join-us',
            name: languageData?.navItems?.[changeLanguage]?.benefits,
        },
        yourWebsite: {
            href: '/#all-in-one',
            name: languageData?.navItems?.[changeLanguage]?.yourWebsite,
        },
        prices: {
            href: '/#purchase-plans',
            name: languageData?.navItems?.[changeLanguage]?.prices,
        },
        portfolio: {
            href: '/portfolio',
            name: languageData?.navItems?.[changeLanguage]?.portfolio,
        },
        faq: {
            href: '/#faqs',
            name: languageData?.navItems?.[changeLanguage]?.faqs,
        },
        contact: {
            href: '/#contact-us',
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
                            className="font-inter text-sm text-white"
                            href={value.href}
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ol>
            <Select onValueChange={handleLanguageChange} value={changeLanguage === 'de' ? 'german' : 'english'}>
                <SelectTrigger className="w-28 hidden rounded-full bg-white/20 p-3 gap-2 text-base font-medium text-white border-none hover:text-white lg:flex">
                    {/* <SelectValue /> */}
                    <Image src={getLanguageIcon(changeLanguage)} alt='Language' width={25} height={25} />
                    <p className='text-white'>{changeLanguage === 'de' ? 'DE' : 'EN'}</p>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="flex flex-row justify-around">
                        <SelectItem value="english" className="flex items-center gap-2">
                            <Image src="/images/united-kingdom.png" alt='English' width={25} height={25} />
                            <span>EN</span>
                        </SelectItem>
                        <SelectItem value="german" className="flex items-center gap-2">
                            <Image src="/images/germany.png" alt='German' width={25} height={25} />
                            <span>DE</span>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' ? (
                <Button
                    size={'sm'}
                    className="hidden gap-3 rounded-full bg-white/20 p-5 text-base font-medium text-white hover:text-white lg:flex"
                    asChild
                >
                    <Link href={paths.pages.login.href}>
                        <div className="font-inter text-sm">
                            {languageData?.navItems?.[changeLanguage]?.login}
                        </div>
                        <CircleUserRound />
                    </Link>
                </Button>
            ) : null}
            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' ? (
                <Button
                    size={'sm'}
                    className="hidden gap-3 rounded-full bg-white p-5 text-base font-medium lg:flex"
                    asChild
                >
                    <Link href={paths.pages.login.href}>
                        <p className="font-inter text-sm">
                            {languageData?.navItems?.[changeLanguage]?.signup}
                        </p>
                        <MoveUpRight className="text-gray-500" />
                    </Link>
                </Button>
            ) : null}

            <MenuMobile />
        </nav>
    )
}