import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[35rem] w-4/5',
        img: '/images/portfolio/leapx.png',
        bgColor: '#6366f1',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'SEO', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'Social Media', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'LeapX Website',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] w-4/5',
        img: '/images/portfolio/skylumina.png',
        bgColor: '#FF6531',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'Skylumina Website',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] w-4/5',
        img: '/images/portfolio/praxiskattan.png',
        bgColor: '#0ECECE',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'Praxis Kattan Website',
        project: '/projects/praxiskattan',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] w-4/5',
        img: '/images/portfolio/rentstate.png',
        bgColor: '#04CA76',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'SEO', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'Social Media', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'Rentstate Website',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] w-4/5',
        img: '/images/portfolio/fitsync.png',
        bgColor: '#D0F651',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'SEO', tagColor: 'bg-[#f59e0b]' },
            { tagName: 'Social Media', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'Fitsync Website',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] w-4/5',
        img: '/images/portfolio/praxiskattan.png',
        bgColor: '#1D59F4',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Branding', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'Fitflex Website',
        project: '/projects/praxiskattan',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
]

const WebDesignTab = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
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
