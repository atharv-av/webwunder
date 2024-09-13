'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './form/social'

const images = ['/assets/auth1.png', '/assets/auth2.png', '/assets/auth1.png']

export default function LoginPage() {
    const [currentImage, setCurrentImage] = useState(0)
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

    const nextImage = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('left')
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('right')
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    const getSlideClass = (index: number) => {
        if (index === currentImage) {
            return 'translate-x-0'
        } else if (
            index ===
            (currentImage - 1 + images.length) % images.length
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
        <div className="flex h-screen flex-col overflow-y-hidden bg-gradient-to-t from-black to-[#2C003E] md:flex-row">
            {/* Left side with carousel */}
            <div className="hidden items-center justify-center lg:relative lg:flex lg:w-1/2">
                <div className="relative h-full w-full overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="absolute z-0"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 z-10 space-y-4 p-6 text-white md:p-10">
                    <Image
                        src={'/assets/webwunder-logo.png'}
                        alt="WebWunder Logo"
                        width={300}
                        height={120}
                        className="z-50"
                    />
                </div>
                <div className="absolute bottom-10 z-10 space-y-4 p-6 text-white md:p-10">
                    <h1 className="text-2xl font-bold leading-tight md:text-4xl">
                        With WebWunder, You'll Never Need Another Agency.
                    </h1>
                    <p className="text-white">
                        WebWunder offers a comprehensive, all-in-one solution
                        for your digital presence...
                    </p>
                </div>
                <div className="absolute bottom-4 left-4 z-20 flex space-x-2">
                    <p className="text-white/40">{currentImage + 1}</p>
                    <p className="text-white">of </p>
                    <p className="text-white">{images.length}</p>
                </div>
                <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                    <button
                        onClick={prevImage}
                        className="rounded-full border border-white/40 bg-transparent p-2 text-white hover:bg-white/50"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="rounded-full border border-white bg-transparent p-2 text-white hover:bg-white/50"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right side with form (full width on smaller screens) */}
            <div className="flex w-full items-center justify-center lg:w-1/2 lg:py-80 py-10">
                <div className="mx-10 w-full space-y-4 rounded-2xl md:mx-0 md:max-w-md">
                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Welcome back
                        </h2>
                        <p className="text-sm text-white">
                            New to WebWunder?{' '}
                            <Link
                                href="/signup"
                                className="cursor-pointer text-[#5D59E1]"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <form className="space-y-2">
                        <div>
                            <label className="mb-1 block text-sm text-white">
                                Email Address
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    type="email"
                                    className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-white">
                                Password
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    type="password"
                                    className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        <div className="cursor-pointer text-left text-sm text-[#5D59E1]">
                            Forgot Password?
                        </div>
                    </form>

                    <button className="w-full rounded-full bg-[#5D59E1] py-2 font-semibold text-white transition duration-300 hover:bg-[#4a47d1]">
                        Sign In
                    </button>

                    <div className="mt-4 text-center text-sm text-white">
                        or sign in with
                    </div>
                    <div className="flex items-center justify-center">
                        <Socials />
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="flex justify-center gap-5 text-sm text-white">
                            <span className="cursor-pointer">
                                Privacy Policy
                            </span>
                            <span className="cursor-pointer">
                                Terms & Conditions
                            </span>
                            <span className="cursor-pointer">Imprints</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white">
                            <span className="cursor-pointer">Benefits</span>
                            <span className="cursor-pointer">Your Website</span>
                            <span className="cursor-pointer">Prices</span>
                            <span className="cursor-pointer">FAQs</span>
                            <span className="cursor-pointer">Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
