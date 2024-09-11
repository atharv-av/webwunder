import Logo from '@/components/common/logo' 
 
export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-[80svh] w-full items-center justify-center">
        <h1 className="text-2xl mt-[15svh] text-center">Opps. Something went wrong...</h1>
        <Logo className="mt-5" />
    </div>
)
}