'use client'

import { Button } from '@/components/ui/button'

import SpinnerSVG from '@/assets/icons/spinner-static.svg'
import { useProjectContext } from '@/providers/project'

export default function TestBtn(
    props: Props & {
        projectId: string
        subId: string
    },
) {
    const ctx = useProjectContext()
    return (
        <div>
            <ol>{ctx?.query.data?.map((e) => <li key={e.id}>{e.id}</li>)}</ol>

            <Button
                onClick={() => {
                    ctx?.pagination.inc()
                }}
            >
                nextpage {ctx?.pagination.page}
            </Button>
            <Button
                onClick={() => {
                    ctx?.query.refetch()
                }}
            >
                refetch {ctx?.query.isFetching+' '}
                <SpinnerSVG
                    className={`ms-3 animate-spin text-3xl ${!ctx?.query.isFetching  ? 'hidden' : ''}`}
                />
            </Button>
            <Button
                onClick={() => {
                    // ctx?.mutation.mutateAsync('hohohoh')
                }}
            >
                mutate {' '+ctx?.mutation.cancel.isPending}
                <SpinnerSVG
                    className={`ms-3 animate-spin text-3xl ${!ctx?.mutation.cancel.isPending   ? 'hidden' : ''}`}
                />
            </Button>

        </div>
    )
}
