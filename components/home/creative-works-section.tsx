"use client"

import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import TabMenu from "./creative-works-section/tab-menu"
import { useState } from "react"
import Works from "./creative-works-section/works"
import { Button } from "@/components/ui/button"
import ArrowRightSVG from "@/assets/icons/arrow-right.svg"
import Anchor from "../common/anchor"

export default function CreativeWorksSection() {
    const [selected, setSelected] = useState(0)
    return (
        <Section className="">
            <Anchor id="projects"></Anchor>
            <div className="container flex flex-col items-center">
                <H2 className="mb-4">Creative <WordHighlight word="Works" /> </H2>
                <TabMenu className="mb-8" selected={selected} onSelect={setSelected} />
                <Works className="mb-12 w-full lg:w-auto" selected={selected} />
                <Button className="px-8 py-7 mb-8 text-lg">
                    Schedule a Personal Consulation
                    <ArrowRightSVG className="ms-2" />
                </Button>
            </div>
        </Section>
    )
}