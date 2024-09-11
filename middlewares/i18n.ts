import {
    NextResponse,
    type NextFetchEvent,
    type NextRequest,
} from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { CustomMiddleware, MiddlewareFactory } from './chain'
import { i18n, localePrefix, pathnames } from '@/i18n.config'

export const handleI18nRouting = createMiddleware({
    locales: i18n.locales,
    localePrefix: localePrefix,
    pathnames,
    defaultLocale: i18n.defaultLocale,
})

export function i18nMiddleware(middleware: CustomMiddleware) {
    return async (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse,
    ) => {
        // skip language if api
        if (request.nextUrl.pathname.startsWith(`/api`))
            return middleware(request, event, response)

        let _response = handleI18nRouting(request)
        return middleware(request, event, _response)
    }
}

i18nMiddleware satisfies MiddlewareFactory
