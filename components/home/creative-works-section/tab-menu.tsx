import { cn } from "@/lib/utils"
import styles from "./tab-menu.module.scss"


interface Props {
    onSelect: (index: number) => void
    selected: number
    className?: string
}

export default function TabMenu({ onSelect, selected, className }: Props) {


    const handle = (i: number) => {
        onSelect(i)
    }

    const isSelected = (i: number) => {
        if (i === selected) return styles['selected']
        else return ''
    }

    const tabs = ['All Project', 'Website', 'Landing Page', 'IOS App', 'Brand Design']

    return (
        <div className={`${styles['pill-select']} ${className}`}>
            <ol className="flex flex-wrap justify-center" >
                {tabs.map((e, i) => (
                    <li key={e} onClick={() => handle(i)}>
                        <div className={`${styles.item} ${isSelected(i)}`}>{e}</div>
                    </li>
                ))}
            </ol>
        </div>
    )
}