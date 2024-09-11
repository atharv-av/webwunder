'use client'
import { UpdateUserSchema, UpdateUserType } from '@/schema/user'
import { Input } from '@/components/ui/input'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserContext } from '@/providers/user'
import { useEffect, useState } from 'react'

import PhoneSVG from '@/assets/icons/phone.svg'
import { Button } from '@/components/ui/button'
import { cn, waits } from '@/lib/utils'
import { ConfirmUpdate } from './confirm-update'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import { useToast } from '@/components/ui/use-toast'
import { updateUser } from '@/services/user/actions'
import { DatePicker } from './date-picker'

import CalendarSVG from '@/assets/icons/calendar-date.svg'

export default function FormDetails() {
    const userCtx = useUserContext()
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    const {
        reset,
        handleSubmit,
        formState,
        register,
        getValues,
        setValue,
        trigger,
    } = useForm<UpdateUserType>({
        resolver: zodResolver(UpdateUserSchema),
    })

    const submit: SubmitHandler<UpdateUserType> = async (payload) => {
        try {
            if (userCtx?.user?.id) {
                await updateUser(payload)
                await userCtx.refetchUser()
                toast({
                    title: 'Update Successful!',
                    description: `Profile was updated!`,
                })                
            } else throw new Error('Invalid user ID')
        } catch (error: any) {
            toast({
                title: 'Update Failed!',
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
            firstName: userCtx?.user?.first_name || '',
            lastName: userCtx?.user?.last_name || '',
            mobile: userCtx?.user?.mobile || '',
            dob: userCtx?.user?.dob || '',
        })
    }, [userCtx?.user, reset])

    const triggerForm = async () => {
        const isValid = await trigger()
        console.log('Trigger', isValid)
        if (isValid) setOpen(true)
    }

    return (
        <div>
            <h3 className="mb-8 text-lg font-medium text-black">
                Personal Information
            </h3>

            <div className="grid lg:grid-cols-2 gap-4 gap-x-8">
                <Field
                    title="First Name"
                    name="firstName"
                    error={formState.errors.firstName?.message}
                >
                    <Input
                        {...register('firstName')}
                        className="rounded-xl p-6 text-lg"
                        name="firstName"
                    />
                </Field>
                <Field
                    title="Last Name"
                    name="lastName"
                    error={formState.errors.lastName?.message}
                >
                    <Input
                        {...register('lastName')}
                        className="rounded-xl p-6 text-lg"
                        name="lastName"
                    />
                </Field>
                <Field
                    title="Date of Birth (YYYY-MM-DD)"
                    name="dob"
                    error={formState.errors.dob?.message}
                >
                    <Input
                        {...register('dob')}
                        className="rounded-xl p-6 text-lg"
                        name="dob"
                    />
                    <DatePicker
                        date={getValues('dob')}
                        onSelect={(date) => {
                            setValue('dob', date, {
                                shouldDirty:true
                            })
                        }}
                    >
                        <div className="ms-3 cursor-pointer pe-3 ps-3">
                            <CalendarSVG className="text-xl opacity-50" />
                        </div>
                    </DatePicker>
                </Field>
                <Field
                    title="Mobile"
                    name="mobile"
                    error={formState.errors.mobile?.message}
                >
                    <PhoneSVG className="absolute ms-4" />
                    <Input
                        {...register('mobile')}
                        className="rounded-xl p-6 ps-10 text-lg"
                        name="mobile"
                    />
                </Field>

                <div className="lg:col-span-2 mt-4">
                    <Button
                        disabled={formState.isSubmitting || !formState.isDirty}
                        type="button"
                        onClick={triggerForm}
                    >
                        Update Profile
                        <SpinnerSVG
                            className={`ms-2 text-xl ${formState.isSubmitting ? '' : 'hidden'}`}
                        />
                    </Button>
                    <ConfirmUpdate
                        onConfirm={submitForm}
                        open={open}
                        setOpen={setOpen}
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
