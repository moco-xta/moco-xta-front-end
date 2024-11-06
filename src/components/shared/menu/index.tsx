'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { routes } from '@/routes/routes'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import Logo from '../header/logo'
import CloseMenuButton from '@/components/buttons/menu/close_menu_button'

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
        <div id='menu_open'>
          <p>MENU</p>
        </div>
      </div>
      <div id='menu_overlay'>
        <div id='menu_overlay_bar'>
          <div className='menu_logo'>
            <Link href='/'>MOCO</Link>
          </div>
          <div id='menu_close'>
            <p>CLOSE</p>
          </div>
        </div>
        <div id='menu_close_icon'>
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
                    style={{
                      width: 'max-content',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <div
                      className='menu_link_item_holder'
                      style={{
                        position: 'relative',
                      }}
                      onClick={handleToggleMenu}
                    >
                      <Link
                        href={route.path}
                        className='menu_link'
                        style={{
                          color: 'black',
                          fontSize: '80px',
                          fontWeight: '400',
                          letterSpacing: '-0.02em',
                          lineHeight: '85%',
                          textTransform: 'uppercase',
                        }}
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
