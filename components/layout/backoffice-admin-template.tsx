import Header from './backoffice-admin-template/header'
import MenuSide from './backoffice-admin-template/menu-side'
import styles from './backoffice-admin-template/layout.module.scss'

interface Props {
    showBanner?: boolean
    children: React.ReactNode
}

export default function AdminLayoutTemplate({ children }: Readonly<Props>) {
    return (
        <div className={styles.layout}>
            <Header className={`${styles.header}`} />
            <MenuSide className={`${styles['menu-side']}`} />
            <main className={`${styles.main} bg-[#FAFAFA]`}>{children}</main>
        </div>
    )
}
