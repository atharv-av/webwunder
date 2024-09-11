'use client'

import { ProjectProvider, useProjectContext } from '@/providers/project'
import { memo } from 'react'
import Item from './list/item'

import EmptySVG from '@/assets/icons/empty-box-01.svg'
import RefreshSVG from '@/assets/icons/refresh-cw-05.svg'
import { useUserContext } from '@/providers/user'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'

const List = memo(function List(props: Props) {
    const projCtx = useProjectContext()
    const userCtx = useUserContext()

    if (projCtx?.query.isLoading || projCtx?.query.isFetching)
        return <Loading className="p-8" />
    else if (!projCtx?.query.data?.length)
        return (
            <div className="flex flex-col items-center justify-center gap-6 p-12">
                <EmptySVG className="text-[100px] text-primary" />
                <p className="opacity-60">No projects...</p>
            </div>
        )
    else
        return (
            <div className="relative">
                <div className="absolute bottom-full flex w-full justify-end p-6">
                    <RefreshSVG
                        onClick={() => projCtx?.query.refetch()}
                        className="cursor-pointer text-xl"
                    />
                </div>
                <div className="grid gap-5 xl:grid-cols-3">
                    {projCtx?.query.data?.map((e) => (
                        <Item
                            key={e.id}
                            isAdmin={!!userCtx?.isAdmin}
                            data={e}
                        />
                    ))}
                </div>
            </div>
        )
})

export default function ProjectList() {
    return (
        <>
            <ProjectProvider>
                <List />
            </ProjectProvider>
        </>
    )
}

function Loading(props: Props) {
    return (
        <div className={cn('grid xl:grid-cols-3 gap-x-6 gap-y-12', props.className)}>
            {Array(2).fill(null).map((e,i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[50px] w-full rounded-xl" />
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ))}
            {Array(4).fill(null).map((e,i) => (
                <div key={i} className="xl:flex flex-col space-y-3 hidden">
                    <Skeleton className="h-[50px] w-full rounded-xl" />
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}
