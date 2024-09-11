
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"
import Team from "./webwunder-team-section/team"
import Anchor from "../common/anchor"

export default function WebwunderTeamSection() {
    return (
        <Section className="">
            <div className="container flex flex-col items-center">
                <Anchor id="our-team"></Anchor>
                <H2 className="mb-8">The WebWunder <WordHighlight word="Team" /> </H2>
                <P className="mb-4">
                    At WebWunder, Johannes is the mastermind and strategist, while Rene and Ryan make excellence possible. Together, we form an incredibly efficient and effective team with decades of experience delivering outstanding results quickly.
                </P>
                <P className="mb-20">
                    Our proven teamwork in various companies and projects has consistently exceeded expectations and created real value for our clients.
                </P>

                <Team />
            </div>
        </Section>
    )
}