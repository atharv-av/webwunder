import Logo from '@/components/common/logo'
export default function ErrorPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div className="flex h-[80svh] w-full flex-col items-center justify-center">
            <h1 className="mt-[15svh] text-center text-2xl">
                {searchParams['error'] ? (
                    <>
                        <span className='font-bold me-3'>Error:</span>
                        {searchParams['error']}
                    </>
                ) : (
                    'Opps. Something went wrong...'
                )}
            </h1>
            <Logo className="mt-5" />
        </div>
    )
}
