import React from 'react'
import * as THREE from 'three'

import Header from '../header'
import Router from './router'
/* import { LocaleSwitcher } from '../../buttons' */

import './index.scss'

export default function MenuOverlay() {
  return (
    <div
      id='menu_overlay'
      className='menu_overlay_zIndex'
    >
      <Header
        logoMocoMaterial={
          new THREE.MeshStandardMaterial({
            color: '#ffafff',
            roughness: 0.5,
            side: THREE.DoubleSide,
          })
        }
      />
      <div id='menu_content'>
        <Router />
        {/* <LocaleSwitcher /> */}
      </div>
    </div>
  )
}
