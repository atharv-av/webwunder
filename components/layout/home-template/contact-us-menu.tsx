import Image from "next/image"

import ContactUsImg from "@/public/images/contact-us-image-xs.png"
import { ComponentProps } from "react"
import WordHighlight from "@/components/home/hero-section/word-highlight"
import Link from "next/link"


interface Props extends ComponentProps<'div'> { }

export default function ContactUsMenu(props: Props) {

    // const href = paths.pages.contactUs.href
    const href = ''
    return (
        <div {...props}>
            <div className=" md:p-4">
                <Link className="flex justify-center items-center space-x-3" href={href} >
                    <Image className="border border-primary w-10 h-10 object-cover rounded-full " src={ContactUsImg} alt="WebWunder Contact Us Image" />
                    <div className="font-bold text-primary">
                        <WordHighlight word="Contact Us" height={7} />
                    </div>
                </Link>
            </div>
        </div>
    )
}