import BackofficeLayoutTemplate from '@/components/layout/backoffice-template'
import { UserProvider } from '@/providers/user'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <UserProvider>
            <BackofficeLayoutTemplate>{children}</BackofficeLayoutTemplate>
        </UserProvider>
    )
}
