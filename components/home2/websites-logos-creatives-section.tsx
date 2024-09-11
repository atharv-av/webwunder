import { cn } from '@/lib/utils'
import Works from './websites-logos-creatives-section/works'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { paths } from '@/paths'

export default function WebsiteLogosCreativesSection(props: Props) {
    return (
        <section
            className={cn('relative w-full bg-[#F4F7FF]', props.className)}
        >
            <div className="container px-4">
                <h2 className="mb-6 text-center text-[35px] font-bold leading-[35px] lg:mb-12 lg:text-[60px] lg:leading-[60px]">
                    Websites, Logos, Creatives{' '}
                    <span className="text-primary">& More</span>
                </h2>
                <Works />

                <div className="lg:flex lg:justify-between lg:px-14">
                    <div className="mb-4 text-center lg:text-start xl:mb-0">
                        <h2 className="mb-4 px-8 text-2xl font-bold lg:mb-3 lg:px-0 lg:text-4xl">
                            Our Exceptional Portfolio at a glance
                        </h2>
                        <p className="text-grayText lg:text-lg">
                            Discover stunning, user-friendly designs that
                            highlight our commitment to excellence and client
                            success.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild className="lg:px-12" variant={'dark'}>
                            <Link href={paths.pages.portfolio.href}>
                                See more work
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
