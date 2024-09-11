'use client'

import { cn } from '@/lib/utils'
import Step1 from './steps/step1'
import { Button } from '@/components/ui/button'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Step4 from './steps/step4'
import Submitted from './steps/submitted'
import { useMemo, useReducer, useState } from 'react'
import FadeIn, { FadeInOut } from '../transitions/fade-in'
import { StepAnswers, StepsContext } from '@/hooks/steps-context-provider'

const maxStep = 4

const stepReducer = (state: number, action: 'inc' | 'dec') => {
    if (action === 'inc' && state < maxStep) return state + 1
    else if (action === 'inc' && state === maxStep) return state + 1 // to show submitted
    else if (action === 'dec' && state > 1) return state - 1
    else return state
}

export default function Steps(props: Props) {
    const [currentStep, dispatch] = useReducer(stepReducer, 1)
    const steps = [
        <Step1 key="step1" />,
        <Step2 key="step2" />,
        <Step3 key="step3" />,
        <Step4 key="step4" />,
        <Submitted key="Submitted" />,
    ]

    const [stepAnswers, setStepAnswers] = useState<StepAnswers>({
        step1: '',
        step2: '',
        step3: '',
    })

    const canNext = useMemo(() => {
        if (currentStep === 1 && stepAnswers.step1) return true
        else if (currentStep === 2 && stepAnswers.step2) return true
        else if (currentStep === 3 && stepAnswers.step3) return true
        else return false
    }, [currentStep, stepAnswers.step1, stepAnswers.step2, stepAnswers.step3])

    return (
        <div className={cn('', props.className)}>
            <div className="mb-16">
                <StepsContext.Provider
                    value={{
                        stepAnswers,
                        setStepAnswers,
                        incStep: () => dispatch('inc'),
                        decStep: () => dispatch('dec'),
                    }}
                >
                    <FadeInOut id={`step_${currentStep - 1}`}>
                        {steps[currentStep - 1]}
                    </FadeInOut>
                </StepsContext.Provider>
            </div>
            {currentStep < 5 ? (
                <Button
                    onClick={() => dispatch('dec')}
                    className="me-4 px-6 py-6 text-xl"
                    disabled={currentStep === 1}
                >
                    Back
                </Button>
            ) : null}

            {currentStep < 4 ? (
                <Button
                    onClick={() => dispatch('inc')}
                    className="px-6 py-6 text-xl"
                    disabled={currentStep === maxStep || !canNext}
                >
                    Next
                </Button>
            ) : null}
        </div>
    )
}
