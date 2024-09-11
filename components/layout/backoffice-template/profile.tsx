'use client'

import ChevDownSVG from '@/assets/icons/chevron-down.svg'
import UserSVG from '@/assets/icons/user-01.svg'
import { useUserContext } from '@/providers/user'
import Link from 'next/link'
import { paths } from '@/paths'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'

export default function Profile(props: Props & { onClick?: () => void }) {
    const userCtx = useUserContext()
    return (
        <div className="p-6 px-4" onClick={props.onClick}>
            <Link
                href={paths.pages.profile.href}
                className="flex cursor-pointer items-center justify-stretch gap-2 rounded-full border p-3"
            >
                <div className="flex h-10 w-10 min-w-10 items-center justify-center overflow-clip rounded-full">
                    {userCtx?.auth?.user_metadata.picture ? (
                        <Image
                            className="h-10 w-10 object-cover object-center"
                            width={40}
                            height={40}
                            src={userCtx?.auth?.user_metadata.picture}
                            alt="WebWunder Image"
                        />
                    ) : (
                        <UserSVG className="text-4xl" />
                    )}
                </div>
                <div className="flex w-full flex-col truncate">
                    {userCtx?.user?.first_name ? (
                        <h3 className="truncate font-bold">
                            {userCtx?.user?.first_name}
                        </h3>
                    ) : (
                        <Skeleton className="mx-2 my-1 h-2" />
                    )}
                    {userCtx?.user?.email ? (
                        <p className="truncate">{userCtx?.user?.email}</p>
                    ) : (
                        <Skeleton className="mx-2 my-1 h-2" />
                    )}
                </div>
                {/* <div className="flex items-center justify-end text-xl">
                    <ChevDownSVG />
                </div> */}
            </Link>
        </div>
    )
}
