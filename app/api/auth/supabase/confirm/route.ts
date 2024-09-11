import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { paths } from '@/paths'

/**
 * run 'npm i @supabase/ssr@patched' for version 4.0.1 this fixes the 
 * issue (AuthSessionMissingError: Auth session missing) with password recovery 
 */

/**
 * This is when a user clicks their confirmation email link, exchange their secure code for an Auth token.
 * Currently email confirmation is disabled 
 * @param request
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? '/'

    if (token_hash && type) {
        const supabase = createClient()

        const { error, data } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })


        if (!error) {
            // redirect user to specified redirect URL or root of app
            redirect(process.env.HOST+next)
            // redirect(process.env.HOST+paths.menu.backoffice.clientProjects.href)
        } else {
            console.error('Confirm Error:', error.message)
            redirect(paths.pages.error.href + '?error=' + error.message)
        }
    }

    // redirect the user to an error page with some instructions
    redirect(paths.pages.error.href)
}

export const runtime = 'edge'
