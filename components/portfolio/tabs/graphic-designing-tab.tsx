import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
        img: '/images/portfolio/graphic-design/design4.png',
        bgColor: '#E5322C',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
        img: '/images/portfolio/graphic-design/design5.png',
        bgColor: '#03FFFA',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[65rem] xl:w-[76rem] w-4/5',
        img: '/images/portfolio/graphic-design/design6.png',
        bgColor: '#17202E',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-4/5',
        img: '/images/portfolio/graphic-design/design1.png',
        bgColor: '#37CBE5',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-4/5',
        img: '/images/portfolio/graphic-design/design2.png',
        bgColor: '#F93042',
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
]
const GraphicDesigningTab = () => {
    return (
        <div className="flex xl:max-w-[78rem] flex-wrap items-center justify-center gap-4">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    width={item.width}
                    img={item.img}
                    bgColor={item.bgColor}
                    bgProps={item.bgProps}
                    isBtnVisible={false}
                />
            ))}
        </div>
    )
}

export default GraphicDesigningTab
