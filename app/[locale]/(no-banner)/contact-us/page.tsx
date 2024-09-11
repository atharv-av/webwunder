import Steps from '@/components/contact-us/steps'
import WordHighlight from '@/components/home/hero-section/word-highlight'
import { type Locale } from '@/i18n.config'

import MailSVG from '@/assets/icons/mail-01.svg'
import TelSVG from '@/assets/icons/phone.svg'
import { app } from '@/config'
import SocialMedia from '@/components/common/social-media'

interface Props {
    params: { locale: Locale }
}

// Thank you for your request.
// I'll usually get back to you within the next 24 hours. In the meantime, feel free to check out my projects or take a look at my Insights (only available in German).

export default async function ContactUsPage({ params: { locale } }: Props) {
    return (
        <section className="py-12 pb-16">
            <div className="container px-4">
                <h1 className="mb-16 text-5xl font-bold lg:mb-20 lg:mt-20">
                    <WordHighlight word="Contact Us" />
                </h1>

                <div>
                    <Steps className="mb-20" />

                    <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                        Reach Us Directly:
                    </h2>
                    <div className="mb-12 flex flex-col flex-wrap gap-3 font-bold lg:flex-row lg:gap-8">
                        <a
                            href={`mailto:${app.email}`}
                            className="flex items-center text-xl opacity-80"
                        >
                            <MailSVG className="me-4 text-2xl" />
                            {app.email}
                        </a>
                        <a
                            href={`tel:${app.tel}`}
                            className="flex items-center text-xl opacity-80"
                        >
                            <TelSVG  className="me-4 text-2xl" />
                            +49 170 234 6983
                        </a>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                        Our Socials:
                    </h2>
                    <SocialMedia 
                            itemClassName="p-2 text-3xl"
                            className="flex text-foreground opacity-80" />
                </div>
            </div>
        </section>
    )
}
