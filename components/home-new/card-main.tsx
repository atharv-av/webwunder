import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'

interface MainCardProps {
    cardWidth: string
    image: string
    smallImage?: string
    imgWidth: number
    title: string
    description: string
}

const MainCard: React.FC<MainCardProps> = ({
    cardWidth,
    image,
    smallImage,
    imgWidth,
    title,
    description,
}) => {
    return (
        <Card className={`rounded-xl ${cardWidth} h-auto`}>
            <CardHeader className="p-0">
                <div className="relative w-full">
                    {smallImage ? (
                        <>
                            <div className="block w-full md:hidden">
                                <Image
                                    className="rounded-t-xl w-full"
                                    src={smallImage}
                                    alt={title}
                                    layout="responsive"
                                    width={100}
                                    height={75}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="hidden md:block lg:hidden w-full">
                                <Image
                                    className="rounded-t-xl w-full"
                                    src={image}
                                    alt={title}
                                    layout="responsive"
                                    width={100}
                                    height={75}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <Image
                                    className="rounded-t-xl"
                                    src={image}
                                    alt={title}
                                    width={imgWidth}
                                    height={250}
                                    objectFit="cover"
                                />
                            </div>
                        </>
                    ) : (
                        <Image
                            className="rounded-t-xl w-full"
                            src={image}
                            alt={title}
                            layout="responsive"
                            width={100}
                            height={75}
                            objectFit="cover"
                        />
                    )}
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-center gap-2 p-4">
                <p className="font-archivo text-lg font-semibold leading-tight text-[#24252A] lg:text-[17.5px]">
                    {title}
                </p>
                <p className="font-archivo text-sm font-normal text-black/50 lg:text-[12.5px]">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

export default MainCard