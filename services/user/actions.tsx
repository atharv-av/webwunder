'use server'

import { createClient } from '@/lib/supabase/server'
import { waits } from '@/lib/utils'
import { paths } from '@/paths'
import { ResetPasswordType, UpdatePasswordType } from '@/schema/fields'
import { UpdateUserType } from '@/schema/user'

// TODO: Set supabase to update user only for current auth id
export async function updateUser(payload: UpdateUserType) {
    const supabase = createClient()
    const user = await supabase.auth.getUser()
    if (!user.data.user?.id) throw new Error('Invalid user')

    const { error } = await supabase
        .from('profiles')
        .update({
            first_name: payload.firstName,
            last_name: payload.lastName,
            mobile: payload.mobile,
            dob: payload.dob,
        })
        .eq('id', user.data.user?.id)
    if (error) throw new Error(error.message)
}

// TODO: Set supabase to update user password only for current auth id
export async function updatePassword(payload: UpdatePasswordType) {
    const supabase = createClient()

    const user = await supabase.auth.getUser()
    if (!user.data.user?.id) throw new Error('Invalid user')

    const { data, error } = await supabase.rpc('change_password', {
        current_plain_password: payload.oldPassword,
        new_plain_password: payload.password,
        current_id: user.data.user?.id,
    })

    if (data !== 'success') throw new Error('Password update failed.')
}

export async function resetPassword(password: string) {
    const supabase = createClient()

    const { error, data } = await supabase.auth.updateUser({
        password: password,
    })

    if (error) throw new Error(error.message)
}
