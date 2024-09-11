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
    const questions: {
        title: string
        items: { title: string; text: string }[]
    }[] = [
        {
            title: 'General Information',
            items: [
                {
                    title: 'What makes you different from other subscription-based design services?',
                    text: 'WebWunder excels in both design and custom web development. Our efficient approach uses cutting-edge tools to minimize your time input while ensuring world-class quality and fast delivery. With WebWunder and AWORK, everything is managed within our software—no emails, no meetings, just seamless collaboration with experts. Join us for unmatched efficiency and quality.',
                },
                {
                    title: 'Why not just hire a full-time designer?',
                    text: 'Hiring a senior designer costs over €100K annually, plus benefits. With WebWunder’s monthly plan, you can pause and resume anytime, ensuring you only pay for what you need. Plus, you get access to a diverse team, not just one designer.',
                },
                {
                    title: 'Why not work with a freelancer or agency?',
                    text: 'Freelancers can be unreliable and agencies are expensive and slow. WebWunder offers a better experience for mid-market and enterprise-level companies. Try us out as your in-house extension!',
                },
                {
                    title: 'What is the difference between Web Design and Web Development?',
                    text: 'Web design focuses on visual appearance and user experience. Web development handles the technical implementation. With WebWunder, you’re covered on both fronts. Our packages include design, development, and ongoing maintenance.',
                },
                {
                    title: 'Why are good web experiences and designs important?',
                    text: 'Good web experiences and designs create a positive first impression, reflect professionalism, and build credibility. They enhance user engagement, boost search engine rankings, and turn your site into a revenue powerhouse.',
                },
                {
                    title: 'Who are the designers?',
                    text: 'Johannes (CEO & Founder), Rene (CTO & Full-Stack Developer), and Ryan (Lead Designer & Front-End Developer) lead the charge with over 60 years of combined experience. Backed by talented designers, we deliver outstanding results swiftly and efficiently.',
                },
                {
                    title: 'What programs do you design in?',
                    text: 'We use various software to ensure the best results, primarily using FIGMA.',
                },
            ],
        },
        {
            title: 'Membership & Services',
            items: [
                {
                    title: 'When shall I choose which package?',
                    text: `
                        <span style="font-weight:700">Design (€3,995/m):</span>  For unlimited design services like branding, illustrations, and social media with fast delivery (~72 hours).<br/><br/>
                        <span style="font-weight:700">Website (€7,995/m):</span> For web development needs, including Webflow (~1 week) or custom sites (~4 weeks), with hosting and upgrades.<br/><br/>
                        <span style="font-weight:700">Design & Website (€9,995/m):</span> For comprehensive design and web development, double requests, and seamless integration of design elements into your website, saving €2,000/month.
                    `,
                },
                {
                    title: 'What design services do you offer?',
                    text: 'We offer branding, presentation design, illustration, packaging and merch design, email design, web design, social media creative, print design, and ad design.',
                },
                {
                    title: 'What web development services do you offer?',
                    text: "We offer Webflow and WordPress for quick projects and complex custom web development for advanced needs. Affordable, tailored solutions with top-quality results, no matter the project's size.",
                },
                {
                    title: 'Do you also offer catalog, magazine, and book designs?',
                    text: 'In general, we offer design services for everything! But be realistic—the bigger the task, the longer it takes. Designing a whole catalog takes longer than a flyer.',
                },
                {
                    title: 'How do I request designs?',
                    text: "We invite you to AWORK, our project management software—you'll love it! With AWORK, you can easily create new design requests and track their status and delivery all in one place. No other tools or sheets needed. We're proud of the simplicity and efficiency we offer our clients.",
                },
                {
                    title: 'Is there a limit to how many requests I can have?',
                    text: "No limits! Add as many design requests as you want. They'll be delivered one by one. With our Design & Website package, you can have two requests handled simultaneously.",
                },
                {
                    title: 'How fast will I receive my designs?',
                    text: 'Most requests are completed in just three days or less. More complex projects may take longer.',
                },
                {
                    title: 'How long does it take to receive my website?',
                    text: 'Webflow or WordPress projects (1-3 pages) typically deliver within a week if all content is provided on time. Larger or custom projects take about 4 weeks.',
                },
                {
                    title: "What if I don't like the design?",
                    text: "No problem! We'll keep revising until you're completely satisfied.",
                },
                {
                    title: 'What if I only have a single request?',
                    text: 'No problem! Pause your subscription once your request is completed and resume when you have more design needs.',
                },
            ],
        },
        {
            title: 'Policies & Features',
            items: [
                {
                    title: "Are there any refunds if I don't like the service?",
                    text: 'Refunds are not available due to the custom and high-quality nature of the work.',
                },
                {
                    title: 'How does the pause feature work?',
                    text: 'Billing cycles are based on a 31-day period. Use the service for part of the month, pause, and resume later without losing any days.',
                },
            ],
        },
    ]

    const [selected, setSelected] = useState(0)

    return (
        <section
            className={cn(
                'w-full overflow-x-clip bg-[#f4f7ff]',
                props.className,
            )}
        >
            <div className="container relative">
                <div className="absolute left-0 top-0 h-full w-full">
                    <Image
                        className="absolute -left-32 -top-12"
                        src={PinkHalfSpherePNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute hidden 2xl:-bottom-24 2xl:block"
                        src={GreenDonutPNG}
                        alt="WebWunder Image"
                    />
                    <Image
                        className="absolute -right-52 top-[50%]"
                        src={BlueCylinderPNG}
                        alt="WebWunder Image"
                    />
                </div>

                {/* mobile */}
                <div className={`relative flex w-full flex-col xl:hidden`}>
                    <h2 className="mx-auto mb-8 max-w-[700px] text-center text-4.5xl font-bold">
                        Frequently
                        <br className="lg:hidden" />
                        Asked <span className="text-primary"> Questions</span>
                    </h2>
                    <Accordion className="w-full" type="single" collapsible>
                        {questions.map((e) => (
                            <div key={e.title} className="mb-8">
                                <h2 className="text-xl font-bold text-primary">
                                    {e.title}
                                </h2>

                                {e.items.map((ee, i) => (
                                    <AccordionItem
                                        key={`item-${ee.text}`}
                                        value={`item-${ee.text}`}
                                        className="py-1"
                                    >
                                        <AccordionTrigger className="text-start font-bold outline-none hover:no-underline">
                                            {ee.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-lg">
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: ee.text,
                                                }}
                                            ></p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </div>
                        ))}
                    </Accordion>
                </div>

                {/* desktop */}
                <div className={`relative hidden w-full xl:block`}>
                    <h2 className="mb-10 text-6xl font-bold">
                        Frequently
                        <br className="" />
                        Asked <span className="text-primary"> Questions</span>
                    </h2>
                    <div className="grid-cols-5 lg:grid">
                        <div className="col-span-2 flex flex-col gap-8">
                            {questions.map((e, i) => (
                                <h2
                                    key={e.title}
                                    onClick={() => setSelected(i)}
                                    className={`cursor-pointer text-2xl font-bold ${selected === i ? 'text-primary' : 'text-grayText'}`}
                                >
                                    {e.title}
                                </h2>
                            ))}
                        </div>
                        <div className="col-span-3">
                            <h2 className="text-xl font-bold text-primary"></h2>
                            <Accordion
                                className="w-full"
                                type="single"
                                collapsible
                            >
                                <AnimatePresence mode="wait">
                                    <FadeIn
                                        key={questions[selected].title}
                                        id={questions[selected].title}
                                    >
                                        {questions[selected].items.map((e) => (
                                            <AccordionItem
                                                key={`item-desktop-${e.text}`}
                                                value={`item-${e.text}`}
                                                className="py-4"
                                            >
                                                <AccordionTrigger className="text-start font-bold outline-none hover:no-underline">
                                                    {e.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-lg">
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: e.text,
                                                        }}
                                                    ></p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </FadeIn>
                                </AnimatePresence>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
