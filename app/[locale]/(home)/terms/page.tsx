// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import TermLinks from '@/components/home2/terms/link'
// import TermLink from '@/components/home2/terms/link'
// import Link from 'next/link'
// const items: Item[] = [
//     {
//         title: 'Scope of Application',
//         items: [
//             {
//                 title: 'Applicability',
//                 text: 'These Terms and Conditions (AGB) govern all contracts and services provided by Skylumina GmbH (hereinafter referred to as "WebWunder") to its customers, encompassing website design, maintenance, and design services.',
//             },
//             {
//                 title: `Business Clients`,
//                 text: `WebWunder's services are exclusively intended for business clients as defined under §14 BGB.`,
//             },
//             {
//                 title: 'Agreement Basis',
//                 text: `These AGB, together with the specific terms of each service contract, form the complete agreement between WebWunder and the customer.`,
//             },
//             {
//                 title: 'Current Version',
//                 text: `The version of the AGB in effect at the time of service booking applies.`,
//             },
//             {
//                 title: 'Exclusion of Customer Terms',
//                 text: `Deviating terms from the customer are not recognized unless explicitly agreed upon in writing.`,
//             },
//         ],
//     },
//     {
//         title: 'Contract Formation and Payment',
//         items: [
//             {
//                 title: 'Online Contract Formation',
//                 text: `By selecting a package on our website and completing the payment via Stripe, you enter into a legally binding contract with WebWunder. This contract covers either a 24-month term (12 months for the website and 12 months for the service pack) or a minimum of 12 months for service packs, depending on the selected package.`,
//             },
//             {
//                 title: 'Payment Processing',
//                 text: `All payments are securely processed via Stripe. Upon successful payment, the customer will receive an invoice and confirmation of the contract terms. WebWunder typically does not issue a separate contract document; the invoice and payment receipt serve as proof of the agreement.`,
//             },
//             {
//                 title: 'Auto-Debit Subscription',
//                 text: `Monthly payments are automatically debited from the customer's account through Stripe as part of the subscription plan.`,
//             },
//         ],
//     },
//     {
//         title: 'Services Provided',
//         items: [
//             {
//                 title: `Service Overview`,
//                 text: `WebWunder provides comprehensive website design, maintenance, and design services on a subscription or one-time basis. The specific details and scope of each service are outlined in the purchased package.`,
//             },
//             {
//                 title: `No Guaranteed Outcomes`,
//                 text: `While WebWunder is committed to delivering high-quality services, specific outcomes (e.g., increased revenue) are not guaranteed.`,
//             },
//             {
//                 title: `Customer Obligations`,
//                 text: `The customer must actively cooperate in the contract's execution, including providing necessary content and feedback in a timely manner.`,
//             },
//             {
//                 title: `Service Execution`,
//                 text: `WebWunder retains discretion over the final execution of services, ensuring they fulfill the contract’s objectives.`,
//             },
//         ],
//     },
//     {
//         title: `Prices, Fees, and Payment Terms`,
//         items: [
//             {
//                 title: `Pricing`,
//                 text: `All prices listed are net amounts, exclusive of VAT. The prices include hosting, maintenance, and any agreed-upon updates or design tasks.`,
//             },
//             {
//                 title: `One-Time Setup Fee`,
//                 text: `A non-refundable setup fee of €2,000 is charged to cover the initial onboarding, project initiation, and associated costs. This fee is payable upfront.`,
//             },
//             {
//                 title: `Payment Terms`,
//                 text: `Payment is required upfront upon contract signing and is processed via Stripe. Auto-debit will continue for monthly subscription fees unless the contract is canceled according to the terms.`,
//             },
//         ],
//     },
//     {
//         title: `Contract Duration, Termination, and Refunds`,
//         items: [
//             {
//                 title: `Contract Term`,
//                 text: `Website subscription contracts have a minimum duration of 12 months. After this period, they automatically convert into a maintenance service contract (Service Pack) unless the customer opts to cancel. The overall contract duration is thus at least 24 months.`,
//             },
//             {
//                 title: `Service Packs`,
//                 text: `For service packs, the minimum contract term is 12 months. After this period, the service continues month-to-month unless canceled with one month's notice.`,
//             },
//             {
//                 title: `Unlimited Design Package`,
//                 text: `The Unlimited Design Package operates on a month-to-month basis and can be canceled at the end of any month.`,
//             },
//             {
//                 title: `Cancellation`,
//                 text: `Early termination within the contract period is not permitted except for significant reasons as defined by law.`,
//             },
//             {
//                 title: `No Refunds`,
//                 text: `Due to the customized nature of our services, refunds are not provided. However, reasonable revisions and feedback loops are included in the service.`,
//             },
//             {
//                 title: `Cancellation of Service Packs`,
//                 text: `Service packs can be canceled at any time after the initial 12-month period, with one month's notice.`,
//             },
//         ],
//     },
//     {
//         title: `Performance and Delays`,
//         items: [
//             {
//                 title: `Performance Timelines`,
//                 text: `Deadlines for service delivery commence only after full payment is received and all required customer materials are provided.`,
//             },
//             {
//                 title: `Customer Default`,
//                 text: `In case of non-payment or failure to provide necessary materials, WebWunder reserves the right to suspend or delay services.`,
//             },
//         ],
//     },
//     {
//         title: `Intellectual Property, Usage Rights, and Buyout Option`,
//         items: [
//             {
//                 title: `Ownership`,
//                 text: `WebWunder retains ownership of all design and development materials until full payment is received.`,
//             },
//             {
//                 title: `License`,
//                 text: `Customers receive a non-transferable, non-exclusive license to use the delivered materials for the duration of the active subscription.`,
//             },
//             {
//                 title: `Buyout Option`,
//                 text: `Customers may opt to buy out the website after fulfilling the 24-month minimum contract term. The buyout cost is €4,000 for a Standard website and €8,000 for a Pro website. This provides the customer with full ownership of the website and associated materials.`,
//             },
//         ],
//     },
//     {
//         title: `Liability and Customer Responsibility`,
//         items: [
//             {
//                 title: `Limited Liability`,
//                 text: `WebWunder is only liable for damages resulting from intentional or grossly negligent actions. Liability for slight negligence is excluded.`,
//             },
//             {
//                 title: `Data Responsibility`,
//                 text: `The customer is solely responsible for the legality, accuracy, and integrity of the materials provided to WebWunder.`,
//             },
//         ],
//     },
//     {
//         title: `Design Refresh`,
//         items: [
//             {
//                 title: `Free Design Refresh`,
//                 text: `Every 36 months, WebWunder provides a complimentary design refresh to ensure the customer’s website remains up-to-date with the latest trends and standards. This service is included at no additional cost as long as the customer remains on a Service Pack or active subscription.`,
//             },
//         ],
//     },
//     {
//         title: `Final Provisions`,
//         items: [
//             {
//                 title: `Governing Law`,
//                 text: `These terms are governed by the laws of the Federal Republic of Germany, with Cologne as the exclusive place of jurisdiction.`,
//             },
//             {
//                 title: `Severability`,
//                 text: `If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.`,
//             },
//         ],
//     },
// ]

// export default function TermsPage() {
//     return (
//         <div className="flex flex-col items-center">
//             <section className="mb-12 mt-12 w-full xl:mb-20">
//                 <div className="container px-4">
//                     <div className="mx-auto max-w-[900px] text-center">
//                         <h1 className="text-[50px] font-bold leading-[50px] tracking-tighter xl:text-[60px] xl:leading-[60px]">
//                             Terms and Conditions (AGB) of Skylumina GmbH,{' '}
//                             <br className="hidden xl:block" />
//                             Trading as{' '}
//                             <span className="text-primary">WebWunder</span>
//                         </h1>
//                     </div>
//                 </div>
//             </section>
//             <section className="w-full">
//                 <div className="container px-4">
//                     <div className="grid xl:gap-12 xl:grid-cols-12">
//                         <div className="hidden flex-col gap-4 xl:col-span-5 xl:flex xl:gap-24">
//                             {<TermLinks items={items.map((e) => e.title)} />}
//                         </div>
//                         <div className="xl:col-span-7">
//                             {items.map((e, i) => (
//                                 <Content key={e.title} order={i + 1} item={e} />
//                             ))}
//                         </div>
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
//     items?: Item[]
// }

// function Content(
//     props: Props<{ item: Item; order: number; parentOrder?: number }>,
// ) {
//     const id = props.item.title
//         .toLowerCase()
//         .replaceAll(' ', '-')
//         .replaceAll(',', '')
//     return (
//         <>
//             {props.item.items?.length ? (
//                 <div className="relative mb-12">
//                     <div id={id} className="absolute -mt-12 h-0 w-full"></div>
//                     <h2 className={`mb-4 text-3xl font-bold xl:text-4xl`}>
//                         <span>{props.order}. </span>
//                         {props.item.title}
//                     </h2>
//                     {props.item.items.map((e, i) => (
//                         <Content
//                             key={e.title}
//                             parentOrder={props.order}
//                             order={i + 1}
//                             item={e}
//                         />
//                     ))}
//                 </div>
//             ) : (
//                 <div className="relative mb-4">
//                     <div id={id} className="absolute -mt-12 h-0 w-full"></div>
//                     <h3 className={`text-xl font-bold xl:text-2xl`}>
//                         <span>
//                             {props.parentOrder}.{props.order}{' '}
//                         </span>
//                         {props.item.title}
//                     </h3>
//                     <p className="text-base text-grayText">{props.item.text}</p>
//                 </div>
//             )}
//         </>
//     )
// }

import TermsBreadcrumb from '@/components/terms/terms-breadcrumb'
import TermsContent from '@/components/terms/terms-content'
import PolicyContent from '@/components/utils/policy-content'
import React from 'react'

const TermsPage = () => {
    return (
        <PolicyContent
            title="Terms and Conditions (AGB) of Skylumina GmbH, Trading as WebWunder"
            breadcrumb={<TermsBreadcrumb />}
            content={<TermsContent />}
        />
    )
}

export default TermsPage
