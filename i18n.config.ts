import { Pathnames } from 'next-intl/navigation'

export const i18n = {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    // prefixDefault: true // so default locale will be in url
} as const
export type Locale = (typeof i18n)['locales'][number]

export const lang: { title: string; code: Locale }[] = [
    { title: 'English', code: 'en' },
    { title: 'German', code: 'de' },
]

export const localePrefix = 'never'

export const pathnames = {
    '/': '/',
    '/contact-us': {
        en: '/contact-us',
        de: '/contact-us', // this can be a german word  ex. /kontaktiere-uns
    },
} satisfies Pathnames<typeof i18n.locales>

export type namespaces = 'global' | 'home'
export type defaultNSType = 'global'
export const defaultNS = 'global'
