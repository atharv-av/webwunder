'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './form/social'

const slides = [
    {
        image: '/assets/auth1.png',
        title: "With WebWunder, You'll Never Need Another Agency. Ever.",
        description:
            "With WebWunder, you'll find a comprehensive, all-in-one solution that addresses every facet of your digital presence, from website design to marketing strategies, ensuring you'll never need to rely on another agency again. We handle it all, so you can focus on growing your business with confidence.",
    },
    {
        image: '/assets/auth2.png',
        title: 'Get Your Website in Three Easy Steps',
        description:
            "Hate meetings? Us too—that's why we've minimized them. In under an hour of your valuable time, we help successful businesses become even more successful.",
    },
    {
        image: '/assets/auth1.png',
        title: "With WebWunder, You'll Never Need Another Agency. Ever.",
        description:
            "With WebWunder, you'll find a comprehensive, all-in-one solution that addresses every facet of your digital presence, from website design to marketing strategies, ensuring you'll never need to rely on another agency again. We handle it all, so you can focus on growing your business with confidence.",
    },
]

export default function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliding, setSliding] = useState(false)
    const [slideDirection, setSlideDirection] = useState('')

    useEffect(() => {
        if (sliding) {
            const timer = setTimeout(() => {
                setSliding(false)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [sliding])

    const nextSlide = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('left')
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('right')
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const getSlideClass = (index: number) => {
        if (index === currentSlide) {
            return 'translate-x-0'
        } else if (
            index ===
            (currentSlide - 1 + slides.length) % slides.length
        ) {
            return slideDirection === 'left'
                ? '-translate-x-full'
                : 'translate-x-full'
        } else {
            return slideDirection === 'left'
                ? 'translate-x-full'
                : '-translate-x-full'
        }
    }

    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-t from-black to-[#2C003E] lg:flex-row">
            {/* Left side with carousel */}
            <div className="relative h-[60vh] w-full overflow-hidden lg:h-screen lg:w-[55%]">
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
                            {/* Wrap the Image in a div with padding */}
                            <div className="h-full w-full p-4">
                                <Image
                                    className="rounded-xl object-cover"
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    width={1000} // Set specific width and height instead of layout fill
                                    height={600}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute left-4 top-4 z-10 hidden px-6 py-8 lg:block">
                    <Image
                        src={'/assets/webwunder-logo.png'}
                        alt="WebWunder Logo"
                        width={342}
                        height={60}
                    />
                </div>
                <div className="absolute px-10 inset-x-0 bottom-0 z-10 space-y-3 bg-gradient-to-t from-black to-transparent p-6 text-white">
                    <h1 className="text-xl font-bold leading-none md:text-2xl lg:text-3xl">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-sm text-white/70 lg:w-4/5">
                        {slides[currentSlide].description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex space-x-2 text-sm">
                            <span className="text-white/40">
                                {currentSlide + 1}
                            </span>
                            <span className="text-white">of</span>
                            <span className="text-white">{slides.length}</span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={prevSlide}
                                className="rounded-full border border-white/40 bg-transparent p-2 text-white hover:bg-white/20"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="rounded-full border border-white bg-transparent p-2 text-white hover:bg-white/20"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side with form */}
            <div className="flex w-full flex-col items-center justify-center px-6 py-8 lg:w-[45%] lg:py-10 lg:scale-90">
                <div className="w-full max-w-md space-y-2">
                    <div className="space-y-2 text-left">
                        <h2 className="font-archivo text-[45px] font-bold leading-none text-white">
                            Welcome back
                        </h2>
                        <p className="font-archivo text-base font-normal text-white">
                            New to WebWunder?{' '}
                            <Link href="/signup" className="text-[#5D59E1]">
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="mb-1 block font-inter text-sm font-bold text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block font-inter text-sm font-bold text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="font-archivo text-base font-semibold text-[#5D59E1]"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <button className="w-full rounded-full bg-[#5D59E1] py-3 font-archivo text-base font-normal text-white transition duration-300 hover:bg-[#4a47d1]">
                            Sign In
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="mb-4 font-archivo text-base font-normal text-white">
                            or sign in with
                        </p>
                        <Socials />
                    </div>

                    <div className="space-y-4 text-center text-xs text-white/70">
                        <div className="flex justify-center space-x-4 font-archivo text-sm font-normal text-white">
                            <a href="#" className="hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white">
                                Terms & Conditions
                            </a>
                            <a href="#" className="hover:text-white">
                                Imprint
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 font-inter text-sm font-normal text-white">
                            <a href="#" className="hover:text-white">
                                Benefits
                            </a>
                            <a href="#" className="hover:text-white">
                                Your Website
                            </a>
                            <a href="#" className="hover:text-white">
                                Prices
                            </a>
                            <a href="#" className="hover:text-white">
                                Portfolio
                            </a>
                            <a href="#" className="hover:text-white">
                                FAQs
                            </a>
                            <a href="#" className="hover:text-white">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
