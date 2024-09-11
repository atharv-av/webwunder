'use client' // Error components must be Client Components
import Logo from '@/components/common/logo' 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col h-[80svh] w-full items-center justify-center">
        <h1 className="text-2xl mt-[15svh] text-center">Opps. Something went wrong...</h1>
        <Logo className="mt-5" />
    </div>
)
}