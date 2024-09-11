import { Button } from '@/components/ui/button'
import ArrowRightSVG from '@/assets/icons/arrow-right.svg'
import WordHighlight from './hero-section/word-highlight'
import Section from '../common/section'
import H2 from '../common/h2'
import P from '../common/p'
import Circle from './launch-with-us-section/circle'
import MailSVG from '@/assets/icons/mail-02.svg'
import PhoneSVG from '@/assets/icons/phone-call-01.svg'
import { app } from '@/config'
import { Link } from '@/services/navigation'
import { paths } from '@/paths'

export default function LaunchWithUsSection() {
    return (
        <Section className="relative bg-[#F7F8FD] px-2 pt-4 lg:pt-4">
            <div className="container relative flex flex-col overflow-clip rounded-3xl bg-gradient-to-r from-blue-800 to-blue-500 p-12 px-6 text-primary-foreground lg:my-10">
                <Circle className="-bottom-[180px] -right-[500px] bg-blue-800 xl:-bottom-[190px] xl:-right-[150px]" />
                <Circle className="-bottom-[100px] -right-[550px] bg-indigo-800 xl:-bottom-[100px] xl:-right-[350px]" />
                <Circle className="-right-[650px] -top-[200px] bg-indigo-900 xl:-right-[450px] xl:-top-[200px]" />
                <div className="relative grid xl:grid-cols-2 xl:gap-8">
                    <div className="mb-4 px-6 md:mb-8">
                        <H2 className="mb-4 text-2xl">
                            Have an interesting project? We have time,
                            let&apos;s chat.
                        </H2>
                    </div>
                    <div className="md:flex md:items-center md:justify-center">
                        <div className="grid grid-cols-2 gap-4 xl:flex xl:gap-6">
                            <div className="flex cursor-pointer items-center rounded-xl border border-transparent px-4 py-4 text-primary-foreground duration-150 ease-in-out hover:scale-110 hover:border-primary-foreground hover:bg-primary hover:pb-6 hover:pt-3 xl:text-3xl hover:xl:px-12">
                                <Link
                                    className="mx-auto flex items-center justify-center"
                                    href={'/'}
                                >
                                    {/* paths.pages.contactUs.href */}
                                    <WordHighlight height={7}>
                                        <div className="flex items-center gap-2 py-2">
                                            <MailSVG className="text-3xl xl:me-2 xl:text-4xl" />
                                            <h2>Write to us</h2>
                                        </div>
                                    </WordHighlight>
                                </Link>
                            </div>

                            <div className="flex cursor-pointer items-center rounded-xl border border-transparent px-4 py-4 text-primary-foreground duration-150 ease-in-out hover:scale-125 xl:text-3xl hover:xl:px-12">
                                <a
                                    href="https://calendly.com/yabuking84/30min"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <PhoneSVG className="text-3xl xl:text-4xl" />
                                    <h2>Book a call</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
