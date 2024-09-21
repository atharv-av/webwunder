// import Anchor from '@/components/common/anchor'
// import AdvantageSection from '@/components/home2/advantage-section'
// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import FAQSection from '@/components/home2/faq-section'
// import ThreeEasyStepsSection from '@/components/home2/three-easy-steps-section'
// import GetInTouchSection from '@/components/home2/get-in-touch-section'
// import HeroSection from '@/components/home2/hero-section'
// import ComprehensiveWebWunderSection from '@/components/home2/comprehensive-webwunder-section'
// import MembershipSection from '@/components/home2/membership-section'
// import StepsSection from '@/components/home2/steps-section'
// import TestimonialsSecton from '@/components/home2/testimonials-section'
// import ToolsSection from '@/components/home2/tools-section'
// import TraditionalOutsourcingSection from '@/components/home2/traditional-outsourcing-section'
// import WebsiteLogosCreativesSection from '@/components/home2/websites-logos-creatives-section'
// import WhyWebWunderSubscriptionSection from '@/components/home2/why-webwunder-subscription-section'
// import { type Locale } from '@/i18n.config'
// import HassleFreeSection from '@/components/home2/hassle-free-section'
// import UnlimitedSection from '@/components/home2/unlimited-design-section'
// import ChooseWebwunderSection from '@/components/home2/choose-webwunder-section'
// import { HomeProvider } from '@/providers/home'

// interface Props {
//     params: { locale: Locale }
// }

// export default async function HomePage({ params: { locale } }: Props) {
//     return (
//         <>
//             <div className="flex flex-col items-center">
//                 <HomeProvider>
//                     <Anchor id="home"></Anchor>
//                     <HeroSection />
//                     <ToolsSection className="my-12" />
//                     <Anchor id="benefits"></Anchor>
//                     <AdvantageSection className="mb-12 mt-6" />
//                     <TestimonialsSecton className="mb-12 xl:mb-24" />
//                     <WhyWebWunderSubscriptionSection className="mb-12 xl:mb-24" />
//                     <Anchor id="how-it-works"></Anchor>
//                     <ThreeEasyStepsSection className="mb-12 xl:mb-24" />

//                     <HassleFreeSection className="mb-12 xl:mb-24" />
//                     <UnlimitedSection className="-mb-12 pb-12 xl:mb-0 xl:pb-80" />
//                     <ChooseWebwunderSection className="mb-0" />
//                     <Anchor id="pricing"></Anchor>
//                     <ComprehensiveWebWunderSection className="pb-12 pt-12 xl:pb-24 xl:pt-24" />
//                     <Anchor id="service"></Anchor>
//                     <WebsiteLogosCreativesSection className="pb-12 xl:pb-24" />
//                     <Anchor id="faq"></Anchor>
//                     <FAQSection className="pb-12 xl:pb-24" />
//                     <Anchor id="get-in-touch"></Anchor>
//                     <GetInTouchSection className="py-12 xl:py-24" />
//                     <DiscoverPerfectFitSection className="py-12 xl:mb-24 xl:py-24" />
//                 </HomeProvider>
//             </div>
//         </>
//     )
// }

import BrandsCarousel from '@/components/home-new/brands-carousel'
import HomeLanding from '@/components/home-new/home-landing'
import WhyWebWunder from '@/components/home-new/why-webwunder'
import AllInOne from '../../../components/home-new/all-in-one'
import JoinUs from '@/components/home-new/join-us'
import StayOnTop from '@/components/home-new/stay-on-top'
import PurchasePlans from '@/components/home-new/purchase-plans'
import ContactUs from '@/components/home-new/contact-us'
import OurPortfolio from '@/components/home-new/our-portfolio'
import Reviews from '@/components/home-new/reviews'
import FAQs from '@/components/home-new/faqs'
import GetInTouch from '@/components/home-new/get-in-touch'
import Footer from '@/components/layout/home-template-new/footer'

export default function HomePage() {
    return (
        <div className="overflow-hidden">
            <HomeLanding />
            <BrandsCarousel />
            <WhyWebWunder />
            <AllInOne />
            <JoinUs />
            <StayOnTop />
            <PurchasePlans />
            <ContactUs />
            <OurPortfolio />
            <Reviews />
            <FAQs />
            <GetInTouch />
            <Footer />
        </div>
    )
}
