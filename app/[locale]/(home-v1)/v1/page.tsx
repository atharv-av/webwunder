import AestheticsValueTrustSection from "@/components/home/aesthetics-value-trust-section"
import BusinessToTop from "@/components/home/business-to-top-section"
import ContactUsSection from "@/components/home/contact-us-section"
import CreativeWorksSection from "@/components/home/creative-works-section"
import DigitalTopSection from "@/components/home/digital-top-section"
import DiscoverOurServicesSection from "@/components/home/discover-our-services-section"
import HeroSection from "@/components/home/hero-section"
import LaunchWithUsSection from "@/components/home/launch-with-us-section"
import LeaveCompetitionSection from "@/components/home/leave-competition-section"
import OurClientsSection from "@/components/home/our-clients-section"
import QuestionsSection from "@/components/home/questions-section"
import SimpleStepsSection from "@/components/home/simple-steps-section"
import StartSuccessStorySection from "@/components/home/start-success-story"
import TiredOfSiteSection from "@/components/home/tired-of-site-section"
import WeAreProfessionalsSection from "@/components/home/we-are-professionals-section"
import WebwunderTeamSection from "@/components/home/webwunder-team-section"
import { type Locale } from "@/i18n.config"

interface Props {
    params: { locale: Locale }
}



export default async function HomePage({ params: { locale } }: Props) {


    return (
        <>

            <div className="flex flex-col items-center">
                {/* <div className="p-3">
                        <Link className="px-3 mx-2" href={'/de'}>DE</Link>
                        <Link className="px-3 mx-2" href={'/en'}>EN</Link>
                        </div> */}

                <HeroSection />
                <DigitalTopSection />
                <TiredOfSiteSection />
                <AestheticsValueTrustSection />
                <BusinessToTop />
                <OurClientsSection />
                <StartSuccessStorySection />
                <SimpleStepsSection />
                <LeaveCompetitionSection />
                <CreativeWorksSection />
                <WeAreProfessionalsSection />
                <DiscoverOurServicesSection />
                <WebwunderTeamSection />
                <ContactUsSection />
                <LaunchWithUsSection />
                <QuestionsSection />
            </div>
            {/* <ScrollContext.Provider value={{ refs }}>
                <Header />
                <Main>

                </Main>
            </ScrollContext.Provider> */}
        </>
    )
}