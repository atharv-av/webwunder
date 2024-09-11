import { paths } from '@/paths'
import { Link } from '@/services/navigation'

import FireworksSVG from '@/assets/icons/fireworks.svg'
import CheckSVG from '@/assets/icons/check-circle.svg'

export default function Submitted() {

    // paths.pages.projects.href
    return (
        <div className="flex">
            <div>
                <h2 className="mb-8 text-4xl font-bold">
                    Thank you for your request!
                    <FireworksSVG className="bounce ms-4 inline-block text-4xl md:text-5xl text-primary" />
                </h2>
                <p className="max-w-[600px] text-xl">
                    I&apos;ll usually get back to you within the next 24 hours. In
                    the meantime, feel free to check out our{' '}
                    <Link
                        className="font-extrabold text-primary"
                        href={'/'}
                    >
                        projects
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
