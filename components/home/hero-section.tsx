
import { Button } from "@/components/ui/button"
import ArrowRightSVG from "@/assets/icons/arrow-right.svg"
import Image from "next/image"
import Circle from "./hero-section/circle"
import WordHighlight from "./hero-section/word-highlight"
import SocialMedia from "@/components/common/social-media"
import Hero2 from "@/public/images/hero-2.png"
import Reveal from "../transitions/reveal"
import BlankScreenTV from "@/public/images/blank-screen-tv.webp"


export default function HeroSection() {

    return (
        <section id="hero"
            className="py-[50px] w-full flex justify-center relative overflow-clip ">
            <Circle className="bg-blue-800 -right-[500px] -bottom-[180px] xl:-right-[150px] xl:-bottom-[190px] " />
            <Circle className="bg-indigo-800 -right-[550px] -bottom-[100px] xl:-right-[350px] xl:-bottom-[100px] " />
            <Circle className="bg-indigo-900 -right-[650px] -top-[200px] xl:-right-[450px] xl:-top-[200px] " />
            {/* <Circle /> */}
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="text-center space-y-4 my-4">
                            <p className="text-primary text-2xl font-extrabold tracking-wider leading-10">
                                With WebWunder to the Digital Top
                            </p>

                            <Reveal>
                                <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">
                                    Turn Your Site Into A Revenue&nbsp;
                                    <WordHighlight word="Powerhouse" />
                                </h1>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="lg:text-xl">Strategically win more customers - no extra add spend needed.</p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <Button className="px-16 sm:px-20 py-7">
                                    Start Your Project Now
                                    <ArrowRightSVG className="ms-4" />
                                </Button>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <SocialMedia 
                                itemClassName="m-0 rounded border border-white bg-white px-3 py-2 text-3xl lg:m-2"
                                className="flex flex-wrap justify-center items-center text-primary max-w-[80%] mx-auto mb-8 lg:mb-0" />
                            </Reveal>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end ">
                        <Reveal right delay={0.6}>
                            <div className="flex justify-center max-w-[640px] relative
                w-[300px] sm:w-[450px] xl:w-[600px]
                ">
                                <Image src={BlankScreenTV}
                                    className=""
                                    alt="WebWunder Skyrocket Rocket Your Website's Performance Video"
                                    placeholder="blur" />
                                <div className="absolute top-2 
                        rounded overflow-clip
                        w-[285px] h-[160px] sm:w-[430px] sm:h-[240px] xl:top-3 xl:w-[573px] xl:h-[320px]
                        ">
                                    <iframe className="w-full h-full" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" referrerPolicy="strict-origin-when-cross-origin" title="How to Skyrocket Your Website’s Performance – WebWunder’s Secret Strategies" width="640" height="360" src="https://www.youtube.com/embed/AZkkrmzveAw?controls=1&amprel=0&ampplaysinline=0&ampmodestbranding=0&ampautoplay=0&ampenablejsapi=1&amporigin=https%3A%2F%2Fwebwunder.local&ampwidgetid=1" id="widget2"></iframe>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>

    )
}