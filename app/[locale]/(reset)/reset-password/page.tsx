import ResetPasswordForm from '@/components/reset-password/form'
import { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
    title: 'Reset Password - WebWunder',
}

export default function ResetPasswordPage() {
    return (
        <section className='my-12 xl:mb-28'>
            <div className="container px-4">
                <div className="flex ">
                    <ResetPasswordForm />
                </div>
            </div>
        </section>
    )
}
