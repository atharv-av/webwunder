import { ReactNode } from "react"

import KickOffSVG from "@/assets/icons/simple-steps/kick-off.svg"
import DesignSVG from "@/assets/icons/simple-steps/design.svg"
import WebsiteCopySVG from "@/assets/icons/simple-steps/website-copy.svg"
import DevelopmentSVG from "@/assets/icons/simple-steps/development.svg"
import ClockSVG from "@/assets/icons/clock-stopwatch.svg"

import styles from "./steps.module.scss"

export default function Steps() {

    const steps: { title: string, text: string, icon: ReactNode, time: string }[] = [
        {
            title: 'Kick-Off',
            text: 'We quickly and efficiently clarify your requirements',
            time: '30 mins',
            icon: <KickOffSVG />
        },
        {
            title: 'Design',
            text: 'Your new website will perfectly reflect your brand and stand out.',
            time: '15 mins',
            icon: <DesignSVG />
        },
        {
            title: 'Website-Copy',
            text: 'We create content that captivates your target audience and precisely meets your specifications.',
            time: '15 mins',
            icon: <WebsiteCopySVG />
        },
        {
            title: 'Development',
            text: 'We realize your vision and bring your website live, ready to conquer the market.',
            time: '1 week',
            icon: <DevelopmentSVG />
        },
    ]

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {steps.map((e, i) => (
                <div key={e.title} className={`${styles.card} ${styles['step'+(i+1)]}`}>
                    <div className={styles.step}>
                        STEP {i + 1}
                    </div>


                    <div className={styles.icon}>{e.icon}</div>
                    <div className={styles.title}>{e.title}</div>
                    <p className={styles.text}>{e.text}</p>


                    <div className={styles.time}>
                        <div className="me-2">
                            <ClockSVG className="text-3xl text-primary" />
                        </div>
                        Time commitment: <br/> {e.time}
                    </div>
                </div>
            ))}

        </div>
    )
} 