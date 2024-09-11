import {
    NextResponse,
    type NextFetchEvent,
    type NextRequest,
} from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

import { CustomMiddleware, MiddlewareFactory } from './chain'
import { i18n } from '@/i18n.config'
import { getLoggedInUser } from '@/services/auth/getters'

const getUser = async (request: NextRequest, response: NextResponse) => {
    /**
     * Using createServerClient() because cookie needs to be set in request and response
     */
    const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value),
                    )
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options),
                    )
                },
            },
        },
    )
    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.
    const { data } = await supabase.auth.getUser()
    const { isAdmin } = await getLoggedInUser()
    return { user: data.user, isAdmin, supabase }
}

export function supabaseMiddleware(middleware: CustomMiddleware) {
    return async (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse,
    ) => {
        const rnp = request.nextUrl.pathname

        const locale = rnp.split('/')[1] || i18n.defaultLocale

        console.log('PATHNAME', rnp)
        // for api routes
        if (rnp.startsWith(`/api`)) {
            // console.log('Middleware Supabase /api')
            return middleware(request, event, response)
        }
        // for reset forgotten password
        else if (rnp.startsWith(`/${locale}/reset-password`)) {
            // console.log('Middleware /reset-password API')
            try {
                await getUser(request, response)
            } catch (error) {
                console.error(error)
            }
            return middleware(request, event, response)
        }
        // for other routes ex /en/asd/asd... or /de/xcv/xcv...
        else if (rnp.startsWith(`/${locale}/auth`)) {
            // console.log('Middleware Supabase /{locale}/auth')
            try {
                const { user, isAdmin } = await getUser(request, response)

                if (
                    !user &&
                    !rnp.startsWith(`/${locale}/login`) &&
                    rnp.startsWith(`/${locale}/auth`)
                ) {
                    // no user, potentially respond by redirecting the user to the login page
                    const url = request.nextUrl.clone()
                    url.pathname = '/login'
                    return NextResponse.redirect(url)
                }

                // if not admin but accessing admin things
                if (!isAdmin && rnp.startsWith(`/${locale}/auth/admin`)) {
                    const url = request.nextUrl.clone()
                    url.pathname = '/login'
                    return NextResponse.redirect(url)
                }
            } catch (error) {
                const url = request.nextUrl.clone()
                url.pathname = '/login'
                return NextResponse.redirect(url)
            }
        }

        return middleware(request, event, response)
    }
}

supabaseMiddleware satisfies MiddlewareFactory
