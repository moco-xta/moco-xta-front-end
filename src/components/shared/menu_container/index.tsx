'use client'

import React, { useRef } from 'react'

import Header from '../header'
import MenuOverlay from './menu_overlay'

import './index.scss'
import { sansTrialRegularFont } from '@/assets/fonts/ttf'

export default function MenuContainer() {
  return (
    <div
      id='menu_container'
      className={`menu_container_zIndex ${sansTrialRegularFont.className}`}
    >
      <Header isMainHeader={true} />
      <MenuOverlay />
    </div>
  )
}
