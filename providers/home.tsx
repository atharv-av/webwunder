'use client'

import {
    createContext,
    type Dispatch,
    type SetStateAction,
    useContext,
    useState,
} from 'react'

type Plan = 'website' | 'service' | 'unlimited'

const HomeContext = createContext<
    | {
          plan: {
              value: Plan
              set: Dispatch<SetStateAction<Plan>>
          }
      }
    | undefined
>(undefined)

export const HomeProvider = (props: Props) => {
    const [plan, setPlan] = useState<Plan>('website')
    return (
        <HomeContext.Provider
            value={{
                plan: {
                    value: plan,
                    set: setPlan,
                },
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )
}

export const useHomeContext = () => {
    const planCtx = useContext(HomeContext)

    if (!planCtx?.plan)
        throw new Error('useHomeContext must be a children of HomeProvider')

    return planCtx
}
