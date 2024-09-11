'use client'

import Membership from '@/components/home2/comprehensive-webwunder-section/membership'
import { HomeProvider } from '@/providers/home'

export default function Packages(props: Props) {
    return (
        <div className={props.className}>
            <HomeProvider>
                <Membership pillSelectClassName="justify-start" />
            </HomeProvider>
        </div>
    )
}
