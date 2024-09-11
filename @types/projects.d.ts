type ProjectDetails = {
    invoiceId: string
    invoiceNo: string
    paymentIntentId: string
    subscriptionId: string
    customerId: string
    email: string
    userId: string
    packageType: PackageType
    note: string
    title: string
    currentPeriodStart?: number
    currentPeriodEnd?: number
    invoiceUrl? : string
}

type PackageType =
    | 'website-standard'
    | 'website-pro'
    | 'service-standard'
    | 'service-pro'
    | 'unlimited-standard'
    | 'unlimited-pro'
