'use client'

import { projects } from '@/services/projects/getters'
import {
    keepPreviousData,
    QueryClient,
    QueryClientProvider,
    useMutation,
    UseMutationResult,
    useQuery,
    UseQueryResult,
} from '@tanstack/react-query'
import { createContext, memo, useContext, useState } from 'react'
import { cancelProject } from '@/services/projects/actions'
import { cancelSubscription } from '@/services/stripe/actions'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
})

const ProjectContext = createContext<
    | {
          pagination: {
              page: number
              inc: (num?: number) => void
          }
          query: UseQueryResult<Project[], Error>
          mutation: {
              cancel: UseMutationResult<
                  void,
                  Error,
                  {
                      projectId: string
                      subId: string
                  },
                  unknown
              >
          }
      }
    | undefined
>(undefined)

function ProjectContextProvider(props: Props) {
    const [page, setPage] = useState(0)

    const inc = (num = 1) => {
        setPage((e) => e + num)
    }

    const query = useQuery({
        queryKey: ['projects', page],
        queryFn: async () => {
            const res = await projects()
            return res
        },
        placeholderData: keepPreviousData,
    })

    const cancel = useMutation({
        mutationFn: async ({
            projectId,
            subId,
        }: {
            projectId: string
            subId: string
        }) => {
            await cancelSubscription(subId)
            await cancelProject(projectId)
        },

        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        },
    })


    return (
        <ProjectContext.Provider
            value={{ query, mutation: { cancel }, pagination: { page, inc } }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export const useProjectContext = () => {

    const ctx = useContext(ProjectContext)
    if(!ctx?.query) throw new Error('Must be a child of <ProjectProvider/>!')

    return ctx
}

export const ProjectProvider = memo(function ProjectProvider(props: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectContextProvider>{props.children}</ProjectContextProvider>
        </QueryClientProvider>
    )
})
