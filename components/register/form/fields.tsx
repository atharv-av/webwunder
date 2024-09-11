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

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
// import { Button } from '../ui/button'
import Socials from './social'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
export default function LoginPage() {
    const router = useRouter()

    return (
        <div className="flex h-screen flex-col overflow-y-hidden bg-gradient-to-t from-black to-[#2C003E] md:flex-row">
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
                            Create an account
                        </h2>
                        <p className="text-sm text-white">
                            Already have an account?{' '}
                            <Link
                                // onClick={() => router.push('/signup')}
                                href="/login"
                                className="cursor-pointer text-[#5D59E1]"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form className="space-y-2">
                        <div>
                            <div className="mb-2 flex flex-row gap-3">
                                <div className="w-1/2">
                                    <label className="mb-1 block text-sm text-white">
                                        First Name
                                    </label>
                                    <div className="relative h-12 rounded-lg bg-black">
                                        <input
                                            type="email"
                                            className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label className="mb-1 block text-sm text-white">
                                        Last Name
                                    </label>
                                    <div className="relative h-12 rounded-lg bg-black">
                                        <input
                                            type="email"
                                            className="absolute inset-0 w-full rounded-lg border border-gray-700 bg-[#908AA0]/50 px-4 py-3 text-base text-gray-400 shadow-inner"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                            </div>
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
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the terms and conditions.
                            </label>
                        </div>
                    </form>

                    <button className="w-full mt-6 rounded-full bg-[#5D59E1] py-2 font-semibold text-white transition duration-300 hover:bg-[#4a47d1]">
                        Sign Up
                    </button>

                    <div className="mt-4 text-center text-sm text-white">
                        or sign up with
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
