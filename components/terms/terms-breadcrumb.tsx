import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const TermsBreadcrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList className="translate-x-1/2 relative right-24">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        className="text-white hover:font-semibold hover:text-white"
                        href="/"
                    >
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#5D59E1]">
                        Terms and Conditions
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default TermsBreadcrumb
