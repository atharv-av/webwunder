// import Anchor from '@/components/common/anchor'
// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import GetInTouchSection from '@/components/home2/get-in-touch-section'
// import HallOfFameSection from '@/components/portfolio/hall-of-fame-section'
// import HeroSection from '@/components/portfolio/hero-section'
// import { motion } from 'framer-motion'
// import { Metadata } from 'next'

import Header from '@/components/layout/home-template-new/header'

// export const metadata: Metadata = {
//     title: 'Portfolio - WebWunder',
//     description: 'Webwunder Portfolio',

// }

// export default function PortfolioPage() {
//     return (
//         <div className="flex flex-col items-center">
//             <HeroSection className="mt-6 xl:mt-24" />
//             <HallOfFameSection className="py-12 xl:py-24" />

//             <GetInTouchSection className="py-12 xl:py-24" />
//             <DiscoverPerfectFitSection className="py-12 xl:mb-24 xl:py-24" />

//         </div>
//     )
// }

export default function PortfolioPage() {
    return (
        <div className="relative h-screen bg-[url('/images/portfolio/portfolio-landing-img.png')] bg-cover bg-center">
            <div className="relative z-10">
                <Header />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center h-screen relative bottom-40">
                <div className="rounded-full bg-[#5D59E1] p-2 text-sm text-white">
                    Designed to Perform
                </div>
                <p className="text-5xl font-bold text-white text-center w-1/2">
                    Innovative Web Solutions that Deliver Results
                </p>
                <p className="text-base font-normal text-white text-center w-[58%]">
                    Browse our portfolio and see how we deliver high-performance
                    websites tailored to boost your business. Each project
                    demonstrates our commitment to blending design, technology,
                    and strategy to create online platforms that truly stand out
                    and succeed.
                </p>
            </div>

            <div className="relative z-10 bg-white py-16 px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Our Recent Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                        <p className="text-gray-600">
                            A detailed overview of Project 1 highlighting the objectives,
                            challenges, and solutions we provided to help our client achieve
                            their goals.
                        </p>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                        <p className="text-gray-600">
                            Insights into Project 2, focusing on how we implemented innovative
                            web technologies and strategies to deliver excellent results.
                        </p>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mb-2">Project 3</h3>
                        <p className="text-gray-600">
                            Case study of Project 3, showing how our design and development
                            solutions helped enhance the online presence of the business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
