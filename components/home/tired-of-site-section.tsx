import Image from "next/image"
import ArrowRightSVG from "@/assets/icons/arrow-right.svg"
import { Button } from "@/components/ui/button"

import BlankScreenTV from "@/public/images/blank-screen-tv.webp"
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"
import { RevealInView } from "../transitions/reveal"
import Hero2 from "@/public/images/hero-2.png"

export default function TiredOfSiteSection() {
    return (
        <Section className="">
            <div className="container flex flex-col lg:flex-row">
                <div className="basis-1/2 mb-10">
                    <RevealInView delay={0.2}>
                        <Image src={Hero2}
                            alt="WebWunder Hero Image"
                        />
                    </RevealInView>
                </div>
                <div className="basis-1/2 flex flex-col items-center justify-center
                 lg:items-start lg:ps-12">
                    <RevealInView delay={0.2}>
                        <H2 className="font-extrabold mb-4 text-center lg:text-start" >Tired of a site that just sits <WordHighlight word="there" />?</H2>
                        <P className="text-center lg:text-start">At WebWunder, our expertise in AI, CRO strategies, and stunning design transforms your site into a revenue powerhouse. Win more customers and increase your ROAS without spending more on ads. Watch now and see the WebWunder effect in action!</P>
                    </RevealInView>
                    <RevealInView delay={0.2}>
                        <Button className="max-w-[400px] px-10 py-7 lg:mx-auto mt-10" >
                            Schedule An Exclusive Consultation
                            <ArrowRightSVG className="ms-4" />
                        </Button>
                    </RevealInView>
                </div>
            </div>
        </Section >
    )
}