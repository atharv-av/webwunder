import Child from './child'
import ErrorBoundary from './ErrorBoundary'

export default function TestError() {
    return (
        <div>
            <ErrorBoundary fallback={<h1>error!</h1>}>
                <Child />
            </ErrorBoundary>
        </div>
    )
}
