import { cn } from '@/lib/utils'
import Menu from './menu'
export default function MenuSide({className}:Props) {
    return (
        <div className={cn('border-e',className)}>
            <Menu />
        </div>
    )
}
