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
                <div className="absolute inset-0 lg:bg-[url('/images/main-hero-2.png')] bg-[url('/images/main-hero-small.png')] bg-cover bg-center lg:opacity-30"></div>
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="lg:mb-40 mb-80 flex  flex-col items-center justify-center text-center">
                        <p className="max-w-[38.1rem] text-center font-archivo text-[25px] font-bold text-white">
                            {title}
                        </p>
                        {breadcrumb}
                    </div>
                </div>
            </div>
            <div className="rounded-b-lg bg-gradient-to-r from-[#858585]/40 via-[#858585]/20 to-[#858585]/60 text-white">
                {content}
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}

export default PolicyContent
