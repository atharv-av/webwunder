"use client"

import { forwardRef } from "react"
import H2 from "../common/h2"
import Section from "../common/section"
import WordHighlight from "./hero-section/word-highlight"
import Clients from "./our-clients-section/clients"
import Anchor from "../common/anchor"

const OurClientsSection = forwardRef<HTMLElement>(function OurClientsSection(props, ref) {
    return (
        <Section ref={ref}  className="text-primary-foreground
            bg-indigo-950">
            <Anchor id="testimonials"></Anchor>
            <div className="container flex flex-col items-center ">
                <div className="max-w-[650px] text-center">
                    <H2 className="mb-14 w-full" >
                        Our Clients At The <WordHighlight word="Digital Top" />
                    </H2>
                </div>
                <Clients />
            </div>
        </Section>
    )
})

export default OurClientsSection