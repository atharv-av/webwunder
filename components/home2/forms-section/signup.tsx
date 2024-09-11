import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

export default function SignUp(props:Props) {
    return (
        <div className={cn('rounded-2xl bg-gradient-to-br from-[#e9e9e9] to-white p-8 shadow-xl ',props.className)}>
            <h2 className="text-5xl font-bold ">Hi,</h2>
            <h3 className="mb-4 text-lg font-bold">Sign up now!</h3>
            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
                <Label className="text-[12px] text-gray-400" htmlFor="email">
                    Email Address
                </Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="rounded-3xl bg-[#eaeaea] placeholder:opacity-30"
                />
            </div>
            <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                <Label className="text-[12px] text-gray-400" htmlFor="password">
                    Password
                </Label>
                <Input
                    type="password"
                    id="password"
                    placeholder="Enter yout password"
                    className="rounded-3xl bg-[#eaeaea] placeholder:opacity-30"
                />
            </div>
            <div className="flex justify-center">
                <Button className="h-auto min-h-0 p-2 font-normal">
                    SIGN UP
                </Button>
            </div>
        </div>
    )
}
