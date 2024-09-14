import type { Metadata } from 'next'
import { Archivo, DM_Sans, Inter } from 'next/font/google'
import './cookie-scripts.scss'
import '@/assets/styles/scss/globals.scss'
import { Locale, i18n } from '@/i18n.config'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Toaster } from '@/components/ui/toaster'
interface Props {
    params: { locale: Locale }
    children: React.ReactNode
}

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('global')
    return {
        title: t('site-title') + ' - ' + t('site-desc'),
    }
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<Props>) {
    const t = useTranslations('global')

    const messages = useMessages()

    const logo = `${process.env['HOST']}/webwunder-icon.png`
    const host = process.env['HOST']

    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />

                    {/* SEO */}
                    <link rel="canonical" href={host} />
                    {/* <title>{t('site-title') + ' - ' + t('site-desc')}</title> */}
                    <meta name="description" content={t('site-desc')} />
                    <meta name="robots" content="max-image-preview:large" />
                    <meta property="og:locale" content="de" />
                    <meta property="og:site_name" content={t('site-title')} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={t('site-title')} />
                    <meta property="og:description" content={t('site-desc')} />
                    <meta property="og:url" content={host} />
                    <meta property="og:image" content={logo} />
                    <meta property="og:image:secure_url" content={logo} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={t('site-title')} />
                    <meta name="twitter:description" content={t('site-desc')} />
                    <meta name="twitter:image" content={logo} />
                    {/* SEO */}
                </head>
                <body
                    className={`${dmSans.variable} ${archivo.variable} ${inter.variable} antialiased`}
                    suppressHydrationWarning={true}
                >
                    {children}
                    <div id="menu-section" />
                    <div id="modal-section" />
                    <Toaster />
                </body>
            </NextIntlClientProvider>
        </html>
    )
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'
