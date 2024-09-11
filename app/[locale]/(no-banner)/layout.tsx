import HomeLayoutTemplate from '@/components/layout/home2-template'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <HomeLayoutTemplate>{children}</HomeLayoutTemplate>
    )
}
