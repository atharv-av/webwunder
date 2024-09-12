import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[35rem]',
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
        title: 'LeapX1 Website',
        project: '/projects/leapx',
    },
    {
        width: 'lg:w-[30rem]',
        img: '/images/portfolio/leapx.png',
        bgColor: '#6366f1',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'LeapX2 Website',
        project: '/projects/leapx',
    },
    {
        width: 'lg:w-[30rem]',
        img: '/images/portfolio/leapx.png',
        bgColor: '#6366f1',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'LeapX3 Website',
        project: '/projects/leapx',
    },
    {
        width: 'lg:w-[35rem]',
        img: '/images/portfolio/leapx.png',
        bgColor: '#6366f1',
        tags: [
            { tagName: 'Web Design', tagColor: 'bg-[#3b82f6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#10b981]' },
            { tagName: 'Web Development', tagColor: 'bg-[#f59e0b]' },
        ],
        title: 'LeapX4 Website',
        project: '/projects/leapx',
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
                />
            ))}
        </div>
    )
}

export default WebDesignTab
