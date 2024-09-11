import { cn } from '@/lib/utils'
import Box from './box'
import MonitorSVG from '@/assets/icons/monitor-01.svg'
import MobileSVG from '@/assets/icons/phone-01.svg'
import StandSVG from '@/assets/icons/stand.svg'
import GiftSVG from '@/assets/icons/gift-02.svg'
import { StepAnswers, useStepsContext } from '@/hooks/steps-context-provider'
import { useState } from 'react'

const init = {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
}
const selectedClassName = 'bg-primary text-primary-foreground'

export default function Step1(props: Props) {
    const stepsCtx = useStepsContext()
    const [selected, setSelected] = useState<typeof init>({ 
        item1: stepsCtx.stepAnswers.step1 === 'website' ? selectedClassName : '',
        item2: stepsCtx.stepAnswers.step1 === 'mobile-app' ? selectedClassName : '',
        item3: stepsCtx.stepAnswers.step1 === 'consulting&concept' ? selectedClassName : '',
        item4: stepsCtx.stepAnswers.step1 === 'something-else' ? selectedClassName : '',
     })
    const handler = (val: StepAnswers['step1'], select: keyof typeof init) => {
        setSelected((d) => ({ ...init, [select]: selectedClassName }))
        stepsCtx.setStepAnswers((d) => ({ ...d, step1: val }))
    }

    return (
        <div className={cn('', props.className)}>
            <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                What can we help you with?
            </h2>
            <div className="grid grid-cols-2 gap-4 text-primary lg:grid-cols-4 lg:gap-8">
                <Box
                    onClick={() => handler('website', 'item1')}
                    icon={<MonitorSVG />}
                    className={selected.item1}
                >
                    Website
                </Box>
                <Box
                    onClick={() => handler('mobile-app', 'item2')}
                    icon={<MobileSVG />}
                    className={selected.item2}
                >
                    Mobile App
                </Box>
                <Box
                    onClick={() => handler('consulting&concept', 'item3')}
                    className={selected.item3}
                    icon={<StandSVG />}
                >
                    Consulting & Concept
                </Box>
                <Box
                    onClick={() => handler('something-else', 'item4')}
                    icon={<GiftSVG />}
                    className={selected.item4}
                >
                    Something Else
                </Box>
            </div>
        </div>
    )
}
