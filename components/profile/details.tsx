'use client'

import { useUserContext } from '@/providers/user'
import { cn } from '@/lib/utils'
import FormDetails from './form'
import ChangePasswordForm from './change-password-form'
import { useEffect, useMemo } from 'react'

export default function ProfileDetails(props: Props) {
    const userCtx = useUserContext()
    useEffect(() => {
        console.log('userCtx:', userCtx?.auth?.identities)
    }, [userCtx?.auth?.identities])

    const providerIsEmail = useMemo<boolean>(() => {
        return !!userCtx?.auth?.identities?.find((e) => e.provider === 'email')
    }, [userCtx?.auth?.identities])

    return (
        <div className={cn('', props.className)}>
            <div className="mb-8 flex flex-col gap-2">
                <h2 className="text-2xl font-medium text-black">
                    Account Information
                </h2>
                <p className="font-light opacity-60">
                    Update your account information
                </p>
            </div>
            <div>
                <FormDetails />
            </div>

            {providerIsEmail ? (
                <>
                    <div className="w-full">
                        <div className="my-12 border-b"></div>
                    </div>

                    <div className="mb-8 flex flex-col gap-2">
                        <h2 className="text-2xl font-medium text-black">
                            Change Password
                        </h2>
                        <p className="font-light opacity-60">
                            Update your password
                        </p>
                    </div>
                    <div>
                        <ChangePasswordForm />
                    </div>
                </>
            ) : null}
        </div>
    )
}
