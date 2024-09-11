import { cn } from '@/lib/utils'
import Box from './box'
import { StepAnswers, useStepsContext } from '@/hooks/steps-context-provider'
import { useState } from 'react'

const init = {
    item1: '',
    item2: '',
}
const selectedClassName = 'bg-primary text-primary-foreground'

export default function Step3(props: Props) {
    const stepsCtx = useStepsContext()
    const [selected, setSelected] = useState<typeof init>({
        item1:
            stepsCtx.stepAnswers.step3 === 'as-soon-as-possible'
                ? selectedClassName
                : '',
        item2:
            stepsCtx.stepAnswers.step3 === 'soon-not-in-a-hurry'
                ? selectedClassName
                : '',
    })
    const handler = (val: StepAnswers['step3'], select: keyof typeof init) => {
        setSelected((d) => ({ ...init, [select]: selectedClassName }))
        stepsCtx.setStepAnswers((d) => ({ ...d, step3: val }))
    }

    return (
        <div className={cn('', props.className)}>
            <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                When should the project start?
            </h2>
            <div className="grid grid-cols-2 gap-4 text-primary lg:grid-cols-4 lg:gap-8">
                <Box
                    onClick={() => handler('as-soon-as-possible', 'item1')}
                    className={selected.item1}
                >
                    <div className="my-4 flex items-center">
                        As soon as possible
                    </div>
                </Box>
                <Box
                    onClick={() => handler('soon-not-in-a-hurry', 'item2')}
                    className={selected.item2}
                >
                    <div className="my-4 flex items-center">
                        Soon, not in a hurry
                    </div>
                </Box>
            </div>
        </div>
    )
}
