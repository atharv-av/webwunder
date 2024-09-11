'use client'

import { Button } from '@/components/ui/button'
import { useTestContext } from '../text-provider'
import { useEffect, useMemo, useState } from 'react'
import TestError from './test-error'

export default function TestPage1() {
    console.log('TEST PAGE 1')
    const ctx = useTestContext()
    const [count, setCount] = useState(1)
    const [items, setItems] = useState(['asd', 'zxc', 'rty'])
    // const [obj, setObj] = useState({ hey: 'asd', fgh: 'bnm' })
    const obj = { hey: 'asd', fgh: 'bnm' }

    // useEffect(() => {
    //     console.log('TEST PAGE 1: useEffect')
    //     setCount(val=>val+1)
    //     return ()=>setCount(1)
    // }, [])

    useEffect(() => {
        console.log('TEST PAGE 1: useEffect local:', count, ctx.count)
    }, [count])

    useEffect(() => {
        console.log('useEffect Items')
    }, [items, obj])

    const list = useMemo(() => {
        console.log('useMemo items')
        return items.filter((e) => !e.includes('x'))
    }, [items, obj])


    return (
        <div>
            <h1 className="m-4 text-xl">Test Page 1</h1>
            <h2>ctx: {ctx.count}</h2>
            <h2>local: {count}</h2>
            <ul className="p-12">
                {list.map((e) => (
                    <li key={e}>{e}</li>
                ))}
            </ul>
            <Button
                onClick={() => {
                    ctx.setCount((e) => e + 1)
                    setCount(44)
                    // setItems(['cvb', 'yui', 'hjk', 'ewr'])
                }}
            >
                Inc
            </Button>

            <TestError />

        </div>
    )
}
