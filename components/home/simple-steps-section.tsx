import H2 from "../common/h2"
import P from "../common/p"
import Section from "../common/section"
import WordHighlight from "./hero-section/word-highlight"
import Steps from "./simple-steps-section/steps"


export default function SimpleStepsSection() {
    return (
        <Section className="bg-[#F7F8FD]">
            <div className="container flex flex-col items-center ">
                <div className="max-w-[650px] text-center">
                    <H2 className="mb-12 lg:mb-18 w-full" >
                        In Just Four Simple Steps, We Catapult You To The <WordHighlight word="Digital Top" />
                    </H2>
                </div>
                <Steps />
            </div>
        </Section>
    )
}
