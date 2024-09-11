'use client'

import { Button } from '@/components/ui/button'

import SpinnerSVG from '@/assets/icons/spinner-static.svg'
import { useTransition } from 'react'
import { useProjectContext } from '@/providers/project'
import { useToast } from '@/components/ui/use-toast'

export default function Cancel(
    props: Props<{
        projectId: string
        subId: string
    }>,
) {
    const { toast } = useToast()
    const ctx = useProjectContext()

    const handler = async () => {
        try {
            await ctx?.mutation.cancel.mutateAsync({
                projectId: props.projectId,
                subId: props.subId,
            })
            toast({
                title: 'Cancellation Done!',
                description: 'Project has been cancelled!',
            })
        } catch (error) {
            toast({
                title: 'Cancellation Failed!',
                description:
                    'Something went wrong, please contact customer support.',
                variant: 'destructive',
            })
        }
    }

    return (
        <div>
            <Button
                disabled={ctx?.mutation.cancel.isPending}
                onClick={handler}
                size={'md'}
            >
                Cancel
                <SpinnerSVG
                    className={`ms-3 animate-spin text-3xl ${ctx?.mutation.cancel.isPending ? '' : 'hidden'}`}
                />
            </Button>
        </div>
    )
}
