import InquiryForm from '@/components/home2/get-in-touch-section/inquiry-form'
import { cn } from '@/lib/utils'

import EnvelopePNG from '@/public/images/home/get-in-touch/envelope.png'
import Image from 'next/image'

export default function GetInTouchSection(props: Props) {
    return (
        <section className={cn('w-full bg-primary', props.className)}>
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 lg:gap-24">
                    <InquiryForm />
                    <Image
                        className="object-contain hidden lg:block"
                        src={EnvelopePNG}
                        alt="WebWunder Image"
                    />
                </div>
            </div>
        </section>
    )
}
