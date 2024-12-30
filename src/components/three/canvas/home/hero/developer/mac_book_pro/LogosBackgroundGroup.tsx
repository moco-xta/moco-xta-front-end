import React from 'react'
import * as THREE from 'three'

import LogoReact from '@/components/three/models/home/hero/logos/LogoReact'
import LogoReactThreeDrei from '@/components/three/models/home/hero/logos/LogoReactThreeDrei'
import { LogoRedux } from '@/components/three/models/home/hero/logos/LogoRedux'
import { LogoSass } from '@/components/three/models/home/hero/logos/LogoSass'

export default function LogosBackgroundGroup() {
  return (
    <>
      <LogoReact position={new THREE.Vector3(-6, 5, -5)} />
      <LogoReactThreeDrei position={new THREE.Vector3(-9, -1, -4)} />
      <LogoRedux position={new THREE.Vector3(-7, 2, -2)} />
      <LogoSass position={new THREE.Vector3(-9, 5, 0)} />
    </>
  )
}
