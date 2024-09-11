import Plans2 from '@/components/home2/three-easy-steps-section/plans'

export default function HeroSection(props: Props) {
    return (
        <section className={props.className}>
            <div className="container px-4">
                <div className="grid gap-8 px-4 text-center xl:grid-cols-2 xl:text-start">
                    <h1 className="text-[50px] font-bold leading-[50px] tracking-tighter xl:text-[60px] xl:leading-[60px]">
                        Leveraging creativity and proven processes for{' '}
                        <span className="text-primary">
                            unparalleled results.
                        </span>
                    </h1>
                    <p className="flex items-center text-[20px] font-medium xl:text-[22px]">
                        Concepts, brands, web, social and more. Discover how we
                        helped these clients to find the sweet spot between
                        bold, creative and strategic marketing.
                    </p>
                </div>
            </div>
            <Plans2 className="mt-12" />
        </section>
    )
}
