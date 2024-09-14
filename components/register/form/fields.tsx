// 'use client'

// import { Input } from '@/components/ui/input'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'
// import Link from 'next/link'
// import { paths } from '@/paths'
// import { useToast } from '@/components/ui/use-toast'
// import SpinnerSVG from '@/assets/icons/spinner.svg'

// import { RegisterFieldsSchema, RegisterFieldsType } from '@/schema/fields'
// import { registerUser } from '@/services/registration/actions'
// import { type SubmitHandler, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// const DefFormData: RegisterFieldsType = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
// }

// export default function Fields(props: Props) {
//     const [terms, setTerms] = useState(false)
//     const router = useRouter()

//     const { toast } = useToast()
//     const {
//         reset,
//         handleSubmit,
//         formState,
//         register,
//         getValues,
//     } = useForm<RegisterFieldsType>({
//         defaultValues: {
//             ...DefFormData,
//         },
//         resolver: zodResolver(RegisterFieldsSchema),
//     })

//     const submit: SubmitHandler<RegisterFieldsType> = async (payload) => {
//         if (!terms) {
//             toast({
//                 title: 'Terms and Conditions ',
//                 description: `You must consent to your details being stored and processed to fulfill your request`,
//                 variant: 'destructive',
//             })
//             return
//         }

//         try {
//             // submit here
//             await registerUser(payload)
//             toast({
//                 title: 'Registration Successfull!',
//                 description: `${getValues('firstName')} ${getValues('lastName')} successfully registered!`,
//             })
//             router.push(paths.pages.login.href)
//             reset()
//         } catch (error:any) {
//             toast({
//                 title: 'Registration Failed!',
//                 description: error?.message ?? 'Something went wrong, please try again...',
//                 variant: 'destructive',
//             })
//         }
//     }

//     return (
//         <form
//             onSubmit={handleSubmit(submit)}
//             className={cn('flex flex-col gap-2', props.className)}
//         >
//             <div className="flex flex-col gap-2 xl:flex-row">
//                 <div className="flex basis-1/2 flex-col gap-2">
//                     <Input
//                         {...register('firstName')}
//                         className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
//                         type="text"
//                         placeholder="First Name"
//                     />
//                     <p className="ps-4 text-destructive">
//                         {formState.errors.firstName?.message}
//                     </p>
//                 </div>
//                 <div className="flex basis-1/2 flex-col gap-2">
//                     <Input
//                         {...register('lastName')}
//                         className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
//                         type="text"
//                         placeholder="Last Name"
//                     />
//                     <p className="ps-4 text-destructive">
//                         {formState.errors.lastName?.message}
//                     </p>
//                 </div>
//             </div>
//             <Input
//                 {...register('email')}
//                 className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
//                 type="text"
//                 placeholder="Email Address"
//             />
//             <p className="ps-4 text-destructive">
//                 {formState.errors.email?.message}
//             </p>
//             <Input
//                 {...register('password')}
//                 className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
//                 type="password"
//                 placeholder="Password"
//             />
//             <p className="ps-4 text-destructive">
//                 {formState.errors.password?.message}
//             </p>
//             <Input
//                 {...register('confirmPassword')}
//                 className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
//                 type="password"
//                 placeholder="Confirm Password"
//             />
//             <p className="ps-4 text-destructive">
//                 {formState.errors.confirmPassword?.message}
//             </p>
//             <div className="mt-2 flex space-x-2">
//                 <Checkbox
//                     checked={terms}
//                     onCheckedChange={(state) => setTerms(!!state)}
//                     name="terms"
//                     id="terms"
//                 />
//                 <div className="grid gap-1.5 leading-none">
//                     <label
//                         htmlFor="terms"
//                         className="text-sm font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                     >
//                         Yes, I understand and agree to the terms and conditions
//                     </label>
//                 </div>
//             </div>
//             <Button
//                 disabled={formState.isSubmitting}
//                 type="submit"
//                 className="my-4 w-full"
//             >
//                 Create Account
//                 <SpinnerSVG
//                     className={`ms-2 text-2xl ${formState.isSubmitting ? '' : 'hidden'} `}
//                 />
//             </Button>

//             <p className="text-center">
//                 Already have an acount?&nbsp;
//                 <Link
//                     className="font-bold text-primary"
//                     href={paths.pages.login.href}
//                 >
//                     Login
//                 </Link>
//             </p>
//             <p className="mt-2 ps-4 text-center text-destructive">
//                 {formState.errors.root?.message}
//             </p>
//         </form>
//     )
// }

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './social'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'

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
                <div className="font-archivo absolute bottom-10 z-10 space-y-4 p-6 text-white md:p-10">
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

            {/* Right side with form */}
            <div className="mx-auto flex w-full items-center justify-center py-10 lg:w-[45%] lg:py-80">
                <div className="mx-10 w-full space-y-4 rounded-2xl md:mx-0 md:max-w-lg">
                    <div className="font-archivo space-y-2 text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Create an account
                        </h2>
                        <p className="text-sm text-white">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="cursor-pointer text-[#5D59E1]"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form className="font-inter space-y-2">
                        <div>
                            <div className="mb-2 flex flex-row gap-3">
                                <div className="w-1/2">
                                    <label className="mb-1 block text-sm font-bold text-white">
                                        First Name
                                    </label>
                                    <div className="relative h-12 rounded-lg bg-black">
                                        <input
                                            type="text"
                                            className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label className="mb-1 block text-sm font-bold text-white">
                                        Last Name
                                    </label>
                                    <div className="relative h-12 rounded-lg bg-black">
                                        <input
                                            type="text"
                                            className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <label className="mb-1 block text-sm font-bold text-white">
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
                            <label className="mb-1 block text-sm font-bold text-white">
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
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="font-dm-sans text-sm font-normal leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the terms and conditions.
                            </label>
                        </div>
                    </form>

                    <button className="font-archivo w-full rounded-full bg-[#5D59E1] py-2 font-normal text-white transition duration-300 hover:bg-[#4a47d1]">
                        Sign Up
                    </button>

                    <div className="font-archivo mt-4 text-center text-sm text-white">
                        or sign up with
                    </div>
                    <div className="flex items-center justify-center">
                        <Socials />
                    </div>
                    <div className="font-inter flex flex-col gap-12">
                        <div className="font-archivo flex justify-center gap-5 text-sm text-white">
                            <span className="cursor-pointer">
                                Privacy Policy
                            </span>
                            <span className="cursor-pointer">
                                Terms & Conditions
                            </span>
                            <span className="cursor-pointer">Imprints</span>
                        </div>
                        <div className="font-archivo flex flex-wrap items-center justify-center gap-8 text-sm text-white">
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
