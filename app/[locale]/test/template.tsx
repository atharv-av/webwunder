"use client"

import { ReactNode } from "react";

export default function TestTemplate({children}:{children: ReactNode}){
    console.log('TEST TEMPLATE')
    return <div>
        <h1>template</h1>
        {children}</div>
}