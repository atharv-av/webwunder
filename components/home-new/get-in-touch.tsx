import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const GetInTouch = () => {
    return (
        <div className="relative h-[400px] bg-black">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url('/images/home/get-in-touch/get-in-touch-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-3 text-center">
                <Badge className="mb-4 bg-[#5D59E1] font-archivo text-sm font-normal">
                    Get in Touch
                </Badge>
                <h2 className="mb-4 font-archivo text-3xl font-bold text-white md:text-[45px]">
                    Leave the Competition Behind!
                </h2>
                <p className="max-w-2xl font-archivo text-base font-normal text-white md:text-[16px]">
                    Join WebWunder&apos;s subscription web design service, built by
                    entrepreneurs for entrepreneurs, and watch your business
                    soar.
                </p>
                <Button
                    size={'base'}
                    className="flex items-center justify-between gap-3 bg-white"
                >
                    <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                        Book a Call
                    </p>
                    <ArrowRight size={15} className="text-[#24252A]" />
                </Button>
            </div>
        </div>
    )
}

export default GetInTouch
