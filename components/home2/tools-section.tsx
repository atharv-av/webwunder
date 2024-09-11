import { cn } from '@/lib/utils'
import Tools from './tools-section/tools'

export default function ToolsSection(props: Props) {
    return (
        <section className={cn('', props.className)}>
            <div className="container px-1">
                <h2 className="text-center text-[18px] font-bold lg:text-[22px]">
                    Hundreds of perfect projects delivered to hundreds of
                    thrilled customers
                </h2>
                <div>
                    <Tools />
                </div>
            </div>
        </section>
    )
}
