import React from 'react'

interface policyProps {
    title: string
    content:
        | string
        | { text: string; company: string; address: string; email: string }
        | any
    isContact?: boolean
}

const policySections = [
    {
        title: '1. Introduction',
        content:
            "Skylumina GmbH ('we', 'us', 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our website, WebWunder.de.",
    },
    {
        title: '2. Data Controller',
        content:
            'Skylumina GmbH is the data controller responsible for your personal data. Our Data Protection Officer is Ryan Matthew Quiros, who can be contacted at datenschutz@agentursupport.de.',
    },
    {
        title: '3. Data Collection',
        content:
            'We collect personal information that you provide to us directly, such as your name, email address, and payment details. We also collect data automatically through cookies and similar technologies, including your IP address, browser type, and browsing behavior.',
    },
    {
        title: '4. Use of Personal Data',
        content:
            'We use your personal data to provide and improve our services, process payments, and communicate with you. We may also use your information for marketing purposes, including retargeting ads and email campaigns.',
    },
    {
        title: '5. Cookies and Tracking Technologies',
        content:
            'We use cookies and other tracking technologies to enhance your experience on our website. Cookies allow us to recognize your device and store information about your preferences. You can control cookies through your browser settings.',
    },
    {
        title: '6. Data Sharing',
        content:
            'We do not share your personal data with third parties, except as necessary to process your payments, provide Services, or to comply with legal obligations.',
    },
    {
        title: '7. Data Security',
        content:
            'We take data security seriously and implement appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.',
    },
    {
        title: '8. Your Rights',
        content:
            'You have the right to access, correct, delete, and restrict the processing of your personal data. You can also withdraw your consent to data processing at any time. To exercise these rights, please contact us at datenschutz@webwunder.de.',
    },
    {
        title: '9. Retention of Data',
        content:
            'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected or as required by law.',
    },
    {
        title: '10. Changes to this Privacy Policy',
        content:
            'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.',
    },
    {
        title: '11. Independence and Data Usage',
        content:
            'This website is not affiliated with Facebook Inc. and is not endorsed by Facebook. We use Google remarketing pixels/cookies to target visitors with relevant messages and information.',
    },
    {
        title: '12. Contact Information',
        content: {
            text: 'If you have any questions or concerns about this Privacy Policy, please contact us at:',
            company: 'Skylumina GmbH',
            address: 'Horster Park 43, 4731 Raeren, Belgium',
            email: 'datenschutz@webwunder.de',
        },
        isContact: true,
    },
]

const PolicySection: React.FC<policyProps> = ({
    title,
    content,
    isContact = false,
}) => (
    <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
        {isContact && typeof content === 'object' ? (
            <div className="text-base">
                <p className="text-gray-500">{content.text}</p>
                <p className="mt-2 text-gray-500">{content.company}</p>
                <p className="text-gray-500">{content.address}</p>
                <p className="text-gray-500">
                    Email:{' '}
                    <a
                        href={`mailto:${content.email}`}
                        className="text-[#5D59E1] hover:underline"
                    >
                        {content.email}
                    </a>
                </p>
            </div>
        ) : (
            <p className="text-sm text-gray-500">{content}</p>
        )}
    </div>
)

const PrivacyPolicyContent = () => {
    return (
        <div className="p-8 text-gray-300">
            <h1 className="mb-6 text-2xl font-bold text-white">
                Privacy Policy
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {policySections.map((section, index) => (
                    <PolicySection
                        key={index}
                        title={section.title}
                        content={section.content}
                        isContact={section.isContact}
                    />
                ))}
            </div>
        </div>
    )
}

export default PrivacyPolicyContent
