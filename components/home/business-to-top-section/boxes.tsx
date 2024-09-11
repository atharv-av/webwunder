import { ReactNode } from "react"

import PersuasiveTextSVG from "@/assets/icons/business-to-top/persuasive-text.svg"
import CaptivatingDesignSVG from "@/assets/icons/business-to-top/captivating-design.svg"
import DataDrivenSVG from "@/assets/icons/business-to-top/data-driven-decisions.svg"
import CROStrategiesSVG from "@/assets/icons/business-to-top/cro-strategies.svg"
import AIAutomationSVG from "@/assets/icons/business-to-top/ai-automation.svg"
import ContinuousImprovementSVG from "@/assets/icons/business-to-top/continuous-improvement.svg"
import HigherROISVG from "@/assets/icons/business-to-top/higher-roi.svg"

import styles from "./boxes.module.scss"

export default function Boxes() {

    const content: { title: string, text: string, icon: ReactNode }[] = [
        {
            title: 'Persuasive Texts',
            text: 'Strategically crafted by marketing experts.',
            icon: <PersuasiveTextSVG/>
        },
        {
            title: 'Captivating Design',
            text: 'Customized to enhance your brand image.',
            icon: <CaptivatingDesignSVG/>
        },
        {
            title: 'Data-Driven Decisions',
            text: 'Utilizes data analytics to optimize engagement and conversion rates.',
            icon: <DataDrivenSVG/>
        },
        {
            title: 'CRO Startegies',
            text: 'Employs cutting-edge Conversion Rate Optimization to boost ROI by turning visitors into loyal customers.',
            icon: <CROStrategiesSVG/>
        },
        // {
        //     title: 'AI and Automation Expertise',
        //     text: 'Integrates AI to automate interactions and personalize user experiences, keeping your site dynamic.',
        //     icon: <AIAutomationSVG/>
        // },
        {
            title: 'Continuous Improvement',
            text: 'Constantly updates with the latest web technologies and strategies to maintain a powerful digital presence.',
            icon: <ContinuousImprovementSVG/>
        },
        {
            title: 'Higher ROI and Profits',
            text: 'Achieve greater ROI and profits with our strategies without spending more on ads.',
            icon: <HigherROISVG/>
        },
    ]

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3  ">
            {content.map(e=>(
                <div key={e.title} className={`${styles.card}`}>
                    <div className={`${styles.icon}`}>{e.icon}</div>
                    <div className={`${styles.title}`}>{e.title}</div>
                    <div className={`${styles.text}`}>{e.text}</div>
                </div>
            ))}

        </div>
    )
}