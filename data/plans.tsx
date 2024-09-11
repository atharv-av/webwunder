import { paths } from '@/paths'
import { ReactNode } from 'react'
import LightningSVG from '@/assets/icons/lightning-01.svg'
import CrownSVG from '@/assets/icons/crown.svg'

export type PlanDetails = {
    title: string
    mainTitle: string
    text: string
    placeholder1: string
    placeholder2: string
    disCountText: string
    price: string
    per: string
    priceText?: string
    included: string[]
    contract?: string
    icon: ReactNode
    link: string
    planType:
        | 'website-standard'
        | 'website-pro'
        | 'service-standard'
        | 'service-pro'
        | 'unlimited-standard'
        | 'unlimited-pro'
}

export const Plans: { [k in PlanDetails['planType']]: PlanDetails } = {
    'website-standard': {
        mainTitle: `Website Standard Plan`,
        title: `Standard Plan`,
        text: `For Small to Medium Businesses`,
        price: '€590',
        placeholder2: `Please share a brief summary of your website needs, even if we've covered them in a previous call.`,
        disCountText: `Have a discount code?`,
        placeholder1: `What's the name of your company, project, or existing website?`,
        per: '/month',
        priceText: '€2000 One-time Setup Fee',
        included: [
            'Fully responsive, expertly managed',
            'Updates and plug-ins included',
            '1 design task per month',
            'Secure hosting and backups',
            'Design refresh every 36 months',
        ],
        contract: '12 months, then continues with Service Pack "Standard"',
        link: paths.pages.websiteStandard.href,
        planType: 'website-standard',
        icon: <LightningSVG />,
    },
    'website-pro': {
        mainTitle: `Website Pro Plan`,
        title: `Pro Plan`,
        placeholder2: `Please share a brief summary of your website needs, even if we've covered them in a previous call.`,
        disCountText: `Have a discount code?`,
        placeholder1: `What's the name of your company, project, or existing website?`,
        text: `For Medium to Large Businesses`,
        price: '€990',
        per: '/month',
        priceText: '€2000 One-time Setup Fee',
        included: [
            'Fully responsive, expertly managed',
            'Updates and plug-ins included',
            '2 design task per month',
            'Secure hosting and backups',
            'Design refresh every 36 months',
        ],
        contract: '12 months, then continues with Service Pack "Standard"',
        link: paths.pages.websitePro.href,
        icon: <CrownSVG />,
        planType: 'website-pro',
    },
    'service-standard': {
        mainTitle: `Service Standard Plan`,
        title: `Standard Plan`,
        placeholder2: `Anything special you want to tell us about your website maintenance needs? (optional).`,
        disCountText: `Have a discount code?`,
        placeholder1: `For which website is this service plan?`,
        text: `For Complete Support and Updates`,
        price: '€290',
        per: '/month',
        included: [
            'Updates and plug-ins included',
            '1 design task per month',
            'Secure hosting and backups',
            'Design refresh every 36 months',
        ],
        contract: '12 months',
        link: paths.pages.serviceStandard.href,
        icon: <LightningSVG />,
        planType: 'service-standard',
    },
    'service-pro': {
        mainTitle: `Service Pro Plan`,
        title: `Pro Plan`,
        placeholder2: `Anything special you want to tell us about your website maintenance needs? (optional).`,
        disCountText: `Have a discount code?`,
        placeholder1: `For which website is this service plan?`,
        text: `For Extensive Support and Updates`,
        price: '€690',
        per: '/month',
        included: [
            'Updates and plug-ins included',
            '2 design task per month',
            'Secure hosting and backups',
            'Design refresh every 36 months',
        ],
        contract: '12 months',
        link: paths.pages.servicePro.href,
        icon: <CrownSVG />,
        planType: 'service-pro',
    },
    'unlimited-standard': {
        mainTitle: `Unlimited Standard Plan`,
        title: `Standard Plan`,
        placeholder1: `Brand(s) or company this design service is for?`,
        placeholder2: `Is there anything new you'd like to share, remind us of, or add that wasn't discussed before?`,
        disCountText: `Have a discount code?`,
        text: ``,
        price: '',
        per: '',
        included: [],
        link: '#',
        icon: <LightningSVG />,
        planType: 'unlimited-standard',
    },
    'unlimited-pro': {
        mainTitle: `Unlimited Pro Plan`,
        title: `Pro Plan`,
        placeholder1: `Brand(s) or company this design service is for?`,
        placeholder2: `Is there anything new you'd like to share, remind us of, or add that wasn't discussed before?`,
        disCountText: `Have a discount code?`,
        text: `For companies needing constant, top-quality design work`,
        price: '€4999',
        per: '/month',
        included: [
            'Unlimited design requests (one at a time)',
            'Fast delivery (~72 hours)',
            'Unlimited brands',
            '100% design ownership',
            'Top priority',
            'Cancel monthly',
        ],
        link: paths.pages.unlimitedPro.href,
        icon: <CrownSVG />,
        planType: 'unlimited-pro',
    },
}
