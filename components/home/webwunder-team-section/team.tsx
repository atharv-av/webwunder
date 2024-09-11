import P from "@/components/common/p"
import JohImg from "@/public/images/webwunder-team/webwunder-team-johannes.png"
import ReneImg from "@/public/images/webwunder-team/webwunder-team-rene.png"
import RyanImg from "@/public/images/webwunder-team/webwunder-team-ryan.png"
import Image, { StaticImageData } from "next/image"

export default function Team() {

    const team: { img: StaticImageData, title: string, role: string, text: string }[] = [
        { img: JohImg, title: 'Johannes', role: 'CEO & Founder', text: 'Founder of WebWonder and a serial entrepreneur with 20 years of international experience. Johannes played a leading role in a company that later achieved a Nasdaq IPO. He also founded a company in Dubai with 30 employees, where he worked closely with Rene and Ryan. At WebWunder, you’ll plan your project directly with Johannes, leveraging his vast business expertise to ensure your success.' },
        { img: ReneImg, title: 'Rene', role: 'CTO & Full-Stack Developer', text: 'Rene has worked with Johannes in ventures abroad, including Dubai, making him an integral part of our team. With 15 years of experience in web design, programming, and server architecture, Rene is a top full-stack developer. His technical skills ensure that every project is robust, scalable, and cutting-edge.' },
        { img: RyanImg, title: 'Ryan', role: 'Lead Designer & Front-End Developer', text: 'Ryan, another long-time collaborator with Johannes, is an exceptional front-end developer and designer. With 15 years of experience, he has created exclusive designs and brands that significantly boost customer acquisition and recognition. Ryan’s expertise ensures that every user experience is visually stunning and highly functional.' },
    ]

    return (
        <div className="xl:px-20">
            {team.map((e, i) => (
                <div key={e.title} className={`mb-20 last:mb-0 xl:mb-1 xl:p-8 xl:flex ${i % 2 ? 'xl:flex-row-reverse' : ''}`}>
                    <div className="shadow-xl rounded-xl mb-8 xl:min-w-[450px] p-4 pb-0">
                        <Image className="mx-auto" src={e.img} alt={`WebWunder ${e.title} Image`} />
                    </div>
                    <div className="xl:px-16 xl:flex xl:flex-col xl:justify-center">
                        <div className="text-3xl font-bold mb-2
                        xl:text-4xl">{e.title}</div>
                        <div className="text-primary font-bold mb-4">{e.role}</div>
                        <P >{e.text}</P>
                    </div>
                </div>
            ))}

        </div>
    )
}