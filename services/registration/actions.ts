'use server'

import { type RegisterFieldsType } from '@/schema/fields'

import { createClient } from '@/lib/supabase/server'
import { paths } from '@/paths'
// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

export async function registerUser(payload: RegisterFieldsType) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
    })
    if (error) throw new Error(error.message)

    if (data.user?.id) {
        const { error: editError } = await supabase
            .from('profiles')
            .update({
                email: payload.email,
                first_name: payload.firstName,
                last_name: payload.lastName,
            })
            .eq('id', data.user?.id)
        if (editError) throw editError
    }

    return { data }
}

export async function registerSocial(provider: 'google' | 'apple') {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${process.env.HOST}/api/auth/supabase/${provider}`,
        },
    })
    return { data, error: error?.message || null }
}
