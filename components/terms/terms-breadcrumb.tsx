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
            <BreadcrumbList className="relative right-24 translate-x-1/2">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        className="font-dm-sans text-base font-normal text-white hover:font-semibold hover:text-white"
                        href="/"
                    >
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-dm-sans text-base font-normal text-[#5D59E1]">
                        Terms and Conditions
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default TermsBreadcrumb
