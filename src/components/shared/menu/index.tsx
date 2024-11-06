'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { routes } from '@/routes/routes'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'
import { sansTrialRegularFont } from '@/assets/fonts/ttf'

export default function Menu() {
  const t = useTranslations('ROUTES')

  const menuRef = useRef<HTMLDivElement>(null!)

  const dispatch = useDispatch<AppDispatch>()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  // const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))
  const timelineRef = useRef<GSAPTimeline>(null!)

  useGSAP(
    () => {
      gsap.set('.menu_link_item_holder', { y: 75 })

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to('#menu_overlay', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.25,
          ease: 'power4.inOut',
        })
        .to('.menu_link_item_holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        })
    },
    { scope: menuRef },
  )

  useEffect(() => {
    timelineRef.current.play()
    console.log('menuIsOpen', menuIsOpen)
    if (menuIsOpen) {
      timelineRef.current.play()
    } else {
      timelineRef.current.reverse()
    }
  }, [menuIsOpen])

  return (
    <div
      ref={menuRef}
      id='menu_container'
      className={`${sansTrialRegularFont.className}`}
    >
      <div id='menu_bar'>
        <div className='menu_logo'>
          <Link href='/'>MOCO</Link>
        </div>
        <div
          id='menu_open'
          onClick={handleToggleMenu}
        >
          <p>MENU</p>
        </div>
      </div>
      <div id='menu_overlay'>
        <div id='menu_overlay_bar'>
          <div className='menu_logo'>
            <Link href='/'>MOCO</Link>
          </div>
          <div
            id='menu_close'
            onClick={handleToggleMenu}
          >
            <p>CLOSE</p>
          </div>
        </div>
        <div
          id='menu_close_icon'
          onClick={handleToggleMenu}
        >
          <p>&#x2715;</p>
        </div>
        <div id='menu_copy'>
          <div id='menu_links'>
            {routes
              .filter((route) => route.hasOwnProperty('index'))
              // @ts-ignore
              .sort((a, b) => a.index - b.index)
              .map((route) => {
                return (
                  <div
                    key={`menuLinkItem_${route.key}`}
                    className='memu_link_item'
                  >
                    <div
                      className='menu_link_item_holder'
                      onClick={handleToggleMenu}
                    >
                      <Link
                        href={route.path}
                        className='menu_link'
                      >
                        {t(route.key)}
                      </Link>
                    </div>
                  </div>
                )
              })}
          </div>
          <div id='menu_info'>
            <div className='menu_info_col'>
              <a href='#'>X &#8599;</a>
              <a href='#'>Instagram &#8599;</a>
              <a href='#'>LinkedIn &#8599;</a>
            </div>
            <div className='menu_info_col'>
              <p>moco.xta@gmail.com</p>
              <p>+33 6 15 90 82 75</p>
            </div>
          </div>
        </div>
        <div id='menu_preview'>
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  )
}
