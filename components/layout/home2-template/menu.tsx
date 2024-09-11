import Link from 'next/link'
import { paths } from '@/paths'
import { Button } from '@/components/ui/button'
import MenuMobile from './menu-mobile'

export default function Menu() {
    return (
        <nav className="mx-0 flex items-center lg:mx-2">
            <ol className="mx-4 hidden gap-12 py-8 lg:flex lg:gap-8">
                {Object.entries(paths.menu.main).map(([key, value]) => (
                    <li
                        key={value.href}
                        className="flex items-center justify-center"
                    >
                        <Link
                            scroll
                            className="text-[14px] text-foreground"
                            href={value.href}
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ol>
            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' ? (
                <Button
                    className="me-2 ms-5 hidden px-10 py-8 lg:flex"
                    variant={'dark'}
                    asChild
                >
                    <Link href={paths.pages.signUp.href}>Sign Up</Link>
                </Button>
            ) : null}

            <MenuMobile />
        </nav>
    )
}
