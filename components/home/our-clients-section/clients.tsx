import { ReactNode, useState } from "react"

import PersuasiveTextSVG from "@/assets/icons/business-to-top/persuasive-text.svg"
import Testi1 from "@/public/images/users/testi-1.png"
import Testi2 from "@/public/images/users/testi-2.jpg"
import Testi3 from "@/public/images/users/testi-3.png"
import Testi4 from "@/public/images/users/testi-4.jpg"
import Testi5 from "@/public/images/users/testi-5.jpg"
import Testi6 from "@/public/images/users/testi-6.jpg"

import StarEmpty from "@/assets/icons/star-empty.svg"
import StarFill from "@/assets/icons/star-fill.svg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"

import styles from "./clients.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"
import SliderButtons from "@/components/common/slider-buttons"

export default function Clients() {

    const t = useTranslations('testimonials')

    const content: { title: string, text: string, rating: number, icon: ReactNode }[] = [
        {
            title: 'Anna Tahl',
            text: t('anna-tahl'),
            rating: 4,
            icon: <Image src={Testi1} alt="WebWunder User Image" />
        },
        {
            title: 'Mohaned Sharif',
            text: t('mohaned-sharif'),
            rating: 4,
            icon: <Image src={Testi2} alt="WebWunder User Image" />
        },
        {
            title: 'Wladimir Schmidt',
            text: t('wladimir-schmitt'),
            rating: 4,
            icon: <Image src={Testi3} alt="WebWunder User Image" />
        },
        {
            title: 'Lena Weber',
            text: t('lena-weber'),
            rating: 5,
            icon: <Image src={Testi4} alt="WebWunder User Image" />
        },
        {
            title: 'Justus Becker',
            text: t('justus-becker'),
            rating: 4,
            icon: <Image src={Testi5} alt="WebWunder User Image" />
        },
    ]

    const [api, setApi] = useState<CarouselApi>()

    // <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3  ">
    return (
        <div className="w-full ">

            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {content.map(e => (
                        <CarouselItem className="items-start basis-full md:max-w-[400px]" key={e.title}>
                            <div key={e.title} className={`${styles.card} select-none`}>
                                <div className="flex justify-between w-full">
                                    <div className={`${styles.icon}`}>{e.icon}</div>
                                    <div className={`${styles.rating}`}>
                                        {rating(e.rating, 5)}
                                    </div>
                                </div>
                                <div className={`${styles.title}`}>{e.title}</div>
                                <div className={`${styles.text}`}>{e.text}</div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="bg-primary" />
                <CarouselNext className="bg-primary" /> */}
                <SliderButtons itemCount={content.length} className="mt-8" api={api} />
            </Carousel>
        </div>
    )
}


function rating(rate: number, max: number) {
    const currentRate = new Array(rate).fill(null)
    const otherRate = new Array(max - rate).fill(null)
    return (
        <>
            {currentRate.map((e, i) => (<StarFill key={`fill-${i}`} />))}
            {otherRate.map((e, i) => (<StarEmpty key={`empty-${i}`} />))}
        </>
    )
}