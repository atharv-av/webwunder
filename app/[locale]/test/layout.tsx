import { Link } from '@/services/navigation'
import { ReactNode } from 'react'
import { TextContextProvider } from './text-provider'

export default function TestLayout({ children }: { children: ReactNode }) {
    console.log('TEST LAYOUT')
    return (
        <div>
            <div className="m-4 mb-8 flex gap-4 text-xl">
                <a href="/test/page1">Page 1</a>
                <a href="/test/page2">Page 2</a>
            </div>
            <TextContextProvider>{children}</TextContextProvider>
        </div>
    )
}
