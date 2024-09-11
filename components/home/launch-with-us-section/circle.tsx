import { ComponentProps } from "react"
import styles from "./circle.module.scss"

interface Props extends ComponentProps<'div'> { }

function Circle({className, ...props}: Props) {
    return (
        <div className={`${className} ${styles.circle}`} {...props}></div>
    )
}

export default Circle