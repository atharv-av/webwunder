import imgLandscape from "@/public/images/works/webwonder-works-landscape.jpg"
import img1 from "@/public/images/works/webwonder-works-square-1.jpg"
import img2 from "@/public/images/works/webwonder-works-square-2.jpg"
import img3 from "@/public/images/works/webwonder-works-square-3.jpg"
import img4 from "@/public/images/works/webwonder-works-square-4.jpg"
import Image, { StaticImageData } from "next/image"
import { ComponentProps, ReactNode } from "react"

import styles from "./works.module.scss"
import { AnimatePresence } from "framer-motion"
import FadeIn from "@/components/transitions/fade-in"

interface Props extends ComponentProps<'div'> {
    selected: number
}


type Works = { id: string, class: string, url: string, img: StaticImageData }

export default function Works(props: Props) {

    const items: { [key: string]: Works } = {
        landscape: {
            id: 'landscape',
            class: 'col-span-6 md:col-span-4',
            img: imgLandscape,
            url: 'https://wp.hixstudio.net/collax/portfolio/grow-up-agency-with-powerfull-idea/',
        },
        img1: {
            id: 'img1',
            class: 'col-span-6 md:col-span-2',
            img: img1,
            url: 'https://wp.hixstudio.net/collax/portfolio/grow-up-agency-with-powerfull-idea/',
        },
        img2: {
            id: 'img2',
            class: 'col-span-6 md:col-span-2',
            img: img2,
            url: 'https://wp.hixstudio.net/collax/portfolio/grow-up-agency-with-powerfull-idea/',
        },
        img3: {
            id: 'img3',
            class: 'col-span-6 md:col-span-2',
            img: img3,
            url: 'https://wp.hixstudio.net/collax/portfolio/grow-up-agency-with-powerfull-idea/',
        },
        img4: {
            id: 'img4',
            class: 'col-span-6 md:col-span-2',
            img: img4,
            url: 'https://wp.hixstudio.net/collax/portfolio/grow-up-agency-with-powerfull-idea/',
        },
    }



    const imgs: Works[][] = [
        [
            items.landscape,
            items.img1,
            items.img2,
            items.img3,
            items.img4,
        ],
        [
            {...items.landscape, class:'col-span-6'},
            {...items.img1, class:'h-0 w-0'},
            {...items.img2, class:'h-0 w-0'},
            {...items.img3, class:'h-0 w-0'},
            {...items.img4, class:'h-0 w-0'},
        ],
        [
            {...items.img1, class:'col-span-6'},
            {...items.landscape, class:'h-0 w-0'},
            {...items.img2, class:'h-0 w-0'},
            {...items.img3, class:'h-0 w-0'},
            {...items.img4, class:'h-0 w-0'},
        ],
        [
            {...items.img2, class:'col-span-6'},
            {...items.landscape, class:'h-0 w-0'},
            {...items.img1, class:'h-0 w-0'},
            {...items.img3, class:'h-0 w-0'},
            {...items.img4, class:'h-0 w-0'},
        ],

        [
            {...items.img3, class:'col-span-6  md:col-span-3'},
            {...items.img4, class:'col-span-6  md:col-span-3'},
            {...items.landscape, class:'h-0 w-0'},
            {...items.img1, class:'h-0 w-0'},
            {...items.img2, class:'h-0 w-0'},
        ],

        // [{ ...items.landscape, class: 'col-span-6', }],
        // [{ ...items.img1, class: 'col-span-6', }],
        // [{ ...items.img2, class: 'col-span-6', }],
        // [{ ...items.img3, class: 'col-span-6  md:col-span-3', }, { ...items.img4, class: 'col-span-6  md:col-span-3', }],
    ]

    return (
        <div className={props.className}>
            <div className={`relative grid gap-2  grid-cols-6 min-h-[400px]  ${styles.works}`}>
                    {imgs[props.selected].map((e, i) =>
                        <FadeIn key={e.id} id={e.id} className={e.class}>
                            <a href={e.url} target="_blank">
                                <Image
                                    quality={100}
                                    src={e.img} alt="Webwunder Works Image" />
                            </a>
                        </FadeIn>
                    )}
            </div>
        </div >
    )
}