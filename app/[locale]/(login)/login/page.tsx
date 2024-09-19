import { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import Sliders from '@/components/common/login-register/sliders'
import LoginForm from '@/components/login/form'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
    title: 'Login - WebWunder',
    description: 'Login to Webwunder',
}

export default async function LoginPage() {
    // console.log('RENDERING LOGIN PAGE')
    return (
        <div className="">
            <LoginForm />
        </div>
    )
}
