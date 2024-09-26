'use client'
import React, { useEffect, useState } from 'react';
import PrivacyPolicyBreadcrumb from '@/components/privacy-policy/privacy-policy-breadcrumb'
import PrivacyPolicyContent from '@/components/privacy-policy/privacy-policy-content'
import PolicyContent from '@/components/utils/policy-content'

const PrivacyPolicyPage = () => {
    const [lang, setLang] = useState<'de' | 'en'>('en'); // Default to 'en'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en';
            if (storedLang) {
                setLang(storedLang); // Update state with the stored language
            }
        }
    }, []);
    return (
        <PolicyContent
            title= {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            breadcrumb={<PrivacyPolicyBreadcrumb />}
            content={<PrivacyPolicyContent />}
        />
    )
}

export default PrivacyPolicyPage
