import { cn } from '@/lib/utils'

import Fields from './fields'

export default function ResetPasswordForm(props: Props) {
    return (
        <div
            className={cn('flex flex-col justify-center py-3', props.className)}
        >
            <h1 className="mb-3 text-center text-[40px]/9 font-bold xl:text-start xl:text-5xl">
                Reset Password
            </h1>
            <p className="mb-4 text-center text-xl text-grayText xl:text-start">
                Enter your new password below.
            </p>

            <Fields />
        </div>
    )
}
