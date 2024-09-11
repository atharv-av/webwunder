
import { chain } from './middlewares/chain'
import { i18nMiddleware } from './middlewares/i18n'
import { supabaseMiddleware } from './middlewares/supabase'


export default chain([i18nMiddleware, supabaseMiddleware])

// only applies this middleware to files in the app directory
export const config = {
    // matcher: [],
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(de|en)/:path*',

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        // '/((?!api|!_next|_vercel|.*\\..*).*)',
        // '/((?!api|_next/static|_next/image|assets|site.webmanifest|favicon.ico|sw.js))',
        // '/((?!api|_next/static|_next/image|site.webmanifest|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
        '/((?!_next/static|_next/image|site.webmanifest|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',


    ],
}
