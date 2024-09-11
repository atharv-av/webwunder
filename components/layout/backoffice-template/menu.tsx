'use client'

import Link from 'next/link'
import { paths } from '@/paths'
import MenuMobile from './menu-mobile'
import Logout from './logout'
import { usePathname } from 'next/navigation'
import Profile from './profile'

export default function Menu() {
    const pathname = usePathname()

    const active = 'border-indigo-600 bg-gradient-to-r from-indigo-100'

    return (
        <nav className="flex h-full flex-col justify-between">
            <div>
                <Profile />
                <ol className="mx-0 hidden flex-col gap-2 py-2 lg:flex">
                    {Object.entries(paths.menu.backoffice).map(([_, value]) => (
                        <li
                            key={value.href}
                            className={`flex border-s-4 ${pathname.includes(value.href) ? active : ''} cursor-pointer`}
                        >
                            <Link
                                scroll
                                className="flex h-full w-full items-center px-4 py-5 text-foreground"
                                href={value.href}
                            >
                                <span className="me-2 text-2xl">
                                    {value.icon}
                                </span>
                                {value.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="flex flex-col items-start gap-4 px-4 py-8">
                {/* <Link
                    scroll
                    className="flex items-center text-foreground"
                    href={paths.pages.settings.href}
                >
                    <span className="me-2">{paths.pages.settings.icon}</span>
                    {paths.pages.settings.name}
                </Link> */}

                <Logout />
            </div>
        </nav>
    )
}
