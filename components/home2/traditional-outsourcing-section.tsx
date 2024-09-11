import { cn } from '@/lib/utils'

import WLogoSVG from '@/public/images/home/traditional-outsourcing/w-logo.svg'
import Items from './traditional-outsourcing-section/items'

export default function TraditionalOutsourcingSection(props: Props) {
    return (
        <section className={cn('w-full bg-[#f4f7ff]', props.className)}>
            <div className="container px-4">
                <h2 className="mx-auto mb-4 max-w-[700px] text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                    Traditional Hiring or Outsourcing?{' '}
                    <span className="text-primary"> Neither.</span>
                </h2>
                <p className="mx-auto mb-8 max-w-[700px] px-4 text-center text-[18px] text-grayText lg:text-[22px] xl:mb-12">
                    Let&apos;s face it: old methods of scaling design and
                    development are relics of the past. You don&apos;t need an
                    agency or freelancer—you need a seamless extension to your
                    in-house team.
                </p>

                <Items />

                <div className="grid gap-4 rounded-3xl bg-primary p-8 text-white lg:grid-cols-3">
                    <div className="flex items-center justify-center lg:col-span-1">
                        <WLogoSVG className="mx-auto text-8xl lg:text-[280px]" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 text-center lg:col-span-2 lg:gap-2 lg:text-start">
                        <div className="text-lg font-bold">THE BETTER WAY</div>
                        <h2 className="text-2xl font-bold lg:text-4xl">
                            The WebWunder Way
                        </h2>
                        <p className="text-lg text-white">
                            Ditch the old hassles. With WebWunder, get seamless,
                            top-notch design and web development. We ensure fast
                            delivery and a deep understanding of each project,
                            so your input is minimal, and the results are
                            outstanding. Limited slots mean you always get VIP
                            treatment. Join us and smile as your projects come
                            to life effortlessly!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
