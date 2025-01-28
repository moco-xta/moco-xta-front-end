'use client'

import React from 'react'
import * as THREE from 'three'

import Header from './header'
import MenuOverlay from './menu_overlay'

import './index.scss'
import { sansTrialRegularFont } from '@/app/fonts/ttf'

export default function Menu() {
  return (
    <div
      id='menu_container'
      className={`menu_container_zIndex ${sansTrialRegularFont.className}`}
    >
      <Header isMain={true} />
      <MenuOverlay />
    </div>
  )
}
