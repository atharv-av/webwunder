'use client'
import Link from 'next/link'
import { Plans } from '@/data/plans'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import EditSVG from '@/assets/icons/edit-05.svg'
import { paths } from '@/paths'
import { getLoggedInUser } from '@/services/auth/getters'
import { project } from '@/services/projects/getters'
import { useState } from 'react'
import ClipboardIcon  from '@/assets/icons/copy-icon.svg' // Assuming you have a clipboard icon

export default function Item({ data, isAdmin }: Props<{ data: Project, isAdmin: boolean }>) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(data?.user_friendly_email || '')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative flex flex-col gap-6 rounded-xl border bg-white px-7 py-8">
            {isAdmin ? <Edit projectId={data.id} email={data.email} /> : null}

            <CreatedStatus
                createdAt={data.created_at}
                endAt={data.end_date}
                paymentStatus={data.payment_status}
            />
            <PlanPrice packageType={data.package_type} />
            <div>
                <h2 className="mb-2 text-2xl font-bold capitalize xl:text-3xl">
                    {data.title}
                </h2>

                {!data.notes || data.notes === 'undefined' ? (
                    ''
                ) : (
                    <p className="">{data.notes}</p>
                )}
            </div>

            {/* Email Section */}
            {data?.user_friendly_email && (
                <div className="flex items-center gap-2">
                    <Link 
                        href={`mailto:${data.user_friendly_email}`} 
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {data.user_friendly_email}
                    </Link>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                        <ClipboardIcon className="w-4 h-4" />
                        
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            )}

            <div className="flex flex-grow flex-col justify-end gap-3">
                {data.awork_link ? (
                    <Button asChild>
                        <Link target="_blank" href={`mailto:${data.awork_link}`}>
                            Email Updates
                        </Link>
                    </Button>
                ) : (
                    <p className="text-center opacity-50">
                        Awork Pending...
                    </p>
                )}
            </div>
        </div>
    )
}

function Edit({ projectId, email }: { projectId: number, email: string }) {
    return (
        <div className="flex">
            <Link href={"/auth/admin/projects/edit" + '/' + projectId}>
                <EditSVG className="text-3xl text-primary" />
            </Link>
            <span className='ms-2'>{email}</span>
        </div>
    )
}

function PlanPrice({ packageType }: Props<{ packageType: PackageType }>) {
    const plan = Plans[packageType]

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="rounded-xl bg-green-600 px-3 py-2 text-white">
                {plan.mainTitle}
            </div>

            <div>
                <span className="text-2xl font-semibold">{plan.price}</span>
                <span className="">{plan.per}</span>
            </div>
        </div>
    )
}

function CreatedStatus({
    createdAt,
    endAt,
    paymentStatus,
}: Props<{
    createdAt: string
    endAt: string | null
    paymentStatus: Project['payment_status']
}>) {
    const dateCreated = new Date(createdAt)
    const dateEnd = endAt ? new Date(endAt) : ''

    const status: {
        [a in Project['payment_status']]: { title: string; className?: string }
    } = {
        success: {
            title: 'Ongoing',
            className: 'bg-green-500/10 text-green-500 border-green-500',
        },
        failed: {
            title: 'Payment Failed',
            className: 'bg-red-500/10 text-red-500 border-red-500',
        },
        expired: {
            title: 'Expired',
            className: 'bg-red-500/10 text-red-500 border-red-500',
        },
        pending: {
            title: 'Pending',
            className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500',
        },
    }

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col">
                <div>
                    <span className="font-bold">Created :</span>{' '}
                    {formatDate(dateCreated, {
                        format: 'mmm d, yyyy',
                        gmt: 'utc-to-locale',
                    })}
                </div>
                {dateEnd ? (
                    <div>
                        <span className="font-bold">End:</span>{' '}
                        {formatDate(dateEnd, {
                            format: 'mmm d, yyyy',
                            gmt: 'utc-to-locale',
                        })}
                    </div>
                ) : null}
            </div>
            <div>
                <div
                    className={`rounded-lg border px-3 py-1 font-extrabold ${status[paymentStatus].className}`}
                >
                    {status[paymentStatus].title}
                </div>
            </div>
        </div>
    )
}
