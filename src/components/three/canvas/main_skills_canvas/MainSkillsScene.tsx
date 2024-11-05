import React from 'react'
import * as THREE from 'three'

import { LogoAngular, LogoNextjs, LogoSpring } from '../../models/logos'

export default function MainSkillsScene() {
  return (
    <>
      <LogoAngular position={new THREE.Vector3(-2.5, 0, 0)} />
      <LogoNextjs />
      <LogoSpring position={new THREE.Vector3(2.5, 0, 0)} />
    </>
  )
}
