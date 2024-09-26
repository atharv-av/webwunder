'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { languageData } from '@/langauge'
import axios from 'axios'

const galleryImages = [
    '/images/home/our-portfolio/our-portfolio-1.png',
    '/images/home/our-portfolio/our-portfolio-2.png',
    '/images/home/our-portfolio/our-portfolio-3.png',
    '/images/home/our-portfolio/our-portfolio-4.png',
    '/images/home/our-portfolio/our-portfolio-5.png',
    '/images/home/our-portfolio/our-portfolio-6.png',
]

const OurPortfolio = () => {
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
    const tags = [
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[0],
            bgColor: 'bg-[#5D59E1]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[1],
            bgColor: 'bg-[#27DAB7]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[2],
            bgColor: 'bg-[#FB421F]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[3],
            bgColor: 'bg-[#FFDC26]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[4],
            bgColor: 'bg-[#FF1EF6]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[5],
            bgColor: 'bg-[#9DFF50]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[6],
            bgColor: 'bg-[#FF9E0C]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[7],
            bgColor: 'bg-[#FF0000]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[8],
            bgColor: 'bg-[#2245FF]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[9],
            bgColor: 'bg-[#00C8F4]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[10],
            bgColor: 'bg-[#4F00F8]',
        },
    ]

    const [visibleImages, setVisibleImages] = useState<boolean[]>(
        Array(galleryImages.length).fill(false),
    )

    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute('data-index'))
                if (entry.isIntersecting) {
                    // Mark this image as visible
                    setVisibleImages((prev) => {
                        const newVisibleImages = [...prev]
                        newVisibleImages[index] = true
                        return newVisibleImages
                    })
                } else {
                    // Mark this image as not visible
                    setVisibleImages((prev) => {
                        const newVisibleImages = [...prev]
                        newVisibleImages[index] = false
                        return newVisibleImages
                    })
                }
            })
        })

        // Observe each image
        const imageElements = document.querySelectorAll('.gallery-image')
        imageElements.forEach((image) => observer.current?.observe(image))

        return () => {
            if (observer.current) {
                imageElements.forEach((image) =>
                    observer.current?.unobserve(image),
                )
            }
        }
    }, [])

    return (
        <div className="flex flex-col items-center gap-4 bg-black px-4 lg:px-0">
            <Badge
                data-aos="fade-up"
                className="mt-20 bg-[#5D59E1] font-archivo text-sm font-normal"
            >
                Our Portfolio
                {languageData?.userPortfolio?.[changeLanguage]?.title}


            </Badge>
            <p className="w-2/3 text-center font-archivo text-[25px] font-bold leading-none text-white lg:w-full lg:text-[45px]">
                Websites, Logos, Creatives & More
                {languageData?.userPortfolio?.[changeLanguage]?.subtitle}

            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:w-3/5">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`${tag.bgColor} rounded-full px-2 py-1 font-inter text-sm font-semibold text-[#020202]`}
                    >
                        {tag.tagName}
                    </div>
                ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-5">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={index}
                        data-index={index} // Set a data attribute for indexing
                        className="gallery-image"
                        initial={{ opacity: 0, scale: 0.5 }} // Initial state
                        animate={
                            visibleImages[index]
                                ? {
                                      opacity: 1,
                                      scale: 1,
                                      transition: { delay: index * 0.2 },
                                  }
                                : { opacity: 0, scale: 0.5 }
                        } // Animate based on visibility with stagger
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image
                            src={image}
                            alt="Our Portfolio"
                            width={350}
                            height={350}
                            className="rounded-3xl"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-2 px-8 lg:max-w-6xl lg:items-start xl:max-w-6xl">
                <p className="text-center font-archivo text-lg font-bold text-white lg:text-start lg:text-[26px]">
                    Built for Entrepreneurs Like You
                    {languageData?.userPortfolio?.[changeLanguage]?.description}

                </p>
                <div className="mx-auto lg:flex lg:justify-between">
                    <p className="w-full text-center font-archivo text-sm font-normal text-white/50 lg:w-3/4 lg:text-start lg:text-base">
                    {languageData?.userPortfolio?.[changeLanguage]?.detail}

                    </p>
                    <div className="my-5 flex items-center justify-center lg:my-0">
                        <Button
                            size={'base'}
                            className="flex items-center justify-between gap-3 bg-white transition-all hover:scale-95"
                        >
                            <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                            {languageData?.userPortfolio?.[changeLanguage]?.seeMore}
                            </p>
                            <ArrowRight size={15} className="text-[#24252A]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPortfolio
