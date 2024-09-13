import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TagProps {
    tagName: string
    tagColor: string
}

interface PortfolioProps {
    width: string
    img: string
    bgColor?: string
    tags?: TagProps[]
    title?: string
    project?: string
    bgGradient?: string
    bgProps?: string
    isBtnVisible: boolean
}

const ContentCard: React.FC<PortfolioProps> = ({
    width,
    img,
    bgColor,
    tags,
    title,
    project,
    bgGradient,
    bgProps,
    isBtnVisible,
}) => {
    return (
        <Card
            className={`${width} relative h-[80vh] overflow-hidden rounded-3xl border-none outline-none transition-all hover:shadow-lg`}
            style={{
                background: `linear-gradient(to bottom, ${bgColor}, black)`,
            }}
        >
            <div className={`absolute inset-0 z-10 ${bgGradient}`} />
            <div
                className={`absolute inset-0 flex w-full items-end ${bgProps}`}
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="flex flex-col items-start gap-3 p-10">
                    <div className="z-10 flex gap-1">
                        {tags &&
                            tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    className={`${tag.tagColor} p-2 text-[10px] font-bold text-black`}
                                >
                                    {tag.tagName}
                                </Badge>
                            ))}
                    </div>
                    <p className="z-10 text-3xl font-bold text-white">
                        {title}
                    </p>
                    {isBtnVisible && (
                        <Link
                            className="z-10 rounded-full bg-[#24252A]"
                            href="#"
                        >
                            <Button className="flex flex-row gap-5 bg-transparent">
                                <p className="text-white">View Project</p>
                                <ArrowRight
                                    size={35}
                                    className="rounded-full bg-white p-1 text-black"
                                />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default ContentCard
