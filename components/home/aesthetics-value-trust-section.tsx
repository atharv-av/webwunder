"use client"

import { useMemo, useState } from "react"
import PillSelect from "./austhetics-value-trust-section/pill-select"
import WordHighlight from "./hero-section/word-highlight"
import Image from "next/image"

import SectionImage from "@/public/images/aesthetic-value-trust-img-wide.png"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"

import FadeIn from "@/components/transitions/fade-in"
import { Button } from "@/components/ui/button"

import { AnimatePresence, motion } from "framer-motion"


export default function AestheticsValueTrustSection() {

    const [selected, setSelected] = useState(0)

    const content = useMemo<{ title: string, subTitle: string, text: string }>(() => {
        switch (selected) {
            case 0:
                return {
                    title: `Aesthetics Meets `,
                    subTitle: `Functionality`,
                    text: `A beautiful website is great, but true value lies in functionality. At WebWonder, we blend attractive design with effective sales strategies to optimize high conversion rates, turning visitors into customers.`
                }
            case 1:
                return {
                    title: `Invest In Your `,
                    subTitle: `Image`,
                    text: `A professionally designed website enhances your brand's perceived value, allowing you to command higher prices and improve profit margins. Presenting a sophisticated and intuitive online presence sets a premium standard for your services or products.`
                }
            case 2:
                return {
                    title: `From Standard To `,
                    subTitle: `Extraordinary`,
                    text: `Say goodbye to standard web presences. We design every element so visitors immediately understand your offerings and trust you. Clear calls to action and sharp texts guide them to take desired actions seamlessly.`
                }
            default:
                return {
                    title: ``,
                    subTitle: ``,
                    text: ``
                }
        }
    }, [selected])


    return (
        <Section className="lg:pt-2">
            <div className="container flex flex-col items-center justify-center">
                <PillSelect className="mb-12" onSelect={setSelected} selected={selected} />
                <AnimatePresence mode="wait">
                    <FadeIn key={content.title} id={content.title} className="max-w-[650px]">
                        <H2 className="text-center font-extrabold mb-6 w-full" >{content.title} <WordHighlight word={content.subTitle} /></H2>
                        <P className="text-center mb-8 w-full">{content.text}</P>
                    </FadeIn>
                </AnimatePresence >

                <Image src={SectionImage} alt="Aesthetic Value Trust Image" />
            </div>
        </Section>
    )
}


