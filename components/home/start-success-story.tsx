import H2 from "../common/h2"
import P from "../common/p"
import Section from "../common/section"
import WordHighlight from "./hero-section/word-highlight"

import PersonInChair from "@/public/images/person-in-chair.png"
import Cube from "@/public/images/cube.png"
import Image from "next/image"

export default function StartSuccessStorySection() {
    return (
        <Section className="">
            <div className="container flex flex-col items-center ">
                <div className=" xl:grid xl:grid-cols-2 w-full">
                    <div className="flex justify-center items-center p-8 mb-8 xl:mb-0 relative">
                        <Image className="bounce absolute top-0 right-0 w-[70px] sm:w-36" src={Cube} alt="WebWunder Cube Image" />
                        <Image src={PersonInChair} alt="WebWunder Person In Chair Image" />
                    </div>
                    <div className="text-center xl:flex xl:flex-col xl:justify-center xl:ps-16 xl:text-start">
                        <H2 className="mb-10 w-full" >
                            Start Your Success Story With <WordHighlight word="WebWunder" />
                        </H2>
                        <P className="mb-4">
                            Discover how WebWonder seamlessly and effectively transforms your online presence. Begin with a free strategy consultation where we analyze your needs and goals in detail. Whether you already have a website or are starting from scratch, we are ready to realize your vision.
                        </P>
                        <P>
                            Our team of marketing experts designs a tailored concept that transforms your online presence. We create websites that impress and act as customer magnets.
                        </P>
                    </div>
                </div>
            </div>
        </Section>
    )
}
