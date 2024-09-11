import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Timeout
 * @param time
 */
export const waits = async (time = 500) => {
    await new Promise((resolve) => setTimeout(resolve, time))
}

export const sendContactForm = async (data: any) => {
    // console.log("api call ho raha hai")
    console.log(data)
    fetch('/api/contact', {
        method: 'POST',

        body: JSON.stringify(data),

        headers: {
            'Content-Type': 'application/json',

            Accept: 'application/json',
        },
    })
}
const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

/**
 *
 * @param date
 * @param options gmt: converts from locale to utc and vice versa
 * @returns
 */
export const formatDate = (
    date: Date,
    options: {
        format?: 'mmm d, yyyy HH:mm' | 'mmm d, yyyy' | 'yyyy-mm-dd'
        gmt?: 'utc-to-locale' | 'locale-to-utc' | ''
    } = {
        format: 'yyyy-mm-dd',
        gmt: '',
    },
) => {
    let _date
    if (options.gmt === 'locale-to-utc') _date = new Date(date.toUTCString())
    else if (options.gmt === 'utc-to-locale')
        _date = new Date(date.toLocaleString('en-US'))
    else _date = date

    switch (options.format) {
        case 'mmm d, yyyy':
            return `${months[_date.getMonth()]?.slice(0, 3)} ${_date.getDate()}, ${_date.getFullYear()}`
        case 'mmm d, yyyy HH:mm':
            return `${months[_date.getMonth()]?.slice(0, 3)} ${_date.getDate()}, ${_date.getFullYear()} ${(_date.getHours() + '').padStart(2, '0')}:${(_date.getMinutes() + '').padStart(2, '0')}`
        default:
            return `${_date.getFullYear()}-${(_date.getMonth() + 1).toString().padStart(2, '0')}-${_date.getDate().toString().padStart(2, '0')}`
    }
}

export function calcDaysBetweenDates(startDate: Date, endDate: Date): number {
    // Get the difference in time between the two dates in milliseconds
    const differenceInTime = endDate.getTime() - startDate.getTime()

    // Convert the time difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)

    return Math.ceil(differenceInDays) // Use Math.ceil if you want to round up
}
