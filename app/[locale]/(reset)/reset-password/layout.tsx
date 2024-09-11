import BackofficeLayoutTemplate from '@/components/layout/backoffice-template'
import LayoutTemplate from '@/components/layout/home2-template'
import { UserProvider } from '@/providers/user'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <UserProvider>
            <LayoutTemplate disableCookiePermission>{children}</LayoutTemplate>
        </UserProvider>
    )
}
