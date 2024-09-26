import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
        img: '/images/portfolio/social-media/social1.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
        img: '/images/portfolio/social-media/social2.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[65rem] xl:w-[76rem] w-4/5',
        img: '/images/portfolio/social-media/social3.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
        img: '/images/portfolio/social-media/social4.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
        img: '/images/portfolio/social-media/social5.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
]

const SocialMediaTab = () => {
    return (
        <div className="flex flex-wrap lg:scale-[85%] 2xl:scale-100 scale-100 xl:max-w-[78rem] items-center justify-center gap-4">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    width={item.width}
                    img={item.img}
                    bgProps={item.bgProps}
                    isBtnVisible={false}
                />
            ))}
        </div>
    )
}

export default SocialMediaTab
