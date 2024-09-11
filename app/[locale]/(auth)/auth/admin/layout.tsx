import BackofficeLayoutTemplate from '@/components/layout/backoffice-admin-template'
import { UserProvider } from '@/providers/user'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    // const router = useRouter()
    // const userCtx = useUserContext()
    // useEffect(()=>{
    //     // redirect if admin
    //     if(userCtx?.isAdmin) router.push(paths.menu.admin.projects.href)
    // },[userCtx?.isAdmin, router])

    return (
        <UserProvider>
            <BackofficeLayoutTemplate>{children}</BackofficeLayoutTemplate>
        </UserProvider>
    )
}
