
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import Questions from "./questions-section/questions"
import Anchor from "../common/anchor"

export default function QuestionsSection() {
    return (
        <Section className="">
            <Anchor id="faq"></Anchor>
            <div className="container flex flex-col items-center">
                <H2 className="mb-8">Do you have any <WordHighlight word="questions?" /> </H2>
                <Questions />
            </div>
        </Section>
    )
}