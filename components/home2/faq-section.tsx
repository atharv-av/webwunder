'use client'

import { cn } from '@/lib/utils'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import React, { useState } from 'react'

import BlueCylinderPNG from '@/public/images/home/faq/blue-cylinder.png'
import GreenDonutPNG from '@/public/images/home/faq/green-donut.png'
import PinkHalfSpherePNG from '@/public/images/home/faq/pink-half-sphere.png'
import Image from 'next/image'
import FadeIn from '../transitions/fade-in'
import { AnimatePresence } from 'framer-motion'

export default function FAQSection(props: Props) {
    const questions: { title: string; text: string }[] = [
        { title: `What makes WebWunder's subscription websites different? `, text: `WebWunder offers low entry costs, all-inclusive updates, and continuous support. We manage everything from design to hosting and maintenance, including monthly design tasks. Plus, we offer a free design refresh every 36 months to keep your site modern without extra costs. Partner with us once, and never worry about your website and design needs again.`, },
        { title: `What does a free design refresh after 36 months mean? `, text: `Every 36 months, we redesign or refresh your website to keep it modern and trendy. This service is included when you stay with us, ensuring your website is always perfect and up-to-date.`, },
        { title: `How fast will I receive my website? `, text: `Typically, it takes 4 to 6 weeks to complete everything, depending on the project's complexity.`, },
        { title: `What happens after my 12-month website contract? `, text: `After 12 months, your plan converts to a maintenance service contract at a lower monthly rate. This keeps your site updated and secure without any hassle.`, },
        { title: `What is included in the service packages? `, text: `Service packages include hosting, backups, continuous online presence, regular updates, and design tasks to keep your website functional and up-to-date.`, },
        { title: `What is a Design Task? `, text: `Each month, you get one (Standard Plan) or two (Pro Plan) design tasks. This can include anything from a flyer, social media content, ad design, image editing, poster, merchandise or packaging design, to presentation design, and more.`, },
        { title: `Are the service packages all-inclusive for updates? `, text: `Yes, for your website and the subpages we initially designed. For new subpages or bigger updates, let's discuss a solution.`, },
        { title: `What happens if I want to stop my maintenance pack? `, text: `Staying on a service pack is essential for site safety and smooth operation. It keeps your site updated, secure, and includes monthly design tasks.`, },
        { title: `How does the Unlimited Design Package work? `, text: `Our Unlimited Design Package is ideal for companies needing constant, high-quality design work. You get unlimited design requests, fast delivery, and priority support for a flat monthly fee.`, },
        { title: `How can I own my website and leave? `, text: `You can buy out your website and handle hosting and updates yourself. The buy-out cost is €4,000 for a "Standard" website and €8,000 for a "Pro" website, similar to a car lease buyout. This gives you full ownership and control.`, },
    ]

    const [selected, setSelected] = useState(0)

    return (
        <section
            className={cn(
                'w-full overflow-x-clip bg-[#f4f7ff]',
                props.className,
            )}
        >
            <div className="container relative px-4">
                <div className="absolute left-0 top-0 h-full w-full">
                    <Image
                        className="absolute -left-32 -top-12"
                        src={PinkHalfSpherePNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute hidden 2xl:-left-28 2xl:-bottom-6 2xl:block"
                        src={GreenDonutPNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute -right-52 top-[50%]"
                        src={BlueCylinderPNG}
                        alt="WebWunder Image"
                    />
                </div>

                <div className={`relative flex w-full flex-col `}>
                    <h2 className="mx-auto mb-6 xl:mb-12 max-w-[700px] text-center text-4.5xl font-bold">
                        Frequently{' '}
                        <br className="lg:hidden" />
                        Asked <span className="text-primary"> Questions</span>
                    </h2>
                    <Accordion className="w-full flex flex-col gap-4" type="single" collapsible>
                        {questions.map((e) => (
                            <AccordionItem
                                key={`item-${e.text}`}
                                value={`item-${e.text}`}
                                className="border p-4 px-6 rounded-xl bg-white"
                            >
                                <AccordionTrigger className="text-start font-bold outline-none hover:no-underline text-lg xl:text-2xl">
                                    <div className='me-4'>{e.title}</div>
                                </AccordionTrigger>
                                <AccordionContent className="xl:text-lg">
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: e.text,
                                        }}
                                    ></p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
