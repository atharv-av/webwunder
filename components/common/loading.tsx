import SpinnerSVG from '@/assets/icons/spinner-static.svg'
import { cn } from '@/lib/utils'
export default function Loading(props: Props) {
    return (
        <div
            className={cn(
                'flex h-full w-full items-center justify-center',
                props.className,
            )}
        >
            <p className="sr-only">loading...</p>
            <SpinnerSVG className={`animate-spin text-6xl text-primary`} />
        </div>
    )
}
