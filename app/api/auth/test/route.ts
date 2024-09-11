import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { paths } from '@/paths'

/**
 * This is when a user clicks their confirmation email link, exchange their secure code for an Auth token.
 * Currently email confirmation is disabled
 * @param request
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    asd:'asd'
  })
}

export const runtime = 'edge'
