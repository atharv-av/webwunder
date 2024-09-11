
import WordHighlight from "./hero-section/word-highlight"
import Section from "../common/section"
import H2 from "../common/h2"
import P from "../common/p"
import Services from "./discover-our-services-section/services"
import Anchor from "../common/anchor"

export default function DiscoverOurServicesSection() {



    return (
        <Section className="text-white
        bg-indigo-950">
            <Anchor id="services"></Anchor>
            <div className="container flex flex-col items-center ">
                <H2 className="mb-8">Discover Our Services That Will Take You To <WordHighlight word="The Top" /> </H2>
                <P className="text-white mb-12">
                    The perfect start begins with the perfect website - and that&aposs just the beginning. At WebWonder, we support you in all areas of digital marketing and sales to quickly reach and dominate the digital summit.
                </P>

               <Services />
            </div>
        </Section>
    )
}