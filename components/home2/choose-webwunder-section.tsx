import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import BlankScreenTV from '@/public/images/blank-screen-tv.webp'
import Cylinder from '@/public/images/home/choose-webwunder/cylinder.png'
import DonutEdgedPink from '@/public/images/home/choose-webwunder/donut-edged-pink.png'
import DonutGreen from '@/public/images/home/choose-webwunder/donut-green.png'
import HalfSpherePink from '@/public/images/home/choose-webwunder/half-sphere-pink.png'
import Polygon3dPink from '@/public/images/home/choose-webwunder/polygon-3d-pink.png'
import Image from 'next/image'
import Link from 'next/link'
import { paths } from '@/paths'

export default function ChooseWebwunderSection(props: Props) {
    return (
        <section
            className={cn(
                'w-full overflow-clip bg-[#29292F] text-white',
                props.className,
            )}
        >
            <div className="absolute hidden h-full w-full xl:block">
                <Image
                    className="absolute left-10 top-14 2xl:left-16 2xl:top-24"
                    src={HalfSpherePink}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute right-10 top-14 2xl:right-16 2xl:top-24"
                    src={Polygon3dPink}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute right-[10%] top-1/2 2xl:right-[10%] 2xl:top-1/2"
                    src={DonutEdgedPink}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute left-[13%] top-1/2 2xl:left-[13%] 2xl:top-1/2"
                    src={DonutGreen}
                    alt="Webwunder Image"
                />
            </div>

            <div className="container px-4 py-12 xl:pt-36">
                <div className="mb-12 flex flex-col gap-6 text-center">
                    <h2 className="font-bold text-4xl xl:text-6xl">
                        Why Choose WebWunder? Clear, Risk-Free Pricing and{' '}
                        <span className="text-primary">Expert Management</span>
                    </h2>
                    <p className="text-white xl:text-lg">
                        Choose WebWunder and never worry about your website or
                        design needs again. Our pricing is clear and risk-free,
                        ensuring you get maximum value without surprises. Stay
                        ahead with a cutting-edge, expertly managed online
                        presence. Let us handle the details while you watch your
                        business soar.
                    </p>
                    <div>
                        <Button className="w-full bg-[#27DAB7] text-lg font-normal xl:w-auto">
                            <Link target='_blank' href={paths.pages.bookCall.href}>
                                Book a call
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative flex w-[300px] max-w-[640px] justify-center sm:w-[450px] xl:w-[600px]">
                        <Image
                            src={Cylinder}
                            className="absolute -bottom-[50px] w-full lg:-bottom-[80px]"
                            alt="WebWunder Image"
                        />
                        <Image
                            src={BlankScreenTV}
                            className="relative"
                            alt="WebWunder Skyrocket Rocket Your Website's Performance Video"
                            placeholder="blur"
                        />
                        <div className="absolute top-2 h-[160px] w-[285px] overflow-clip rounded sm:h-[240px] sm:w-[430px] xl:top-3 xl:h-[320px] xl:w-[573px]">
                            <iframe
                                className="h-full w-full"
                                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="How to Skyrocket Your Website's Performance – WebWunder’s Secret Strategies"
                                width="640"
                                height="360"
                                src="https://www.youtube.com/embed/AZkkrmzveAw?controls=1&amprel=0&ampplaysinline=0&ampmodestbranding=0&ampautoplay=0&ampenablejsapi=1&amporigin=https%3A%2F%2Fwebwunder.local&ampwidgetid=1"
                                id="widget2"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
