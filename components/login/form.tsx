'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import Socials from './form/social'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
    const router = useRouter()

    return (
        <div className="flex h-screen flex-col bg-gradient-to-t from-black to-[#2C003E] md:flex-row overflow-y-hidden">
            {/* Left side with background image and text */}
            <div className="relative flex w-full items-center justify-center p-2 md:w-1/2">
                <div className="relative h-full max-h-[96%] w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src="/assets/login-bg.png"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute z-0"
                    />
                    <div className="absolute inset-0"></div>
                    <div className="absolute z-10 space-y-4 p-6 text-white md:p-10">
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
                            With WebWunder, You ll Never Need Another Agency.
                        </h1>
                        <p className="text-white">
                            WebWunder offers a comprehensive, all-in-one
                            solution for your digital presence...
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side with form */}
            <div className="flex w-full items-center md:w-1/2 md:pl-10 lg:pl-20 lg:py-80">
                <div className="mx-10 w-full space-y-4 rounded-2xl md:mx-0 md:max-w-md">
                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Welcome back
                        </h2>
                        <p className="text-sm text-white">
                            New to WebWunder?{' '}
                            <Link
                                // onClick={() => router.push('/signup')}
                                href="/signup"
                                className="cursor-pointer text-[#5D59E1]"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <form className="space-y-2">
                        <div>
                            <label className="mb-1 block text-white text-sm">
                                Email Address
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    type="email"
                                    className="absolute text-base inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-gray-400 shadow-inner"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 block text-white text-sm">
                                Password
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    type="password"
                                    className="absolute text-base inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-gray-400 shadow-inner"
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
