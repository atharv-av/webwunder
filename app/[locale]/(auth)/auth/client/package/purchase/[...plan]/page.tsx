import PaymentForm from '@/components/payment/form'

const websiteStandard = [
    process.env.NEXT_PUBLIC_PRICE_ONE_TIME_SETUP!,
    process.env.NEXT_PUBLIC_PRICE_WEBSITE_STANDARD!,
]

const websitePro = [
    process.env.NEXT_PUBLIC_PRICE_ONE_TIME_SETUP!,
    process.env.NEXT_PUBLIC_PRICE_WEBSITE_PRO!,
]

const serviceStandard = [process.env.NEXT_PUBLIC_PRICE_SERVICE_STANDARD!]
const servicePro = [process.env.NEXT_PUBLIC_PRICE_SERVICE_PRO!]
const unlimitedPro = [process.env.NEXT_PUBLIC_PRICE_UNLIMITED_PRO!]

export default function PackagePlan({
    params: { plan },
}: {
    params: { plan: ['website' | 'service' | 'unlimited', 'standard' | 'pro'] }
}) {
    if (!plan[1]) throw new Error('Invalid Package!')
    let priceIds: string[] | undefined
    let packageType: PackageType | undefined
    switch (plan[0]) {
        case 'website':
            priceIds = plan[1] === 'standard' ? websiteStandard : websitePro
            if (plan[0] + '-' + plan[1] === 'website-pro')
                packageType = 'website-pro'
            else packageType = 'website-standard'
            break

        case 'service':
            priceIds = plan[1] === 'standard' ? serviceStandard : servicePro
            if (plan[0] + '-' + plan[1] === 'service-pro')
                packageType = 'service-pro'
            else packageType = 'service-standard'
            break

        case 'unlimited':
            priceIds = plan[1] === 'standard' ? undefined : unlimitedPro
            if (plan[0] + '-' + plan[1] === 'unlimited-pro')
                packageType = 'unlimited-pro'
            else packageType = 'unlimited-standard'
            break

        default:
            break
    }
    if (!priceIds || !packageType) throw new Error('Invalid Package!')

    return <PaymentForm packageType={packageType} priceIds={priceIds} />
}
