import FacebookSVG from '@/assets/icons/social/facebook.svg'
import YoutubeSVG from '@/assets/icons/social/youtube.svg'
import InstagramSVG from '@/assets/icons/social/instagram.svg'
import LinkedinSVG from '@/assets/icons/social/linkedin.svg'
import TiktokSVG from '@/assets/icons/social/tiktok.svg'
import WhatsappSVG from '@/assets/icons/social/whatsapp.svg'
import DribbleSVG from '@/assets/icons/social/dribble.svg'

import { cn } from '@/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<'div'> {
    itemClassName?: string
}

export default function SocialMedia({ className, itemClassName }: Props) {
    const sm: {
        href: string
        title: string
        className: string
        icon: ReactNode
    }[] = [
        { href: '#', title: 'Facebook', className: '', icon: <FacebookSVG /> },
        {
            href: '#',
            title: 'Youtube',
            className: '',
            icon: <YoutubeSVG className="" />,
        },
        { href: '#', title: 'LinkedIn', className: '', icon: <LinkedinSVG /> },
        { href: '#', title: 'Dribble', className: '', icon: <DribbleSVG /> },
        {
            href: '#',
            title: 'Instagram',
            className: '',
            icon: <InstagramSVG />,
        },
        { href: '#', title: 'Tiktok', className: '', icon: <TiktokSVG /> },
        { href: '#', title: 'Whatsapp', className: '', icon: <WhatsappSVG /> },
    ]
    return (
        <div className={cn('', className)}>
            {sm.map((e, i) => (
                <a
                    key={'social_' + i}
                    href={e.href}
                    target="_blank"
                    title={e.title}
                    className={cn(e.className, itemClassName)}
                >
                    {e.icon}
                </a>
            ))}
        </div>
    )
}
