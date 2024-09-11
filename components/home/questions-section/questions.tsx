import { ComponentProps } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


interface Props extends ComponentProps<'div'> { }

export default function Questions(props: Props) {
    const questions: { title: string, text: string }[] = [
        { title: 'How does a project proceed?', text: 'Your WebWonder project starts with custom texts and a unique design. After your final approval and precise programming, we take your website live.' },
        { title: 'How long does it take for my website to go online?', text: 'Within 48 hours, we set up a "Coming Soon" page. Your complete website usually goes live within four weeks, depending on your feedback and specific requirements.' },
        { title: `How much does collaboration cost?`, text: `The cost of our services varies depending on the scope and complexity of your project. Let's discuss your requirements to create a tailored quote.` },
        { title: `How does WebWonder handle changes or updates after project completion?`, text: `Each project includes a 6-month maintenance contract that covers minor adjustments. This contract can be extended after it expires to ensure your website remains up to date.` },
        { title: `What sets WebWonder apart from other agencies?`, text: `WebWonder prioritizes efficiency and effectiveness. We optimize your website for sales psychology while maintaining stunning design. Our streamlined process ensures quick results with minimal time commitment and no unnecessary discussions.` },
        { title: `Is my WebWonder website SEO optimized?`, text: `We implement essential on-page SEO practices, including meta tags and optimized loading speeds, as a standard. For advanced off-page SEO, we recommend specialists, but we actually suggest focusing on dedicated sales campaigns with our Campaign Wonder service for better results.` },
        { title: `In which languages can my website be created?`, text: `We create websites in any language, from Arabic to Greek.` },
        { title: `How do you ensure that you understand my target audience?`, text: `We have built websites for almost every industry and conducted extensive research. During our kick-off meeting, we ensure a deep understanding of your target audience. If there are any gaps, you help us fill them. We pride ourselves on being excellent listeners!` },
        { title: `Can I keep my domain?`, text: `Yes, we can link your existing domain to your new website or help you set up a new domain.` },
        { title: `Do I need to come in person?`, text: `No, all our services are digitally available. We conduct all meetings by phone or video call. Personal meetings are possible by arrangement.` },
    ]
    return (
        <div className={`${props.className} flex w-full`}>
            <Accordion className="w-full" type="single" collapsible>
                {questions.map((e, i) => (
                    <AccordionItem key={`item-${e.text}`} value={`item-${e.text}`} className='py-6'>
                        <AccordionTrigger className="text-start hover:no-underline text-xl font-extrabold outline-none">{e.title}</AccordionTrigger>
                        <AccordionContent className="text-lg ">
                            {e.text}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}