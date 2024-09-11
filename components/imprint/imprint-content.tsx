import React from 'react'

const ImprintContent = () => {
    return (
        <div className="flex px-40 py-24 text-white">
            <div className="w-1/2 pr-4">
                <h2 className="mb-4 text-2xl font-bold">Skylumina GmbH</h2>
                <p className="mb-1 text-base font-light text-gray-400">
                    Herdstr. Park 5-7
                </p>
                <p className="mb-1 text-base font-light text-gray-400">
                    47551 Bedburg-Hau
                </p>
                <p className="mb-1 text-base font-light text-gray-400">
                    USt-ID: DE815578370
                </p>
                <p className="mb-4 text-base font-light text-gray-400">
                    Managing Director: Johannes Eckstein (M.A.)
                </p>

                <h3 className="mb-2 text-2xl font-semibold">
                    Contact Information
                </h3>
                <p className="mb-4 text-base font-light text-gray-400">
                    Email: info@webwunder.de
                </p>

                <h3 className="mb-2 text-2xl font-semibold">
                    Data Protection Officer
                </h3>
                <p className="mb-1 text-base font-light text-gray-400">
                    Ryan Matthew Quiros
                </p>
                <p className="text-base font-light text-gray-400">
                    Email: datenschutz@agentursupport.de
                </p>

                <h3 className="mb-2 mt-4 text-2xl font-semibold">
                    Services Provided by WebWunder.de
                </h3>
                <p className="w-4/5 text-base font-light text-gray-400">
                    Webwunder.de is a project of Skylumina GmbH, offering:
                    subscription-based web design, maintenance, and responsive
                    services. All our subscriptions are cancellable on a monthly
                    basis with a 30-day notice period to the end of the month.
                    The subscription fee is charged in advance. If you choose to
                    cancel your subscription and wish to continue using the
                    website, it must be purchased from us.
                </p>
            </div>
            <div className="w-1/2 pl-4">
                <h3 className="mb-2 text-2xl font-semibold">
                    Dispute Resolution and Consumer Rights
                </h3>
                <p className="mb-4 w-5/6 text-base font-light text-gray-400">
                    Skylumina GmbH does not participate in dispute resolution
                    procedures before a consumer arbitration board.
                </p>

                <h3 className="mb-2 text-2xl font-semibold">
                    Liability for Content
                </h3>
                <p className="mb-4 w-5/6 text-base font-light text-gray-400">
                    As a service provider, we are responsible for our own
                    content on these pages in accordance with general laws.
                    However, we cannot assume any liability for third-party
                    content. The respective provider or operator of the sites is
                    always responsible for the content of the linked sites.
                </p>

                <h3 className="mb-2 text-2xl font-semibold">
                    Liability for Links
                </h3>
                <p className="w-5/6 text-base font-light text-gray-400">
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
