import PurplePolygonPNG from '@/public/images/home/creative-partner/purple-polygon.png'
import YellowConePNG from '@/public/images/home/creative-partner/yellow-cone.png'
import BlueTriangle3DPNG from '@/public/images/home/creative-partner/blue-triangle-3d.png'
import PurpleHalfDonut from '@/public/images/home/creative-partner/purple-half-donut.png'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function CreativePartnerSection(props: Props) {
    return (
        <section className={cn('relative overflow-x-clip', props.className)}>
            <div className="absolute left-0 top-0 h-full w-full">
                <Image
                    className="absolute -top-10 right-6 w-[28px] object-contain lg:-right-[150px] lg:w-[68px]"
                    src={PurplePolygonPNG}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute left-6 top-10 w-[37px] object-contain lg:-left-40 lg:w-[95px]"
                    src={YellowConePNG}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute -bottom-5 left-6 w-[37px] object-contain lg:hidden"
                    src={BlueTriangle3DPNG}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute -bottom-5 right-6 w-[37px] object-contain lg:hidden"
                    src={PurpleHalfDonut}
                    alt="Webwunder Image"
                />
            </div>
            <div className="container px-4">
                <h2 className="mb-4 text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                    The Best Creative Partner You&apos;ll{' '}
                    <br className="lg:hidden" />
                    <span className="text-primary">Ever Have</span>
                </h2>
                <p className="text-grayText px-12 text-center text-[18px] lg:text-[22px]">
                    No more cost questions. Enjoy your in-house extension!
                </p>
            </div>
        </section>
    )
}
