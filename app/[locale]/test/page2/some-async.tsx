'use client'

import { use } from 'react'

export default function SomeAsync({
    dataPromise,
}: {
    dataPromise: Promise<string>
}) {
        console.log('SomeAsync xxxx')
    const data = use(dataPromise)

    return <h1 className="p-8">{data}</h1>
}
