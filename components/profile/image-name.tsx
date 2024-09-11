'use client'

import { useUserContext } from '@/providers/user'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import UserSVG from '@/assets/icons/user-01.svg'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'

export default function ProfileImageName(props: Props) {
    const userCtx = useUserContext()
    return (
        <div className={cn('flex items-center gap-3', props.className)}>
            <div>
                {userCtx?.auth?.user_metadata.picture ? (
                    <Image
                        className="h-16 w-16 rounded-xl object-cover object-center"
                        width={40}
                        height={40}
                        src={userCtx?.auth?.user_metadata.picture}
                        alt="WebWunder Image"
                    />
                ) : (
                    <UserSVG className="text-4xl" />
                )}
            </div>
            <div>
                {userCtx?.user?.first_name ? (
                    <>
                        <h3 className="text-2xl font-medium text-black">
                            {userCtx?.user?.first_name} {userCtx?.user?.last_name}
                        </h3>
                        <p className="font-light">{userCtx?.user?.email}</p>
                    </>
                ) : (
                    <Skeleton className="mx-2 my-1 h-2" />
                )}
            </div>
        </div>
    )
}
