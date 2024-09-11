"use client"

import { Button } from "@/components/ui/button"
import { paths } from "@/paths"
import Link from "next/link"
import { useHomeContext } from '@/providers/home'

export default function SeePlans() {
    const homeCtx = useHomeContext()
    return (
        <Button variant={'dark'} asChild>
            <Link
                href={paths.pages.pricing.href}
                onClick={() => {
                    homeCtx.plan.set('website')
                }}
            >
                See plans   
            </Link>
        </Button>
    )
}
