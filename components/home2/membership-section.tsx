import { cn } from '@/lib/utils'
import Items from './membership-section/items'

export default function MembershipSection(props: Props) {
    return (
        <section className={cn('relative', props.className)}>
            <div className="container px-4">
                <h2 className="mb-4 text-center text-[35px] font-bold leading-[35px] lg:text-[60px] lg:leading-[60px]">
                    One & Only <span className="text-primary">Membership</span>
                </h2>
                <p className="mx-auto mb-8 max-w-[750px] text-center text-[22px] leading-[32px]">
                    Benefits so exceptional you&apos;ll never look elsewhere for
                    design and web development. Seriously.
                </p>
                <Items />
            </div>
        </section>
    )
}
