import React, { useEffect, useState } from 'react'
import ContentCard from '../content-card'
import { languageData } from '@/langauge'
import axios from 'axios'


const BrandingTab = () => {
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
            width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
            img: '/images/portfolio/branding/monina.png',
            bgColor: '#E92A79',
            tags: [
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[0], tagColor: 'bg-[#FF1EF6]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[1], tagColor: 'bg-[#FFDC26]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[2], tagColor: 'bg-[#FF0000]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[3], tagColor: 'bg-[#2245FF]' },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
            ?.projects[0]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
            img: '/images/portfolio/branding/skylumina.png',
            bgColor: '#5B57DB',
            tags: [
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[0], tagColor: 'bg-[#FF1EF6]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[1], tagColor: 'bg-[#FFDC26]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[2], tagColor: 'bg-[#FF0000]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[3], tagColor: 'bg-[#2245FF]' },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
            ?.projects[1]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
            img: '/images/portfolio/branding/t-vent.png',
            bgColor: '#4359F0',
            tags: [
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[0], tagColor: 'bg-[#FF1EF6]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[1], tagColor: 'bg-[#FFDC26]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[2], tagColor: 'bg-[#FF0000]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[3], tagColor: 'bg-[#2245FF]' },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
            ?.projects[2]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
            img: '/images/portfolio/branding/praxis-kattan.png',
            bgColor: '#04C472',
            tags: [
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[0], tagColor: 'bg-[#FF1EF6]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[1], tagColor: 'bg-[#FFDC26]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[2], tagColor: 'bg-[#FF0000]' },
                { tagName: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                    ?.projects[0]?.tags[3], tagColor: 'bg-[#2245FF]' },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
            ?.projects[3]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
    ]
    return (
        <div className="flex xl:max-w-[78rem] lg:scale-[85%] 2xl:scale-100 scale-100 lg:mt-12 2xl:mt-10 flex-wrap items-center justify-center gap-4">
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

export default BrandingTab
