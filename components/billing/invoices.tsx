'use client'

import { use } from 'react'
import InvoiceTable from './table'

export default function BillingTable({
    projectsProm,
}: Props<{
    projectsProm: Promise<Project[]>
}>) {
    const projects = use(projectsProm)
    return <InvoiceTable data={projects} />
}
