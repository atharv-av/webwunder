'use client'

import PageTransition from '@/components/transitions/page'
import React from 'react'

/**
 * Disabled page transition, its affecting page insight score
 * @param param0 
 * @returns 
 */
export default function Template({ children }: { children: React.ReactNode }) {
    return <PageTransition>{children}</PageTransition>
}
