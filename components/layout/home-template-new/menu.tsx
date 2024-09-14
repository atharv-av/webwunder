import Link from 'next/link'
import { paths } from '@/paths'
import { Button } from '@/components/ui/button'
import MenuMobile from '@/components/layout/home-template-new/menu-mobile'
import { CircleUserRound, MoveUpRight } from 'lucide-react'

export default function Menu() {
    return (
        <nav className="flex items-center gap-3">
            <ol className="mr-32 hidden py-8 lg:flex lg:gap-5">
                {Object.entries(paths.menu.newMain).map(([key, value]) => (
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
                    className="hidden text-base font-medium gap-3 rounded-full bg-white/20 p-5 text-white hover:text-black lg:flex"
                    asChild
                >
                    <Link href={paths.pages.login.href}>
                        <div className='font-inter text-sm'>Log In</div>
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
                        <p className='font-inter text-sm'>Sign Up</p>
                        <MoveUpRight className="text-gray-500" />
                    </Link>
                </Button>
            ) : null}

            <MenuMobile />
        </nav>
    )
}
