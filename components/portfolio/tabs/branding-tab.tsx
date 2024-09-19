import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[35rem] w-4/5',
        img: '/images/portfolio/branding/monina.png',
        bgColor: '#E92A79',
        tags: [
            { tagName: 'Branding', tagColor: 'bg-[#FF1EF6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#FFDC26]' },
            { tagName: 'Side Decks', tagColor: 'bg-[#FF0000]' },
            { tagName: 'Brochures', tagColor: 'bg-[#2245FF]' },
        ],
        title: 'Monina Branding',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] w-4/5',
        img: '/images/portfolio/branding/skylumina.png',
        bgColor: '#5B57DB',
        tags: [
            { tagName: 'Branding', tagColor: 'bg-[#FF1EF6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#FFDC26]' },
            { tagName: 'Side Decks', tagColor: 'bg-[#FF0000]' },
            { tagName: 'Brochures', tagColor: 'bg-[#2245FF]' },
        ],
        title: 'Monina Branding',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] w-4/5',
        img: '/images/portfolio/branding/t-vent.png',
        bgColor: '#4359F0',
        tags: [
            { tagName: 'Branding', tagColor: 'bg-[#FF1EF6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#FFDC26]' },
            { tagName: 'Side Decks', tagColor: 'bg-[#FF0000]' },
            { tagName: 'Brochures', tagColor: 'bg-[#2245FF]' },
        ],
        title: 'Monina Branding',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] w-4/5',
        img: '/images/portfolio/branding/praxis-kattan.png',
        bgColor: '#04C472',
        tags: [
            { tagName: 'Branding', tagColor: 'bg-[#FF1EF6]' },
            { tagName: 'Graphic Design', tagColor: 'bg-[#FFDC26]' },
            { tagName: 'Side Decks', tagColor: 'bg-[#FF0000]' },
            { tagName: 'Brochures', tagColor: 'bg-[#2245FF]' },
        ],
        title: 'Monina Branding',
        project: '/projects/leapx',
        bgGradient: 'bg-gradient-to-b from-black/10 to-black',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
]

const BrandingTab = () => {
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

export default BrandingTab
