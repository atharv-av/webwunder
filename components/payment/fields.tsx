'use client'

import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

import EditSVG from '@/assets/icons/edit-05.svg'
import { Plans } from '@/data/plans'

const Schema = z.object({
    title: z
        .string()
        .min(6, 'Must have at least 5 characters')
        .max(40, 'Maximum 40 characters only'),
    note: z
        .string()
        .min(6, 'Must have at least 5 characters')
        .max(300, 'Maximum 300 characters only'),
    coupon: z.string(),
})

type SchemaType = z.infer<typeof Schema>

export default function Fields(
    props: Props & {
        packageType: PackageType
        note: string
        onNoteChange: (a: string) => void
        title: string
        onTitleChange: (a: string) => void
        coupon: string
        onCouponChange: (a: string) => void
    },
) {
    const planTitle = {
        'website-standard': 'Website',
        'website-pro': 'Website',
        'service-standard': 'Service',
        'service-pro': 'Service',
        'unlimited-standard': 'Unlimited Design',
        'unlimited-pro': 'Unlimited Design',
    }

    const form = useForm<SchemaType>({
        defaultValues: {
            title: props.title,
            note: props.note,
            coupon: props.coupon,
        },
        resolver: zodResolver(Schema),
    })

    const [isEditable, setEditable] = useState(true)

    const submit: SubmitHandler<SchemaType> = (payload) => {
        props.onNoteChange(payload.note)
        props.onTitleChange(payload.title)
        props.onCouponChange(payload.coupon)
        setEditable(false)
    }

    return (
        <div className={props.className}>
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex">
                    <h2 className="text-3xl font-bold text-black">
                        {planTitle[props.packageType]}:&nbsp;
                    </h2>
                    <h2 className="text-3xl font-bold text-black">
                        {Plans[props.packageType].title}
                    </h2>
                    <div className="mx-3 flex h-10 w-10 items-center justify-center rounded-full border">
                        {Plans[props.packageType].icon}
                    </div>
                </div>
                <p>{Plans[props.packageType].text}.</p>
            </div>
            <div>
                <form onSubmit={form.handleSubmit(submit)}>
                    {isEditable ? (
                        <div>
                            <div>
                                <Controller
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <Input
                                            className="mb-2 rounded-lg border-0 bg-[#F4F7FF] py-4 lg:px-3 xl:max-w-[600px]"
                                            {...field}
                                            placeholder={
                                                Plans[props.packageType]
                                                    .placeholder1
                                            }
                                        />
                                    )}
                                />
                                <p className="ps-4 text-destructive">
                                    {form.formState.errors.title?.message}
                                </p>
                            </div>

                            <div>
                                {/* <p className="mb-1 mt-4 font-light opacity-60">
                                    Tell us about this project:
                                </p> */}
                                <Controller
                                    control={form.control}
                                    name="note"
                                    render={({ field }) => (
                                        <Textarea
                                            className="mb-2 h-32 rounded border-0 bg-[#F4F7FF] lg:rounded-2xl lg:px-3 lg:py-3 xl:max-w-[600px]"
                                            {...field}
                                            placeholder={
                                                Plans[props.packageType]
                                                    .placeholder2
                                            }
                                        />
                                    )}
                                />
                                <p className="ps-4 text-destructive">
                                    {form.formState.errors.note?.message}
                                </p>
                            </div>

                            <div>
                                <div className="mb-1 mt-4 flex items-center gap-4">
                                    <p className="font-light opacity-60">
                                        {Plans[props.packageType].disCountText}
                                    </p>
                                    <Controller
                                        control={form.control}
                                        name="coupon"
                                        render={({ field }) => (
                                            <Input
                                                className="rounded-lg border-0 bg-[#F4F7FF] py-4 lg:px-3 xl:max-w-[200px]"
                                                {...field}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                </div>
                                <p className="ps-4 text-destructive">
                                    {form.formState.errors.title?.message}
                                </p>
                            </div>

                            <Button size={'md'} className="my-4">
                                Checkout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-start gap-2">
                            <div
                                onClick={() => {
                                    props.onNoteChange('')
                                    props.onTitleChange('')
                                    props.onCouponChange('')
                                    setEditable(true)
                                }}
                                className="flex cursor-pointer items-center justify-center font-bold"
                            >
                                <EditSVG className="me-2 text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="case text-xl font-bold capitalize">
                                    {props.title}
                                </h2>
                                <p>{props.note}</p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
