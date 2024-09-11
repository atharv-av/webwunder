
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"
import Form from "./contact-us-section/form"
import Anchor from "../common/anchor"

export default function ContactUsSection() {
    return (
        <Section className="bg-[#F7F8FD]">
            <Anchor id="contact-us"></Anchor>
            <div className="container flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse ">
                <div className="flex flex-col justify-center lg:w-1/2 lg:ms-6">
                    <H2 className="mb-8">Fill in the contact form, and we will get back to you within <WordHighlight height={10} word="24 hours." /> </H2>
                    <P>
                        In our non-binding initial consultation, we will discover how WebWonder can optimally support your business. We look forward to learning more about your projects and goals!
                    </P>
                </div>
                <Form className="lg:w-1/2 lg:me-6" />
            </div>
        </Section>
    )
}