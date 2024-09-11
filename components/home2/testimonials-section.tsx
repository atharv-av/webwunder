import { cn } from '@/lib/utils'
import BGJPG from '@/public/images/home/testimonials/bg-image.jpg'
import FigmaPNG from '@/public/images/home/testimonials/figma.png'
import Image from 'next/image'

export default function TestimonialsSecton(props: Props) {
    return (
        <section
            className={cn('relative w-full overflow-clip', props.className)}
        >
            <Image
                src={BGJPG}
                alt="WebWunder BG Image"
                className="absolute left-0 top-0 h-full w-full object-cover"
            />
            <div className="container relative flex min-h-[50svh] w-full items-center justify-center">
                <div className="flex max-w-[1400px] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-[16px] text-white opacity-80 lg:text-[18px]">
                        The Pros Want In
                    </h2>
                    <p className="text-[25px] leading-[30px] text-white lg:text-[50px] lg:leading-[60px]">
                        &quot;WebWunder pushes Figma to its limits, delivering
                        unparalleled designs and bespoke web development.&quot;
                    </p>
                    <Image src={FigmaPNG} alt="WebWunder Figma Image" />
                </div>
            </div>
        </section>
    )
}
