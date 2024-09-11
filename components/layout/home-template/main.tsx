import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Main({ children }: Props) {
    return (
        <main className="">{children}</main>
    )
}