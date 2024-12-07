import React from 'react'
import * as THREE from 'three'

import LogoAngular from '@/components/three/models/home/hero/logos/LogoAngular'
import LogoFigma from '@/components/three/models/home/hero/logos/LogoFigma'
import LogoGsap from '@/components/three/models/home/hero/logos/LogoGsap'
import LogoNextjs from '@/components/three/models/home/hero/logos/LogoNextjs'
import { LogoTailwind } from '@/components/three/models/home/hero/logos/LogoTailwind'

export default function LogosForegroundGroup() {
  return (
    <>
      <LogoAngular position={new THREE.Vector3(6, 5, 4)} />
      <LogoFigma position={new THREE.Vector3(-2, 0, 10)} />
      <LogoGsap position={new THREE.Vector3(4, 2.2, 7)} />
      <LogoNextjs position={new THREE.Vector3(6, 0, 5)} />
      <LogoTailwind position={new THREE.Vector3(3, -2, 9)} />
    </>
  )
}
