import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ContactCardProps {
    width: string
    bgColor: string
    tag: string
    title: string
    description: string
    buttonText: string
    buttonTarget: string
}

const contactCards = [
    {
        width: 'lg:w-1/3 w-full',
        bgColor: 'bg-[#FB421F]',
        tag: 'Call',
        title: 'Book a 15-Minute Call',
        description:
            "In just 15 minutes, we'll cut to the chase and show you how WebWunder can transform your business. We value your time—because we’re entrepreneurs too.",
        buttonText: 'Book Now',
        buttonTarget: '#',
    },
    {
        width: 'lg:w-1/4 w-full',
        bgColor: 'bg-[#25D366]',
        tag: 'Chat',
        title: 'Prefer to Chat First?',
        description:
            "Connect with us on WhatsApp for a quick conversation. We're here to help!",
        buttonText: 'Chat on WhatsApp',
        buttonTarget: '#',
    },
    {
        width: 'lg:w-[22%] w-full',
        bgColor: 'bg-[#4148FA]',
        tag: 'Email',
        title: 'Get in Touch',
        description:
            "Prefer to reach out first? Send us your questions, and we'll reply quickly.",
        buttonText: 'Send a Message',
        buttonTarget: '#',
    },
]

const ContactCard: React.FC<ContactCardProps> = ({
    width,
    bgColor,
    tag,
    title,
    description,
    buttonText,
    buttonTarget,
}) => {
    return (
        <div
            className={`flex lg:h-80 h-fit w-fit flex-col items-start justify-between ${bgColor} ${width} rounded-xl p-8`}
        >
            <div className="flex flex-col gap-2">
                <div className="h-fit w-fit rounded-full border border-white bg-transparent px-2 py-1 font-archivo text-sm font-normal text-white">
                    {tag}
                </div>
                <p className="font-archivo text-[26px] font-bold text-white">
                    {title}
                </p>
                <p className="font-archivo text-sm font-normal text-white">
                    {description}
                </p>
            </div>
            <Button
                size={'sm'}
                className="gap-2 rounded-full lg:mt-0 mt-4 bg-[#24252A] p-4 font-archivo text-sm font-medium sm:gap-3 sm:p-5 lg:flex"
                asChild
            >
                <Link href={buttonTarget} className="">
                    <p className="font-archivo text-[15px] font-normal text-white sm:text-sm">
                        {buttonText}
                    </p>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                        <ArrowRight
                            size={16}
                            className="font-light text-black"
                        />
                    </div>
                </Link>
            </Button>
        </div>
    )
}

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center gap-4 bg-black">
            <Badge className="mt-10 bg-[#5D59E1] font-archivo text-sm font-normal">
                Contact Us
            </Badge>
            <p className="font-archivo lg:text-[45px] text-[25px] font-bold text-white">
                Let&apos;s Get Started!
            </p>
            <div className="flex flex-col items-center justify-center lg:gap-3 gap-5 lg:flex-row lg:px-0 px-6">
                {contactCards.map((card, index) => (
                    <ContactCard
                        key={index}
                        bgColor={card.bgColor}
                        tag={card.tag}
                        title={card.title}
                        description={card.description}
                        width={card.width}
                        buttonTarget={card.buttonTarget}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContactUs
