import H2 from "../common/h2"
import Section from "../common/section"
import { Button } from "@/components/ui/button"
import Boxes from "./business-to-top-section/boxes"
import WordHighlight from "./hero-section/word-highlight"
import ArrowRightSVG from "@/assets/icons/arrow-right.svg"

export default function BusinessToTopSection() {
    return (
        <Section className="bg-[#F7F8FD]">
            <div className="container flex flex-col items-center ">
                <div className="max-w-[650px] text-center">
                    <H2 className="mb-6 w-full" >
                        How WebWonder Takes Your Business <WordHighlight word="To The Top" />
                    </H2>
                    <Button className="px-4 py-7 mb-12">
                        Lets Write Success Stories Together
                        <ArrowRightSVG className="ms-2" />
                    </Button>
                </div>
                <Boxes />
            </div>
        </Section>
    )
}


