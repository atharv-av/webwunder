'use client'

import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

import SpinnerSVG from '@/assets/icons/spinner.svg'
import { Plans } from '@/data/plans'
import { updateProject } from '@/services/projects/actions'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
const Schema = z.object({
    title: z
        .string()
        .min(6, 'Must have at least 5 characters')
        .max(40, 'Maximum 40 characters only'),
    note: z
        .string()
        .min(6, 'Must have at least 5 characters')
        .max(300, 'Maximum 300 characters only'),
    aworkLink: z.string().email('Must be a valid Email').or(z.literal('')),
    userFriendlyEmail: z
        .string()
        .email('Must be a valid Email')
        .or(z.literal('')),
})

type SchemaType = z.infer<typeof Schema>

export default function Fields({ project }: { project: Project }) {
    const router = useRouter()
    const { toast } = useToast()
    const planTitle = {
        'website-standard': 'Website',
        'website-pro': 'Website',
        'service-standard': 'Service',
        'service-pro': 'Service',
        'unlimited-standard': 'Unlimited',
        'unlimited-pro': 'Unlimited',
    }

    const form = useForm<SchemaType>({
        defaultValues: {
            title: project.title || '',
            note: project.notes || '',
            aworkLink: project.awork_link || '',
            userFriendlyEmail: project.user_friendly_email || '',
        },
        resolver: zodResolver(Schema),
    })

    const submit: SubmitHandler<SchemaType> = async (payload) => {
        try {
   
            const response = await fetch(`/api/improvmx`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userFriendlyEmail: payload?.userFriendlyEmail?.split('@')[0],
                    aworkLink: payload?.aworkLink,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to set email forwarding');
            }
            console.log({ response })
            if (!response.ok) {
                throw new Error('Failed to create email forwarding rule')
            }

            await updateProject(project.id, payload)
            toast({
                title: 'Update Successful',
                description: `Update was successful`,
            })
            router.push(`/auth/admin/projects`)
        } catch (error: any) {
            console.log(error)
            toast({
                title: 'Error',
                description: error.message || `Something went wrong`,
                variant: 'destructive',
            })
        }
    }

    return (
        <div>
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex">
                    <h2 className="text-3xl font-bold text-black">
                        {planTitle[project.package_type]}:&nbsp;
                    </h2>
                    <h2 className="text-3xl font-bold text-black">
                        {Plans[project.package_type].title}
                    </h2>
                    <div className="mx-3 flex h-10 w-10 items-center justify-center rounded-full border">
                        {Plans[project.package_type].icon}
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={form.handleSubmit(submit)}>
                    <div>
                        <label>Title of Project</label>
                        <Controller
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <Input
                                    className="mb-2 rounded-lg bg-[#F4F7FF] py-4 lg:px-3 xl:max-w-[600px]"
                                    {...field}
                                    id="title"
                                />
                            )}
                        />
                        <p className="ps-4 text-destructive">
                            {form.formState.errors.title?.message}
                        </p>
                    </div>

                    <div>
                        <label>More details</label>
                        <Controller
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <Textarea
                                    className="mb-2 h-32 rounded bg-[#F4F7FF] lg:rounded-2xl lg:px-3 lg:py-3 xl:max-w-[600px]"
                                    {...field}
                                />
                            )}
                        />
                        <p className="ps-4 text-destructive">
                            {form.formState.errors.note?.message}
                        </p>
                    </div>

                    <div>
                        <label>Awork Email</label>
                        <Controller
                            control={form.control}
                            name="aworkLink"
                            render={({ field }) => (
                                <Input
                                    className="mb-2 rounded-lg bg-[#F4F7FF] py-4 lg:px-3 xl:max-w-[600px]"
                                    {...field}
                                />
                            )}
                        />
                        <p className="ps-4 text-destructive">
                            {form.formState.errors.aworkLink?.message}
                        </p>
                    </div>
                    <div>
                        <label>User Friendly Email</label>
                        <Controller
                            control={form.control}
                            name="userFriendlyEmail"
                            render={({ field }) => (
                                <Input
                                    className="mb-2 rounded-lg bg-[#F4F7FF] py-4 lg:px-3 xl:max-w-[600px]"
                                    {...field}
                                />
                            )}
                        />
                        <p className="ps-4 text-destructive">
                            {form.formState.errors.userFriendlyEmail?.message}
                        </p>
                    </div>

                    <Button
                        disabled={
                            form.formState.isSubmitting ||
                            !form.formState.isDirty
                        }
                        size={'md'}
                        className="my-4"
                        type="submit"
                    >
                        Update
                        <SpinnerSVG
                            className={`ms-2 text-xl ${form.formState.isSubmitting ? '' : 'hidden'}`}
                        />
                    </Button>
                </form>
            </div>
        </div>
    )
}
