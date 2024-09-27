'use client'
import React, { useEffect, useState } from 'react'
import ContentCard from '../content-card'
import { languageData } from '@/langauge'
import axios from 'axios'

const WebDesignTab = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const tabItems = [
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/leapx.png',
            bgColor: '#6366f1',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[1]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/skylumina.png',
            bgColor: '#FF6531',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[0],
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[1],
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[2],
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[3],
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[0]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/praxiskattan.png',
            bgColor: '#0ECECE',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[0],
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[1],
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[2],
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                            ?.projects[1]?.tags[3],
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[3]?.title,
            project: '/projects/praxiskattan',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/rentstate.png',
            bgColor: '#04CA76',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                ?.projects[2]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/fitsync.png',
            bgColor: '#D0F651',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[4]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/praxiskattan.png',
            bgColor: '#1D59F4',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#3b82f6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#10b981]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#f59e0b]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#f59e0b]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[5]?.title,
            project: '/projects/praxiskattan',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
    ]
    return (
        <div className="flex lg:scale-[85%] 2xl:scale-100 scale-100 flex-wrap items-center justify-center gap-4 px-4 xl:max-w-[78rem]">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    width={item.width}
                    img={item.img}
                    bgColor={item.bgColor}
                    tags={item.tags}
                    title={item.title}
                    project={item.project}
                    bgGradient={item.bgGradient}
                    bgProps={item.bgProps}
                    isBtnVisible={true}
                />
            ))}
        </div>
    )
}

export default WebDesignTab