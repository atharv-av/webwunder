import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react'

export type StepAnswers = {
    step1:
        | ''
        | 'website'
        | 'mobile-app'
        | 'consulting&concept'
        | 'something-else'
    step2:
        | ''
        | 'under-7.500-eur'
        | '7.500-15.000-eur'
        | 'over-15.000-eur'
        | 'uncertain'
    step3: '' | 'as-soon-as-possible' | 'soon-not-in-a-hurry'
    // step4 is where you submit the form
}

export const StepsContext = createContext<
    | {
          stepAnswers: StepAnswers
          setStepAnswers: Dispatch<SetStateAction<StepAnswers>>
          incStep: ()=>void
          decStep: ()=>void
      }
    | undefined
>(undefined)

export function useStepsContext() {
    const ctx = useContext(StepsContext)
    if (ctx?.stepAnswers === undefined) {
        throw new Error('useStepsContext must be used with a CountContext!')
    }
    return ctx
}
