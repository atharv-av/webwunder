import CheckSVG from '@/assets/icons/check-circle-broken.svg'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import FireSVG from '@/assets/icons/fire.svg'
import Link from 'next/link'
import { PlanDetails } from '@/data/plans'

export default function Package({
    className,
    dark,
    bestOffer,
    content: cnt,
}: Props & {
    content: PlanDetails
    dark?: boolean
    bestOffer?: boolean
}) {
    return (
        <div
            className={cn(
                `relative flex flex-col rounded-3xl border p-6 shadow-lg lg:p-16 ${dark ? 'bg-[#29292F] text-white' : ''}`,
                className,
            )}
        >
            {bestOffer ? (
                <div
                    className={`absolute right-10 top-10 flex items-center justify-center rounded-lg bg-primary px-4 py-2`}
                >
                    Best Offer <FireSVG className="ms-2 text-red-500" />
                </div>
            ) : null}

            <div
                className={`mb-6 flex h-10 w-10 items-center justify-center rounded-full border ${dark ? 'bg-primary' : ''}`}
            >
                {cnt.icon}
            </div>

            <h2 className={`text-2xl font-bold`}>{cnt.title}</h2>
            <p className={`mb-6 ${dark ? 'text-white' : ''}`}>{cnt.text}</p>
            <h2 className={`text-4xl font-bold lg:text-7xl`}>
                {cnt.price} <span className="ms-2 text-base">{cnt.per}</span>
            </h2>
            <p className="mb-6 font-bold text-green-600">{cnt.priceText}</p>

            <div className="mb-6 lg:mb-12">
                <h3 className="mb-2 text-xl font-bold">
                    What&apos;s included?
                </h3>
                <ol className="grid w-full gap-3">
                    {cnt.included.map((e) => (
                        <li key={e} className="flex items-center gap-2">
                            <CheckSVG className="text-xl text-green-500" /> {e}
                        </li>
                    ))}
                </ol>
            </div>

            {cnt.contract ? (
                <div className="mb-6 grid">
                    <h3 className="font-bold">Contract Term:</h3>
                    <p className={` ${dark ? 'text-white' : ''}`}>
                        {cnt.contract}
                    </p>
                </div>
            ) : null}

            <div className="">
                {process.env.NEXT_PUBLIC_DISABLE_PACKAGE !== 'true' ? (
                    <Button asChild className="w-full px-4 text-lg">
                        <Link href={cnt.link}>Choose plan</Link>
                    </Button>
                ) : (
                    <Button disabled className="w-full px-4 text-lg">
                        Available soon..
                    </Button>
                )}
            </div>
        </div>
    )
}
