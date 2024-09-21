import React from 'react'
import Header from '../layout/home-template-new/header'
import { Badge } from '../ui/badge'

const PortfolioLanding = () => {
    return (
        <div className="bg-white p-4">
            <div className="relative rounded-2xl min-h-screen bg-[url('/images/portfolio/portfolio-landing-img.png')] bg-cover bg-center">
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative bottom-48 flex h-screen flex-col items-center justify-center gap-3 px-4 md:bottom-32 md:px-0 lg:bottom-48">
                    <Badge className="w-fit self-center rounded-full bg-[#5D59E1] px-3 py-1 font-archivo text-sm font-normal">
                        Designed to Perform
                    </Badge>
                    <p className="text-center font-archivo text-[25px] font-bold leading-none text-white lg:w-5/6 lg:text-[47px]">
                        Entrepreneurial Insight and Precision, Transforming
                        Businesses into Success Stories
                    </p>
                    <p className="w-full text-center font-archivo text-sm lg:text-base font-normal text-white md:w-3/4 lg:w-[58%]">
                        Browse our portfolio and see how we deliver
                        high-performance websites tailored to boost your
                        business. Each project demonstrates our commitment to
                        blending design, technology, and strategy to create
                        online platforms that truly stand out and succeed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioLanding
