'use client'

import React, { useState, useCallback } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface CarouselItem {
    id: number
    icon: string
    title: string
    content: string
}

interface TimelineStepProps {
    number: number
    title: string
    description: string
    timeCommitment: string
}

const TimelineStep: React.FC<TimelineStepProps> = ({
    number,
    title,
    description,
    timeCommitment,
}) => (
    <div className="flex">
        <div className="mr-4 flex flex-col items-center">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white"></div>
            {number < 3 && (
                <div className="h-full border-l-2 border-dashed border-white"></div>
            )}
        </div>
        <div className="flex flex-col gap-2 pb-8">
            <p className="font-archivo text-base font-bold leading-none text-[#9DFF50]">
                Step {number}
            </p>
            <h3 className="font-archivo text-[25px] font-bold text-white">
                {title}
            </h3>
            <p className="font-archivo text-sm font-normal text-white/50">
                {description}
            </p>
            <p className="font-archivo text-sm font-bold text-[#9DFF50]">
                Time commitment: {timeCommitment}
            </p>
        </div>
    </div>
)

const JoinUs: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [items] = useState<CarouselItem[]>([
        {
            id: 1,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'No More Negotiations, No Surprises',
            content:
                'We keep it simple—what you see in your plan is what you pay. No hidden fees, no upsells, just consistent, top-tier service. Cancel anytime.',
        },
        {
            id: 2,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: 'Excellence in Custom Web Design',
            content:
                'Get a custom, powerhouse website with minimal effort—no templates, ensuring 100% unique designs and functionality.',
        },
        {
            id: 3,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'Effortless Updates Anytime, Anywhere',
            content:
                'Need changes? Email us from any device, and we’ll handle the rest. Our streamlined process makes updates seamless and stress-free.',
        },
        {
            id: 4,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: '24/7 Support and Maintenance',
            content:
                'Our dedicated support team is always ready to assist you with any issues or questions.',
        },
        {
            id: 5,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'Effortless Updates Anytime, Anywhere',
            content:
                'Need changes? Email us from any device, and we’ll handle the rest. Our streamlined process makes updates seamless and stress-free.',
        },
    ])

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1,
        )
    }, [items.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1,
        )
    }, [items.length])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="flex h-fit flex-col items-center justify-center gap-5 bg-gradient-to-tr from-black to-black/80 p-8 pt-16 text-white">
            <div className="flex w-full max-w-6xl flex-col lg:flex-row">
                <div className="mb-8 flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
                    <Badge className="mb-4 bg-[#5D59E1] font-archivo text-sm font-normal">
                        Exceptional Values
                    </Badge>
                    <h1 className="mb-4 text-center font-archivo text-4xl font-bold lg:text-start">
                        Join Us! Why?
                        <br />
                        Clear and Simple.
                    </h1>
                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-2">
                        <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                            <p className="ml-3 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                Explore Plans
                            </p>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </div>
                        </button>

                        <button className="w-fit rounded-full bg-white px-3 py-2 font-archivo text-sm font-medium lg:py-3">
                            <Link
                                href="#"
                                className="flex flex-row items-center justify-between gap-4"
                            >
                                <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    Book a call
                                </p>
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </Link>
                        </button>
                    </div>
                    <div className="mt-12 hidden items-center gap-4 lg:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-[#5D59E1] text-white"
                            onClick={prevSlide}
                        >
                            <ChevronLeft size={24} />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-[#5D59E1] text-white"
                            onClick={nextSlide}
                        >
                            <ChevronRight size={24} />
                        </Button>
                    </div>
                </div>

                <div className="flex w-full flex-col items-center justify-start lg:w-11/12">
                    <div className="flex overflow-hidden">
                        {[0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % items.length
                            return (
                                <Card
                                    key={items[index].id}
                                    className={`lg:h-11/12 w-full flex-shrink-0 rounded-xl shadow-lg lg:w-[42%] ${offset === 0 ? '' : 'hidden lg:block'} ${offset === 2 ? 'lg:opacity-50' : ''} mr-4 border-none bg-[#191919] transition-all duration-300 ease-in-out`}
                                >
                                    <CardHeader>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29292F] p-3">
                                            <Image
                                                src={items[index].icon}
                                                alt="Icon"
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                        <CardTitle className="font-archivo text-[25.5px] font-bold leading-none text-white">
                                            {items[index].title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-archivo text-[12.5px] font-normal text-white/50">
                                            {items[index].content}
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Pagination dots (centered and responsive) */}
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <div className="flex items-center justify-center gap-2">
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-1 w-10 rounded-full md:w-16 ${
                                        index === currentIndex
                                            ? 'bg-[#5D59E1]'
                                            : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="my-8 flex items-center gap-4 lg:hidden">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-[#5D59E1] text-white"
                            onClick={prevSlide}
                        >
                            <ChevronLeft size={24} />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-[#5D59E1] text-white"
                            onClick={nextSlide}
                        >
                            <ChevronRight size={24} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
                <div className="flex flex-col items-center gap-4 lg:hidden">
                    <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal">
                        Three Steps
                    </Badge>
                    <p className="text-center font-archivo text-[25px] font-bold leading-none text-white">
                        Get Your Website in <br /> Three Easy Steps
                    </p>
                    <p className="mb-5 mt-0 text-center font-archivo text-sm font-normal text-white/50">
                        Hate meetings? Us too—that&apos;s why we&apos;ve
                        minimized them. In under an hour of your valuable time,
                        we help successful businesses become even more
                        successful. Here&apos;s how it works:
                    </p>
                    <div className="flex max-w-xl flex-col items-start rounded-lg">
                        <TimelineStep
                            number={1}
                            title="Book A Call"
                            description="A quick 15-minute chat to understand your needs and pick the perfect plan."
                            timeCommitment="15 minutes."
                        />
                        <TimelineStep
                            number={2}
                            title="Design & Content"
                            description="Share your content ideas, or let us help craft them. We'll handle everything and send it to you for final approval."
                            timeCommitment="15 minutes."
                        />
                        <TimelineStep
                            number={3}
                            title="Launch Your Site"
                            description="We turn your vision into reality and get your website live, ready to dominate the market."
                            timeCommitment="15 minutes."
                        />
                    </div>
                </div>
                <Image
                    src="/images/home/join-us/three-steps-bg.png"
                    alt="Three steps"
                    width={600}
                    height={100}
                />
                <div className="flex flex-col items-center justify-center lg:items-start">
                    <div className="hidden w-3/4 flex-col gap-4 lg:flex">
                        <Badge className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal">
                            Three Steps
                        </Badge>
                        <p className="font-archivo text-[45px] font-bold leading-none text-white">
                            Get Your Website in <br /> Three Easy Steps
                        </p>
                        <p className="mb-5 mt-0 font-archivo text-base font-normal text-white/50">
                            Hate meetings? Us too—that&apos;s why we&apos;ve
                            minimized them. In under an hour of your valuable
                            time, we help successful businesses become even more
                            successful. Here&apos;s how it works:
                        </p>
                        <div className="flex max-w-xl flex-col items-start rounded-lg">
                            <TimelineStep
                                number={1}
                                title="Book A Call"
                                description="A quick 15-minute chat to understand your needs and pick the perfect plan."
                                timeCommitment="15 minutes."
                            />
                            <TimelineStep
                                number={2}
                                title="Design & Content"
                                description="Share your content ideas, or let us help craft them. We'll handle everything and send it to you for final approval."
                                timeCommitment="15 minutes."
                            />
                            <TimelineStep
                                number={3}
                                title="Launch Your Site"
                                description="We turn your vision into reality and get your website live, ready to dominate the market."
                                timeCommitment="15 minutes."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
