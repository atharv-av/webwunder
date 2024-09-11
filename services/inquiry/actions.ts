'use server'

import { createClient } from '@/lib/supabase/server'
import { InquiryType } from '@/schema/inquiry'
import nodemailer from 'nodemailer'
/**
 * Debouncing here is not ideal, this is an edge function so
 * 20 different calls will be treated as the same
 * @param payload
 */
// import debounce from 'lodash/debounce'
// const debouncedInsert = debounce(async (supabase: SupabaseClient<Database, 'public', Database['public']>, payload: InquiryType) => {
//     const { error } = await supabase.from('inquiries').insert({
//         email: payload.email,
//         full_name: payload.fullName,
//         phone: payload.mobile,
//         message: payload.message,
//     })

//     if (error) throw error
// })
export async function createInquiry(payload: InquiryType) {
    const supabase = createClient()
    console.log("reaches here")
    const { error } = await supabase.from('inquiries').insert({
        email: payload.email,
        full_name: payload.fullName,
        phone: payload.mobile,
        message: payload.message,
    })

    if (error) throw error
}

export async function getAllInquiries() {
    const supabase = createClient()
    const { data, error } = await supabase.from('inquiries').select('*')

    if (error) {
        console.error('Error fetching inquiries:', error)
        throw error
    }

    return data
}
