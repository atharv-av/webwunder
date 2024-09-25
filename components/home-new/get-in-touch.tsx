import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const GetInTouch = () => {
    return (
        <div className="relative h-[400px] bg-black">
            <div
                className="absolute inset-0 border border-red-200"
                style={{
                    backgroundImage:
                        "url('/images/home/get-in-touch/get-in-touch-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-3 text-center">
                <Badge data-aos="fade-up"   data-aos-anchor-placement="bottom-bottom" className="mb-4 bg-[#5D59E1] font-archivo text-sm font-normal">
                    Get in Touch
                </Badge>
                <h2 className="mb-4 font-archivo font-bold text-white lg:text-[45px] text-[25px]">
                    Leave the Competition Behind!
                </h2>
                <p className="max-w-2xl font-archivo lg:text-base text-sm font-normal text-white md:text-[16px]">
                    Join WebWunder&apos;s subscription web design service, built by
                    entrepreneurs for entrepreneurs, and watch your business
                    soar.
                </p>
                <button
                    className="flex  hover:scale-95 transition-all  w-fit px-2 py-1 lg:px-4 lg:py-2 rounded-full items-center justify-between gap-3 bg-white"
                >
                    <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                        Book a Call
                    </p>
                    <ArrowRight size={15} className="text-[#24252A]" />
                </button>
            </div>
        </div>
    )
}

export default GetInTouch
