import React from 'react'
import Header from '../layout/home-template-new/header'

const PortfolioLanding = () => {
    return (
        <div className="relative min-h-screen bg-[url('/images/portfolio/portfolio-landing-img.png')] bg-cover bg-center">
            <div className="relative z-10">
                <Header />
            </div>
            <div className="relative bottom-40 flex h-screen flex-col items-center justify-center gap-5">
                <div className="rounded-full bg-[#5D59E1] p-2 text-sm text-white">
                    Designed to Perform
                </div>
                <p className="w-1/2 text-center text-5xl font-bold text-white">
                    Innovative Web Solutions that Deliver Results
                </p>
                <p className="w-[58%] text-center text-base font-normal text-white">
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
