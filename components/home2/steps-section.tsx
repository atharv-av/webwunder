import { cn } from '@/lib/utils'
import Steps from './steps-section/steps'

export default function StepsSection(props: Props) {
    return (
        <section className={cn('relative', props.className)}>
            <div className="container">
                <h2 className="mb-4 text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                    3 Steps to <span className="text-primary">Success</span>
                </h2>
                <p className="mb-8 mx-auto text-center text-[18px] leading-[28px] max-w-[750px]">
                    Our streamlined process ensures your projects are handled
                    efficiently and effectively, providing top-tier results
                    without the hassle.
                </p>
                <Steps />
            </div>
        </section>
    )
}
