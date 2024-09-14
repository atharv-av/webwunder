import React from 'react'

const termsData = [
    {
        title: '1. Scope of Application',
        sections: [
            {
                id: '1.1',
                title: 'Applicability',
                content:
                    'These Terms and Conditions (AGB) govern all contracts and services provided by Skylumine GmbH (hereinafter referred to as "WebWunder") to its customers, encompassing website design, maintenance, and design services.',
            },
            {
                id: '1.2',
                title: 'Business Clients',
                content:
                    "WebWunder's services are exclusively intended for business clients as defined under §14 BGB.",
            },
            {
                id: '1.3',
                title: 'Agreement Basis',
                content:
                    'These AGB, together with the specific terms of each service contract, form the complete agreement between WebWunder and the customer.',
            },
            {
                id: '1.4',
                title: 'Current Version',
                content:
                    'The version of the AGB in effect at the time of service booking applies.',
            },
            {
                id: '1.5',
                title: 'Exclusion of Customer Terms',
                content:
                    'Deviating terms from the customer are not recognized unless explicitly agreed upon in writing.',
            },
        ],
    },
    {
        title: '2. Contract Formation and Payment',
        sections: [
            {
                id: '2.1',
                title: 'Online Contract Formation',
                content:
                    'By selecting a package on our website and completing the payment via Stripe, you enter into a legally binding contract with WebWunder. This contract covers either a 24-month term (12 months for the website and 12 months for the service pack) or a minimum of 12 months for service packs, depending on the selected package.',
            },
            {
                id: '2.2',
                title: 'Payment Processing',
                content:
                    'All payments are securely processed via Stripe. Upon successful payment, the customer will receive an invoice and confirmation of the contract terms. WebWunder typically does not issue a separate contract document; the invoice and payment receipt serve as proof of the agreement.',
            },
            {
                id: '2.3',
                title: 'Auto-Debit Subscription',
                content:
                    "Monthly payments are automatically debited from the customer's account through Stripe as part of the subscription plan.",
            },
        ],
    },
    {
        title: '3. Services Provided',
        sections: [
            {
                id: '3.1',
                title: 'Service Overview',
                content:
                    'WebWunder provides comprehensive website design, maintenance, and design services on a subscription or one-time basis. The specific details and scope of each service are outlined in the purchased package.',
            },
            {
                id: '3.2',
                title: 'No Guaranteed Outcomes',
                content:
                    'While WebWunder is committed to delivering high-quality services, specific outcomes (e.g., increased revenue) are not guaranteed.',
            },
            {
                id: '3.3',
                title: 'Customer Obligations',
                content:
                    "The customer must actively cooperate in the contract's execution, including providing necessary content and feedback in a timely manner.",
            },
            {
                id: '3.4',
                title: 'Service Execution',
                content:
                    "WebWunder retains discretion over the final execution of services, ensuring they fulfill the contract's objectives.",
            },
        ],
    },
    {
        title: '4. Prices, Fees, and Payment Terms',
        sections: [
            {
                id: '4.1',
                title: 'Pricing',
                content:
                    'All prices listed are net amounts, exclusive of VAT. The prices include hosting, maintenance, and any agreed-upon updates or design tasks.',
            },
            {
                id: '4.2',
                title: 'One-Time Setup Fee',
                content:
                    'A non-refundable setup fee of €2,000 is charged to cover the initial onboarding, project initiation, and associated costs. This fee is payable upfront.',
            },
            {
                id: '4.3',
                title: 'Payment Terms',
                content:
                    'Payment is required upfront upon contract signing and is processed via Stripe. Auto-debit will continue for monthly subscription fees unless the contract is canceled according to the terms.',
            },
        ],
    },
    {
        title: '5. Contract Duration, Termination, and Refunds',
        sections: [
            {
                id: '5.1',
                title: 'Contract Term',
                content:
                    'Website subscription contracts have a minimum duration of 12 months. After this period, they automatically convert into a maintenance service contract (Service Pack) unless the customer opts to cancel. The overall contract duration is thus at least 24 months.',
            },
            {
                id: '5.2',
                title: 'Service Packs',
                content:
                    "For service packs, the minimum contract term is 12 months. After this period, the service continues month-to-month unless canceled with one month's notice.",
            },
            {
                id: '5.3',
                title: 'Unlimited Design Package',
                content:
                    'The Unlimited Design Package operates on a month-to-month basis and can be canceled at the end of any month.',
            },
            {
                id: '5.4',
                title: 'Cancellation',
                content:
                    'Early termination within the contract period is not permitted except for significant reasons as defined by law.',
            },
            {
                id: '5.5',
                title: 'No Refunds',
                content:
                    'Due to the customized nature of our services, refunds are not provided. However, reasonable revisions and feedback loops are included in the service.',
            },
            {
                id: '5.6',
                title: 'Cancellation of Service Packs',
                content:
                    "Service packs can be canceled at any time after the initial 12-month period, with one month's notice.",
            },
        ],
    },
    {
        title: '6. Performance and Delays',
        sections: [
            {
                id: '6.1',
                title: 'Performance Timelines',
                content:
                    'Deadlines for service delivery commence only after full payment is received and all required customer materials are provided.',
            },
            {
                id: '6.2',
                title: 'Customer Default',
                content:
                    'In case of non-payment or failure to provide necessary materials, WebWunder reserves the right to suspend or delay services.',
            },
        ],
    },
    {
        title: '7. Intellectual Property, Usage Rights, and Buyout Option',
        sections: [
            {
                id: '7.1',
                title: 'Ownership',
                content:
                    'WebWunder retains ownership of all design and development materials until full payment is received.',
            },
            {
                id: '7.2',
                title: 'License',
                content:
                    'Customers receive a non-transferable, non-exclusive license to use the delivered materials for the duration of the active subscription.',
            },
            {
                id: '7.3',
                title: 'Buyout Option',
                content:
                    'Customers may opt to buy out the website after fulfilling the 24-month minimum contract term. The buyout cost is €4,000 for a Standard website and €8,000 for a Pro website. This provides the customer with full ownership of the website and associated materials.',
            },
        ],
    },
    {
        title: '8. Liability and Customer Responsibility',
        sections: [
            {
                id: '8.1',
                title: 'Limited Liability',
                content:
                    'WebWunder is only liable for damages resulting from intentional or grossly negligent actions. Liability for slight negligence is excluded.',
            },
            {
                id: '8.2',
                title: 'Data Responsibility',
                content:
                    'The customer is solely responsible for the legality, accuracy, and integrity of the materials provided to WebWunder.',
            },
        ],
    },
    {
        title: '9. Design Refresh',
        sections: [
            {
                id: '9.1',
                title: 'Free Design Refresh',
                content:
                    "Every 18 months, WebWunder provides a complimentary design refresh to ensure the customer's website remains up-to-date with the latest trends and standards. This service is included at no additional cost as long as the customer remains on a Service Pack or active subscription.",
            },
        ],
    },
    {
        title: '10. Final Provisions',
        sections: [
            {
                id: '10.1',
                title: 'Governing Law',
                content:
                    'These terms are governed by the laws of the Federal Republic of Germany, with Cologne as the exclusive place of jurisdiction.',
            },
            {
                id: '10.2',
                title: 'Severability',
                content:
                    'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.',
            },
        ],
    },
]

const TermsContent = () => {
    return (
        <div className="p-8 font-sans text-gray-300">
            <div className="mx-auto max-w-4xl">
                {termsData.map((term, index) => (
                    <div key={index} className="mb-12">
                        <h1 className="mb-2 font-archivo font-bold text-white text-[25px]">
                            {term.title}
                        </h1>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {term.sections.map((section) => (
                                <div key={section.id}>
                                    <h2 className="mb-2 font-dm-sans text-white font-bold text-base">
                                        {section.id} {section.title}
                                    </h2>
                                    <p className="text-base font-dm-sans text-white/50 font-normal">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TermsContent
