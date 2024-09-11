import { Button } from '@/components/ui/button'
import ArrowRightSVG from '@/assets/icons/arrow-right.svg'
import WordHighlight from './hero-section/word-highlight'
import Section from '../common/section'
import H2 from '../common/h2'
import P from '../common/p'

export default function LeaveCompetitionSection() {
    return (
        <Section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-700 text-primary-foreground">
            <div className="container flex flex-col lg:items-center">
                <H2 className="mb-4">
                    Ready To Leave The Competition{' '}
                    <WordHighlight word="Behind" />?
                </H2>
                <P className="mb-8 text-primary-foreground">
                    Schedule your free strategy consultation now and take the
                    first step towards the digital top.
                </P>
                {/* <Button className="max-w-[400px] px-10 py-7 lg:mx-auto " variant="yellow">
                    Schedule An Exclusive Consultation
                    <ArrowRightSVG className="ms-4" />
                </Button> */}

                <a
                    href="https://buy.stripe.com/test_eVa9Er9MgdfNecM144"
                    target="_blank"
                >
                    <Button
                        className="max-w-[400px] px-10 py-7 lg:mx-auto"
                        variant="yellow"
                    >
                        Get Started
                        <ArrowRightSVG className="ms-4" />
                    </Button>
                </a>
            </div>
        </Section>
    )
}
