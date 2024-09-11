import { cn } from '@/lib/utils'
import Box from './box'
import FormStep from './step4/form'

export default function Step4(props: Props) {
    return (
        <div className={cn('', props.className)}>
            <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
                How can we reach you?
            </h2>
            <div className="">
                <FormStep />
            </div>
        </div>
    )
}
