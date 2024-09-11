'use client'

import Link from 'next/link'
import { useAnimate, stagger } from 'framer-motion'
import styles from './menu-mobile.module.scss'
import Logo from '@/components/common/logo'
import Menu01SVG from '@/assets/icons/menu-01.svg'

import XCloseSVG from '@/assets/icons/x-close.svg'
import { useEffect, useState } from 'react'
import { paths } from '@/paths'
import { createPortal } from 'react-dom'
import ContactUsMenu from './contact-us-menu'

function useAnimation(isShown: boolean, menuSection: HTMLElement | null) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const sequence: Parameters<typeof animate>[0] = isShown
            ? [
                  [
                      'div.menu-backdrop',
                      { transform: 'translateX(0)' },
                      { duration: 0 },
                  ],
                  [
                      'div.menu-list',
                      { transform: 'translateX(0)' },
                      { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
                  ],
                  // [
                  //     "li",
                  //     { transform: "scale(1)", opacity: 1, },
                  //     { delay: stagger(0.05), },
                  // ]
              ]
            : [
                  // [
                  //     "li",
                  //     { transform: "scale(0.5)", opacity: 0, },
                  //     { delay: stagger(0.05, { from: "last" }) }
                  // ],
                  [
                      'div.menu-list',
                      { transform: 'translateX(110%)' },
                      { at: '-0.1' },
                  ],
                  [
                      'div.menu-backdrop',
                      { transform: 'translateX(110%)' },
                      { duration: 0.01 },
                  ],
              ]

        if (menuSection) animate(sequence)
    }, [isShown, menuSection, animate])
    return scope
}

export default function MenuMobile() {
    const [menuSection, setMenuSection] = useState<HTMLElement | null>(null)
    const [isShown, setShown] = useState(false)

    const scope = useAnimation(isShown, menuSection)

    useEffect(() => {
        setMenuSection(document.getElementById('menu-section'))
    }, [])
    return (
        <div className="flex cursor-pointer p-2 md:hidden">
            <div className="p-2" onClick={() => setShown(true)}>
                <Menu01SVG />
            </div>
            {menuSection
                ? createPortal(
                      <div className="menu relative z-30">
                          <div className="fixed top-0 w-full" ref={scope}>
                              <div
                                  onClick={() => setShown(false)}
                                  className={`menu-backdrop ${styles['menu-backdrop']} ${isShown ? styles.show : ''}`}
                              ></div>
                              <div
                                  className={`menu-list relative ${styles['menu-list']}`}
                              >
                                  <div className="mb-4 flex justify-between">
                                      <XCloseSVG
                                          onClick={() => setShown(false)}
                                          className="m-2 cursor-pointer"
                                      />
                                      <Logo />
                                  </div>
                                  <ul className="flex-grow space-y-4 font-extrabold">
                                      {Object.entries(paths.menu.main).map(
                                          ([_, value]) => (
                                              <li
                                                  key={value.href}
                                                  onClick={() =>
                                                      setShown(false)
                                                  }
                                              >
                                                  <Link href={value.href}>
                                                      {value.name}
                                                  </Link>
                                              </li>
                                          ),
                                      )}
                                  </ul>
                                  <div className="mx-auto flex justify-center">
                                      <ContactUsMenu className="m-4" />
                                  </div>
                              </div>
                          </div>
                      </div>,
                      menuSection,
                  )
                : null}
        </div>
    )
}
