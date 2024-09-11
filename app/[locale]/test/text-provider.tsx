'use client'

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'

const TestContext = createContext<
    | {
          count: number
          setCount: Dispatch<SetStateAction<number>>
      }
    | undefined
>(undefined)

export function TextContextProvider({ children }: { children: ReactNode }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    useEffect(() => {
        countRef.current = count
    }, [count])

    /**
     * useRef is needed to have the most recent value for setTimeout
     * - this is because when the component rerenders, 
     * setCount() is executed with the new count,
     * the count value then inside the setTimeout will be pointing to the prev count,
     * while useRef preserves values across renders.
     * 
     */
    useEffect(() => {
        const id = setTimeout(() => {
            console.log('TextContextProvider:', count, countRef.current)
        }, 5000)
        return () => clearInterval(id)
    }, [])

    return (
        <TestContext.Provider value={{ count, setCount }}>
            {children}
        </TestContext.Provider>
    )
}

export function useTestContext() {
    const ctx = useContext(TestContext)
    if (ctx?.count === undefined) {
        throw new Error(
            'useTestContext must be used with a TextContextProvider!',
        )
    }
    return ctx
}
