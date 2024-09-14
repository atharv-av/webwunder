import React from 'react'
import Header from '../layout/home-template-new/header'

const PortfolioLanding = () => {
    return (
        <div className="relative min-h-screen bg-[url('/images/portfolio/portfolio-landing-img.png')] bg-cover bg-center">
            <div className="relative z-10">
                <Header />
            </div>
            <div className="relative bottom-48 flex h-screen flex-col items-center justify-center gap-3 px-4 md:bottom-32 md:px-0 lg:bottom-48">
                <div className="rounded-full bg-[#5D59E1] py-2 px-5 text-sm font-archivo font-light text-white">
                    Designed to Perform
                </div>
                <p className="leading-none text-center text-[38px] font-bold font-archivo text-white md:text-[48px] lg:text-[58px] lg:w-3/4">
                    Innovative Web Solutions that Deliver Results
                </p>
                <p className="w-full text-center text-sm font-archivo font-normal text-white md:w-3/4 md:text-base lg:w-[58%]">
                    Browse our portfolio and see how we deliver high-performance
                    websites tailored to boost your business. Each project
                    demonstrates our commitment to blending design, technology,
                    and strategy to create online platforms that truly stand out
                    and succeed.
                </p>
            </div>
        </div>
    )
}

export default PortfolioLanding
