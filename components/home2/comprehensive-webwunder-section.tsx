import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Membership from './comprehensive-webwunder-section/membership'
import Link from 'next/link'
import { paths } from '@/paths'

export default function ComprehensiveWebWunderSection(props: Props) {
    const div =
        'rounded-3xl bg-[#212126] p-5 text-white lg:p-8 lg:grid lg:grid-cols-3'
    const divTitle = 'mb-4 text-lg lg:text-2xl lg:mb-2 font-bold text-white'
    const divP = 'mb-4 lg:mb-0 text-white lg:pe-3'
    const divBtn = 'text-lg font-normal lg:min-w-0 lg:w-44 bg-[#27DAB7]'
    return (
        <section className={cn('w-full bg-[#f4f7ff]', props.className)}>
            <div className="container px-4">
                <div className="flex flex-col gap-8">
                    <div className='text-center'>
                        <h2 className="font-bold text-4xl xl:text-6xl mb-4 px-8">
                            Comprehensive WebWunder{' '}
                            <span className="text-primary">Services</span>
                        </h2>
                        <p className='xl:text-lg'>
                            Transform your business with our 12-month
                            subscription website plans. Keep your site live,
                            maintained, and up-to-date. After 12 months,
                            smoothly transition to our monthly service packs and
                            enjoy a free design refresh every 36 months,
                            ensuring your website stays modern and effective.
                        </p>
                    </div>
                    <div className="">
                        <Membership packageClassName='xl:col-start-4' />
                    </div>
                    <div className="flex flex-col relative rounded-3xl bg-[#29292F] p-6 py-12 lg:p-20 lg:py-20">
                        <div id='join-webwunder' className='h-0 absolute -top-12'></div>
                        <div className="text-center lg:text-start">
                            <p className="mb-4 font-bold text-primary">
                                Let&apos;s Start!
                            </p>
                            <h2 className="mb-8 text-4.5xl font-bold leading-[40px] text-white lg:text-7xl">
                                Join WebWunder!
                            </h2>

                            <div className={`mb-4 lg:mb-8 ${div}`}>
                                <div className="flex flex-col justify-center lg:col-span-2">
                                    <p className={divTitle}>
                                        Book a 15-Min Call 
                                    </p>
                                    <p className={divP}>
                                        Quickly learn how WebWunder works and
                                        how it can help you. No fluff!
                                    </p>
                                </div>
                                <div className="flex items-center justify-center xl:justify-end">
                                    <Button asChild className={divBtn}>
                                        <Link target='_blank' href={paths.pages.bookCall.href}>Book Now</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* <div className={`${div}`}>
                                <div className="flex flex-col justify-center lg:col-span-2">
                                    <p className={divTitle}>
                                        Refer a Friend & Earn
                                    </p>
                                    <p className={divP}>
                                        Secure 5% monthly recurring commissions
                                        for each referral.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Button className={divBtn}>
                                        Refer Now
                                    </Button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
