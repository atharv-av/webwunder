'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './form/social'
import {
    EmailSchema,
    LoginFieldsSchema,
    LoginFieldsType,
} from '@/schema/fields'
import { createClient } from '@/lib/supabase/server'
import SpinnerSVG from '@/assets/icons/spinner.svg'

import { useToast } from '../ui/use-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { loginUser } from '@/services/login/actions'
import { paths } from '@/paths'

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
            "Hate meetings? Us too—that’s why we've minimized them. In under an hour of your valuable time, we help successful businesses become even more successful.",
    },
    {
        image: '/assets/auth1.png',
        title: "With WebWunder, You'll Never Need Another Agency. Ever.",
        description:
            "With WebWunder, you'll find a comprehensive, all-in-one solution that addresses every facet of your digital presence, from website design to marketing strategies, ensuring you'll never need to rely on another agency again. We handle it all, so you can focus on growing your business with confidence.",
    },
]

const DefFormData: LoginFieldsType = {
    email: '',
    password: '',
}

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

    const supabase = createClient()
    const { toast } = useToast()
    const router = useRouter()
    const { handleSubmit, formState, register, setError, getValues, trigger } =
        useForm<LoginFieldsType>({
            defaultValues: {
                ...DefFormData,
            },
            resolver: zodResolver(LoginFieldsSchema),
        })

    const [isRedirecting, setIsRedirecting] = useState(false)

    const submit: SubmitHandler<LoginFieldsType> = async (payload) => {
        setIsRedirecting(false)
        try {
            // submit here
            const { error } = await loginUser({
                email: payload.email,
                password: payload.password,
            })

            if (error) {
                toast({
                    title: 'Login Failed',
                    description: error,
                    variant: 'destructive',
                })
                return
            }

            toast({
                title: 'Login Successfull',
                description: `You have successfully logged in!`,
            })
            setIsRedirecting(true)
            router.push(paths.pages.loginSuccess.href)
        } catch (error) {
            setError('root', {
                message: 'Something went wrong, please try again...',
            })
            setIsRedirecting(false)
        }
    }

    // Forgot Password
    const [isResetting, setIsResetting] = useState(false)
    const [isResettingSuccess, setIsResettingSuccess] = useState(false)
    const sendResetPassword = async () => {
        if (isResetting) return

        try {
            const email = getValues('email')
            trigger('email')
            const { success } = EmailSchema.safeParse({
                email,
            })

            if (!success) {
                toast({
                    title: 'Forgot Password',
                    description: `Invalid Email Address`,
                    variant: 'destructive',
                })
                return
            }

            // send reset email here
            setIsResetting(true)
            const { error } = await supabase.auth.resetPasswordForEmail(email)
            // await waits(2000)
            if (error) {
                console.error(error)
                throw error
            }

            toast({
                title: 'Forgot Password Email Sent',
                description: `Please check your email.`,
                variant: 'success',
            })
            setIsResetting(false)
        } catch (error) {
            setIsResetting(false)
            toast({
                title: 'Password Reset Failed',
                description: `Something went wrong, please try again...`,
                variant: 'destructive',
            })
        }
    }

    return (
        <div className="flex h-screen flex-col overflow-y-hidden bg-gradient-to-t from-black to-[#2C003E] md:flex-row">
            {/* Left side with carousel */}
            <div className="hidden items-center justify-center lg:relative lg:flex lg:w-[55%]">
                <div className="relative h-full w-full overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
                            <Image
                                src={slide.image}
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
                <div className="absolute bottom-10 z-10 space-y-4 p-6 font-archivo text-white md:p-10">
                    <h1 className="text-2xl font-bold leading-tight transition-opacity duration-500 md:text-[42px]">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-sm text-white/50 transition-opacity duration-500">
                        {slides[currentSlide].description}
                    </p>
                </div>
                <div className="absolute bottom-4 left-4 z-20 flex space-x-2">
                    <p className="text-white/40">{currentSlide + 1}</p>
                    <p className="text-white">of </p>
                    <p className="text-white">{slides.length}</p>
                </div>
                <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                    <button
                        onClick={prevSlide}
                        className="rounded-full border border-white/40 bg-transparent p-2 text-white hover:bg-white/50"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="rounded-full border border-white bg-transparent p-2 text-white hover:bg-white/50"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right side with form (full width on smaller screens) */}
            <div className="flex w-full items-center justify-center py-10 lg:w-[45%] lg:py-80">
                <div className="mx-10 w-full space-y-4 rounded-2xl md:mx-0 md:max-w-lg">
                    <div className="space-y-2 text-left font-archivo">
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

                    <form
                        onSubmit={handleSubmit(submit)}
                        className="space-y-2 font-inter"
                    >
                        <div>
                            <label className="mb-1 block text-sm font-bold text-white">
                                Email Address
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    {...register('email')}
                                    type="email"
                                    className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-bold text-white">
                                Password
                            </label>
                            <div className="relative h-12 rounded-lg bg-black">
                                <input
                                    {...register('password')}
                                    type="password"
                                    className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                    placeholder="Enter your password"
                                />
                                <p className="ps-4 text-destructive">
                                    {formState.errors.password?.message}
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={sendResetPassword}
                            className="cursor-pointer text-left text-sm text-[#5D59E1]"
                        >
                            <div className={`text-end ${isResetting ? 'opacity-60' : ''} `}>

                            Forgot Password?
                            </div>
                            <SpinnerSVG
                    className={`ms-2 text-2xl ${isResetting ? '' : 'hidden'} `}
                />

                        </div>
                    </form>

                    <button
                    disabled={formState.isSubmitting || isRedirecting}
                type="submit"
                    className="w-full rounded-full bg-[#5D59E1] py-2 font-archivo font-normal text-white transition duration-300 hover:bg-[#4a47d1]">
                        Sign In
                        <SpinnerSVG
                    className={`ms-2 text-2xl ${formState.isSubmitting || isRedirecting ? '' : 'hidden'} `}
                />
                    </button>
                    <p
                className={`mt-2 ps-4 text-center text-destructive ${formState.errors.root?.message ? '' : 'hidden'}`}
            >
                {formState.errors.root?.message}
            </p>

                    <div className="mt-4 text-center font-archivo text-sm text-white">
                        or sign in with
                    </div>
                    <div className="flex items-center justify-center">
                        <Socials />
                    </div>

                    <div className="flex flex-col gap-12 font-inter">
                        <div className="flex justify-center gap-5 font-archivo text-sm text-white">
                            <span className="cursor-pointer">
                                Privacy Policy
                            </span>
                            <span className="cursor-pointer">
                                Terms & Conditions
                            </span>
                            <span className="cursor-pointer">Imprints</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 font-archivo text-sm text-white">
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
