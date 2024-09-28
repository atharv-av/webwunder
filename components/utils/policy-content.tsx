import React from 'react'
import Header from '../layout/home-template-new/header'
import Footer from '../layout/home-template-new/footer'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

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
        <div className="bg-gradient-to-br from-[#100013] via-0% to-[#000000] lg:p-6">
            <div className="relative h-[75vh] overflow-hidden rounded-t-lg bg-black">
                <div className="absolute inset-0 bg-[url('/images/main-hero-small.png')] bg-cover bg-center lg:bg-[url('/images/main-hero-2.png')] lg:opacity-30"></div>
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="mb-80 flex flex-col items-center justify-center text-center lg:mb-40">
                        <div className="xl:text[80px] max-w-[38.1rem] text-center font-archivo text-[25px] font-bold text-white">
                            {title}
                        </div>
                        
                            {breadcrumb}
                        
                    </div>
                </div>
            </div>
            <div className="rounded-b-lg bg-gradient-to-r from-[#858585]/40 via-[#858585]/20 to-[#858585]/60 text-white">
                {content}
            </div>
            <div className="item-center my-16 flex flex-col gap-4 lg:hidden">
                <Badge className="w-fit self-center rounded-full bg-[#5D59E1] px-3 py-1 font-archivo text-sm font-normal">
                    Get in Touch
                </Badge>
                <p className="text-center font-archivo text-[25px] font-bold text-white">
                    Leave the Competition Behind!
                </p>
                <p className="w-4/5 self-center text-center font-archivo text-base font-normal text-white/50">
                    Join WebWunder&apos;s subscription web design service, built
                    by entrepreneurs for entrepreneurs, and watch your business
                    soar.
                </p>
                <Button
                    size={'sm'}
                    className="flex w-fit items-center justify-center gap-7 self-center rounded-full bg-white px-6 text-[#24252A]"
                >
                    <p className="font-archivo text-[15px] font-normal">
                        Book a call
                    </p>
                    <ArrowRight size={20} />
                </Button>
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}

export default PolicyContent
