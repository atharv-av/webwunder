// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import Link from 'next/link'
// const items: Item[] = [
//     {
//         title: `Introduction`,
//         text: `Skylumina GmbH ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our website, Webwunder.de.`,
//     },
//     {
//         title: `Data Controller`,
//         text: `Skylumina GmbH is the data controller responsible for your personal data. Our Data Protection Officer is Ryan Matthew Quines, who can be contacted at datenschutz@webwunder.de.`,
//     },
//     {
//         title: `Data Collection`,
//         text: `We collect personal information that you provide to us directly, such as your name, email address, and payment details. We also collect data automatically through cookies and similar technologies, including your IP address, browser type, and browsing behavior.`,
//     },
//     {
//         title: `Use of Personal Data`,
//         text: `We use your personal data to provide and improve our services, process payments, and communicate with you. We may also use your information for marketing purposes, including retargeting ads and email campaigns.`,
//     },
//     {
//         title: `Cookies and Tracking Technologies`,
//         text: `We use cookies and other tracking technologies to enhance your experience on our website. Cookies allow us to recognize your device and store information about your preferences. You can control cookies through your browser settings.`,
//     },
//     {
//         title: `Data Sharing`,
//         text: `We do not share your personal data with third parties, except as necessary to process your payments through Stripe or to comply with legal obligations.`,
//     },
//     {
//         title: `Data Security`,
//         text: `We take data security seriously and implement appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.`,
//     },
//     {
//         title: `Your Rights`,
//         text: `You have the right to access, correct, delete, and restrict the processing of your personal data. You can also withdraw your consent to data processing at any time. To exercise these rights, please contact us at datenschutz@webwunder.de.`,
//     },
//     {
//         title: `Retention of Data`,
//         text: `We retain your personal data only as long as necessary to fulfill the purposes for which it was collected or as required by law.`,
//     },
//     {
//         title: `Changes to this Privacy Policy`,
//         text: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.`,
//     },
//     {
//         title: `Contact Information`,
//         text: `If you have any questions or concerns about this Privacy Policy, please contact us at:`,
//     },
// ]

// export default function PrivacyPolicyPage() {
//     return (
//         <div className="flex flex-col items-center">
//             <section className="mb-12 mt-12 w-full xl:mb-20">
//                 <div className="container px-4">
//                     <div className="mx-auto max-w-[900px] text-center">
//                         <h1 className="text-[50px] font-bold leading-[50px] tracking-tighter xl:text-[60px] xl:leading-[60px]">
//                             Privacy <span className="text-primary">Policy</span>
//                         </h1>
//                     </div>
//                 </div>
//             </section>

//             <section className="w-full">
//                 <div className="container px-4">
//                     <div className="flex flex-col gap-8 xl:gap-14">
//                         {items.map((e, i) => (
//                             <Content key={e.title} order={i + 1} item={e} />
//                         ))}
//                     </div>

//                     <p className="mt-4 xl:mt-6 text-grayText">
//                         Skylumina GmbH <br />
//                         Horster Park 43, 4731 Raeren, Belgium <br />
//                         Email:{' '}
//                         <Link
//                             target="_blank"
//                             className="font-bold text-primary"
//                             href={'mailto:datenschutz@webwunder.de'}
//                         >
//                             datenschutz@webwunder.de
//                         </Link>
//                     </p>
//                 </div>
//             </section>

//             <DiscoverPerfectFitSection className="py-12 xl:mb-24 xl:py-24" />
//         </div>
//     )
// }

// type Item = {
//     title: string
//     text: string
// }

// function Content(props: Props<{ item: Item; order: number }>) {
//     return (
//         <div className={props.className}>
//             <h2 className={`mb-2 text-3xl font-bold xl:text-4xl`}>
//                 <span>{props.order}. </span>
//                 {props.item.title}
//             </h2>
//             <p className="text-base text-grayText">{props.item.text}</p>
//         </div>
//     )
// }

import PrivacyPolicyBreadcrumb from '@/components/privacy-policy/privacy-policy-breadcrumb'
import PrivacyPolicyContent from '@/components/privacy-policy/privacy-policy-content'
import PolicyContent from '@/components/utils/policy-content'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <PolicyContent
            title="Privacy Policy"
            breadcrumb={<PrivacyPolicyBreadcrumb />}
            content={<PrivacyPolicyContent />}
        />
    )
}

export default PrivacyPolicyPage
