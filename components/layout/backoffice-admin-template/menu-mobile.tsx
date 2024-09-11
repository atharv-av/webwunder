'use client'

import Link from 'next/link'
import { useAnimate } from 'framer-motion'
import Logo from '@/components/common/logo'
import Menu02SVG from '@/assets/icons/menu-02.svg'

import XCloseSVG from '@/assets/icons/x-close.svg'
import { useEffect, useState } from 'react'
import { paths } from '@/paths'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/button'
import Profile from './profile'
import { usePathname } from 'next/navigation'

function useAnimation(isShown: boolean, menuSection: HTMLElement | null) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const sequence: Parameters<typeof animate>[0] = isShown
            ? [
                  [
                      'div.menu-backdrop',
                      { transform: 'translateY(0)' },
                      { duration: 0 },
                  ],
                  [
                      'div.menu-list',
                      { transform: 'translateY(0)' },
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
                      { transform: 'translateY(-110%)' },
                      { at: '-0.1' },
                  ],
                  [
                      'div.menu-backdrop',
                      { transform: 'translateY(-110%)' },
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
    const pathname = usePathname()
    const active = 'border-indigo-600 bg-gradient-to-r from-indigo-100'
    useEffect(() => {
        setMenuSection(document.getElementById('menu-section'))
    }, [])
    return (
        <div className="flex cursor-pointer p-0 pe-0 lg:hidden">
            <div className="p-2" onClick={() => setShown(true)}>
                <div className="rounded-lg border bg-darkbtn p-1">
                    <Menu02SVG className="text-3xl text-darkbtn-foreground" />
                </div>
            </div>
            {menuSection
                ? createPortal(
                      <div className="menu relative z-30">
                          <div className="fixed top-0 w-full" ref={scope}>
                              <div
                                  onClick={() => setShown(false)}
                                  className={`menu-backdrop absolute right-0 top-0 h-dvh w-screen -translate-y-[110%] bg-transparent opacity-0 ${isShown ? 'translate-x-full' : ''}`}
                              ></div>
                              <div
                                  className={`menu-list absolute right-0 top-0 flex w-full -translate-y-[110%] flex-col overflow-y-auto bg-white p-2 shadow-xl`}
                              >
                                  <div className="mb-8 flex justify-between">
                                      <Logo />
                                      <XCloseSVG
                                          onClick={() => setShown(false)}
                                          className="m-2 cursor-pointer"
                                      />
                                  </div>
                                  <ul className="space-y-1 px-4 font-extrabold">
                                      {Object.entries(paths.menu.backoffice).map(
                                          ([_, value]) => (
                                              <li
                                                  key={value.href}
                                                  onClick={() =>
                                                      setShown(false)
                                                  }
                                                  className={`${pathname.includes(value.href) ? active : ''} py-2 ps-4 rounded-full`}
                                              >
                                                  <Link href={value.href}>
                                                      {value.name}
                                                  </Link>
                                              </li>
                                          ),
                                      )}
                                  </ul>
                                  <div className="mx-4 mb-4 mt-12">
                                      <Profile
                                          onClick={() => setShown(false)}
                                      />
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
