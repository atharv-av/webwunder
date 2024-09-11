import type all from './resources'

type Messages = all['en']

declare global {
    // Use type safe message keys with `next-intl`
    interface IntlMessages extends Messages {}
}
