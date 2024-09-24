import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { languageData } from '@/langauge'
import axios from 'axios'
interface TestimonialProps {
    icon: string
    content: string
    title: string
}

const Testimonial: React.FC<TestimonialProps> = ({ icon, content, title }) => (
    <div className="keen-slider__slide">
        <div className="p-2">
            <div className="flex h-fit min-h-56 w-full flex-col justify-between overflow-hidden rounded-xl bg-[#191919] p-4">
                <div>
                    <Image src={icon} alt={title} width={25} height={25} />
                    <h3 className="mt-2 text-lg font-bold text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{content}</p>
                </div>
            </div>
        </div>
    </div>
)
const JoinUsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(1) // Default to 1 slide

    const updateSlidesPerView = () => {
        if (window.innerWidth < 640) {
            // Tailwind's 'sm' breakpoint
            setSlidesPerView(1) // 1 slide for small screens
        } else if (window.innerWidth < 1024) {
            // Tailwind's 'lg' breakpoint
            setSlidesPerView(2) // 2 slides for medium/large screens
        } else if (window.innerWidth < 1440) {
            // Tailwind's 'xl' breakpoint
            setSlidesPerView(3) // 3 slides for large screens
        } else {
            setSlidesPerView(3) // 4 slides for extra-large screens and above
        }
    }

    useEffect(() => {
        updateSlidesPerView()
        window.addEventListener('resize', updateSlidesPerView)
        return () => {
            window.removeEventListener('resize', updateSlidesPerView)
        }
    }, [])

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: 'free-snap',
            slides: {
                perView: slidesPerView,
            },
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
        },
        [],
    )

    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    const detectUserLanguage = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/')
            const countryCode = response.data.country_code

            const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

            if (germanSpeakingCountries.includes(countryCode)) {
                setChangeLanguage('de')
            } else {
                setChangeLanguage('en')
            }
        } catch (error) {
            console.error('Error fetching user location:', error)
            // Default to English if there's an error
            setChangeLanguage('en')
        }
    }
    useEffect(() => {
        detectUserLanguage()
    }, [])
    const items = [
        {
            id: 1,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[0].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[0]
                    .description,
        },
        {
            id: 2,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[1].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[1]
                    .description,
        },
        {
            id: 3,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[2].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[2]
                    .description,
        },
        {
            id: 4,
            icon: '/images/home/join-us/join-us-icon-4.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[3].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[3]
                    .description,
        },
        {
            id: 5,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[4].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[4]
                    .description,
        },
        {
            id: 6,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[5].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[5]
                    .description,
        },
    ]

    return (
        <section className="bg-black py-12 text-white lg:pl-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <h2 className="mb-4 text-4xl font-bold">
                        {languageData?.joinUsSection?.[changeLanguage]?.title}
                            <br />
                            {languageData?.joinUsSection?.[changeLanguage]?.subtitle}
                            </h2>
                        <div className="my-4 flex items-start justify-start gap-2 lg:my-2 lg:gap-3">
                            <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95">
                                <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                {languageData?.joinUsSection?.[changeLanguage]?.explorePlans}
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8">
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </div>
                            </button>
                            <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2 transition-all hover:scale-95">
                                <Link
                                    href="#"
                                    className="flex flex-row items-center justify-between gap-4"
                                >
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    {languageData?.joinUsSection?.[changeLanguage]?.bookCall}
                                    </p>
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                        <ArrowRight
                                            size={18}
                                            fontWeight={100}
                                            className="text-[#ffffff]"
                                        />
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="mt-12 flex space-x-4">
                            <button
                                className="rounded-full bg-[#8080f2] p-3"
                                onClick={() => instanceRef.current?.prev()}
                            >
                                <ArrowRight className="rotate-180" size={24} />
                            </button>
                            <button
                                className="rounded-full bg-[#8080f2] p-3"
                                onClick={() => instanceRef.current?.next()}
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center overflow-hidden md:col-span-1 lg:col-span-2">
                        <div
                            ref={sliderRef}
                            className="keen-slider cursor-grab"
                        >
                            {[...items].map((testimonial) => (
                                <Testimonial
                                    key={testimonial.id}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="mt-8 flex h-4 w-96 justify-between">
                            {/* Pagination discs */}
                            {[...Array(items.length)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`mx-2 h-1 w-16 rounded-full ${idx === currentSlide ? 'bg-[#5D59E1]' : 'bg-zinc-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUsSection
