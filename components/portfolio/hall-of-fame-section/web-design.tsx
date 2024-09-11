import DigitarIMG from '@/public/images/portfolio/web-design/digitar.png'
import LeapXIMG from '@/public/images/portfolio/web-design/leapx.png'
import RentStateIMG from '@/public/images/portfolio/web-design/rentstate.png'
import FitsyncIMG from '@/public/images/portfolio/web-design/fitsync.png'
import PraxiKattanIMG from '@/public/images/portfolio/web-design/praxis-kattan.png'

import Purple3dPolygon from '@/public/images/portfolio/web-design/purple-3d-polygon.png'
import PurpleHalfDonut from '@/public/images/portfolio/web-design/purple-half-donut.png'
import YellowCone from '@/public/images/portfolio/web-design/yellow-cone.png'
import BluePyramid from '@/public/images/portfolio/web-design/blue-pyramid.png'
import PurpleEdgedDonut from '@/public/images/portfolio/web-design/purple-edged-donut.png'
import RedHalfDonut from '@/public/images/portfolio/web-design/red-half-donut.png'
import VioletPyramid from '@/public/images/portfolio/web-design/violet-pyramid.png'
import BlueDonut from '@/public/images/portfolio/web-design/blue-donut.png'
import Green3dPolygon from '@/public/images/portfolio/web-design/green-3d-polygon.png'
import { StartLeft, StartRight } from './row'
import Image from 'next/image'

export default function WebDesign() {
    return (
        <div>
            <div className="relative">
                <div className="absolute top-0 hidden h-full w-full xl:block [&_>_img]:absolute">
                    <Image
                        className="right-[20%]"
                        src={Purple3dPolygon}
                        alt="WebWunder Shapes"
                    />
                    <Image
                        className="left-[2%] top-[55%] z-[1]"
                        src={YellowCone}
                        alt="WebWunder Shapes"
                    />
                    <Image
                        className="right-[1%] top-[55%]"
                        src={PurpleHalfDonut}
                        alt="WebWunder Shapes"
                    />
                </div>
                <StartLeft
                    className="mb-12 xl:mb-0"
                    color="bg-[#3AE62C]"
                    projectUrl="https://www.figma.com/proto/sYr5EVGZio9pzwDjrn2T4k/Digitar---Digital-marketing-Agency-Landing-Page?page-id=0%3A1&node-id=31-2450&viewport=-119%2C1789%2C0.58&t=Ir3aBdQovd5BSd13-1&scaling=contain&content-scaling=fixed"
                    title="Digitar"
                    image={DigitarIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A modern and engaging website crafted for a digital marketing agency, showcasing their expertise and innovative strategies."
                />
            </div>
            <div className="relative">
                <div className="absolute top-0 hidden h-full w-full xl:block [&_>_img]:absolute">
                    <Image
                        className="left-[2%] top-[65%]"
                        src={BluePyramid}
                        alt="WebWunder Shapes"
                    />
                    <Image
                        className="left-[45%]"
                        src={PurpleEdgedDonut}
                        alt="WebWunder Shapes"
                    />
                </div>
                <StartRight
                    className="mb-12 xl:mb-0"
                    color="bg-[#FF0F00]"
                    projectUrl="https://www.figma.com/proto/awZDkQxWnv3q1xQ1BivL91/LeapX---POS-Landing-Page?page-id=0%3A1&node-id=28-2514&viewport=-1018%2C3401%2C0.88&t=EINCb1BbW26T5RNd-1&scaling=contain&content-scaling=fixed"
                    title="LeapX"
                    image={LeapXIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="Streamlined and intuitive POS website designed to facilitate seamless business transactions and improve operational efficiency."
                />
            </div>
            <div className="relative">
                <div className="absolute top-0 hidden h-full w-full xl:block [&_>_img]:absolute">
                    <Image
                        className="right-[10%] top-[10%]"
                        src={VioletPyramid}
                        alt="WebWunder Shapes"
                    />
                    <Image
                        className="bottom-[2%] right-[35%]"
                        src={RedHalfDonut}
                        alt="WebWunder Shapes"
                    />
                </div>
                <StartLeft
                    className="mb-12 xl:mb-0"
                    color="bg-[#0ED1D1]"
                    projectUrl="https://www.figma.com/proto/DFwJy844TleGc5EP0QprJT/Rentstate-Real-Estate-Landing-Page?page-id=3%3A32&node-id=1033-73&viewport=-1713%2C-2741%2C0.79&t=c34BG69jAGyOhYEq-1&scaling=contain&content-scaling=fixed"
                    title="Rentstate"
                    image={RentStateIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A comprehensive real estate website, providing users with easy-to-navigate property listings and management tools."
                />
            </div>
            <div className="relative">
                <div className="absolute top-0 hidden h-full w-full xl:block [&_>_img]:absolute">
                    <Image
                        className="left-[2%] top-[65%]"
                        src={BlueDonut}
                        alt="WebWunder Shapes"
                    />
                </div>
                <StartRight
                    className="mb-12 xl:mb-0"
                    color="bg-[#602FEC]"
                    projectUrl="https://www.figma.com/proto/HXU4vmzYG58pBHd0owgoyh/FITSYNC---Gym-Fitness-Landing-Page?page-id=0%3A1&node-id=32-2450&viewport=84%2C942%2C0.27&t=IxtfGafZXpAWrWF7-1&scaling=contain&content-scaling=fixed"
                    title="Fitsync"
                    image={FitsyncIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A dynamic and interactive gym website that enhances member experience and promotes fitness engagement."
                />
            </div>
            <div className="relative">
                <div className="absolute top-0 hidden h-full w-full xl:block [&_>_img]:absolute">
                    <Image
                        className="right-[10%] top-[10%]"
                        src={Green3dPolygon}
                        alt="WebWunder Shapes"
                    />
                    <Image
                        className="bottom-[2%] right-[35%]"
                        src={PurpleEdgedDonut}
                        alt="WebWunder Shapes"
                    />
                </div>
                <StartLeft
                    className="mb-12 xl:mb-0"
                    color="bg-[#1F64FF]"
                    projectUrl="https://www.figma.com/proto/R7SKxGzpNkUQBDuAic8YXm/Praxis-Kattan-Branding?page-id=0%3A1&node-id=1-2&viewport=9%2C638%2C0.22&t=ds3LPOHb50hDPYX5-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
                    title="Praxis Kattan"
                    image={PraxiKattanIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A professional and user-friendly website designed for a medical practice, offering patients convenient access to healthcare information and services."
                />
            </div>
        </div>
    )
}
