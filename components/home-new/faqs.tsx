import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
    {
        question:
            "What makes WebWunder's websites different, and why should I choose WebWunder?",
        answer: "At WebWunder, we're entrepreneurs like you, so we understand the challenges you face. Our custom, template-free websites are designed to drive sales, reduce costs, and save you time. With continuous AI optimizations and hassle-free updates, you'll never need another agency. We handle the heavy lifting so you can focus on scaling your business with confidence.",
    },
    {
        question:
            'Why is your website model subscription-based? Why not a one-time payment?',
        answer: '[Content for this answer would go here]',
    },
    {
        question:
            'What is the Unlimited Design Plan, and why did you introduce it?',
        answer: '[Content for this answer would go here]',
    },
    {
        question: 'What does a free design refresh after 36 months mean?',
        answer: '[Content for this answer would go here]',
    },
    {
        question: 'How fast will I receive my website?',
        answer: '[Content for this answer would go here]',
    },
    {
        question: 'What happens if I want to cancel my subscription?',
        answer: '[Content for this answer would go here]',
    },
    {
        question: 'Is my website optimized for search engines?',
        answer: '[Content for this answer would go here]',
    },
    {
        question:
            "I don't have any content, branding, or even a clear vision for my website. Can WebWunder help with that?",
        answer: '[Content for this answer would go here]',
    },
]

const FAQs = () => {
    return (
        <div className="flex items-center justify-center bg-black">
            <div className="flex w-4/5 items-start justify-between bg-black">
                <div className="mt-20 flex flex-col items-start justify-start gap-4">
                    <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                        Frequently Asked Questions
                    </Badge>
                    <p className="font-archivo text-[45px] font-bold text-white">
                        Got Questions?
                    </p>
                    <p className="font-archivo text-[26px] font-bold text-white">
                        Here are some quick answers.
                    </p>
                    <p className="font-archivo text-base font-normal text-white">
                        Need more? Just reach out!
                    </p>
                    <Button
                        size={'base'}
                        className="flex items-center justify-between gap-3 bg-white"
                    >
                        <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                            Book a Call
                        </p>
                        <ArrowRight size={15} className="text-[#24252A]" />
                    </Button>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="mt-20 w-3/5 space-y-2"
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={`item-${index + 1}`}
                            value={`item-${index + 1}`}
                            className="overflow-hidden rounded-lg border border-transparent data-[state=open]:border-white/20"
                        >
                            <AccordionTrigger className="px-4 py-2 text-left font-archivo text-xl font-bold text-white hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 font-archivo text-sm font-normal text-white/50">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs
