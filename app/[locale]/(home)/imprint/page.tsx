// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import Link from 'next/link'
// import Sliders from '@/components/common/login-register/sliders'

// export default function ImprintPage() {
//     return (
//         <div className="flex flex-col items-center">
//             <section className="mb-12 mt-12 w-full xl:mb-18">
//                 <div className="container px-4">
//                     <div className="text-center xl:text-start">
//                         <h1 className="text-[50px] font-bold leading-[50px] tracking-tighter xl:text-[60px] xl:leading-[60px]">
//                             Imprint
//                         </h1>
//                     </div>
//                 </div>
//             </section>

//             <section className="w-full">
//                 <div className="container flex flex-col px-4 xl:flex-row-reverse xl:gap-8">
//                     <div className="grid gap-4 xl:basis-1/2 xl:gap-4">
//                         <Sliders className="mb-8" />
//                         <Content
//                             className="mb-6 hidden xl:block"
//                             item={{
//                                 title: 'Liability for Links',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Our offer contains links to external websites of
//                                 third parties, on whose contents we have no
//                                 influence. Therefore, we cannot assume any
//                                 liability for these external contents. The
//                                 respective provider or operator of the sites is
//                                 always responsible for the content of the linked
//                                 sites.
//                             </p>
//                         </Content>
//                         <Content
//                             className="hidden xl:block"
//                             item={{
//                                 title: 'Liability for Content',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Our offer contains links to external websites of
//                                 third parties, on whose contents we have no
//                                 influence. Therefore, we cannot assume any
//                                 liability for these external contents. The
//                                 respective provider or operator of the sites is
//                                 always responsible for the content of the linked
//                                 sites.
//                             </p>
//                         </Content>
//                     </div>
//                     <div className="grid gap-4 xl:basis-1/2 xl:gap-4">
//                         <Content item={{ title: 'Skylumina GmbH' }}>
//                             <p className="text-lg text-grayText">
//                                 Horster Park 43, <br />
//                                 4731 Raeren, Belgium <br />
//                                 Company Number: 0800882676 <br />
//                                 Managing Director: Johannes Eidens (M.A.)
//                             </p>
//                         </Content>
//                         <Content item={{ title: 'Contact Information' }}>
//                             <p className="text-lg text-grayText">
//                                 Email:{' '}
//                                 <Link
//                                     target="_blank"
//                                     className="font-bold text-primary"
//                                     href={'mailto:info@webwunder.de'}
//                                 >
//                                     info@webwunder.de
//                                 </Link>
//                             </p>
//                         </Content>
//                         <Content item={{ title: 'Data Protection Officer' }}>
//                             <p className="text-lg text-grayText">
//                                 Ryan Matthew Quines <br />
//                                 Email:{' '}
//                                 <Link
//                                     target="_blank"
//                                     className="font-bold text-primary"
//                                     href={'mailto:datenschutz@webwunder.de'}
//                                 >
//                                     datenschutz@webwunder.de
//                                 </Link>
//                             </p>
//                         </Content>
//                         <Content
//                             item={{
//                                 title: 'Services Provided by Webwunder.de',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Webwunder.de is a project of Skylumina GmbH,
//                                 offering subscription-based website design,
//                                 development, and maintenance services. Our
//                                 services also include design tasks that are part
//                                 of our subscription plans. Website plans have a
//                                 minimum term of 12 months and automatically
//                                 transition into Service Packs (Standard or Pro)
//                                 depending on the original website plan. There
//                                 are no refunds due to the customized nature of
//                                 our work; however, revisions and feedback loops
//                                 are included within the normal scope.
//                             </p>
//                         </Content>
//                         <Content
//                             item={{
//                                 title: 'Dispute Resolution and Consumer Rights',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Skylumina GmbH does not participate in dispute
//                                 resolution procedures before a consumer
//                                 arbitration board
//                             </p>
//                         </Content>
//                         <Content
//                             className="xl:hidden"
//                             item={{
//                                 title: 'Liability for Links',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Our offer contains links to external websites of
//                                 third parties, on whose contents we have no
//                                 influence. Therefore, we cannot assume any
//                                 liability for these external contents. The
//                                 respective provider or operator of the sites is
//                                 always responsible for the content of the linked
//                                 sites.
//                             </p>
//                         </Content>
//                         <Content
//                             className="xl:hidden"
//                             item={{
//                                 title: 'Liability for Content',
//                             }}
//                         >
//                             <p className="text-lg text-grayText">
//                                 Our offer contains links to external websites of
//                                 third parties, on whose contents we have no
//                                 influence. Therefore, we cannot assume any
//                                 liability for these external contents. The
//                                 respective provider or operator of the sites is
//                                 always responsible for the content of the linked
//                                 sites.
//                             </p>
//                         </Content>
//                     </div>
//                 </div>
//             </section>

//             <DiscoverPerfectFitSection className="py-12 xl:mb-24 xl:py-24" />
//         </div>
//     )
// }

// type Item = {
//     title: string
//     text?: string
// }

// function Content(props: Props<{ item: Item }>) {
//     return (
//         <div className={props.className}>
//             <h2 className={`mt-6 mb-2 text-3xl font-bold xl:text-4xl`}>
//                 {props.item.title}
//             </h2>
//             {props.children || (
//                 <p className="text-base text-grayText">{props.item.text}</p>
//             )}
//         </div>
//     )
// }

import ImprintBreadcrumb from '@/components/imprint/imprint-breadcrumb'
import ImprintContent from '@/components/imprint/imprint-content'
import PolicyContent from '@/components/utils/policy-content'
import React from 'react'

const ImprintPage = () => {
    return (
        <div>
            <PolicyContent
                title="Imprint"
                breadcrumb={<ImprintBreadcrumb />}
                content={<ImprintContent />}
            />
        </div>
    )
}

export default ImprintPage
