import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LeftPNG from '@/public/images/home/discover-perfect-fit-section/left.png'
import RightPNG from '@/public/images/home/discover-perfect-fit-section/right.png'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { paths } from '@/paths'

export default function DiscoverPerfectFitSection(props: Props) {
    return (
        <section className={cn('relative w-full', props.className)}>
            <Image
                className="absolute left-0 top-0 mt-4 hidden h-full w-28 object-contain xl:block xl:w-auto"
                src={LeftPNG}
                alt="WebWunder Image"
            />
            <Image
                className="absolute -top-11 right-0 mt-4 hidden h-full w-36 object-contain lg:top-0 xl:block xl:w-auto"
                src={RightPNG}
                alt="WebWunder Image"
            />
            <div className="container relative px-4">
                <div className="">
                    <h2 className="mx-auto mb-4 text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                        Leave the Competition{' '}
                        <span className="text-primary">Behind!</span>
                    </h2>
                    <p className="mx-auto mb-8 max-w-[750px] px-4 text-center text-[18px] text-grayText lg:text-[22px]">
                        Join WebWunder&apos;s subscription web design service and
                        watch your business soar.
                    </p>
                    <div className="flex justify-center">
                        <Button asChild className="bg-[#27DAB7] text-lg font-normal lg:w-auto">
                            <Link
                                href={paths.pages.bookCall.href}
                                target="_blank"
                            >
                                Book a call
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
