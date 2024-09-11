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
                                  <ul className="space-y-4 px-4 font-extrabold">
                                      {Object.entries(paths.menu.main).map(
                                          ([key, value]) => (
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
                                  <div className="mx-4 mb-4 mt-12 grid grid-cols-2 gap-8">
                                      {process.env
                                          .NEXT_PUBLIC_DISABLE_SIGNUP  !== 'true' ? (
                                          <Button
                                              className="min-h-14 min-w-7 px-2"
                                              variant={'dark'}
                                          >
                                              <Link
                                                  href={paths.pages.signUp.href}
                                              >
                                                  Sign up
                                              </Link>
                                          </Button>
                                      ) : null}
                                      <Button className="min-h-14 min-w-7 bg-[#27DAB7]">
                                          <Link
                                              target="_blank"
                                              href={paths.pages.bookCall.href}
                                          >
                                              Book a call
                                          </Link>
                                      </Button>
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
