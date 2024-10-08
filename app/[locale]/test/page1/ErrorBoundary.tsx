import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children?: ReactNode
    fallback: ReactNode
}

interface State {
    hasError: boolean
    error: string | undefined
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: undefined,
    }

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: 'something' }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error Boundary Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}

export default ErrorBoundary
