import React from 'react'
import Header from '../layout/home-template-new/header'
import Footer from '../layout/home-template-new/footer'

interface PolicyProps {
    title: string
    breadcrumb: React.ReactNode
    content: React.ReactNode
}

const PolicyContent: React.FC<PolicyProps> = ({
    title,
    breadcrumb,
    content,
}) => {
    return (
        <div className="bg-gradient-to-br from-[#100013] via-0% to-[#000000] p-6">
            <div className="relative h-[75vh] overflow-hidden rounded-t-lg bg-black">
                <div className="absolute inset-0 bg-[url('/images/main-hero-2.png')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="flex items-center justify-center flex-col mb-40 text-center">
                        <p className="text-5xl font-archivo text-center font-bold text-white max-w-[38.1rem]">{title}</p>
                        {breadcrumb}
                    </div>
                </div>
            </div>
            <div className="rounded-b-lg bg-gradient-to-r from-[#858585]/40 via-[#858585]/20 to-[#858585]/60 text-white">
                {content}
            </div>
            <Footer />
        </div>
    )
}

export default PolicyContent
