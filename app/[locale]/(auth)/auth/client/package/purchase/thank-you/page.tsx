import { paths } from '@/paths'

import FireworksSVG from '@/assets/icons/fireworks.svg'
import CheckSVG from '@/assets/icons/check-circle.svg'
import Link from 'next/link'

export default function ThankYouPage() {
    // paths.pages.projects.href
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div>
                <h2 className="mb-8 text-4xl font-bold">
                    Thank you!
                    <FireworksSVG className="bounce ms-4 inline-block text-4xl text-primary md:text-5xl" />
                </h2>
                <p className="max-w-[600px] text-xl">
                    We will activate the plan, as soon as the payment clears. Meanwhile
                    you can check the status{' '}
                    <Link
                        className="font-extrabold text-primary"
                        href={paths.pages.clientProjects.href}
                    >
                        here
                    </Link>
                    .
                </p>
            </div>
            {/* <div className="hidden relative md:flex w-1/2 justify-center">
                <CheckSVG className="absolute top-0 left-2 text-[250px] text-green-500" />
            </div> */}
        </div>
    )
}
