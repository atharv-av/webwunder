'use client'
import { Input } from '@/components/ui/input'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserContext } from '@/providers/user'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ConfirmUpdate } from './confirm-update'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import EyeSVG from '@/assets/icons/eye.svg'
import EyeOffSVG from '@/assets/icons/eye-off.svg'
import { useToast } from '@/components/ui/use-toast'
import { updatePassword } from '@/services/user/actions'
import { UpdatePasswordSchema, UpdatePasswordType } from '@/schema/fields'

export default function ChangePasswordForm(props: Props) {
    const userCtx = useUserContext()
    const [open, setOpen] = useState(false)
    const [type1, setType1] = useState<'password' | 'text'>('password')
    const [type2, setType2] = useState<'password' | 'text'>('password')
    const [type3, setType3] = useState<'password' | 'text'>('password')
    const { toast } = useToast()
    const {
        reset,
        handleSubmit,
        formState,
        register,
        getValues,
        setValue,
        trigger,
    } = useForm<UpdatePasswordType>({
        resolver: zodResolver(UpdatePasswordSchema),
    })

    const submit: SubmitHandler<UpdatePasswordType> = async (payload) => {
        try {
            if (userCtx?.user?.id) {
                await updatePassword(payload)
                await userCtx.refetchUser()
                toast({
                    title: 'Update Password Successful!',
                    description: `Password was updated!`,
                })
            } else throw new Error('Invalid user ID')
        } catch (error: any) {
            toast({
                title: 'Update Password Failed!',
                description:
                    error?.message ??
                    'Something went wrong, please try again...',
                variant: 'destructive',
            })
        }
    }

    const submitForm = () => {
        if (!formState.isLoading && !formState.isSubmitting)
            handleSubmit(submit)()
    }

    useEffect(() => {
        reset({
            oldPassword: '',
            password: '',
            confirmPassword: '',
        })
    }, [userCtx?.user, reset])

    const triggerForm = async () => {
        const isValid = await trigger()
        if (isValid) setOpen(true)
    }

    return (
        <div className={props.className}>
            <div className="grid gap-4 gap-x-8 lg:grid-cols-2">
                <Field
                    title="Old Password"
                    name="oldPassword"
                    className=""
                    error={formState.errors.oldPassword?.message}
                >
                    <Input
                        {...register('oldPassword')}
                        className="rounded-xl p-6 text-lg"
                        type={type1}
                    />
                    <div
                        className="p-6 cursor-pointer"
                        onClick={() =>
                            setType1((e) =>
                                e === 'password' ? 'text' : 'password',
                            )
                        }
                    >
                        {type1 === 'password' ? <EyeSVG /> : <EyeOffSVG />}
                    </div>
                </Field>
                <Field
                    title="New Password"
                    name="password"
                    className="lg:col-start-1"
                    error={formState.errors.password?.message}
                >
                    <Input
                        {...register('password')}
                        className="rounded-xl p-6 text-lg"
                        type={type2}
                    />
                    <div
                        className="p-6 cursor-pointer"
                        onClick={() =>
                            setType2((e) =>
                                e === 'password' ? 'text' : 'password',
                            )
                        }
                    >
                        {type2 === 'password' ? <EyeSVG /> : <EyeOffSVG />}
                    </div>
                </Field>
                <Field
                    title="Confirm Password"
                    name="confirmPassword"
                    error={formState.errors.confirmPassword?.message}
                >
                    <Input
                        {...register('confirmPassword')}
                        className="rounded-xl p-6 text-lg"
                        type={type3}
                    />
                    <div
                        className="p-6 cursor-pointer"
                        onClick={() =>
                            setType3((e) =>
                                e === 'password' ? 'text' : 'password',
                            )
                        }
                    >
                        {type3 === 'password' ? <EyeSVG /> : <EyeOffSVG />}
                    </div>
                </Field>
                <div className="mt-4 lg:col-span-2">
                    <Button
                        disabled={formState.isSubmitting || !formState.isDirty}
                        type="button"
                        onClick={triggerForm}
                    >
                        Change Password
                        <SpinnerSVG
                            className={`ms-2 text-xl ${formState.isSubmitting ? '' : 'hidden'}`}
                        />
                    </Button>
                    <ConfirmUpdate
                        onConfirm={submitForm}
                        open={open}
                        setOpen={setOpen}
                        text="Are you sure you want to update your password?"
                    ></ConfirmUpdate>
                </div>
            </div>
        </div>
    )
}

function Field(props: Props & { title: string; name: string; error?: string }) {
    return (
        <div className={cn('flex flex-col gap-3', props.className)}>
            <label
                className="text-sm font-medium opacity-60"
                htmlFor={props.name}
            >
                {props.title}
            </label>
            <div className="relative flex items-center">{props.children}</div>
            <p className="ps-4 text-destructive">{props.error}</p>
        </div>
    )
}
