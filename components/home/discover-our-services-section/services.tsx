
import WordHighlight from "../hero-section/word-highlight"

export default function Services() {


    const services: { class:string, title: string, text: string }[] = [
        { class:'border-b-indigo-600 text-indigo-600', title: 'Brand', text: 'Imprint your brand and establish deep trust.' },
        { class:'border-b-yellow-600 text-yellow-600', title: 'Funnel', text: 'Maximize your revenue with targeted sales pages.' },
        { class:'border-b-pink-600 text-pink-600', title: 'Marketing', text: 'Spark enthusiasm and engage customers long-term.' },
        { class:'border-b-gray-400 text-gray-400', title: 'Video', text: 'Convey your message with compelling videos.' },
        { class:'border-b-green-600 text-green-600', title: 'Campaign', text: 'Enhance the effectiveness of your ads for maximum results.' },
        { class:'border-b-violet-600 text-violet-600', title: 'Copy', text: 'Drive action with powerful and persuasive texts.' },
        { class:'border-b-orange-600 text-orange-600', title: 'SEO', text: 'Strengthen your online presence and dominate search results.' },
    ]

    return (

        <div className="grid gap-4 md:grid-cols-2">
            {services.map((e, i) => (
                <div key={e.title} 
                className={`${e.class} 
                border-2 border-gray-500 border-b-[8px]
                rounded-xl  p-8 py-12`}>
                    <div className="mb-8 text-3xl font-extrabold"> 
                        <WordHighlight className="uppercase" svgClassName={e.class} height={5} word={e.title} />
                        {/* <span className="uppercase">{e.title}</span> */}
                        <span className="ms-1 text-white">Wonder</span>
                    </div>
                    <div className="text-white text-xl">{e.text}</div>
                </div>
            ))}
        </div>
    )
}