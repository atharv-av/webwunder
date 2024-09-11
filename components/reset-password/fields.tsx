'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import EyeSVG from '@/assets/icons/eye.svg'
import EyeOffSVG from '@/assets/icons/eye-off.svg'

import { ResetPasswordSchema, ResetPasswordType } from '@/schema/fields'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { resetPassword } from '@/services/user/actions'
import { paths } from '@/paths'

const DefFormData: ResetPasswordType = {
    password: '',
    confirmPassword: '',
}

export default function Fields(props: Props) {
    const [type, setType] = useState<'password' | 'text'>('password')
    const router = useRouter()
    const [isRedirecting, setIsRedirecting] = useState(false)

    const { toast } = useToast()
    const { reset, handleSubmit, formState, register, getValues } =
        useForm<ResetPasswordType>({
            defaultValues: {
                ...DefFormData,
            },
            resolver: zodResolver(ResetPasswordSchema),
        })

    const submit: SubmitHandler<ResetPasswordType> = async (payload) => {
        setIsRedirecting(false)
        try {

            // submit here
            await resetPassword(payload.password)
            toast({
                title: 'Update Password Successful!',
                description: `Password was updated!`,
            })
            setIsRedirecting(true)
            router.push(paths.pages.loginSuccess.href)
            reset()
        } catch (error: any) {
            toast({
                title: 'Reset Password Failed!',
                description:
                    error?.message ??
                    'Something went wrong, please try again...',
                variant: 'destructive',
            })
            setIsRedirecting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className={cn('flex flex-col gap-2', props.className)}
        >
            <div className="flex items-center">
                <Input
                    {...register('password')}
                    className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
                    type={type}
                    placeholder="Password"
                />
                <div
                    className="cursor-pointer p-4"
                    onClick={() =>
                        setType((e) => (e === 'password' ? 'text' : 'password'))
                    }
                >
                    {type === 'password' ? <EyeSVG /> : <EyeOffSVG />}
                </div>
            </div>
            <p className="ps-4 text-destructive">
                {formState.errors.password?.message}
            </p>
            <div className="flex items-center">
                <Input
                    {...register('confirmPassword')}
                    className="rounded-xl px-7 py-7 placeholder:text-[#909AB6] lg:rounded-2xl lg:px-8"
                    type={type}
                    placeholder="Confirm Password"
                />
                <div
                    className="cursor-pointer p-4"
                    onClick={() =>
                        setType((e) => (e === 'password' ? 'text' : 'password'))
                    }
                >
                    {type === 'password' ? <EyeSVG /> : <EyeOffSVG />}
                </div>
            </div>
            <p className="ps-4 text-destructive">
                {formState.errors.confirmPassword?.message}
            </p>
            <Button
                disabled={formState.isSubmitting || isRedirecting}
                type="submit"
                className="my-4 w-full"
            >
                Submit
                <SpinnerSVG
                    className={`ms-2 text-2xl ${formState.isSubmitting || isRedirecting ? '' : 'hidden'} `}
                />
            </Button>

            <p className="mt-2 ps-4 text-center text-destructive">
                {formState.errors.root?.message}
            </p>
        </form>
    )
}
