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
import Header from '@/components/layout/home-template-new/header'

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

export default function SignupPage() {
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
            <div className="block md:hidden">
                <Header />
            </div>
            {/* Left side with carousel */}
            <div className="relative h-[45vh] w-full overflow-hidden lg:h-screen lg:w-[55%]">
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
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
                <div className="absolute inset-x-0 bottom-0 z-10 space-y-3 bg-gradient-to-t from-black to-transparent p-6 px-10 text-white">
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
            <div className="flex w-full flex-col items-center justify-center px-6 py-8 lg:w-[45%] lg:scale-90 lg:py-0">
                <div className="w-full max-w-md lg:space-y-3 space-y-5">
                    <div className="lg:space-y-2 space-y-3.5 text-left">
                        <h2 className="lg:text-start text-center font-archivo lg:text-[45px] text-[35px] font-bold leading-none text-white">
                            Create an account
                        </h2>
                        <p className="lg:text-start text-center font-archivo lg:text-base text-sm font-normal text-white">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#5D59E1]">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div className="mb-4 flex flex-row gap-3">
                            <div className="w-1/2">
                                <label className="mb-1 block font-inter text-sm font-bold text-white">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="outline-none border border-white w-full rounded-lg bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="mb-1 block font-inter text-sm font-bold text-white">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="outline-none border border-white w-full rounded-lg bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 block font-inter text-sm font-bold text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400"
                                placeholder="Enter your email"
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

                    <button className="w-full rounded-full bg-[#5D59E1] py-3 font-archivo text-base font-normal text-white transition duration-300 hover:bg-[#4a47d1]">
                        Sign Up
                    </button>

                    <div className="text-center">
                        <p className="mb-4 font-archivo text-base font-normal text-white">
                            or sign up with
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
                                Imprints
                            </a>
                        </div>
                        <div className="flex justify-center space-x-4 font-archivo text-sm font-normal text-white">
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
