'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './form/social'
import Header from '../layout/home-template-new/header'
import { LoginForm } from './form/fields'

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
]

export default function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliding, setSliding] = useState(false)
    const [slideDirection, setSlideDirection] = useState('')
    const [scale, setScale] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth

            // Define breakpoints at intervals of 100px
            if (windowWidth >= 1536) {
                setScale("scale-110") // For 1536px and above
            } else if (windowWidth >= 1280) {
                setScale("scale-105") // For 1400px to 1535px
            } else if (windowWidth >= 1024) {
                setScale("scale-95") // For 1300px to 1399px
            } else {
                setScale("scale-95") // Default or fallback width
            }
        }

        // Call the function on mount and when window is resized
        window.addEventListener('resize', handleResize)
        handleResize() // Call it once to set the initial width

        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
            <div className="block md:hidden">
                <Header />
            </div>
            {/* Left side with carousel */}
            <div className="relative h-[60vh] w-full overflow-hidden lg:h-screen lg:w-[60%]">
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
                            {/* Wrap the Image in a div with padding */}
                            <div className="h-full w-full p-4">
                                <Link href="/">
                                    <Image
                                        className="rounded-2xl object-cover"
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute left-4 top-4 z-10 hidden cursor-pointer px-6 py-8 lg:block">
                    <Link href={'/'}>
                        <Image
                            src={'/assets/webwunder-logo.png'}
                            alt="WebWunder Logo"
                            width={342}
                            height={60}
                        />
                    </Link>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 space-y-3 bg-gradient-to-t from-black to-transparent p-6 px-10 text-white">
                    <h1 className="text-xl font-bold leading-none md:text-2xl lg:text-3xl xl:text-2xl">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-sm text-white/70 lg:w-4/5 xl:text-base">
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
            <div className={`m-auto flex flex-col ${scale} items-center justify-center px-6 py-8`}>
                <div className="w-full max-w-lg space-y-2">
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

                    <LoginForm />

                    <div className="text-center">
                        <p className="mb-4 font-archivo text-base font-normal text-white">
                            or sign in with
                        </p>
                        <Socials />
                    </div>

                    <div className="space-y-4 text-center text-xs text-white/70">
                        <div className="flex justify-center space-x-4 font-archivo text-sm font-normal text-white">
                            <a href="/privacy-policy" className="hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="hover:text-white">
                                Terms & Conditions
                            </a>
                            <a href="/imprint" className="hover:text-white">
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
