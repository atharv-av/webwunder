'use client'

import { logoutUser } from '@/services/login/actions'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import LogoutSVG from '@/assets/icons/log-out-04.svg'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { paths } from '@/paths'

export default function Logout() {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const logout = () => {
        if (isPending) return
        startTransition(async () => {
            const res = await logoutUser()
            router.push(paths.pages.login.href)
        })
    }

    return (
        <div className={`flex ${isPending ? '' : 'cursor-pointer'} items-center`} onClick={logout}>
            <LogoutSVG className="me-2 rotate-180" />
            Logout
            <SpinnerSVG
                className={`ms-2 text-2xl ${isPending ? '' : 'hidden'} `}
            />
        </div>
    )
}
