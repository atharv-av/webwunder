import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'

interface mainCardProps {
    cardWidth: string
    image: string
    imgWidth: number
    title: string
    description: string
}

const MainCard: React.FC<mainCardProps> = ({
    cardWidth,
    image,
    imgWidth,
    title,
    description,
}) => {
    return (
        <Card className={`rounded-xl ${cardWidth}`}>
            <CardHeader className="p-0">
                <Image
                    className="w-full rounded-t-xl"
                    src={image}
                    alt="title"
                    width={imgWidth}
                    height={100}
                />
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2 pt-4">
                <p className="font-archivo text-xl font-semibold text-[#24252A] lg:text-[17.5px]">
                    {title}
                </p>
                <p className="font-archivo text-base font-normal text-black/50 lg:text-[12.5px]">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

export default MainCard
