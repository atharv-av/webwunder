import MoninaIMG from '@/public/images/portfolio/branding/monina.png'
import PraxisKattanIMG from '@/public/images/portfolio/branding/praxis-kattan.png'
import SkyluminaIMG from '@/public/images/portfolio/branding/skylumina.png'
import TVentIMG from '@/public/images/portfolio/branding/t-vent.png'
import WebwunderIMG from '@/public/images/portfolio/branding/webwunder.png'

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

export default function Branding() {
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
                        className="right-[1%] top-[55%]"
                        src={PurpleHalfDonut}
                        alt="WebWunder Shapes"
                    />
                </div>

                <StartLeft
                    className="mb-12 xl:mb-0"
                    color="bg-[#EE2A7B]"
                    projectUrl="https://www.figma.com/proto/RYJntVicd98O2KhtCVqz7c/Monina?page-id=0%3A1&node-id=1-351&viewport=583%2C1016%2C0.07&t=rrfKA26MUK5plpbq-1&scaling=contain&content-scaling=fixed&starting-poi "
                    title="Monina"
                    image={MoninaIMG}
                    list={['Branding', 'Logo Creation', 'Social Media']}
                    text=""
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
                    color="bg-[#04CE78]"
                    projectUrl="https://www.figma.com/proto/R7SKxGzpNkUQBDuAic8YXm/Praxis-Kattan-Branding?page-id=0%3A1&node-id=1-2&viewport=9%2C638%2C0.22&t=ds3LPOHb50hDPYX5-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
                    title="Praxis Kattan"
                    image={PraxisKattanIMG}
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
                    projectUrl="https://www.figma.com/proto/Kn42TIHrdWiLrxHbtEMXl4/Skylumina-Branding?page-id=0%3A1&node-id=1-3&viewport=57%2C641%2C0.22&t=djP0z5uBuAeq9wOb-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A255"
                    title="Skylumina"
                    image={SkyluminaIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="Specializing in transforming healthcare ideas into successful ventures, we're dedicated to enhancing patient therapies and wellbeing."
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
                    color="bg-[#475FFF]"
                    projectUrl="https://www.figma.com/proto/j6WzkYJUmxO6ZJL7p7ojaZ/TVent?page-id=0%3A1&node-id=66-293&viewport=265%2C157%2C0.13&t=kvjQCOWqmDpkHyDI-1&scaling=contain&content-scaling=fixed&starting-point-node-id=66%3A293"
                    title="T-vent"
                    image={TVentIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A specialized brand dedicated to tracheotomy products, providing clear and detailed information for healthcare professionals and patients."
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
                    color="bg-primary"
                    projectUrl="https://www.figma.com/proto/TPNTY8NKXJe7yv2HyUr09J/Webwonder-Brand-Guide?page-id=0%3A1&node-id=1-2&viewport=-178%2C630%2C0.19&t=wFM4LadXQwAGpFD7-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A305"
                    title="WebWunder"
                    image={WebwunderIMG}
                    list={[
                        'Web Design',
                        'Web Development',
                        'Branding',
                        'Logo Creation',
                        'Social Media',
                    ]}
                    text="A professionally designed website enhances your brand's perceived value, allowing you to command higher prices and improve profit margins."
                />
            </div>
        </div>
    )
}
