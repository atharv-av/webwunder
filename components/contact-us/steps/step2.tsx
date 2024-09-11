import EurSVG from '@/assets/icons/currency-euro.svg'
import { cn } from '@/lib/utils'
import Box from './box'
import { StepAnswers, useStepsContext } from '@/hooks/steps-context-provider'
import { useState } from 'react'

const init = {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
}
const selectedClassName = 'bg-primary text-primary-foreground'

export default function Step2(props: Props) {
    const stepsCtx = useStepsContext()
    const [selected, setSelected] = useState<typeof init>({
        item1:
            stepsCtx.stepAnswers.step2 === 'under-7.500-eur'
                ? selectedClassName
                : '',
        item2:
            stepsCtx.stepAnswers.step2 === '7.500-15.000-eur'
                ? selectedClassName
                : '',
        item3:
            stepsCtx.stepAnswers.step2 === 'over-15.000-eur'
                ? selectedClassName
                : '',
        item4:
            stepsCtx.stepAnswers.step2 === 'uncertain' ? selectedClassName : '',
    })
    const handler = (val: StepAnswers['step2'], select: keyof typeof init) => {
        setSelected((d) => ({ ...init, [select]: selectedClassName }))
        stepsCtx.setStepAnswers((d) => ({ ...d, step2: val }))
    }

    return (
        <div className={cn('', props.className)}>
            <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                What is the project budget?
            </h2>
            <div className="grid grid-cols-2 gap-4 text-primary lg:grid-cols-4 lg:gap-8">
                <Box
                    onClick={() => handler('under-7.500-eur', 'item1')}
                    className={selected.item1}
                >
                    <div className="my-4 flex items-center">
                        under 7.500 <EurSVG className="ms-2" />
                    </div>
                </Box>
                <Box
                    onClick={() => handler('7.500-15.000-eur', 'item2')}
                    className={selected.item2}
                >
                    <div className="my-4 flex items-center">
                        <span>
                            7.500 - <br className='md:hidden' />15.000 <EurSVG className="ms-2 inline relative -top-[2px]" />
                        </span>
                    </div>
                </Box>
                <Box
                    onClick={() => handler('over-15.000-eur', 'item3')}
                    className={selected.item3}
                >
                    <div className="my-4 flex items-center">
                        over 15.000 <EurSVG className="ms-2" />
                    </div>
                </Box>
                <Box
                    onClick={() => handler('uncertain', 'item4')}
                    className={selected.item4}
                >
                    <div className="my-4 flex items-center">Uncertain</div>
                </Box>
            </div>
        </div>
    )
}
