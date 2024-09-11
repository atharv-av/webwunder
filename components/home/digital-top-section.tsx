import { Button } from "@/components/ui/button"
import ArrowRightSVG from "@/assets/icons/arrow-right.svg"
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"
import { RevealInView } from "../transitions/reveal"

export default function DigitalTopSection() {
    return (
        <Section className="
            text-primary-foreground
            bg-gradient-to-r from-indigo-900 to-primary
        ">
            <RevealInView delay={0.2} className="container flex flex-col">
                <H2 className="mb-4">With <WordHighlight height={8} word="WebWunder" /> to the digital top: Create a website that not only excites but strategically wins customers</H2>
                <P className="text-primary-foreground mb-4">Even the most beautiful website must perform - WebWonder transforms design into business success.</P>
                <Button className="max-w-[400px] px-10 py-7 lg:ms-0 lg:me-auto " variant="yellow">
                    Start Your Project Now
                    <ArrowRightSVG className="ms-4" />
                </Button>
            </RevealInView>
        </Section>
    )
}