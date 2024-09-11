'use client'
import { getAllInquiries } from '@/services/inquiry/actions'
import { useEffect, useState } from 'react'

export default function UserMessagePage() {
    const [inquiries, setInquiries] = useState([])

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const data = await getAllInquiries()
                // Transform or map data if necessary
                const mappedData: any = data.map((inquiry) => ({
                    email: inquiry.email,
                    fullName: inquiry.full_name,
                    phone: inquiry.phone,
                    message: inquiry.message,
                }))
                setInquiries(mappedData)
            } catch (error) {
                console.error('Error fetching inquiries:', error)
            }
        }

        fetchInquiries()
    }, [])
    return (
        <section>
            <div className="container mx-auto px-4 pb-12 xl:px-8">
                <h1 className="py-12 text-2xl font-bold text-gray-800">
                    Messages
                </h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Full Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Phone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {inquiries.map((inquiry: any, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {inquiry.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {inquiry.fullName}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {inquiry.phone}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {inquiry.message}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
