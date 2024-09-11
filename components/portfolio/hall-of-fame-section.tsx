'use client'
import { useState } from 'react'
import PillSelect from '../common/pill-select'
import { cn } from '@/lib/utils'
import WebDesign from './hall-of-fame-section/web-design'
import Branding from './hall-of-fame-section/branding'
import SocialMedia from './hall-of-fame-section/social-media'
import GraphicDesign from './hall-of-fame-section/graphic-design'

export default function HallOfFameSection(props: Props) {
    const [selected, setSelected] = useState(0)

    const items = [
        { title: 'Web Design', component: <WebDesign /> },
        { title: 'Branding', component: <Branding /> },
        {
            title: 'Social Media',
            component: <SocialMedia className="xl:mt-24" />,
        },
        {
            title: 'Graphic Design',
            component: <GraphicDesign className="xl:mt-24" />,
        },
    ]

    return (
        <section
            className={cn('w-full overflow-clip bg-[#f4f7ff]', props.className)}
        >
            <div className="container justify-center px-4">
                <h2 className="mb-4 px-8 text-center text-4xl font-bold xl:mb-8 xl:text-6xl">
                    Our Hall of <span className="text-primary">Fame</span>
                </h2>
                <div className="mb-4 flex justify-center">
                    <PillSelect
                        className="rounded-lg xl:shadow"
                        olClassName="flex-wrap justify-center items-center bg-transparent xl:bg-white p-1"
                        liClassName=""
                        items={items}
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
            <div>{items[selected].component}</div>
        </section>
    )
}
