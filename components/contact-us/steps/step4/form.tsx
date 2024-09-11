'use client'

import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn, waits } from '@/lib/utils'
import { ContactUsSchema } from '@/schema/contact-us'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

import FadeIn from '@/components/transitions/fade-in'
import { useStepsContext } from '@/hooks/steps-context-provider'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'

interface Props extends ComponentProps<'div'> {}

// const ContactUsSchemaWithTerms = ContactUsSchema.and(
//     z.object({
//         terms: z.literal<boolean>(true),
//     }),
// )

export default function FormStep({ className, ...props }: Props) {

    const stepsCtx = useStepsContext()

    const form = useForm<z.infer<typeof ContactUsSchema>>({
        resolver: zodResolver(ContactUsSchema),
        defaultValues: {
            fullName: '',
            domain: '',
            email: '',
            phoneNo: '',
            message: '',
            terms: false,
        },
    })

    const onSubmit = async () => {
        try {
            console.log('FORM SUBMITTING')
            console.log('FORM SUBMITTING STEP ANSWERS:',stepsCtx.stepAnswers)
            await waits(1000)
            console.log('FORM SUBMITTED')
            // stepsCtx.incStep()
            // form.reset()
        } catch (error) {
            form.setError('root', {
                message: 'Sending failed please try again...',
            })
        }
    }

    return (
        <div {...props} className={cn('', className)}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="John Doe"
                                        />
                                    </FormControl>
                                    <FadeIn>
                                        <FormMessage />
                                    </FadeIn>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="address@email.com"
                                        />
                                    </FormControl>
                                    <FadeIn>
                                        <FormMessage />
                                    </FadeIn>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="domain"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Domain (optional)</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FadeIn>
                                        <FormMessage />
                                    </FadeIn>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone No.</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="+41 123 456 7894"
                                        />
                                    </FormControl>
                                    <FadeIn>
                                        <FormMessage />
                                    </FadeIn>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FadeIn>
                                        <FormMessage />
                                    </FadeIn>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="items-top flex space-x-2">
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="ms-2 text-lg">
                                        I accept that my details will be stored
                                        and processed to handle my request.
                                        <br />
                                        x{form.formState.errors.terms?.message}x--
                                        B{form.getValues('terms').toString()}B
                                    </FormLabel>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="mb-8 w-full md:max-w-60 px-8 py-7 text-lg"
                        disabled={form.formState.isSubmitting}
                    >
                        Send
                        {form.formState.isSubmitting ? (
                            <ReloadIcon className="ms-3 h-4 w-4 animate-spin" />
                        ) : null}
                    </Button>

                    {form.formState.errors.root?.message ? (
                        <p className="text-destructive">
                            {form.formState.errors.root?.message}
                        </p>
                    ) : null}
                </form>
            </Form>
        </div>
    )
}
