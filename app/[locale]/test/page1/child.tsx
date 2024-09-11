import { useEffect } from 'react'
import { fetchSomething } from './fetchSomething'

export default function Child() {
    useEffect(() => {
        const fetch = async () => {
            await fetchSomething()
        }
        try {
            fetch()
        } catch (error) {
            throw new Error('lllllllllll')
        }
    }, [])
    return <h1>CHILD</h1>
}
