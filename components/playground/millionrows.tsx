"use client"

import { useMemo, useState } from "react"
import { Virtuoso } from 'react-virtuoso'

export default function MillionRows() {

    const [name, setName] = useState('start')

    const list = useMemo<{
        name: string,
    }[]>(() => {

        const arr = new Array<{
            name: string,
        }>()

        for (let i = 0; i < 1000000; i++) {
            arr.push({
                name: name,
            })
        }
        return arr
    }, [name])

    return (
        <div className="py-8">
            <input className="border mb-2" type="text" onChange={(e) => setName(e.target.value)} />
            {/* {list.map((e, i) =>
                <div key={i} className="border border-red-500 rounded p-3">
                    {e.name} = {i}
                </div>
            )} */}

            <Virtuoso
                className="!h-[500px]"
                data={list}
                itemContent={(i, e) => (
                    <div key={i} className="border border-red-500 rounded p-3">
                        {e.name} = {i}
                    </div>
                )}
            />
        </div>
    )
}