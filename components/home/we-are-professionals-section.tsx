import { ReactNode } from "react"
import H2 from "../common/h2"
import Section from "../common/section"
import WordHighlight from "./hero-section/word-highlight"

import AbstractSVG from "@/assets/icons/professionals-in/abstract.svg"
import Typo3SVG from "@/assets/icons/professionals-in/typo3.svg"
import AdobeAeSVG from "@/assets/icons/professionals-in/adobe-ae.svg"
import AdobePsSVG from "@/assets/icons/professionals-in/adobe-ps.svg"
import AdobeXdSVG from "@/assets/icons/professionals-in/adobe-xd.svg"
import AdobeIlSVG from "@/assets/icons/professionals-in/adobe-il.svg"
import FigmaSVG from "@/assets/icons/professionals-in/figma.svg"
import InvisionSVG from "@/assets/icons/professionals-in/invision.svg"
import NextSVG from "@/assets/icons/professionals-in/next.svg"
import NuxtSVG from "@/assets/icons/professionals-in/nuxt.svg"
import ReactSVG from "@/assets/icons/professionals-in/react.svg"
import WordpressSVG from "@/assets/icons/professionals-in/wordpress.svg"
import SketchSVG from "@/assets/icons/professionals-in/sketch.svg"
import VueSVG from "@/assets/icons/professionals-in/vue.svg"
import WebflowSVG from "@/assets/icons/professionals-in/webflow.svg"
import ZeplinSVG from "@/assets/icons/professionals-in/zeplin.svg"


export default function WeAreProfessionalsSection() {

    const pros: { icon: ReactNode, title: string,  }[] = [
        {title:'Sketch',icon: <SketchSVG/>},
        {title:'Typo3',icon: <Typo3SVG/>},
        {title:'Abstract',icon: <AbstractSVG/> },
        {title:'Adobe Ae',icon: <AdobeAeSVG/> },
        {title:'Adobe Ps',icon: <AdobePsSVG/> },
        {title:'Adobe Xd',icon: <AdobeXdSVG/> },
        {title:'Adobe Il',icon: <AdobeIlSVG/> },
        {title:'Figma',icon: <FigmaSVG/> },
        {title:'Invision',icon: <InvisionSVG/> },
        {title:'Wordpress',icon: <WordpressSVG/> },
        {title:'React',icon: <ReactSVG/> },
        {title:'Next',icon: <NextSVG/> },
        {title:'Vue',icon: <VueSVG/> },
        {title:'Nuxt',icon: <NuxtSVG/> },
        {title:'Webflow',icon: <WebflowSVG/> },
        {title:'Zeplin',icon: <ZeplinSVG/> },
    ]


    return (
        <Section className="bg-[#F7F8FD]">
            <div className="container flex flex-col items-center ">
                <div className="max-w-[650px] text-center">
                    <H2 className="mb-12 lg:mb-18 w-full" >
                        We Are <WordHighlight word="Professionals" /> In:
                    </H2>
                </div>
                <div className="w-full flex flex-wrap justify-center max-w-[650px]">
                    {pros.map((e,i)=>(
                        <div key={e.title} className="flex items-center m-2 px-6 py-3 bg-white rounded-lg border border-primary">
                            <div className="icon me-2 text-primary">{e.icon}</div>
                            <div className="title text-primary font-bold">{e.title}</div>
                        </div>
                    ))}

                </div>
            </div>
        </Section>
    )
}


