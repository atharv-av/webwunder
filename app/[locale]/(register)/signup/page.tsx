import { Metadata } from 'next'
import Image from 'next/image'

import RegisterForm from '@/components/register/form'

export const metadata: Metadata = {
    title: 'Create an account - WebWunder',
}

export default function RegisterPage() {
    return (
        <section className="">
            <RegisterForm className="" />
        </section>
    )
}
