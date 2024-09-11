import Invoices from '@/components/billing/invoices'
import { CircleLinesSkeleton } from '@/components/common/skeleton/circle-lines'
import { projects } from '@/services/projects/getters'
import { Suspense } from 'react'

export default async function BillingPage() {
    const projectsProm = projects()
    return (
        <section>
            <div className="container mx-0 px-4 pb-12 xl:px-8">
                <h1 className="py-12 text-2xl">Billing History</h1>
                <Suspense fallback={<Loading />}>
                    <Invoices projectsProm={projectsProm} />
                </Suspense>
            </div>
        </section>
    )
}

function Loading() {
    return (
        <div className='flex flex-col gap-6 w-full'>
            <CircleLinesSkeleton />
            <CircleLinesSkeleton />
            <CircleLinesSkeleton />
            <CircleLinesSkeleton />
            <CircleLinesSkeleton />
            <CircleLinesSkeleton />
        </div>
    )
}
