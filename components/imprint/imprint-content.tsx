import React from 'react'

const ImprintContent = () => {
    return (
        <div className="flex flex-col px-6 py-12 text-white lg:flex-row lg:px-40 lg:py-24">
            <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pr-4">
                <h2 className="mb-4 font-archivo text-[25px] font-bold">
                    Skylumina GmbH
                </h2>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    Herdstr. Park 5-7
                </p>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    47551 Bedburg-Hau
                </p>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    USt-ID: DE815578370
                </p>
                <p className="mb-4 font-archivo text-base font-normal text-white/50">
                    Managing Director: Johannes Eckstein (M.A.)
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    Contact Information
                </h3>
                <p className="mb-4 font-archivo text-base font-normal text-white/50">
                    Email:{' '}
                    <span className="text-[#5D59E1]">info@webwunder.de</span>
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    Data Protection Officer
                </h3>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    Ryan Matthew Quiros
                </p>
                <p className="font-archivo text-base font-normal text-white/50">
                    Email:{' '}
                    <span className="text-[#5D59E1]">
                        datenschutz@agentursupport.de
                    </span>
                </p>

                <h3 className="mb-2 mt-4 font-archivo text-[25px] font-bold">
                    Services Provided by WebWunder.de
                </h3>
                <p className="w-full font-archivo text-base font-normal text-white/50 lg:w-4/5">
                    Webwunder.de is a project of Skylumina GmbH, offering:
                    subscription-based web design, maintenance, and responsive
                    services. All our subscriptions are cancellable on a monthly
                    basis with a 30-day notice period to the end of the month.
                    The subscription fee is charged in advance. If you choose to
                    cancel your subscription and wish to continue using the
                    website, it must be purchased from us.
                </p>
            </div>
            <div className="lg:w-1/2 lg:pl-4">
                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    Dispute Resolution and Consumer Rights
                </h3>
                <p className="mb-4 w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    Skylumina GmbH does not participate in dispute resolution
                    procedures before a consumer arbitration board.
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    Liability for Content
                </h3>
                <p className="mb-4 w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    As a service provider, we are responsible for our own
                    content on these pages in accordance with general laws.
                    However, we cannot assume any liability for third-party
                    content. The respective provider or operator of the sites is
                    always responsible for the content of the linked sites.
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    Liability for Links
                </h3>
                <p className="w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    Our offer contains links to external websites of third
                    parties, on whose contents we have no influence. Therefore,
                    we cannot assume any liability for these external contents.
                    The respective provider or operator of the sites is always
                    responsible for the content of the linked sites.
                </p>
            </div>
        </div>
    )
}

export default ImprintContent
