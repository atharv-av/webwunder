import { Metadata } from 'next'
import Image from 'next/image'

import RegisterForm from '@/components/register/form'
import Sliders from '@/components/common/login-register/sliders'

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
