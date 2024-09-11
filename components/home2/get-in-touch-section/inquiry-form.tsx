'use client'

import { ComponentProps, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { InquirySchema, type InquiryType } from '@/schema/inquiry'
import { sendContactForm, waits } from '@/lib/utils'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import { useToast } from '@/components/ui/use-toast'

import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createInquiry } from '@/services/inquiry/actions'

interface Props extends ComponentProps<'div'> {}

// import debounce from 'lodash/debounce'

export default function InquiryForm(props: Props) {
    const [terms, setTerms] = useState(false)
    const { toast } = useToast()
    const form = useForm<InquiryType>({
        defaultValues: {
            fullName: '',
            email: '',
            mobile: '',
            message: '',
        },
        resolver: zodResolver(InquirySchema),
    })

    const submit: SubmitHandler<InquiryType> = async (payload) => {
        if (!terms) {
            toast({
                title: 'Terms and Conditions ',
                description: `You must consent to your details being stored and processed to fulfill your request.`,
                variant: 'destructive',
            })
            return
        }

        try {
            // submit here
            createInquiry(payload)
            await sendContactForm(payload)

            toast({
                title: 'Thank you for your interest in WebWunder',
                description: `We will be in touch soon!`,
            })
            form.reset()
        } catch (error: any) {
            console.error(error?.message)
            toast({
                title: 'Inquiry Failed!',
                description: 'Something went wrong, please try again...',
                variant: 'destructive',
            })
        }
    }

    ////////////// testing debounce
    // const testFunc = async (payload: { val1: string; val2: string }) => {
    //     await waits(800)
    //     console.log('test func: ', payload)
    // }
    // const dd = debounce(testFunc, 1000, {
    //     leading: true,
    //     trailing: false,
    // })
    // const testSubmit = async () => {
    //     for (let i = 0; i < 10; i++) {
    //         await dd({
    //             val1: 'value 1: ' + i,
    //             val2: 'value 2: ' + i,
    //         })
    //     }
    //     console.log(
    //         'test done submit: this should log how many times you clicked',
    //     )
    // }
    //////////////

    return (
        <div className={props.className}>
            <Card className="max-w-[800px] rounded-3xl shadow-xl lg:p-12">
                <form onSubmit={form.handleSubmit(submit)}>
                    <CardHeader>
                        <CardTitle className="text-4xl">Get in Touch</CardTitle>
                        <CardDescription className="">
                            {`Prefer to reach out first? Send us your questions, and we'll reply quickly.`}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Controller
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        className="rounded-lg border-0 bg-[#F4F7FF] lg:rounded-2xl lg:px-8 lg:py-7"
                                        placeholder="Full Name"
                                    />
                                )}
                            />
                            <p className="ps-4 text-destructive">
                                {form.formState.errors.fullName?.message}
                            </p>
                        </div>
                        <div>
                            <Input
                                {...form.register('email')}
                                className="rounded-lg border-0 bg-[#F4F7FF] lg:rounded-2xl lg:px-8 lg:py-7"
                                type="text"
                                placeholder="Email Address"
                            />

                            <p className="ps-4 text-destructive">
                                {form.formState.errors.email?.message} 
                            </p>
                        </div>
                        <div>
                            <Input
                                {...form.register('mobile')}
                                className="rounded-lg border-0 bg-[#F4F7FF] lg:rounded-2xl lg:px-8 lg:py-7"
                                type="text"
                                placeholder="Phone"
                            />

                            <p className="ps-4 text-destructive">
                                {form.formState.errors.mobile?.message}
                            </p>
                        </div>
                        <div>
                            <Textarea
                                {...form.register('message')}
                                className="rounded-lg border-0 bg-[#F4F7FF] lg:rounded-2xl lg:px-8 lg:py-7"
                                placeholder="Message"
                            />
                            <p className="ps-4 text-destructive">
                                {form.formState.errors.message?.message}
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="items-top mb-2 flex space-x-2 lg:mb-6">
                            <Checkbox
                                checked={terms}
                                onCheckedChange={(state) => setTerms(!!state)}
                                name="terms"
                                id="terms"
                            />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium text-grayText peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I accept that my details will be stored and
                                    processed to handle my request.
                                </label>
                            </div>
                        </div>
                        <Button
                            disabled={form.formState.isSubmitting}
                            type="submit"
                            variant={'dark'}
                            className="mb-8 rounded-lg px-8 py-7 text-lg"
                        >
                            Send
                            <SpinnerSVG
                                className={`ms-2 text-2xl ${form.formState.isSubmitting ? '' : 'hidden'} `}
                            />
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
