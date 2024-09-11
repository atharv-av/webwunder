import BellSVG from '@/assets/icons/bell-01.svg'

export default function Notifications(props:Props) {
    return (
        <div className={props.className}>
            <div className='border p-3 rounded-full'>
                <BellSVG />
            </div>
        </div>
    )
}
