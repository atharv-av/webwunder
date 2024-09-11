import { Dispatch, ReactNode, RefObject, SetStateAction, createContext, useContext, useState } from "react"



export const ScrollContext = createContext<{
    refs: { [key: string]: RefObject<HTMLElement> },
} | undefined>(undefined)

export function useScrollContext() {
    const ctx = useContext(ScrollContext)
    if (ctx?.refs === undefined) {
        throw new Error('useScrollContext must be used!')
    }
    return ctx
}
