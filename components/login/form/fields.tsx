'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn, waits } from '@/lib/utils'
import Link from 'next/link'
import { paths } from '@/paths'
import { useToast } from '@/components/ui/use-toast'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import { createClient } from '@/lib/supabase/client'

import {
    EmailSchema,
    LoginFieldsSchema,
    LoginFieldsType,
} from '@/schema/fields'
import { loginUser } from '@/services/login/actions'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { app } from '@/config'

const DefFormData: LoginFieldsType = {
    email: '',
    password: '',
}

export default function Fields(props: Props) {
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
        <form
            onSubmit={handleSubmit(submit)}
            className={cn('flex flex-col gap-2', props.className)}
        >
            <Input
                {...register('email')}
                className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
                name="email"
                type="email"
                placeholder="Email Address"
            />
            <p className="ps-4 text-destructive">
                {formState.errors.email?.message}
            </p>
            <Input
                {...register('password')}
                className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
                name="password"
                type="password"
                placeholder="Password"
            />
            <p className="ps-4 text-destructive">
                {formState.errors.password?.message}
            </p>

            <div
                className="flex cursor-pointer justify-end"
                onClick={sendResetPassword}
            >
                <p className={`text-end ${isResetting ? 'opacity-60' : ''} `}>
                    Forgot password?
                </p>
                <SpinnerSVG
                    className={`ms-2 text-2xl ${isResetting ? '' : 'hidden'} `}
                />
            </div>

            <Button
                disabled={formState.isSubmitting || isRedirecting}
                type="submit"
                className="my-4 mt-2 w-full"
            >
                Login
                <SpinnerSVG
                    className={`ms-2 text-2xl ${formState.isSubmitting || isRedirecting ? '' : 'hidden'} `}
                />
            </Button>

            <p
                className={`mt-2 ps-4 text-center text-destructive ${formState.errors.root?.message ? '' : 'hidden'}`}
            >
                {formState.errors.root?.message}
            </p>
        </form>
    )
}
