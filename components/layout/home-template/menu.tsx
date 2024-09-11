import Link from 'next/link'
import MenuMobile from './menu-mobile'
import { paths } from '@/paths'

export default function Menu() {
    return (
        <nav className="mx-2">
            <ol className="mx-4 hidden space-x-6 md:flex">
                {Object.entries(paths.menu.main).map(([key, value]) => (
                    <li key={value.href}>
                        <Link
                            scroll
                            className="font-bold text-foreground"
                            href={value.href}
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ol>

            <MenuMobile />
        </nav>
    )
}
