import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Plans from './three-easy-steps-section/plans'
import Plans2 from './three-easy-steps-section/plans2'
import Link from 'next/link'
import { paths } from '@/paths'
import Steps from './three-easy-steps-section/steps'

export default function ThreeEasyStepsSection(props: Props) {
    return (
        <section className={cn('relative', props.className)}>
            <div className="container px-4">
                <h2 className="mb-4 text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                    Get Your Website in{' '}
                    <span className="text-primary">Three Easy Steps</span>
                </h2>
                <p className="mb-12 text-center text-2xl leading-[28px]">
                    Hate meetings? Us too - that&apos;s why we&apos;ve minimized
                    them
                </p>

                <Steps className="my-4 mb-8 xl:mb-24" />

                <Plans className="mb-4" />
                <Plans2 />

            </div>
        </section>
    )
}
