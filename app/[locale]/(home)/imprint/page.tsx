
'use client'
import React, { useEffect, useState } from 'react';
import ImprintBreadcrumb from '@/components/imprint/imprint-breadcrumb'
import ImprintContent from '@/components/imprint/imprint-content'
import PolicyContent from '@/components/utils/policy-content'

const ImprintPage = () => {
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
        <div>
            <PolicyContent
                title= {lang === 'de' ? 'Impressum' : 'Imprint'}
                breadcrumb={<ImprintBreadcrumb />}
                content={<ImprintContent />}
            />
        </div>
    )
}

export default ImprintPage
