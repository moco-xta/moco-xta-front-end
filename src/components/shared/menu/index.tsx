'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { routes } from '@/routes/routes'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

// import './index.scss'
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
    <>
      <div
        ref={menuRef}
        id='menu_container'
        className={`${sansTrialRegularFont.className}`}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          padding: '2em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          id='menu_bar'
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            padding: '2em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: '1'
          }}
        >
          <div className='menu_logo'>
            <Link
              href='/'
              style={{
                color: 'white',
                cursor: 'pointer',
              }}
            >
              CodeGrid
            </Link>
          </div>
          <div
            id='menu_open'
            onClick={handleToggleMenu}
          >
            <p
              style={{
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Menu
            </p>
          </div>
        </div>

        <div
          id='menu_overlay'
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '2em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: '2',
            background: '#c5fb45'
          }}
        >
          <div id='menu_overlay_bar'>
            <div className='menu_logo'>
              <Link href='/'>CodeGrid</Link>
            </div>
            <div
              id='menu_close'
              onClick={handleToggleMenu}
            >
              <p
                style={{
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                Close
              </p>
            </div>
          </div>

          <div
            id='menu_close_icon'
            style={{
              flex: '2',
              display: 'flex',
              alignItems: 'flex-end',
              cursor: 'pointer',
            }}
          >
            <p
              style={{
                fontSize: '100px',
                WebkitTextStroke: '5px #c5fb45',
                lineHeight: '70%',
              }}
            >
              &#x2715;
            </p>
          </div>

          <div
            id='menu_copy'
            style={{
              flex: '4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: '2em',
            }}
          >
            <div id='menu_links'>
              {routes.map((route) => {
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
                <p>+ 33 6 15 90 82 75</p>
              </div>
            </div>
          </div>

          <div id='menu_preview'>
            <p>View Showreel</p>
          </div>
        </div>
      </div>
    </>
  )
}
