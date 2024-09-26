'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface LangLayoutProp {
    children: React.ReactNode
}

const LangLayout: React.FC<LangLayoutProp> = ({ children }) => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>(() => {
        // Initialize state based on localStorage or default to 'en'
        const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
        return storedLang === 'de' || storedLang === 'en' ? storedLang : 'en'
    })

    const detectUserLanguage = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/')
            const countryCode = response.data.country_code

            const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

            const detectedLanguage = germanSpeakingCountries.includes(countryCode) ? 'de' : 'en'
            // Update localStorage and state
            console.log(detectUserLanguage)
            if (typeof window !== 'undefined') {
            localStorage.setItem('lang', detectedLanguage)}
            setChangeLanguage(detectedLanguage) // Update the state after language detection
        } catch (error) {
            console.error('Error fetching user location:', error)
            // Default to English if there's an error
            if (typeof window !== 'undefined') {
            localStorage.setItem('lang', 'en')
        }
            setChangeLanguage('en')
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang')
        if (!storedLang) {
            detectUserLanguage() // Only detect language if it hasn't been set already
        }
        }
       
    }, [])
console.log(localStorage.getItem('lang'))
    return <div>{children}</div>
}

export default LangLayout
