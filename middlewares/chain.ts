import {
    NextFetchEvent, NextRequest,
    NextResponse
} from 'next/server'
import { NextMiddlewareResult } from 'next/dist/server/web/types'

export type CustomMiddleware = (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>

export type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware

export function chain(
    functions: MiddlewareFactory[],
    index = 0,
): CustomMiddleware {
    const current = functions[index]

    if (current) {
        const next = chain(functions, index + 1)
        return current(next)
    }

    return (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse,
    ) => {
        return response
    }
}
