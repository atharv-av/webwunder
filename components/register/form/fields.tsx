'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { RegisterFieldsSchema, RegisterFieldsType } from '@/schema/fields'
import { registerUser } from '@/services/registration/actions'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { paths } from '@/paths'
import { useToast } from '@/components/ui/use-toast'
import SpinnerSVG from '@/assets/icons/spinner.svg'

const DefFormData: RegisterFieldsType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

export const SignupForm = () => {
    const [terms, setTerms] = useState(false)
    const router = useRouter()

    const { toast } = useToast()
    const { reset, handleSubmit, formState, register, getValues } =
        useForm<RegisterFieldsType>({
            defaultValues: {
                ...DefFormData,
            },
            resolver: zodResolver(RegisterFieldsSchema),
        })

    const submit: SubmitHandler<RegisterFieldsType> = async (payload) => {
        if (!terms) {
            toast({
                title: 'Terms and Conditions ',
                description: `You must consent to your details being stored and processed to fulfill your request`,
                variant: 'destructive',
            })
            return
        }

        try {
            // submit here
            await registerUser(payload)
            toast({
                title: 'Registration Successfull!',
                description: `${getValues('firstName')} ${getValues('lastName')} successfully registered!`,
            })
            router.push(paths.pages.login.href)
            reset()
        } catch (error: any) {
            toast({
                title: 'Registration Failed!',
                description:
                    error?.message ??
                    'Something went wrong, please try again...',
                variant: 'destructive',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <div className="mb-4 flex flex-row gap-3">
                <div className="w-1/2">
                    <label className="mb-1 block font-inter text-sm font-bold text-white">
                        First Name
                    </label>
                    <input
                        {...register('firstName')}
                        type="text"
                        className="w-full rounded-lg border border-white bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="w-1/2">
                    <label className="mb-1 block font-inter text-sm font-bold text-white">
                        Last Name
                    </label>
                    <input
                        {...register('lastName')}
                        type="text"
                        className="w-full rounded-lg border border-white bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your last name"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    Email Address
                </label>
                <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-lg border border-white bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    Password
                </label>
                <input
                    {...register('password')}
                    type="password"
                    className="w-full rounded-lg border border-white bg-[#908AA0]/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your password"
                />
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={terms}
                    onCheckedChange={(state) => setTerms(!!state)}
                    name="terms"
                    id="terms"
                />
                <label
                    htmlFor="terms"
                    className="font-dm-sans text-sm font-normal leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I agree to the terms and conditions.
                </label>
            </div>
            <button
                disabled={formState.isSubmitting}
                type="submit"
                className="w-full rounded-full bg-[#5D59E1] py-3 font-archivo text-base font-normal text-white transition duration-300 hover:bg-[#4a47d1]"
            >
                <div className="flex justify-center items-center">

                Sign Up
                <SpinnerSVG
                    className={`ms-2 text-2xl ${formState.isSubmitting ? '' : 'hidden'} `}
                    />
                    </div>
            </button>
        </form>
    )
}
