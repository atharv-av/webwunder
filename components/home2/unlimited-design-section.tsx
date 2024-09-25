'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { paths } from '@/paths'
import Image from 'next/image'
import {languageData} from '@/langauge'
import UnlimitedDesign from '@/public/images/home/unlimited-design/unlimited-design.png'
import { cn } from '@/lib/utils'
import BoxPink from '@/public/images/home/unlimited-design/box-pink.png'
import PyramidBlue from '@/public/images/home/unlimited-design/pyramid-blue.png'
import SnakeViolet from '@/public/images/home/unlimited-design/snake-violet.png'
import { useHomeContext } from '@/providers/home'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UnlimitedSection(props: Props) {  
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en');
    const detectUserLanguage = async () => {
        try {
          const response = await axios.get('https://ipapi.co/json/');
          const countryCode = response.data.country_code;
    
          const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH']; // Belgium, Germany, Austria, Switzerland
    
          if (germanSpeakingCountries.includes(countryCode)) {
            setChangeLanguage('de');
          } else {
            setChangeLanguage('en');
          }
        } catch (error) {
          console.error('Error fetching user location:', error);
          // Default to English if there's an error
          setChangeLanguage('en');
        }
      };
      useEffect(() => {
        detectUserLanguage();
      }, []);

    const homeCtx = useHomeContext()
    return (
        <section className={cn('w-full', props.className)}>
            <div className="absolute hidden h-full w-full xl:block">
                <Image
                    className="absolute left-10 top-14 2xl:left-16 2xl:top-14"
                    src={BoxPink}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute bottom-14 right-[35%] 2xl:bottom-24 2xl:right-[40%]"
                    src={PyramidBlue}
                    alt="Webwunder Image"
                />
                <Image
                    className="absolute right-[10%] top-1/2 2xl:right-[10%] 2xl:top-1/2"
                    src={SnakeViolet}
                    alt="Webwunder Image"
                />
            </div>

            <div className="container relative z-[1] px-0">
                <div className="flex flex-col xl:flex-row-reverse">
                    <div className="mb-12 px-4 text-center xl:mb-0 xl:basis-7/12 xl:gap-8 xl:ps-6 xl:text-start">
                        <div className="flex flex-col justify-center gap-4 xl:max-w-[600px]">
                            <h2 className="text-4xl font-bold xl:text-6xl">
                                                    {/* {languageData?.joinUsSection?.[changeLanguage]?.} */}

                                Unlimited{' '}
                                <span className="text-primary">Pack</span>{' '}
                            </h2>
                            <p className="xl:text-lg">
                                For businesses needing constant design work, our
                                Unlimited Design Package offers unlimited
                                requests, fast delivery, and 100% design
                                ownership.
                            </p>
                            <Button
                                asChild
                                className="mx-auto w-full font-normal xl:ms-0 xl:w-auto"
                                variant={'dark'}
                            >
                                <Link
                                    href={{
                                        hash: paths.pages.pricing.href ?? '#',
                                    }}
                                    onClick={() => {
                                        homeCtx.plan.set('unlimited')
                                    }}
                                >
                                    See plans
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                className="relative bottom-0 left-0 z-0 h-full w-full object-contain object-left-bottom xl:absolute xl:w-[50%]"
                src={UnlimitedDesign}
                alt="WebWunder Image"
            />
        </section>
    )
}
