import Packages from '@/components/packages/packages'

export default async function PackagesPage() {
    return (
        <section>
            <div className="container mx-0 px-4 xl:px-8">
                <h1 className="mb-2 mt-12 text-2xl font-medium">
                    WebWunder Packages
                </h1>
                <p className="max-w-[600px] text-sm opacity-60 mb-12">
                    Flexible options for every need: subscription-based website
                    rentals with low entry costs, one time payment ownership
                    with optional maintenance, or unlimited design services.
                </p>

                <Packages className='mb-12' />
            </div>
        </section>
    )
}
