'use client'

import React, { useRef } from 'react'

import Header from '../header'
import MenuOverlay from './menu_overlay'

import './index.scss'
import { sansTrialRegularFont } from '@/assets/fonts/ttf'

export default function MenuContainer() {
  return (
    <div
      id='menu'
      className={`menu_zIndex ${sansTrialRegularFont.className}`}
    >
      <Header isMainHeader={true} />
      <MenuOverlay />
    </div>
  )
}
