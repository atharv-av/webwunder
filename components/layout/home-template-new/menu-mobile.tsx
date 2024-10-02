'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/common/logo'

const menuItems = [
    'Home', 'Benefits', 'Your Website', 'Prices', 'Portfolio', 'FAQs', 'Contact', 'Sign In', 'Sign Up'
]

const contactMethods = [
    'Write an Email', 'Send a Message', 'Book a Call', 'Chat on WhatsApp'
]

const socialMedia = [
    'Instagram', 'Twitter', 'Facebook', 'Youtube', 'Dribbble', 'Behance', 'Pinterest'
]

export default function SidebarMenu() {
    const [isShown, setShown] = useState(false)

    const openMenu = () => setShown(true)
    const closeMenu = () => setShown(false)

    return (
        <>
            <div className="flex cursor-pointer p-0 pe-0 z-50 lg:hidden">
                <div className="flex justify-center items-center">
                    <div onClick={openMenu} className="rounded-lg">
                        <Image
                            className='w-5'
                            src="/menu.svg"
                            alt="menu"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isShown && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="menu fixed inset-0 z-50"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeMenu}
                                className="menu-backdrop  absolute inset-0 bg-black bg-opacity-50"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                                className="menu-list w-screen absolute right-0 top-0 bottom-0 flex flex-col bg-black text-white p-6 shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-8">
                                <Logo />
                                    <button onClick={closeMenu} className="text-2xl">&times;</button>
                                </div>
                                <nav className="flex-grow text-center">
                                    <ul className="space-y-4 text-xl">
                                        {menuItems.map((item) => (
                                            <li key={item}>
                                                <Link href="#" className="block py-2">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="text-center ">
                                    <p className="font-semibold text-zinc-500 mb-2">Get in touch</p>
                                    <div className="flex flex-wrap text-center justify-center items-center gap-2 text-sm mb-4">
                                        {contactMethods.map((method, index) => (
                                            <React.Fragment key={method}>
                                                <Link href="#">{method}</Link>
                                                {index < contactMethods.length - 1 && <span>|</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <p className="font-semibold text-zinc-500 mb-2">Follow us</p>
                                    <div className="flex flex-wrap text-center justify-center items-center gap-2 text-sm">
                                        {socialMedia.map((platform, index) => (
                                            <React.Fragment key={platform}>
                                                <Link href="#">{platform}</Link>
                                                {index < socialMedia.length - 1 && <span>|</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}